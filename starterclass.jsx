const { useEffect, useMemo, useState, useRef, useCallback, useContext } = React;

const BASE_PALETTES = {
  light: {
    background: "linear-gradient(180deg,#FCFBFF,#F6F4FF 55%,#F0ECFF)",
    surface: "#ffffff",
    surfaceSoft: "rgba(255,255,255,0.82)",
    border: "rgba(194,132,36,0.3)",
    textPrimary: "#1C1535",
    textSecondary: "rgba(28,21,53,0.72)",
    textMuted: "rgba(28,21,53,0.62)",
    accentPrimary: "#C28424",
    accentSecondary: "#7A3DF0",
    accentTertiary: "#3B5CCC",
    shadow: "0 24px 48px rgba(164,116,40,0.12)",
    glass: "rgba(255,255,255,0.75)",
    buttonShadow: "0 12px 28px rgba(194,132,36,0.22)",
    orbitBorder: "rgba(123,61,240,0.25)",
    accentGlow: "rgba(194,132,36,0.16)",
    secondarySurface: "rgba(255,255,255,0.92)",
    headerBg: "rgba(255,255,255,0.82)",
    simpleBackground: "linear-gradient(180deg,rgba(255,255,255,0.85),rgba(246,240,255,0.95))",
  },
  dark: {
    background: "linear-gradient(180deg,#0B0B1A,#0B0B1A 60%,#0E0E24)",
    surface: "rgba(11,11,26,0.82)",
    surfaceSoft: "rgba(13,13,30,0.7)",
    border: "rgba(255,255,255,0.12)",
    textPrimary: "#F8F7FF",
    textSecondary: "rgba(248,247,255,0.72)",
    textMuted: "rgba(248,247,255,0.6)",
    accentPrimary: "#C8A145",
    accentSecondary: "#8B5CF6",
    accentTertiary: "#3B5CCC",
    shadow: "0 24px 48px rgba(5,0,45,0.45)",
    glass: "rgba(13,13,30,0.75)",
    buttonShadow: "0 10px 28px rgba(11,11,26,0.6)",
    orbitBorder: "rgba(139,92,246,0.25)",
    accentGlow: "rgba(139,92,246,0.2)",
    secondarySurface: "rgba(17,17,34,0.9)",
    headerBg: "rgba(11,11,26,0.75)",
    simpleBackground: "linear-gradient(180deg,rgba(9,9,19,0.92),rgba(10,10,22,0.92))",
  },
};

function getPalette(theme) {
  return BASE_PALETTES[theme] || BASE_PALETTES.light;
}

const ThemeContext = React.createContext({
  theme: "light",
  palette: BASE_PALETTES.light,
});

function ThemeProvider({ theme, palette, children }) {
  const value = useMemo(() => ({ theme, palette }), [theme, palette]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Starterclass by ICUNI — Luxury V8 (Royal Palette)
 * - Royal, luxurious look (imperial purple, deep navy, gold accents)
 * - HERO = copy • interactive PIE (royal colours) • COUNTDOWN • Add‑to‑Calendar
 * - UK time · visitor local time side‑by‑side
 * - Paid track gated; sliders‑only Client Value Calculator (hide/show)
 * - Curriculum/Overview animated cards
 * - Renamed modules:
 *    • s6 title to "ChatGPT Agents 2 — Systems" (desc/outcome unchanged)
 *    • s5 title to "Introduction to Agent Builders — Security and Safety" (desc/outcome unchanged)
 * - Subtle interactive graphics (orbits & sparkles) that don’t distract
 * - N8N capitalization; Google Form embed fixed
 * TailwindCSS assumed. Single‑file React; Canvas‑ready.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_URL_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLScmdBVzUHMAhe2hX7bW3ns6EeOw4D7RTyMDBT_C8XGemzjs-w/viewform?embedded=true";

const INTRO_NAME = "Starterclass Session – Customisation";
const INTRO_START_ISO = "2025-11-08T11:00:00Z"; // Sat 08 Nov 2025 11:00 UK (UTC)
const INTRO_END_ISO   = "2025-11-08T12:30:00Z";

// Sessions (UK times in UTC). Titles updated per request.
const SESSIONS = [
  {
    k: "intro",
    title: INTRO_NAME,
    date: "Sat 08 Nov 2025",
    start: "2025-11-08T11:00:00Z",
    end: "2025-11-08T12:30:00Z",
    desc: "Customisation deep dives across Projects, GPTs, and prompts that ship.",
    outcome: "Your tailored workspace, a guided prompt kit, and a fully working automation project.",
    track: "intro",
    outline: [
      { key: "Custom GPT build", value: 32, desc: "Collect assets, set roles, and define safe defaults.", color: "#3B5CCC" },
      { key: "Project walkthrough", value: 28, desc: "Map steps, guardrails, and quality checks.", color: "#C8A145" },
      { key: "Prompt lab", value: 24, desc: "Shape prompts for business and creative briefs.", color: "#8B5CF6" },
      { key: "Safeguards", value: 16, desc: "Plan review rhythms and fallback paths.", color: "#10B981" },
    ],
  },
  {
    k: "s2",
    title: "Canvas Deep Dive · Codex Foundations",
    date: "Sat 15 Nov 2025",
    start: "2025-11-15T11:00:00Z",
    end: "2025-11-15T12:30:00Z",
    desc: "Canvas as the build surface, Codex for repos, and dependable outputs.",
    outcome: "Confident Canvas workflows and Codex patterns you can rely on.",
    track: "paid",
    outline: [
      { key: "Canvas orientation", value: 30, desc: "Structure spaces, panels, and shared assets.", color: "#3B5CCC" },
      { key: "Codex workflows", value: 36, desc: "Generate updates, commits, and pull requests safely.", color: "#C8A145" },
      { key: "Quality loops", value: 34, desc: "Testing, diffs, and review rituals.", color: "#8B5CF6" },
    ],
  },
  {
    k: "s3",
    title: "Projects & GPTs Immersion",
    date: "Sat 22 Nov 2025",
    start: "2025-11-22T11:00:00Z",
    end: "2025-11-22T12:30:00Z",
    desc: "Design clean Projects, build private GPTs with tools and knowledge packs.",
    outcome: "A production-ready Project and a private GPT wired to it with care.",
    track: "paid",
    outline: [
      { key: "Project patterns", value: 34, desc: "Design multi-step flows with clarity.", color: "#C8A145" },
      { key: "Private GPT assembly", value: 34, desc: "Wire tools, knowledge, and policies.", color: "#3B5CCC" },
      { key: "Deployment rehearsal", value: 32, desc: "Pilot with real tasks and refine guardrails.", color: "#10B981" },
    ],
  },
  {
    k: "s4",
    title: "ChatGPT Agents 1 — Prompts, Processes, Internal Tools",
    date: "Sat 29 Nov 2025",
    start: "2025-11-29T11:00:00Z",
    end: "2025-11-29T12:30:00Z",
    desc: "Agent roles, retries, logs, idempotency, and prompt architecture that holds under load.",
    outcome: "Agent template with roles, retries, logs, and idempotency baked in.",
    track: "paid",
    outline: [
      { key: "Prompt systems", value: 30, desc: "Roles, memory, cadence, and briefing.", color: "#8B5CF6" },
      { key: "Agent internals", value: 35, desc: "Retries, logging, observability, and alerts.", color: "#3B5CCC" },
      { key: "Ops routines", value: 35, desc: "Escalations, QA, and idempotent recovery.", color: "#C8A145" },
    ],
  },
  {
    k: "s5",
    title: "Introduction to Agent Builders — Security and Safety",
    date: "Sat 06 Dec 2025",
    start: "2025-12-06T11:00:00Z",
    end: "2025-12-06T12:30:00Z",
    desc: "Credit budgeting, scopes and keys, audit trails, and safe configuration.",
    outcome: "Confidence setting budgets, scopes, keys, and safety guardrails.",
    track: "paid",
    outline: [
      { key: "Safeguard planning", value: 32, desc: "Budgets, scopes, and approvals that protect usage.", color: "#10B981" },
      { key: "Monitoring", value: 34, desc: "Dashboards, audit trails, and accountability.", color: "#3B5CCC" },
      { key: "Stability drills", value: 34, desc: "Incident response and rollback scenarios.", color: "#C8A145" },
    ],
  },
  {
    k: "s6",
    title: "ChatGPT Agents 2 — Systems",
    date: "Sat 13 Dec 2025",
    start: "2025-12-13T11:00:00Z",
    end: "2025-12-13T12:30:00Z",
    desc: "Add agents to existing systems · System case study: Storytelling and Filmmaking · brief to beats to script pipeline · tasteful image workflows.",
    outcome: "Brief to beats to script pipeline and image generation workflow.",
    track: "paid",
    outline: [
      { key: "Systems design", value: 33, desc: "Map dependencies and orchestrate data flows.", color: "#C8A145" },
      { key: "Story pipeline", value: 34, desc: "Turn briefs into beats, scripts, and creative assets.", color: "#8B5CF6" },
      { key: "Image workflow", value: 33, desc: "Prompt, select, and polish visuals with guardrails.", color: "#3B5CCC" },
    ],
  },
  {
    k: "s7",
    title: "AgentKit — Create Your First Agent",
    date: "Sat 20 Dec 2025",
    start: "2025-12-20T11:00:00Z",
    end: "2025-12-20T12:30:00Z",
    desc: "Stand up a planning and memory agent with web, docs, and sheets tools.",
    outcome: "A live AgentKit agent solving a real micro workflow.",
    track: "paid",
    outline: [
      { key: "AgentKit setup", value: 34, desc: "Tools, credentials, and environment readiness.", color: "#3B5CCC" },
      { key: "Memory tactics", value: 33, desc: "State, history, and retrieval that stays sharp.", color: "#8B5CF6" },
      { key: "Live scenario", value: 33, desc: "Ship a micro workflow end to end with feedback.", color: "#C8A145" },
    ],
  },
  { k: "break", title: "Winter break", date: "—", start: "", end: "", desc: "—", outcome: "—", track: "break" },
  {
    k: "s8",
    title: "N8N — Create Your First Agent",
    date: "Sat 10 Jan 2026",
    start: "2026-01-10T11:00:00Z",
    end: "2026-01-10T12:30:00Z",
    desc: "Trigger, process, and notify flows via webhooks, Sheets, and Gmail.",
    outcome: "A working N8N flow with approvals and logging.",
    track: "paid",
    outline: [
      { key: "Workflow mapping", value: 32, desc: "From trigger to action with clarity.", color: "#C8A145" },
      { key: "N8N build", value: 36, desc: "Nodes, error traps, and approvals.", color: "#3B5CCC" },
      { key: "Launch prep", value: 32, desc: "Notifications, documentation, and go-live.", color: "#8B5CF6" },
    ],
  },
  {
    k: "s9",
    title: "N8N Deep Dive — Advanced Agent",
    date: "Sat 17 Jan 2026",
    start: "2026-01-17T11:00:00Z",
    end: "2026-01-17T12:30:00Z",
    desc: "Branching, retries, queues, observability, and error handling.",
    outcome: "Branching, retries, queues, observability, and graceful recovery.",
    track: "paid",
    outline: [
      { key: "Advanced routing", value: 34, desc: "Branching, conditional logic, and dynamic paths.", color: "#8B5CF6" },
      { key: "Resilience", value: 33, desc: "Retries, queues, and observability dashboards.", color: "#3B5CCC" },
      { key: "Operations kit", value: 33, desc: "Alerts, documentation, and support rhythms.", color: "#C8A145" },
    ],
  },
  {
    k: "s10",
    title: "Deployment — Orchestrate the System",
    date: "Sat 24 Jan 2026",
    start: "2026-01-24T11:00:00Z",
    end: "2026-01-24T12:30:00Z",
    desc: "Agents, N8N, site, CI/CD, runbooks, and rollback planning.",
    outcome: "A deployment playbook with CI/CD, runbooks, and rollback routines.",
    track: "paid",
    outline: [
      { key: "Deployment runway", value: 33, desc: "CI/CD, environments, and readiness gates.", color: "#3B5CCC" },
      { key: "Runbooks", value: 34, desc: "Support plans, incident playbooks, and checklists.", color: "#C8A145" },
      { key: "Review loops", value: 33, desc: "CPD evidence, reporting, and handover.", color: "#10B981" },
    ],
  },
];

const MODULE_VALUATIONS = [
  {
    key: "intro",
    label: INTRO_NAME,
    baseValue: 540,
    deliverable: "Custom GPT configured around your brief.",
    weight: 1.05,
  },
  {
    key: "s2",
    label: "Canvas Deep Dive · Codex Foundations",
    baseValue: 360,
    deliverable: "Canvas workspace and Codex habits that save hours each week.",
  },
  {
    key: "s3",
    label: "Projects & GPTs Immersion",
    baseValue: 420,
    deliverable: "Project blueprint and private GPT ready for production use.",
    weight: 1.08,
  },
  {
    key: "s4",
    label: "ChatGPT Agents 1 — Prompts, Processes, Internal Tools",
    baseValue: 400,
    deliverable: "Agent patterns with prompts, logs, and retry strategy baked in.",
  },
  {
    key: "s5",
    label: "Introduction to Agent Builders — Security and Safety",
    baseValue: 380,
    deliverable: "Safeguards, monitoring, and incident routines that keep trust high.",
  },
  {
    key: "s6",
    label: "ChatGPT Agents 2 — Systems",
    baseValue: 410,
    deliverable: "Story-to-script systems and visual workflows tuned for quality.",
  },
  {
    key: "s7",
    label: "AgentKit — Create Your First Agent",
    baseValue: 440,
    deliverable: "AgentKit build with memory and live scenario walkthrough.",
    weight: 1.06,
  },
  {
    key: "s8",
    label: "N8N — Create Your First Agent",
    baseValue: 320,
    deliverable: "Automated N8N flow with approvals and clear reporting.",
  },
  {
    key: "s9",
    label: "N8N Deep Dive — Advanced Agent",
    baseValue: 330,
    deliverable: "Resilient automations with branching, retries, and observability.",
  },
  {
    key: "s10",
    label: "Deployment — Orchestrate the System",
    baseValue: 460,
    deliverable: "Deployment playbook, runbooks, and CPD-ready evidence pack.",
    weight: 1.07,
  },
];

// Royal interactive PIE colours
const PIE_TOPICS = [
  {
    key: "Projects",
    value: 25,
    desc: "Configure boundaries, attach knowledge, set safe defaults.",
    headline: "Projects locked and ready",
    outcome: "Leave with a fully functional project tailored to your workflow.",
    toolkit: "Workflow blueprint, QA checklist, and launch runbook.",
    color: "#C8A145",
  }, // gold
  {
    key: "GPTs",
    value: 25,
    desc: "Build private GPTs with the right tools and context.",
    headline: "Private GPTs wired for work",
    outcome: "Receive a custom GPT configured for your business or creative goals.",
    toolkit: "Private GPT with knowledge packs and access rules.",
    color: "#3B5CCC",
  }, // royal blue
  {
    key: "Prompts",
    value: 25,
    desc: "Roles, constraints, examples; prompts that hold under load.",
    headline: "Prompts that stay sharp",
    outcome: "Create prompt sets that deliver in business and creative scenarios.",
    toolkit: "Prompt scorecard, test scripts, and reuse-ready templates.",
    color: "#8B5CF6",
  }, // amethyst
  {
    key: "Guardrails",
    value: 25,
    desc: "Token budgets, evaluation notes, safe behavior by design.",
    headline: "Guardrails that keep quality high",
    outcome: "Set budgets, checks, and review loops so outputs stay on brief.",
    toolkit: "Safety rails, evaluation rubric, escalation plan.",
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
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: isDark ? palette.surface : palette.surface,
        border: `1px solid ${palette.border}`,
        boxShadow: palette.shadow,
        color: palette.textPrimary,
        backdropFilter: "blur(24px)",
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl"
        style={{
          background: isDark
            ? "radial-gradient(60% 40% at 50% 0, rgba(139,92,246,0.2), transparent)"
            : "radial-gradient(60% 40% at 50% 0, rgba(194,132,36,0.14), transparent)",
          maskImage: "radial-gradient(60% 40% at 50% 0, black, transparent)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function GlassButton({ children, onClick, className = "", variant = "primary" }) {
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  const styles =
    variant === "primary"
      ? {
          backgroundImage: `linear-gradient(135deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
          color: "#fff",
          border: "none",
        }
      : {
          background: isDark ? palette.surfaceSoft : palette.glass,
          color: isDark ? "#ffffff" : palette.textPrimary,
          border: `1px solid ${palette.border}`,
        };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition shadow-lg ${className}`}
      style={{
        ...styles,
        boxShadow: palette.buttonShadow,
      }}
    >
      {children}
    </button>
  );
}

function Badge({ children }) {
  const { palette } = useTheme();
  return (
    <span
      className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-medium"
      style={{
        border: `1px solid ${palette.border}`,
        background: palette.surfaceSoft,
        color: palette.textSecondary,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: palette.accentPrimary }}
      />
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
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-4 z-40 rounded-full p-3 transition ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{
        border: `1px solid ${palette.border}`,
        background: isDark ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary,
        boxShadow: palette.shadow,
      }}
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
  const { palette, theme } = useTheme();
  const isDark = theme === "dark";
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
      <circle
        cx={cx}
        cy={cy}
        r={82}
        style={{
          fill: isDark ? "#0B0B1A" : palette.surface,
          stroke: isDark ? "rgba(255,255,255,0.1)" : palette.border,
        }}
      />
    </svg>
  );
}

// Client Value Calculator focused on a single participant
function ClientValueCalculator() {
  const { palette } = useTheme();
  const [hours, setHours] = useState(3);
  const [focus, setFocus] = useState("steady");

  const focusModes = {
    steady: {
      label: "Steady build",
      description: "Weekly practice keeps momentum",
      multiplier: 1,
    },
    accelerator: {
      label: "Launch sprint",
      description: "Short sprint before go-live",
      multiplier: 1.18,
    },
    immersion: {
      label: "Immersive practice",
      description: "Deep dive for rapid mastery",
      multiplier: 1.32,
    },
  };

  const practiceMultiplier = useMemo(() => 0.9 + hours * 0.09, [hours]);
  const valuations = useMemo(() => {
    const focusBoost = focusModes[focus]?.multiplier ?? 1;
    return MODULE_VALUATIONS.map((module) => {
      const moduleBoost = module.weight ?? 1;
      const value = Math.round(module.baseValue * practiceMultiplier * focusBoost * moduleBoost);
      return { ...module, value };
    });
  }, [focus, focusModes, practiceMultiplier]);

  const introValue = valuations.find((item) => item.key === "intro")?.value ?? 0;
  const paidValuations = valuations.filter((item) => item.key !== "intro");
  const paidValue = paidValuations.reduce((sum, item) => sum + item.value, 0);
  const fullValue = introValue + paidValue;
  const tuition = 1850;
  const uplift = Math.max(0, fullValue - introValue);
  const netValue = fullValue - tuition;
  const averageModule = paidValuations.length ? Math.round(paidValue / paidValuations.length) : 0;
  const tuitionBalance = Math.max(0, tuition - introValue);
  let coveredByModule = null;
  let running = 0;
  for (const module of paidValuations) {
    running += module.value;
    if (running >= tuitionBalance && coveredByModule === null) {
      coveredByModule = module.label;
    }
  }

  const stats = [
    { label: "Intro session value", value: `£${introValue.toLocaleString()}`, hint: "Starterclass Session – Customisation" },
    { label: "Full certification value", value: `£${fullValue.toLocaleString()}`, hint: "10 modules including intro" },
    { label: "Additional value unlocked", value: `£${uplift.toLocaleString()}`, hint: "Completing every module" },
    { label: "Net after tuition", value: `£${netValue.toLocaleString()}`, hint: "Tuition £1,850", emphasis: true },
  ];

  return (
    <GlowCard className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">Client Value Calculator</h3>
          <p className="mt-1 text-sm" style={{ color: palette.textSecondary }}>
            Estimate the personal value of completing the full Starterclass track as a solo participant. Adjust how much time you will put into practice each week.
          </p>
        </div>
        <Badge>Booking Helper</Badge>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Slider
          label="Weekly implementation hours"
          min={1}
          max={6}
          step={1}
          value={hours}
          onChange={setHours}
          suffix={`${hours}h`}
        />
        <div>
          <div className="flex items-center justify-between mb-2 text-xs" style={{ color: palette.textSecondary }}>
            <span>Practice mode</span>
            <span>{focusModes[focus].description}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(focusModes).map(([key, config]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFocus(key)}
                className="rounded-2xl px-3 py-2 text-xs font-semibold transition"
                style={{
                  border: `1px solid ${palette.border}`,
                  background:
                    focus === key
                      ? `linear-gradient(135deg, ${palette.accentPrimary}CC, ${palette.accentSecondary}CC)`
                      : palette.surfaceSoft,
                  color: focus === key ? "#ffffff" : palette.textPrimary,
                  boxShadow: focus === key ? palette.buttonShadow : "none",
                }}
              >
                {config.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl p-4" style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft }}>
        <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
          When tuition is covered
        </div>
        <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
          Tuition for the full package is £{tuition.toLocaleString()}. With your current settings, the value of the modules catches up once you complete <strong>{coveredByModule || "the track"}</strong>.
        </p>
        <p className="mt-2 text-xs" style={{ color: palette.textMuted }}>
          Average value per paid module: £{averageModule.toLocaleString()}. Keep these numbers in mind while comparing the intro-only route.
        </p>
      </div>

      <div className="mt-6">
        <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
          Module value snapshot
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {valuations.map((module) => (
            <div
              key={module.key}
              className="relative overflow-hidden rounded-2xl p-4 transition"
              style={{
                border: `1px solid ${palette.border}`,
                background:
                  module.key === "intro"
                    ? `linear-gradient(135deg, ${palette.accentPrimary}1a, ${palette.accentSecondary}1a)`
                    : palette.surfaceSoft,
                color: palette.textPrimary,
              }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.18em]" style={{ color: palette.textMuted }}>
                  {module.key === "intro" ? "Intro" : "Module"}
                </span>
                <span className="text-sm font-semibold">£{module.value.toLocaleString()}</span>
              </div>
              <div className="mt-1 text-sm font-semibold" style={{ color: palette.textPrimary }}>
                {module.label}
              </div>
              <div className="mt-2 text-xs" style={{ color: palette.textSecondary }}>
                {module.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs" style={{ color: palette.textMuted }}>
        Numbers reflect a single participant. Update your practice time to see how much value you keep unlocking across the certification.
      </p>
    </GlowCard>
  );
}

function Slider({ label, min, max, step, value, onChange, suffix }) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  const { palette } = useTheme();
  return (
    <label htmlFor={id} className="block">
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs" style={{ color: palette.textSecondary }}>{label}</div>
        <div className="text-xs font-semibold" style={{ color: palette.textPrimary }}>{suffix}</div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: palette.accentPrimary }}
      />
    </label>
  );
}

function Stat({ label, value, hint, emphasis = false }) {
  const { palette } = useTheme();
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        border: `1px solid ${palette.border}`,
        background: emphasis ? `linear-gradient(135deg, ${palette.accentPrimary}22, ${palette.accentSecondary}22)` : palette.surfaceSoft,
        color: palette.textPrimary,
      }}
    >
      <div className="text-xs" style={{ color: palette.textSecondary }}>{label}</div>
      <div className="text-xl font-semibold mt-1" style={{ color: emphasis ? palette.accentPrimary : palette.textPrimary }}>{value}</div>
      {hint && (
        <div className="text-[0.65rem] mt-2 uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
          {hint}
        </div>
      )}
    </div>
  );
}

// Calendar helpers
function toGoogleDateRange(startISO, endISO) { const fmt = (d) => new Date(d).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); return `${fmt(startISO)}/${fmt(endISO)}`; }
function googleCalUrl({ title, startISO, endISO, details = "", location = "Online" }) { const base = "https://www.google.com/calendar/render?action=TEMPLATE"; const params = new URLSearchParams({ text: title, dates: toGoogleDateRange(startISO, endISO), details, location }); return `${base}&${params.toString()}`; }

// Decorative interactive graphics
function Orbits() {
  const { palette } = useTheme();
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full animate-[spin_40s_linear_infinite]"
        style={{ border: `1px dashed ${palette.accentPrimary}33` }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[24rem] w-[24rem] rounded-full animate-[spin_60s_linear_infinite_reverse]"
        style={{ border: `1px dashed ${palette.accentSecondary}33` }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[12rem] w-[12rem] rounded-full animate-[spin_90s_linear_infinite]"
        style={{ border: `1px dashed ${palette.accentTertiary}33` }}
      />
    </div>
  );
}
function Sparkles() {
  const { palette } = useTheme();
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {Array.from({length:16}).map((_,i)=> (
        <span key={i} className="absolute h-1 w-1 rounded-full" style={{
          background:i%3?palette.accentPrimary:palette.accentSecondary, opacity:0.6,
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
  const [openModule, setOpenModule] = useState("intro");
  const [heroGlow, setHeroGlow] = useState({ x: 0.5, y: 0.5 });
  const [heroActive, setHeroActive] = useState(false);
  const [siteGlow, setSiteGlow] = useState({ x: 0.5, y: 0.5 });
  const [siteActive, setSiteActive] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    try {
      return localStorage.getItem("sc_theme_pref") || "light";
    } catch {
      return "light";
    }
  });

  const heroTitleRef = useRef(null);
  const siteTitleRef = useRef(null);

  const sessions = useMemo(() => SESSIONS, []);
  const { d, h, m, s, expired } = useCountdown(INTRO_START_ISO);
  const palette = useMemo(() => getPalette(theme), [theme]);
  const heroHighlights = useMemo(
    () => [
      {
        icon: "🛠️",
        title: "Custom GPT built for you",
        sub: "We configure it live using your brief and assets.",
      },
      {
        icon: "🚀",
        title: "Automation ready to ship",
        sub: "Leave with one workflow already mapped and tested.",
      },
      {
        icon: "🎯",
        title: "Prompt kits that deliver",
        sub: "Business and creative prompts packaged for results.",
      },
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      try { localStorage.setItem("sc_theme_pref", theme); } catch {}
    }
    document.body.style.background = palette.simpleBackground;
    document.body.style.color = palette.textPrimary;
  }, [theme, palette]);

  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";
  const themeOverrides = useMemo(() => {
    if (theme !== "light") return "";
    return `
      .theme-light [class*="text-white"] { color: ${palette.textPrimary} !important; }
      .theme-light [class*="text-white/90"] { color: ${palette.textPrimary} !important; }
      .theme-light [class*="text-white/80"] { color: ${palette.textSecondary} !important; }
      .theme-light [class*="text-white/70"] { color: ${palette.textSecondary} !important; }
      .theme-light [class*="text-white/60"] { color: ${palette.textMuted} !important; }
      .theme-light [class*="text-white/50"] { color: ${palette.textMuted} !important; }
      .theme-light [class*="text-white/40"] { color: ${palette.textMuted} !important; }
      .theme-light [class*="bg-white/5"] { background: ${palette.surfaceSoft} !important; }
      .theme-light [class*="bg-white/10"] { background: ${palette.surfaceSoft} !important; }
      .theme-light [class*="bg-[#0B0B1A]"] { background: ${palette.surfaceSoft} !important; }
      .theme-light [class*="border-white/10"] { border-color: ${palette.border} !important; }
      .theme-light [class*="border-[#C8A145]/20"] { border-color: ${palette.border} !important; }
      .theme-light [class*="shadow-[0_0_0_1px_rgba(200,161,69,0.15)_inset]"] { box-shadow: inset 0 0 0 1px ${palette.border} !important; }
    `;
  }, [theme, palette]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const updateGlow = useCallback((event, ref, setter) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    setter({ x, y });
  }, []);

  const heroTitleStyle = useMemo(() => {
    if (!heroActive) {
      return { color: palette.textPrimary, transition: "color 160ms ease" };
    }
    return {
      backgroundImage: `radial-gradient(180px circle at ${heroGlow.x * 100}% ${heroGlow.y * 100}%, ${palette.accentSecondary}, transparent), linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: `0 0 24px ${palette.accentGlow}`,
      transition: "background-position 120ms ease",
    };
  }, [heroActive, heroGlow, palette]);

  const siteTitleStyle = useMemo(() => {
    if (!siteActive) {
      return { color: palette.textPrimary, transition: "color 160ms ease" };
    }
    return {
      backgroundImage: `radial-gradient(140px circle at ${siteGlow.x * 100}% ${siteGlow.y * 100}%, ${palette.accentSecondary}, transparent), linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: `0 0 18px ${palette.accentGlow}`,
      transition: "background-position 120ms ease",
    };
  }, [siteActive, siteGlow, palette]);

  function openForm() { setModalOpen(true); }
  function revealPaidAndGoCurriculum() {
    setShowPaid(true);
    try { localStorage.setItem("sc_paid_reveal", "1"); } catch {}
    setTab("curriculum");
    setOpenModule("s2");
    requestAnimationFrame(() => document.getElementById("curriculum-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <ThemeProvider theme={theme} palette={palette}>
      <main
        className={`min-h-screen ${themeClass}`}
        style={{
          background: palette.background,
          color: palette.textPrimary,
          transition: "background 300ms ease, color 300ms ease",
        }}
      >
        {themeOverrides && <style>{themeOverrides}</style>}
      {/* Ambient royal glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[70vh] w-[90vw]" style={{background:"radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)"}} />
        <div className="absolute bottom-0 right-0 h-80 w-80" style={{background:"radial-gradient(circle at center, rgba(200,161,69,0.12), transparent 60%)"}} />
      </div>

      {/* Top bar */}
      <header
        className="sticky top-0 z-40 backdrop-blur"
        style={{
          background: palette.headerBg,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <Section className="py-3 flex items-center justify-between gap-4">
          <button
            ref={siteTitleRef}
            type="button"
            onClick={() => window.location.reload()}
            onMouseMove={(event) => {
              setSiteActive(true);
              updateGlow(event, siteTitleRef, setSiteGlow);
            }}
            onMouseLeave={() => {
              setSiteActive(false);
              setSiteGlow({ x: 0.5, y: 0.5 });
            }}
            className="text-base md:text-lg font-semibold tracking-tight"
            style={{
              ...siteTitleStyle,
            }}
          >
            Starterclass · ICUNI
          </button>
          <div className="flex flex-wrap items-center gap-3 justify-end">
            <GlassButton variant="secondary" onClick={toggleTheme} className="px-4 py-2 text-sm">
              {theme === "dark" ? (
                <>
                  <span aria-hidden="true">🌞</span>
                  <span>Bright mode</span>
                </>
              ) : (
                <>
                  <span aria-hidden="true">🌙</span>
                  <span>Dark mode</span>
                </>
              )}
            </GlassButton>
            <GlassButton onClick={openForm}>Book {INTRO_NAME}</GlassButton>
            <GlassButton variant="secondary" onClick={revealPaidAndGoCurriculum} className="px-5 py-3">
              Explore the full track
            </GlassButton>
          </div>
        </Section>
      </header>

      {/* HERO: copy + pie + countdown + calendar + subtle orbits */}
      <Section className="pt-12 md:pt-20">
        <GlowCard className="overflow-hidden p-8 md:p-10 relative">
          <Orbits />
          <Sparkles />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge>Live on 8 Nov · 90 minutes</Badge>
              <h1
                ref={heroTitleRef}
                className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.04]"
                style={heroTitleStyle}
                onMouseMove={(event) => {
                  setHeroActive(true);
                  updateGlow(event, heroTitleRef, setHeroGlow);
                }}
                onMouseLeave={() => {
                  setHeroActive(false);
                  setHeroGlow({ x: 0.5, y: 0.5 });
                }}
              >
                Make AI work like a teammate
              </h1>
              <p className="mt-4 text-lg max-w-2xl" style={{ color: palette.textSecondary }}>
                Customise your workspace, wire a private GPT, and sharpen prompts that deliver while the interface stays calm enough for deep focus.
              </p>
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {heroHighlights.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border p-4 text-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      borderColor: palette.border,
                      background: palette.surfaceSoft,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${palette.accentPrimary}22, ${palette.accentSecondary}22)`,
                      }}
                    />
                    <div className="relative flex items-start gap-3">
                      <span className="text-xl" aria-hidden="true">{feature.icon}</span>
                      <div>
                        <div className="font-semibold" style={{ color: palette.textPrimary }}>
                          {feature.title}
                        </div>
                        <div className="mt-1 text-xs leading-relaxed" style={{ color: palette.textSecondary }}>
                          {feature.sub}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-sm space-y-1" style={{ color: palette.textSecondary }}>
                <div><span style={{ color: palette.textMuted }}>UK Time:</span> {formatUKRange(INTRO_START_ISO, INTRO_END_ISO)}</div>
                <div><span style={{ color: palette.textMuted }}>Your Time:</span> {formatLocalRange(INTRO_START_ISO, INTRO_END_ISO)}</div>
              </div>
              {/* Countdown */}
              <div className="mt-8">
                <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>Next session begins in</div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                  {[
                    ["Days", d],
                    ["Hours", h],
                    ["Minutes", m],
                    ["Seconds", s],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="relative overflow-hidden rounded-[1.75rem] px-5 py-6 text-center"
                      style={{
                        border: `1px solid ${palette.border}`,
                        background:
                          theme === "dark"
                            ? "linear-gradient(160deg, rgba(20,20,40,0.92), rgba(11,11,26,0.9))"
                            : `linear-gradient(160deg, ${palette.surfaceSoft}, rgba(255,255,255,0.92))`,
                        boxShadow: theme === "dark" ? "0 24px 48px rgba(5,0,45,0.45)" : palette.shadow,
                      }}
                    >
                      <div className="font-mono font-bold" style={{ fontSize: "2.8rem", color: palette.textPrimary }}>
                        {String(val).padStart(2, "0")}
                      </div>
                      <div className="mt-3 text-xs uppercase tracking-[0.32em]" style={{ color: palette.textMuted }}>{label}</div>
                    </div>
                  ))}
                </div>
                {!expired && (
                  <div className="mt-3 text-xs" style={{ color: palette.textMuted }}>
                    Reminder emails arrive 24 hours before we open the Zoom room.
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <GlassButton onClick={openForm}>Reserve your seat</GlassButton>
                <GlassButton variant="secondary" onClick={revealPaidAndGoCurriculum} className="px-5 py-3">
                  Explore the full track
                </GlassButton>
              </div>
              {/* Calendar actions */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs items-center">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold"
                  style={{
                    border: `1px solid ${palette.border}`,
                    background: palette.surfaceSoft,
                    color: palette.textPrimary,
                  }}
                  href={googleCalUrl({ title: INTRO_NAME, startISO: INTRO_START_ISO, endISO: INTRO_END_ISO, details: `${INTRO_NAME} — ICUNI Starterclass`, location: "Online (Zoom)" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to calendar
                </a>
                <span style={{ color: palette.textMuted }}>Replays unlock for full-track members.</span>
                <span className="basis-full" style={{ color: palette.textMuted }}>
                  Completing the registration form automatically schedules this first session in your calendar.
                </span>
              </div>
            </div>
            <div>
              <PieBlock />
            </div>
          </div>
        </GlowCard>
      </Section>

      {/* Tabs */}
      <Section className="mt-12">
        <div
          className="flex items-center gap-2 p-1 rounded-2xl w-fit"
          style={{
            border: `1px solid ${palette.border}`,
            background: palette.surfaceSoft,
          }}
        >
          {[
            { k: "overview", t: "Overview" },
            { k: "curriculum", t: "Curriculum" },
            { k: "faq", t: "FAQ" },
          ].map(({ k, t }) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition"
              style={{
                background: tab === k ? `linear-gradient(135deg, ${palette.accentPrimary}33, ${palette.accentSecondary}33)` : "transparent",
                color: tab === k ? palette.textPrimary : palette.textSecondary,
                border: tab === k ? `1px solid ${palette.border}` : "1px solid transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="mt-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <GlowCard className="p-6">
                <h3 className="text-xl font-semibold">What you’ll gain in {INTRO_NAME}</h3>
                <ul className="mt-3 space-y-2 leading-relaxed list-disc pl-5" style={{ color: palette.textSecondary }}>
                  <li>One custom GPT wired to your workflow</li>
                  <li>A fully functional project that ships outcomes fast</li>
                  <li>Prompt recipes that score in business and creative briefs</li>
                </ul>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    ["Live experience", "90 focused minutes with guided customisation."],
                    ["Replay", "Available for full-track members after the broadcast."],
                    ["Bring your work", "Apply lessons to your real brief during the session."],
                  ].map(([h, p], i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-4 transition"
                      style={{
                        border: `1px solid ${palette.border}`,
                        background: palette.surfaceSoft,
                      }}
                    >
                      <div className="text-sm font-medium" style={{ color: palette.textPrimary }}>{h}</div>
                      <div className="text-xs mt-1" style={{ color: palette.textSecondary }}>{p}</div>
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
                  {sessions.filter((s) => s.track !== "break").slice(0, 4).map((s) => (
                    <li key={s.k} className="flex items-start gap-3">
                      <span className="w-32 text-sm" style={{ color: palette.textMuted }}>{s.date}</span>
                      <div>
                        <div className="text-xs" style={{ color: palette.textMuted }}>UK: {formatUKRange(s.start, s.end)}</div>
                        <div className="text-xs" style={{ color: palette.textMuted }}>Your: {formatLocalRange(s.start, s.end)}</div>
                        <div className="font-medium" style={{ color: palette.textPrimary }}>{s.title}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setTab("curriculum")}
                  className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4"
                  style={{ color: palette.accentSecondary }}
                >
                  <span aria-hidden="true">🗓️</span>
                  <span>View full schedule</span>
                </button>
              </GlowCard>

              <GlowCard className="p-6">
                <div className="flex flex-wrap gap-3">
                  <GlassButton onClick={openForm}>Book {INTRO_NAME}</GlassButton>
                  <GlassButton variant="secondary" onClick={revealPaidAndGoCurriculum} className="px-5 py-3">
                    Explore more
                  </GlassButton>
                </div>
              </GlowCard>
            </div>
          </div>
        )}

        {/* Curriculum */}
        {tab === "curriculum" && (
          <div id="curriculum-anchor" className="mt-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              {sessions.map((s) => {
                if (s.track === "break") {
                  return (
                    <div
                      key={s.k}
                      className="rounded-3xl p-5 text-sm"
                      style={{ border: `1px dashed ${palette.border}`, color: palette.textSecondary }}
                    >
                      <div className="font-semibold" style={{ color: palette.textPrimary }}>Season break</div>
                      <div>Reset week to consolidate builds before we rejoin for the final modules.</div>
                    </div>
                  );
                }
                const open = openModule === s.k;
                return (
                  <div
                    key={s.k}
                    className="rounded-3xl transition-all"
                    style={{
                      border: `1px solid ${palette.border}`,
                      background: open ? palette.surface : palette.surfaceSoft,
                      boxShadow: open ? palette.shadow : "none",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenModule(open ? "" : s.k)}
                      className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    >
                      <div className="flex-1 pr-4">
                        <div className="font-semibold text-base" style={{ color: palette.textPrimary }}>{s.title}</div>
                        <div className="mt-1 text-sm" style={{ color: palette.textSecondary }}>{s.desc}</div>
                      </div>
                      <div className="hidden md:flex flex-col items-end gap-1" style={{ color: palette.textMuted }}>
                        <span className="text-sm">{s.date}</span>
                        <span className="text-xs">{formatUKRange(s.start, s.end)}</span>
                      </div>
                      <span
                        className="text-xl font-semibold"
                        style={{ color: palette.textPrimary, transition: "transform 200ms ease" }}
                      >
                        {open ? "–" : "＋"}
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 space-y-4 text-sm" style={{ color: palette.textSecondary }}>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="rounded-2xl p-3" style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft }}>
                            <div className="text-xs" style={{ color: palette.textMuted }}>Date</div>
                            <div className="font-semibold" style={{ color: palette.textPrimary }}>{s.date}</div>
                            <div className="text-xs mt-1" style={{ color: palette.textMuted }}>UK: {formatUKRange(s.start, s.end)}</div>
                            <div className="text-xs" style={{ color: palette.textMuted }}>Your: {formatLocalRange(s.start, s.end)}</div>
                          </div>
                          <div className="rounded-2xl p-3" style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft }}>
                            <div className="text-xs" style={{ color: palette.textMuted }}>Focus</div>
                            <div className="font-semibold" style={{ color: palette.textPrimary }}>{s.desc}</div>
                          </div>
                          <div className="rounded-2xl p-3" style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft }}>
                            <div className="text-xs" style={{ color: palette.textMuted }}>Outcome</div>
                            <div className="font-semibold" style={{ color: palette.textPrimary }}>{s.outcome}</div>
                          </div>
                        </div>
                        <ModuleOutline segments={s.outline} />
                        <div className="flex flex-wrap gap-3">
                          <GlassButton
                            variant="secondary"
                            onClick={() => window.open(googleCalUrl({ title: s.title, startISO: s.start, endISO: s.end, details: `${s.title} — ICUNI Starterclass`, location: "Online (Zoom)" }), "_blank")}
                            className="px-5 py-2"
                          >
                            Add to calendar
                          </GlassButton>
                          {s.track === "intro" ? (
                            <GlassButton onClick={() => setModalOpen(true)} className="px-5 py-2">
                              Reserve seat
                            </GlassButton>
                          ) : showPaid ? (
                            <GlassButton onClick={() => setModalOpen(true)} className="px-5 py-2">
                              Join track
                            </GlassButton>
                          ) : (
                            <GlassButton onClick={revealPaidAndGoCurriculum} className="px-5 py-2">
                              Unlock modules
                            </GlassButton>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-4 space-y-6">
              {showPaid ? (
                <ClientValueCalculator />
              ) : (
                <GlowCard className="p-6">
                  <h3 className="text-xl font-semibold">Start with {INTRO_NAME}</h3>
                  <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                    Customisation, Projects, GPTs, and prompts build your base. Unlock the remaining modules when you are ready for the full certification path.
                  </p>
                  <GlassButton onClick={openForm} className="mt-4">
                    Reserve your seat
                  </GlassButton>
                </GlowCard>
              )}
              <GlowCard className="p-6">
                <Badge>Accredited</Badge>
                <h3 className="mt-3 text-lg font-semibold">Certificate with CPD credits</h3>
                <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                  Complete all 10 modules and earn the ICUNI Starterclass certificate with Continuing Professional Development points to evidence your automation leadership.
                </p>
              </GlowCard>
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
          <div
            className="absolute inset-0 backdrop-blur"
            style={{ background: theme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)" }}
            onClick={() => setModalOpen(false)}
          />
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            style={{ border: `1px solid ${palette.border}`, background: palette.surface }}
          >
            <div
              className="px-4 md:px-6 py-4 flex items-center justify-between"
              style={{ borderBottom: `1px solid ${palette.border}`, color: palette.textPrimary }}
            >
              <div className="font-semibold">Register — {INTRO_NAME}</div>
              <button onClick={() => setModalOpen(false)} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
            </div>
            <div className="aspect-[16/12] md:aspect-[16/9] w-full">
              <iframe title="Starterclass Registration" src={GOOGLE_FORM_URL_EMBED} className="h-full w-full" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
            <div className="px-4 md:px-6 py-3 text-xs" style={{ color: palette.textMuted, borderTop: `1px solid ${palette.border}` }}>
              Replays are available to full-track registrants. Submitting this form auto-schedules the first session in your calendar and emails the prep materials.
            </div>
          </div>
        </div>
      )}

      <BackToTop />

      {/* Footer with populated policies */}
      <footer className="mt-24 mb-16">
        <Section>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm" style={{ color: palette.textMuted }}>
            <div>© {new Date().getFullYear()} ICUNI — Starterclass</div>
            <div className="flex gap-4">
              <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#terms" onClick={(e)=>{e.preventDefault(); setShowTerms(true);}}>Terms</a>
              <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#privacy" onClick={(e)=>{e.preventDefault(); setShowPrivacy(true);}}>Privacy</a>
              <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#contact" onClick={(e)=>{e.preventDefault(); setShowContact(true);}}>Contact</a>
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
          <div className="text-sm space-y-2">
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
    </ThemeProvider>
  );
}

window.StarterclassLuxuryV8 = StarterclassLuxuryV8;

function PieBlock() {
  const topics = PIE_TOPICS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = topics[activeIndex] ?? topics[0];
  const { palette } = useTheme();

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
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ color: palette.textPrimary }}>
            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>{active?.key}</div>
            <div className="mt-2 text-lg font-semibold leading-snug">{active?.headline}</div>
            <div className="mt-2 text-xs leading-relaxed max-w-[220px]" style={{ color: palette.textSecondary }}>{active?.desc}</div>
            <div className="mt-3 text-[0.65rem] uppercase tracking-[0.36em]" style={{ color: palette.textMuted }}>{Math.round(active?.value)}% of session focus</div>
          </div>
        </div>
        <div
          className="rounded-2xl p-5 space-y-3"
          style={{
            border: `1px solid ${palette.border}`,
            background: palette.surfaceSoft,
            color: palette.textPrimary,
          }}
        >
          <div className="text-xs uppercase tracking-[0.32em]" style={{ color: palette.textMuted }}>Outcome</div>
          <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>{active?.outcome}</div>
          <div className="rounded-2xl p-3" style={{ border: `1px solid ${palette.border}`, background: palette.surface }}>
            <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>Toolkit highlight</div>
            <div className="mt-2 text-sm" style={{ color: palette.textSecondary }}>{active?.toolkit}</div>
          </div>
          <div className="text-xs" style={{ color: palette.textMuted }}>
            Focus detail: {active?.desc}
          </div>
        </div>
      </div>
      <style>{`@keyframes pieRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`}</style>
    </div>
  );
}

function ModuleOutline({ segments = [] }) {
  const fallback = useMemo(
    () => [
      { key: "Overview", value: 1, desc: "Module outline preview.", color: "#C8A145" },
    ],
    []
  );
  const outline = segments && segments.length ? segments : fallback;
  const [focus, setFocus] = useState(0);
  const { palette } = useTheme();

  useEffect(() => {
    if (!outline.length) return undefined;
    const id = setInterval(() => {
      setFocus((prev) => (prev + 1) % outline.length);
    }, 8000);
    return () => clearInterval(id);
  }, [outline.length]);

  const active = outline[focus] ?? outline[0];
  const total = outline.reduce((sum, seg) => sum + (seg.value || 0), 0) || 1;
  const share = Math.round(((active?.value || 0) / total) * 100);

  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="relative w-full max-w-[240px] mx-auto">
        <div className="relative">
          <Pie topics={outline} activeIndex={focus} onSelect={setFocus} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ color: palette.textPrimary }}
        >
          <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>{share}%</div>
          <div className="mt-1 text-sm font-semibold">{active?.key}</div>
        </div>
      </div>
      <div className="space-y-3">
        {outline.map((seg, idx) => (
          <button
            key={seg.key}
            type="button"
            onMouseEnter={() => setFocus(idx)}
            onFocus={() => setFocus(idx)}
            className="w-full rounded-2xl p-3 text-left transition"
            style={{
              border: `1px solid ${palette.border}`,
              background: idx === focus ? palette.surface : palette.surfaceSoft,
              color: palette.textPrimary,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full" style={{ background: seg.color }} />
              <div className="font-semibold text-sm">{seg.key}</div>
              <div className="ml-auto text-xs" style={{ color: palette.textMuted }}>
                {Math.round(((seg.value || 0) / total) * 100)}%
              </div>
            </div>
            <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>{seg.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PolicyModal({ title, onClose, children }) {
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div
        className="absolute inset-0 backdrop-blur"
        style={{ background: isDark ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)" }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{
          border: `1px solid ${palette.border}`,
          background: palette.surface,
          color: palette.textPrimary,
        }}
      >
        <div
          className="px-4 md:px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${palette.border}` }}
        >
          <div className="font-semibold">{title}</div>
          <button onClick={onClose} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
        </div>
        <div className="p-6 space-y-3" style={{ color: palette.textSecondary }}>{children}</div>
      </div>
    </div>
  );
}
