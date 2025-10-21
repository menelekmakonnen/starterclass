const { useEffect, useMemo, useState } = React;

/**
 * Starterclass by ICUNI — Luxury V8 (Royal Palette)
 * - Royal, luxurious look (imperial purple, deep navy, gold accents)
 * - HERO = copy + interactive PIE (royal colours) + COUNTDOWN + Add‑to‑Calendar
 * - UK time + visitor local time side‑by‑side
 * - Paid track gated; sliders‑only Client Value Calculator (hide/show)
 * - Curriculum/Overview animated cards
 * - Renamed modules:
 *    • s6 title → "ChatGPT Agents 2 — Systems" (desc/outcome unchanged)
 *    • s5 title → "Introduction to Agent Builders — Security and Safety" (desc/outcome unchanged)
 * - Subtle interactive graphics (orbits & sparkles) that don’t distract
 * - N8N capitalization; Google Form embed fixed
 * TailwindCSS assumed. Single‑file React; Canvas‑ready.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_URL_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLScmdBVzUHMAhe2hX7bW3ns6EeOw4D7RTyMDBT_C8XGemzjs-w/viewform?embedded=true";

const INTRO_NAME = "Starterclass Session";
const INTRO_START_ISO = "2025-11-08T11:00:00Z"; // Sat 08 Nov 2025 11:00 UK (UTC)
const INTRO_END_ISO   = "2025-11-08T12:30:00Z";

// Sessions (UK times in UTC). Titles updated per request.
const SESSIONS = [
  { k: "intro", title: INTRO_NAME, date: "Sat 08 Nov 2025", start: "2025-11-08T11:00:00Z", end: "2025-11-08T12:30:00Z", desc: "Customisation Deep Dives: General, Projects, GPTs, Prompts.", outcome: "Your project scaffold + prompt kit + course workspace.", track: "intro" },
  { k: "s2", title: "Canvas Deep Dive + Codex Intro", date: "Sat 15 Nov 2025", start: "2025-11-15T11:00:00Z", end: "2025-11-15T12:30:00Z", desc: "Canvas as dev surface; Codex for repo work; reproducible outputs.", outcome: "Canvas as dev surface, Codex for repo work, reproducible outputs.", track: "paid" },
  { k: "s3", title: "Projects & GPTs Deep Dive", date: "Sat 22 Nov 2025", start: "2025-11-22T11:00:00Z", end: "2025-11-22T12:30:00Z", desc: "Design clean Projects; build private GPTs with tools + knowledge.", outcome: "A clean Project + a private GPT wired to it (tools + knowledge).", track: "paid" },
  { k: "s4", title: "ChatGPT Agents 1 — Prompts, Processes, Internal Tools", date: "Sat 29 Nov 2025", start: "2025-11-29T11:00:00Z", end: "2025-11-29T12:30:00Z", desc: "Agent roles, retries, logs, idempotency; prompt architecture that holds under load.", outcome: "Agent template: roles, retries, logs, idempotency.", track: "paid" },
  { k: "s6", title: "ChatGPT Agents 2 — Systems", date: "Sat 13 Dec 2025", start: "2025-12-13T11:00:00Z", end: "2025-12-13T12:30:00Z", desc: "Add agents to existing systems · System Case Study: Storytelling & Filmmaking · brief→beats→script pipeline · tasteful image workflows.", outcome: "Brief→beats→script pipeline + image generation workflow.", track: "paid" },
  { k: "s5", title: "Introduction to Agent Builders — Security and Safety", date: "Sat 06 Dec 2025", start: "2025-12-06T11:00:00Z", end: "2025-12-06T12:30:00Z", desc: "Credit budgeting, scopes/keys, audit trails, safe configuration.", outcome: "Credit budgeting, scopes/keys, audit trails, safe config.", track: "paid" },
  { k: "s7", title: "AgentKit — Create Your First Agent", date: "Sat 20 Dec 2025", start: "2025-12-20T11:00:00Z", end: "2025-12-20T12:30:00Z", desc: "Stand up a planning+memory agent with web/docs/sheets tools; micro‑workflow.", outcome: "Live AgentKit agent solving a real micro‑workflow.", track: "paid" },
  { k: "break", title: "Winter break", date: "—", start: "", end: "", desc: "—", outcome: "—", track: "break" },
  { k: "s8", title: "N8N — Create Your First Agent", date: "Sat 10 Jan 2026", start: "2026-01-10T11:00:00Z", end: "2026-01-10T12:30:00Z", desc: "Trigger→process→notify flow via webhooks/Sheets/Gmail.", outcome: "A working N8N flow with approvals/logging.", track: "paid" },
  { k: "s9", title: "N8N Deep Dive — Advanced Agent", date: "Sat 17 Jan 2026", start: "2026-01-17T11:00:00Z", end: "2026-01-17T12:30:00Z", desc: "Branching, retries, queues, observability, error handling.", outcome: "Branching, retries, queues, observability, error handling.", track: "paid" },
  { k: "s10", title: "Deployment — Orchestrate the System", date: "Sat 24 Jan 2026", start: "2026-01-24T11:00:00Z", end: "2026-01-24T12:30:00Z", desc: "Agents + N8N + site + CI/CD + runbook + rollback plan.", outcome: "Agents + N8N + site + CI/CD + runbook + rollback plan.", track: "paid" },
];

// Royal interactive PIE colours
const PIE_TOPICS = [
  {
    key: "Projects",
    value: 25,
    desc: "Configure boundaries, attach knowledge, set safe defaults.",
    headline: "Projects locked and ready",
    outcome: "Leave with two project templates you can clone for client or internal work.",
    color: "#C8A145",
  }, // gold
  {
    key: "GPTs",
    value: 25,
    desc: "Build private GPTs with the right tools and context.",
    headline: "Private GPTs wired for work",
    outcome: "Wire a private GPT to your workspace with guardrails and context packs.",
    color: "#3B5CCC",
  }, // royal blue
  {
    key: "Prompts",
    value: 25,
    desc: "Roles, constraints, examples; prompts that hold under load.",
    headline: "Prompts that stay sharp",
    outcome: "Turn repeat prompts into ready-to-use playbooks with examples and fallbacks.",
    color: "#8B5CF6",
  }, // amethyst
  {
    key: "Guardrails",
    value: 25,
    desc: "Token budgets, evaluation notes, safe behavior by design.",
    headline: "Guardrails that keep quality high",
    outcome: "Set budgets, checks, and review loops so outputs stay on brief.",
    color: "#10B981",
  }, // emerald
];

// ─────────────────────────────────────────────────────────────────────────────
// Utilities & Small UI
// ─────────────────────────────────────────────────────────────────────────────
function Section({ children, className = "" }) {
  return <section className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</section>;
}

function GlowCard({ children, className = "" }) {
  return (
    <div className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B0B1A]/90 to-[#0B0B1A]/70 backdrop-blur-xl ${className}`}>
      <div className="pointer-events-none absolute -inset-px rounded-3xl [mask-image:radial-gradient(60%_40%_at_50%_0,black,transparent)] bg-gradient-to-b from-[#6B21A8]/20 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}

function GlassButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold border border-[#C8A145]/30 bg-white/5 hover:bg-white/10 shadow-[0_0_0_1px_rgba(200,161,69,0.15)_inset] transition ${className}`}
    >
      <span className="relative">
        <span className="absolute -inset-1 rounded-2xl blur opacity-0 hover:opacity-60 transition" style={{background:"linear-gradient(90deg,rgba(200,161,69,0.25),rgba(139,92,246,0.25))"}} />
        <span className="relative">{children}</span>
      </span>
    </button>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl border border-[#C8A145]/30 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      <span className="h-1.5 w-1.5 rounded-full" style={{background:'#C8A145'}} />
      {children}
    </span>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-4 z-40 rounded-full p-3 border border-[#C8A145]/40 bg-[#0B0B1A]/70 backdrop-blur transition ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

function formatUKRange(startISO, endISO) {
  const opts = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/London" };
  return `${new Date(startISO).toLocaleTimeString([], opts)}–${new Date(endISO).toLocaleTimeString([], opts)} (UK)`;
}
function formatLocalRange(startISO, endISO) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const opts = { hour: "2-digit", minute: "2-digit", hour12: false };
  return `${new Date(startISO).toLocaleTimeString([], opts)}–${new Date(endISO).toLocaleTimeString([], opts)} (${tz})`;
}
function useCountdown(targetISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const target = new Date(targetISO).getTime();
  const delta = Math.max(0, target - now);
  const s = Math.floor(delta / 1000);
  return { d: Math.floor(s/86400), h: Math.floor((s%86400)/3600), m: Math.floor((s%3600)/60), s: s%60, expired: delta===0 };
}

// PIE helpers
function polarToCartesian(cx, cy, r, angle) { const rad = ((angle - 90) * Math.PI) / 180.0; return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }; }
function arcPath(x, y, r, startAngle, endAngle) { const start = polarToCartesian(x, y, r, endAngle); const end = polarToCartesian(x, y, r, startAngle); const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1; return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} L ${x} ${y} Z`; }

function Pie({ topics = PIE_TOPICS, activeIndex, onSelect }) {
  const total = topics.reduce((a, b) => a + b.value, 0);
  let angle = 0;
  const cx = 180;
  const cy = 160;
  const r = 140;
  return (
    <svg viewBox="0 0 360 320" className="w-full h-full">
      {topics.map((t, idx) => {
        const start = angle;
        const end = angle + (t.value / total) * 360;
        angle = end;
        const isActive = activeIndex === idx;
        const fill = t.color;
        return (
          <path
            key={t.key}
            d={arcPath(cx, cy, isActive ? r + 10 : r, start, end)}
            style={{
              fill: fill,
              opacity: isActive ? 1 : 0.35,
              transition: "all 420ms ease",
              filter: isActive ? "drop-shadow(0 0 12px rgba(255,255,255,0.2))" : "none",
            }}
            onMouseEnter={() => onSelect(idx)}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={82} className="fill-[#0B0B1A] stroke-white/10" />
    </svg>
  );
}

// Collapsible sliders‑only Client Value Calculator
function ClientValueCalculator() {
  const [open, setOpen] = useState(true);
  const [team, setTeam] = useState(3);
  const [hoursIntro, setHoursIntro] = useState(2);
  const [extraHours, setExtraHours] = useState(4);
  const [hourlyValue, setHourlyValue] = useState(75);
  const [projectsPerQuarter, setProjectsPerQuarter] = useState(2);
  const [projectValue, setProjectValue] = useState(1200);

  const fullTrackInvestment = 1850;

  const introMonthly = team * hoursIntro * hourlyValue * 4;
  const fullMonthly = team * (hoursIntro + extraHours) * hourlyValue * 4 + (projectsPerQuarter * projectValue) / 3;
  const upliftMonthly = Math.max(0, fullMonthly - introMonthly);
  const annualUplift = upliftMonthly * 12;
  const paybackWeeks = upliftMonthly > 0 ? Math.ceil((fullTrackInvestment / upliftMonthly) * 4) : null;

  return (
    <GlowCard className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">Full Track Value Calculator</h3>
          <p className="mt-1 text-sm text-white/70 max-w-xl">
            Estimate the uplift from bringing your team through the full programme instead of only the complimentary intro.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge>ROI Model</Badge>
          <GlassButton className="px-3 py-1 text-sm" onClick={() => setOpen((v) => !v)}>{open ? "Hide" : "Open"}</GlassButton>
        </div>
      </div>
      {open && (
        <div className="mt-5 animate-[fadeIn_300ms_ease]">
          <div className="grid md:grid-cols-2 gap-6">
            <Slider label="Team members attending" min={1} max={12} step={1} value={team} onChange={setTeam} suffix={team} />
            <Slider label="Weekly hours saved after intro" min={0} max={6} step={0.5} value={hoursIntro} onChange={setHoursIntro} suffix={`${hoursIntro.toFixed(1)}h`} />
            <Slider label="Extra weekly hours unlocked in full track" min={0} max={12} step={0.5} value={extraHours} onChange={setExtraHours} suffix={`${extraHours.toFixed(1)}h`} />
            <Slider label="Value of an hour for this team (£)" min={20} max={250} step={5} value={hourlyValue} onChange={setHourlyValue} suffix={`£${hourlyValue}`} />
            <Slider label="Automation projects shipped per quarter" min={0} max={6} step={1} value={projectsPerQuarter} onChange={setProjectsPerQuarter} suffix={projectsPerQuarter} />
            <Slider label="Value created per project (£)" min={200} max={5000} step={100} value={projectValue} onChange={setProjectValue} suffix={`£${projectValue}`} />
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Stat label="Intro only (monthly)" value={`£${Math.round(introMonthly).toLocaleString()}`} />
            <Stat label="Full track (monthly)" value={`£${Math.round(fullMonthly).toLocaleString()}`} />
            <Stat label="Monthly uplift" value={`£${Math.round(upliftMonthly).toLocaleString()}`} />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Projected annual uplift</div>
              <div className="text-3xl font-bold">£{Math.round(annualUplift).toLocaleString()}</div>
            </div>
            <div className="rounded-2xl border border-[#C8A145]/30 bg-gradient-to-br from-[#C8A145]/15 to-transparent p-4">
              <div className="text-sm text-white/70">Full track investment</div>
              <div className="text-3xl font-bold">£{fullTrackInvestment.toLocaleString()}</div>
              {paybackWeeks && (
                <div className="mt-2 text-xs text-white/70">Break-even in approximately {paybackWeeks} weeks of uplift.</div>
              )}
            </div>
          </div>
          <p className="text-xs text-white/50 mt-3">
            Adjust the numbers to match your pipeline and internal rates. Many teams recover the investment with their first two automation projects.
          </p>
        </div>
      )}
    </GlowCard>
  );
}

function Slider({ label, min, max, step, value, onChange, suffix }) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <label htmlFor={id} className="block">
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs text-white/70">{label}</div>
        <div className="text-xs text-white/80">{suffix}</div>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[#C8A145]" />
    </label>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/70">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}

// Calendar helpers
function toGoogleDateRange(startISO, endISO) { const fmt = (d) => new Date(d).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); return `${fmt(startISO)}/${fmt(endISO)}`; }
function googleCalUrl({ title, startISO, endISO, details = "", location = "Online" }) { const base = "https://www.google.com/calendar/render?action=TEMPLATE"; const params = new URLSearchParams({ text: title, dates: toGoogleDateRange(startISO, endISO), details, location }); return `${base}&${params.toString()}`; }

// Decorative interactive graphics
function Orbits() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full border border-[#C8A145]/20 animate-[spin_40s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[24rem] w-[24rem] rounded-full border border-[#8B5CF6]/20 animate-[spin_60s_linear_infinite_reverse]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[12rem] w-[12rem] rounded-full border border-[#3B5CCC]/20 animate-[spin_90s_linear_infinite]" />
    </div>
  );
}
function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {Array.from({length:16}).map((_,i)=> (
        <span key={i} className="absolute h-1 w-1 rounded-full" style={{
          background:i%3?"#C8A145":"#8B5CF6", opacity:0.6,
          left:`${(i*113)%100}%`, top:`${(i*73)%100}%`,
          filter:"blur(0.5px)", animation:`float${i%2?1:2} 8s ease-in-out ${i}s infinite`
        }} />
      ))}
      <style>{`@keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}`}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
function StarterclassLuxuryV8() {
  const [tab, setTab] = useState("overview");
  const [modalOpen, setModalOpen] = useState(false);
  const [showPaid, setShowPaid] = useState(() => { if (typeof window === "undefined") return false; try { return localStorage.getItem("sc_paid_reveal") === "1"; } catch { return false; } });
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const sessions = useMemo(() => SESSIONS, []);
  const { d, h, m, s, expired } = useCountdown(INTRO_START_ISO);

  function openForm() { setModalOpen(true); }
  function revealPaidAndGoCurriculum() { setShowPaid(true); try { localStorage.setItem("sc_paid_reveal", "1"); } catch {} setTab("curriculum"); requestAnimationFrame(() => document.getElementById("curriculum-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" })); }

  return (
    <main className="min-h-screen text-white" style={{background:"linear-gradient(180deg,#0B0B1A,#0B0B1A 60%,#0E0E24)"}}>
      {/* Ambient royal glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[70vh] w-[90vw]" style={{background:"radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)"}} />
        <div className="absolute bottom-0 right-0 h-80 w-80" style={{background:"radial-gradient(circle at center, rgba(200,161,69,0.12), transparent 60%)"}} />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-[#C8A145]/20 backdrop-blur bg-[#0B0B1A]/70">
        <Section className="py-3 flex items-center justify-between">
          <div className="text-base md:text-lg font-semibold tracking-tight">ICUNI · Starterclass</div>
          <div className="flex items-center gap-3">
            <GlassButton onClick={openForm}>Book {INTRO_NAME}</GlassButton>
            <GlassButton onClick={revealPaidAndGoCurriculum} className="bg-white/5">Explore the full track</GlassButton>
          </div>
        </Section>
      </header>

      {/* HERO: copy + pie + countdown + calendar + subtle orbits */}
      <Section className="pt-10 md:pt-16">
        <GlowCard className="overflow-hidden p-6 relative">
          <Orbits />
          <Sparkles />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/70">Starterclass by ICUNI</div>
              <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-[1.05]">Make AI work like a teammate.</h1>
              <p className="mt-3 text-white/80 text-lg max-w-2xl">
                Tune Projects, build private GPTs, lock good prompts into muscle memory, and add guardrails so outputs don’t drift. One focused session. Practical, not theory.
              </p>
              <div className="mt-4 text-sm text-white/80 space-y-1">
                <div><span className="text-white/60">UK Time:</span> {formatUKRange(INTRO_START_ISO, INTRO_END_ISO)}</div>
                <div><span className="text-white/60">Your Time:</span> {formatLocalRange(INTRO_START_ISO, INTRO_END_ISO)}</div>
              </div>
              {/* Countdown */}
              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Next session begins in</div>
                <div className="mt-3 grid grid-cols-4 gap-3 max-w-md">
                  {[
                    ["Days", d],
                    ["Hours", h],
                    ["Minutes", m],
                    ["Seconds", s],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] px-3 py-4 text-center shadow-[0_0_0_1px_rgba(200,161,69,0.15)_inset]"
                    >
                      <div className="text-[2.25rem] leading-none font-semibold font-mono tracking-tight">
                        {String(val).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.28em] text-white/60">{label}</div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>
                  ))}
                </div>
                {!expired && <div className="mt-3 text-xs text-white/60">Reminder emails go out 24 hours before we open the Zoom room.</div>}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Projects</Badge><Badge>GPTs</Badge><Badge>Prompts</Badge><Badge>Guardrails</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <GlassButton onClick={openForm}>Reserve your seat</GlassButton>
                <GlassButton onClick={revealPaidAndGoCurriculum} className="bg-white/5">Explore the full track</GlassButton>
              </div>
              {/* Calendar actions */}
              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                <a
                  className="underline hover:text-white"
                  href={googleCalUrl({ title: INTRO_NAME, startISO: INTRO_START_ISO, endISO: INTRO_END_ISO, details: `${INTRO_NAME} — ICUNI Starterclass`, location: "Online (Zoom)" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to calendar
                </a>
              </div>
              <div className="mt-3 text-xs text-white/60">Replays are available to full‑track registrants.</div>
            </div>
            <div>
              <PieBlock />
            </div>
          </div>
        </GlowCard>
      </Section>

      {/* Tabs */}
      <Section className="mt-12">
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/5 w-fit border border-[#C8A145]/20">
          {[
            { k: "overview", t: "Overview" },
            { k: "curriculum", t: "Curriculum" },
            { k: "faq", t: "FAQ" },
          ].map(({ k, t }) => (
            <button key={k} onClick={() => setTab(k)} className={`px-4 py-2 rounded-xl text-sm transition ${tab === k ? "bg-white/10 font-semibold border border-[#C8A145]/20" : "text-white/80 hover:bg-white/5"}`}>{t}</button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="mt-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <GlowCard className="p-6">
                <h3 className="text-xl font-semibold">What you’ll gain in {INTRO_NAME}</h3>
                <ul className="mt-3 space-y-2 text-white/80 leading-relaxed list-disc pl-5">
                  <li>A tuned ChatGPT Project that mirrors your work</li>
                  <li>A personal prompt kit that survives real use</li>
                  <li>A small system that moves from idea → output fast</li>
                </ul>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[['Live session','90 minutes. Zero fluff.'],['Replay access','Available to paid full‑track registrants.'],['Bring your work','Apply lessons to your real task.']].map(([h,p],i)=> (
                    <div key={i} className="rounded-2xl border border-[#C8A145]/20 p-4 bg-white/5 hover:bg-white/10 transition">
                      <div className="text-sm font-medium">{h}</div>
                      <div className="text-xs text-white/70">{p}</div>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {showPaid && <ClientValueCalculator />}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <GlowCard className="p-6">
                <h3 className="text-xl font-semibold">Next live times</h3>
                <ul className="mt-3 space-y-3">
                  {sessions.filter(s=>s.track!=="break").slice(0,4).map(s=> (
                    <li key={s.k} className="flex items-start gap-3">
                      <span className="text-white/60 w-32 text-sm">{s.date}</span>
                      <div>
                        <div className="text-white/60 text-xs">UK: {formatUKRange(s.start, s.end)}</div>
                        <div className="text-white/60 text-xs">Your: {formatLocalRange(s.start, s.end)}</div>
                        <div className="font-medium">{s.title}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <button onClick={()=>setTab("curriculum")} className="mt-4 text-sm text-white/70 underline underline-offset-4 hover:text-white">See full schedule →</button>
              </GlowCard>

              <GlowCard className="p-6">
                <div className="flex gap-3">
                  <GlassButton onClick={openForm}>Book {INTRO_NAME}</GlassButton>
                  <GlassButton onClick={revealPaidAndGoCurriculum} className="bg-white/5">Explore more</GlassButton>
                </div>
              </GlowCard>
            </div>
          </div>
        )}

        {/* Curriculum */}
        {tab === "curriculum" && (
          <div id="curriculum-anchor" className="mt-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-3">
              {sessions.map((s) => (
                <details key={s.k} className={`group rounded-2xl border ${s.track === "intro" ? "border-[#10B981]/30" : "border-white/10"} bg-white/5 open:bg-white/10 p-4 transition-all group-open:shadow-[0_0_0_1px_rgba(200,161,69,0.25)_inset] group-open:translate-y-0`}> 
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                    <span className="font-semibold flex-1 pr-4">{s.title}</span>
                    <span className="text-white/60 text-sm hidden md:flex gap-3">
                      <span>{s.date}</span>
                      <span>{formatUKRange(s.start, s.end)}</span>
                    </span>
                    <span className="text-white/60 group-open:rotate-45 transition">＋</span>
                  </summary>
                  {s.track !== "break" ? (
                    <div className="mt-3 text-sm text-white/80 space-y-3">
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-[#C8A145]/20 p-3 bg-white/5">
                          <div className="text-white/60 text-xs">Date</div>
                          <div className="font-medium">{s.date}</div>
                          <div className="text-xs text-white/60">UK: {formatUKRange(s.start, s.end)} · Your: {formatLocalRange(s.start, s.end)}</div>
                        </div>
                        <div className="rounded-2xl border border-[#C8A145]/20 p-3 bg-white/5">
                          <div className="text-white/60 text-xs">Focus</div>
                          <div className="font-medium">{s.desc}</div>
                        </div>
                        <div className="rounded-2xl border border-[#C8A145]/20 p-3 bg-white/5">
                          <div className="text-white/60 text-xs">Outcome</div>
                          <div className="font-medium">{s.outcome}</div>
                        </div>
                      </div>

                      {/* Extras */}
                      {s.k === "s4" && (
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Retries, logging, idempotency patterns</div>
                          <div className="rounded-2xl border border_white/10 p-3 bg-white/5">Internal tool wiring (inputs/outputs)</div>
                        </div>
                      )}
                      {s.k === "s5" && (
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Secrets & scopes; audit trails</div>
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Credit budgeting and drift checks</div>
                        </div>
                      )}
                      {s.k === "s8" && (
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Webhook → Sheet → Gmail orchestration</div>
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Approvals and human‑in‑the‑loop</div>
                        </div>
                      )}
                      {s.k === "s9" && (
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Queues, retries, and observability</div>
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Error handling and guardrails</div>
                        </div>
                      )}
                      {s.k === "s10" && (
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">CI/CD basics and environment separation</div>
                          <div className="rounded-2xl border border-white/10 p-3 bg-white/5">Rollback plan and runbook handoff</div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <GlassButton className="mt-2" onClick={() => window.open(googleCalUrl({ title: s.title, startISO: s.start, endISO: s.end, details: `${s.title} — ICUNI Starterclass`, location: 'Online (Zoom)' }), '_blank')}>Add to calendar</GlassButton>
                        {s.track === 'intro' ? (
                          <GlassButton className="mt-2" onClick={() => setModalOpen(true)}>Reserve seat</GlassButton>
                        ) : showPaid ? (
                          <GlassButton className="mt-2" onClick={() => setModalOpen(true)}>Join track</GlassButton>
                        ) : (
                          <GlassButton className="mt-2" onClick={revealPaidAndGoCurriculum}>Explore the full track</GlassButton>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 text-sm text-white/60">—</div>
                  )}
                </details>
              ))}
            </div>
            <div className="lg:col-span-4 space-y-6">
              {showPaid ? <ClientValueCalculator /> : (
                <GlowCard className="p-6">
                  <h3 className="text-xl font-semibold">Start with {INTRO_NAME}</h3>
                  <p className="text-white/80 mt-2">Customisation, Projects, GPTs, Prompts. Build your base. The rest is optional power‑ups.</p>
                </GlowCard>
              )}
            </div>
          </div>
        )}

        {/* FAQ */}
        {tab === "faq" && (
          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <GlowCard className="p-6">
                <h3 className="text-xl font-semibold">FAQ</h3>
                <div className="mt-4 space-y-3">
                  {[
                    ["Do I need to code?","Optional. You can complete the session without code using Projects, GPTs, Canvas, and N8N. If you do write scripts, we keep them readable and reusable."],
                    ["What tools do I need?","ChatGPT Pro and a Google account for Sheets/Drive. We provide Canvas workspaces, prompt kits, and starter templates so you’re not staring at a blank page."],
                    ["Can I watch later?","Replays are available to full‑track registrants. Live Q&A still gives you the edge for tailored fixes."],
                    ["Is this theory?","No. We build small, real systems. You leave with a configured Project, a prompt kit, and the habit to iterate weekly."],
                    ["What happens after the session?","You’ll get materials and a path into the advanced track (Agents, AgentKit, N8N, deployment) if you choose to continue."],
                    ["Will my data be safe?","We use sane defaults: secrets, scopes, vendor hygiene, and how to spot risky prompts. You decide what to connect; we model best practice."],
                    ["I’m short on time.","The format is 90 minutes, built to ship. Homework is practical and sized to fit under two hours."],
                    ["I’m not technical.","You’ll be fine. We keep the stack thin and explain terms as we go. The focus is outcomes, not jargon."],
                  ].map(([q,a],i)=> (
                    <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 open:bg-white/10 p-4">
                      <summary className="cursor-pointer list-none flex items-center justify-between">
                        <span className="font-medium">{q}</span>
                        <span className="text-white/60 group-open:rotate-45 transition">＋</span>
                      </summary>
                      <p className="mt-2 text-sm text-white/80">{a}</p>
                    </details>
                  ))}
                </div>
              </GlowCard>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <GlowCard className="p-6">
                <h3 className="text-xl font-semibold">Stay in the loop</h3>
                <p className="text-white/80 mt-2">Book {INTRO_NAME} to receive reminders and materials.</p>
                <GlassButton className="mt-3" onClick={openForm}>Book now</GlassButton>
              </GlowCard>
            </div>
          </div>
        )}
      </Section>

      {/* Modal: Google Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-[#C8A145]/30 bg-[#0B0B1A]">
            <div className="px-4 md:px-6 py-4 border-b border-[#C8A145]/20 flex items-center justify-between">
              <div className="font-semibold">Register — {INTRO_NAME}</div>
              <button onClick={() => setModalOpen(false)} className="text-white/70 hover:text-white text-2xl leading-none">×</button>
            </div>
            <div className="aspect-[16/12] md:aspect-[16/9] w-full">
              <iframe title="Starterclass Registration" src={GOOGLE_FORM_URL_EMBED} className="h-full w-full" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
            <div className="px-4 md:px-6 py-3 text-xs text-white/60 border-t border-[#C8A145]/20">Replays are available to full‑track registrants. You’ll receive calendar invites and materials by email.</div>
          </div>
        </div>
      )}

      <BackToTop />

      {/* Footer with populated policies */}
      <footer className="mt-24 mb-16">
        <Section>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
            <div>© {new Date().getFullYear()} ICUNI — Starterclass</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#terms" onClick={(e)=>{e.preventDefault(); setShowTerms(true);}}>Terms</a>
              <a className="hover:text-white" href="#privacy" onClick={(e)=>{e.preventDefault(); setShowPrivacy(true);}}>Privacy</a>
              <a className="hover:text-white" href="#contact" onClick={(e)=>{e.preventDefault(); setShowContact(true);}}>Contact</a>
            </div>
          </div>
        </Section>
      </footer>

      {/* Policy modals */}
      {showTerms && (
        <PolicyModal title="Terms of Service" onClose={()=>setShowTerms(false)}>
          <p className="text-sm text-white/80">These terms govern enrollment in the ICUNI Starterclass.</p>
          <ul className="list-disc pl-5 text-sm text-white/80 space-y-2 mt-3">
            <li><span className="text-white/60">Scope:</span> The Starterclass Session provides live instruction, templates, and materials for personal/business use. Redistribution or resale is not permitted without written consent.</li>
            <li><span className="text-white/60">Payments:</span> All payments are processed via Stripe. Taxes and fees may apply per region.</li>
            <li><span className="text-white/60">Refunds:</span> You may cancel up to 48 hours before the first paid session for a full refund. After that window, we provide credit toward a future cohort or Private/Masterclass.</li>
            <li><span className="text-white/60">Conduct:</span> Be respectful in live sessions and forums. Disruptive behaviour may result in removal without refund.</li>
            <li><span className="text-white/60">IP:</span> Your data remains yours. Course IP (slides, templates) remains ICUNI’s and is licensed for your use.</li>
            <li><span className="text-white/60">Changes:</span> We may adjust dates/contents for quality or operational reasons; you’ll be notified by email.</li>
            <li><span className="text-white/60">Governing law:</span> England & Wales.</li>
          </ul>
        </PolicyModal>
      )}
      {showPrivacy && (
        <PolicyModal title="Privacy Policy" onClose={()=>setShowPrivacy(false)}>
          <p className="text-sm text-white/80">We collect the minimum necessary data to run the cohort and support you.</p>
          <ul className="list-disc pl-5 text-sm text-white/80 space-y-2 mt-3">
            <li><span className="text-white/60">Data collected:</span> Name, email, form responses, attendance, and homework links.</li>
            <li><span className="text-white/60">Use:</span> Enrollment, reminders, certification, and support. Optional marketing with explicit opt‑in.</li>
            <li><span className="text-white/60">Processors:</span> Google (Forms/Sheets/Drive), Stripe (payments), email provider (Postmark/SendGrid). We use N8N to automate notifications.</li>
            <li><span className="text-white/60">Security:</span> Access is limited to ICUNI admins on a need‑to‑know basis. We use least‑privilege accounts and audit access periodically.</li>
            <li><span className="text-white/60">Retention:</span> Enrollment records are retained for up to 24 months; you may request deletion anytime.</li>
            <li><span className="text-white/60">Your rights:</span> Access, correction, deletion. Email <a className="underline" href="mailto:starterclass@icuni.org">starterclass@icuni.org</a>.</li>
          </ul>
        </PolicyModal>
      )}
      {showContact && (
        <PolicyModal title="Contact" onClose={()=>setShowContact(false)}>
          <div className="text-sm text_white/80 space-y-2">
            <p>We reply within 2 business days.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="text-white/60">Enrollment & support:</span> <a className="underline" href="mailto:starterclass@icuni.org">starterclass@icuni.org</a></li>
              <li><span className="text-white/60">Automation ops (N8N):</span> <a className="underline" href="mailto:ai@icuni.org">ai@icuni.org</a></li>
              <li><span className="text-white/60">Receipts & reminders (no‑reply):</span> no-reply@icuni.org</li>
            </ul>
            <p className="text-xs text-white/60">Prefer not to email? Register via the on‑page Google Form; we’ll follow up with materials and calendar invites.</p>
          </div>
        </PolicyModal>
      )}
    </main>
  );
}

window.StarterclassLuxuryV8 = StarterclassLuxuryV8;

function PieBlock() {
  const topics = PIE_TOPICS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = topics[activeIndex] ?? topics[0];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % topics.length);
    }, 10000);
    return () => clearInterval(id);
  }, [paused]);

  const activeColor = active?.color ?? "#C8A145";

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${activeColor}26, transparent 65%)` }}
      />
      <div className="grid grid-cols-1 gap-4">
        <div className="relative mx-auto w-full max-w-[360px]">
          <div
            className="relative"
            style={{
              animation: "pieRotate 120s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            <Pie topics={topics} activeIndex={activeIndex} onSelect={setActiveIndex} />
          </div>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="text-xs uppercase tracking-[0.28em] text-white/50">{active?.key}</div>
            <div className="mt-2 text-lg font-semibold leading-snug">{active?.headline}</div>
            <div className="mt-2 text-xs text-white/70 leading-relaxed max-w-[200px]">{active?.desc}</div>
            <div className="mt-3 text-[0.65rem] uppercase tracking-[0.36em] text-white/40">{Math.round(active?.value)}% of session focus</div>
          </div>
        </div>
        <div className="rounded-2xl border border-[#C8A145]/20 bg-white/5 p-4">
          <div className="text-xs uppercase tracking-[0.28em] text-white/50">Outcome</div>
          <div className="mt-2 text-sm font-medium text-white/90">{active?.outcome}</div>
          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
            Why it matters: {active?.desc}
          </div>
        </div>
      </div>
      <style>{`@keyframes pieRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`}</style>
    </div>
  );
}

function PolicyModal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose} />
      <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-[#C8A145]/30 bg-[#0B0B1A]">
        <div className="px-4 md:px-6 py-4 border-b border-[#C8A145]/20 flex items-center justify-between">
          <div className="font-semibold">{title}</div>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl leading-none">×</button>
        </div>
        <div className="p-6 space-y-3">{children}</div>
      </div>
    </div>
  );
}
