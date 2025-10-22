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
const INTRO_START_ISO = "2025-11-15T11:00:00Z"; // Sat 15 Nov 2025 11:00 UK (UTC)
const INTRO_END_ISO = "2025-11-15T12:30:00Z";
const EARLY_BIRD_DEADLINE_ISO = "2025-11-15T12:30:00Z";

// Sessions (UK times in UTC). Titles updated per request.
const SESSIONS = [
  {
    k: "intro",
    month: "nov",
    title: INTRO_NAME,
    date: "Sat 15 Nov 2025",
    start: "2025-11-15T11:00:00Z",
    end: "2025-11-15T12:30:00Z",
    desc: "Customisation deep dives across Projects, GPTs, and prompts that deliver.",
    outcome: "Leave with one custom GPT, a fully functional project, and prompt flows tuned for business and creative briefs.",
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
    month: "nov",
    title: "Canvas Deep Dive · Codex Foundations",
    date: "Sat 22 Nov 2025",
    start: "2025-11-22T11:00:00Z",
    end: "2025-11-22T12:30:00Z",
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
    month: "nov",
    title: "Projects & GPTs Immersion",
    date: "Sat 29 Nov 2025",
    start: "2025-11-29T11:00:00Z",
    end: "2025-11-29T12:30:00Z",
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
    month: "dec",
    title: "ChatGPT Agents 1 — Prompts, Processes, Internal Tools",
    date: "Sat 06 Dec 2025",
    start: "2025-12-06T11:00:00Z",
    end: "2025-12-06T12:30:00Z",
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
    month: "dec",
    title: "ChatGPT Agents 2 — Systems",
    date: "Sat 13 Dec 2025",
    start: "2025-12-13T11:00:00Z",
    end: "2025-12-13T12:30:00Z",
    desc: "Add agents to existing systems through a storytelling automation case study.",
    outcome: "Brief to beats to script pipeline and image generation workflow.",
    track: "paid",
    outline: [
      { key: "Systems design", value: 33, desc: "Map dependencies and orchestrate data flows.", color: "#C8A145" },
      { key: "Story pipeline", value: 34, desc: "Turn briefs into beats, scripts, and creative assets.", color: "#8B5CF6" },
      { key: "Image workflow", value: 33, desc: "Prompt, select, and polish visuals with guardrails.", color: "#3B5CCC" },
    ],
  },
  {
    k: "s6",
    month: "dec",
    title: "Introduction to Agent Builders — Security and Safety",
    date: "Sat 20 Dec 2025",
    start: "2025-12-20T11:00:00Z",
    end: "2025-12-20T12:30:00Z",
    desc: "Credit budgeting, scopes and keys, audit trails, and a live AgentKit build under guardrails.",
    outcome: "Ship a secured AgentKit agent while setting budgets, scopes, keys, and safety guardrails.",
    track: "paid",
    outline: [
      { key: "Safeguard planning", value: 28, desc: "Budgets, scopes, and approvals that protect usage.", color: "#10B981" },
      { key: "Live AgentKit build", value: 36, desc: "Wire tools, memory, and review loops for a first agent.", color: "#3B5CCC" },
      { key: "Monitoring & drills", value: 36, desc: "Dashboards, audit trails, and rollback rehearsals.", color: "#C8A145" },
    ],
  },
  { k: "break", month: "dec", title: "Winter break", date: "—", start: "", end: "", desc: "—", outcome: "—", track: "break" },
  {
    k: "s8",
    month: "jan",
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
    month: "jan",
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
    month: "jan",
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

const MONTH_BUNDLES = [
  { key: "nov", label: "November build month", priceUSD: 100, modules: ["intro", "s2", "s3"] },
  { key: "dec", label: "December systems month", priceUSD: 100, modules: ["s4", "s5", "s6"] },
  { key: "jan", label: "January launch month", priceUSD: 100, modules: ["s8", "s9", "s10"] },
];

const CURRENCIES = {
  USD: { symbol: "$", rate: 1, label: "USD" },
  GBP: { symbol: "£", rate: 0.82, label: "GBP" },
  GHS: { symbol: "₵", rate: 13.1, label: "GHS" },
};

const HERO_HIGHLIGHTS = [
  {
    icon: "🗂️",
    title: "Projects with your voice",
    sub: "Say what you need once. We shape a Project so every request routes itself with your tone and priorities.",
  },
  {
    icon: "🛠️",
    title: "Mini-build ready to share",
    sub: "Describe the vibe. Leave with a working microsite or automation you can hand to clients or teammates.",
  },
  {
    icon: "🔑",
    title: "Prompt kit that unlocks answers",
    sub: "Learn the exact phrasing that gets business, creative, and personal wins without guesswork.",
  },
];

const OVERVIEW_WINS = [
  {
    key: "workspace",
    label: "Workspace wired",
    headline: "Project dashboard ready before you log off.",
    detail: "We guide you through structuring a ChatGPT Project with guardrails and hand-off notes.",
  },
  {
    key: "gpt",
    label: "Private GPT configured",
    headline: "Your assistant remembers context and files.",
    detail: "Collect knowledge packs, set tone-of-voice, and add the right tools during the live build.",
  },
  {
    key: "prompts",
    label: "Prompt kit shipped",
    headline: "Reusable prompt flows tuned for business and creative briefs.",
    detail: "Every attendee leaves with test scripts, scorecards, and a prompt kit that keeps delivering.",
  },
];

const FULL_TRACK_OUTCOMES = [
  "Build private GPT assistants that plug into your live processes.",
  "Package automations with error handling, approvals, and reporting.",
  "Ship a cross-tool AI system by the end of January with team-ready docs.",
  "Collect CPD points and a completion certificate once all 10 modules are done.",
];

const FAQ_ITEMS = [
  {
    question: "Do I need the Full Track to start?",
    answer:
      "No. The Starterclass is designed as a complete win on its own. When you’re ready for more, add the November, December, or January modules month by month.",
  },
  {
    question: "Will there be a replay?",
    answer:
      "Starterclass replays and annotated resources unlock for Full Track participants. Live attendance gives you the Q&A, and upgrading keeps everything on-demand.",
  },
  {
    question: "Is the Starterclass really free?",
    answer:
      "Yes. The Starterclass costs $0. You only pay if you continue into the Full Track months after the live experience. No card is collected for the Starterclass.",
  },
  {
    question: "Do I need to code?",
    answer:
      "No. Everything is built with visual tooling. Optional code snippets are explained in plain language for non-technical professionals.",
  },
  {
    question: "Who is the Starterclass best suited for?",
    answer:
      "Business leaders, consultants, freelancers, and operators who want to put AI to work quickly without hiring a developer.",
  },
  {
    question: "Can I join just one month of the Full Track?",
    answer:
      "Yes. Each month is priced separately so you can focus on the modules that match your goals—pay for November, January, or both.",
  },
  {
    question: "What tools will we touch?",
    answer:
      "The Starterclass uses ChatGPT Projects and Custom GPTs. Later modules add N8N, AgentKit, and other no-code platforms, with guided walkthroughs.",
  },
  {
    question: "How do I add the session to my calendar?",
    answer:
      "Submit the registration form and tap the calendar button. We’ll also send a confirmation email with the event details.",
  },
  {
    question: "Will I get support after the Starterclass?",
    answer:
      "You’ll receive follow-up resources and a prompt kit. Full Track participants also get office hours and build clinics.",
  },
  {
    question: "Can I expense this through my company?",
    answer:
      "Yes. We issue invoices and receipts with CPD details so you can expense or reclaim professional development budgets.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I finally organised my family’s care calendar with a GPT that speaks like me. It’s saving arguments and last-minute scrambles every week.",
    name: "Hannah L.",
    role: "Producer & parent of three",
    win: "Family admin now lives in a shared GPT workspace",
  },
  {
    quote:
      "The Starterclass gave me language I could use with therapy clients. I now walk them through weekly reflections powered by the prompt kit we built together.",
    name: "Daniel M.",
    role: "Therapist",
    win: "Sessions include AI-guided check-ins clients actually finish",
  },
  {
    quote:
      "I’m in the middle of a career change and the automation demo became my pitch. I booked two coffee chats and a contract within a fortnight.",
    name: "Riya S.",
    role: "Strategy consultant pivoting to ops",
    win: "Used the workflow map to secure new-role interviews",
  },
  {
    quote:
      "I sell handmade pieces online. The prompts we built now draft listings and customer replies in minutes. I finally have evenings back.",
    name: "Kwesi A.",
    role: "Founder, home goods studio",
    win: "Freed up 5 hours a week on customer messaging",
  },
  {
    quote:
      "I help couples plan weddings. The private GPT keeps track of tone, budget, and preferences so planning calls stay calm and fun.",
    name: "Marta G.",
    role: "Relationship-focused event planner",
    win: "Introduced AI planning to 6 active clients without friction",
  },
  {
    quote:
      "Sales used to mean late-night follow-ups. Now the automation we sketched sends warm check-ins and reminders—my pipeline finally feels human again.",
    name: "Luis P.",
    role: "SaaS account executive",
    win: "Personalised follow-ups converted two dormant deals",
  },
  {
    quote:
      "I brought the Starterclass back to my creative writing group. We now use the prompt kit to unblock drafts without losing our voices.",
    name: "Jess T.",
    role: "Screenwriter",
    win: "Weekly drafts ready with less stress and more joy",
  },
  {
    quote:
      "My partner and I were stuck arguing about wedding plans. The private GPT we built now tracks decisions and tone so we talk things through before emotions boil over.",
    name: "Amara J.",
    role: "Producer balancing a long-distance engagement",
    win: "Shared reflection prompts diffused the relationship drama",
  },
  {
    quote:
      "I used the automation walkthrough to map my job hunt. Two weeks later I presented the workflow in interviews and moved from hospitality into a sales ops role.",
    name: "Omar N.",
    role: "Career changer pivoting into tech",
    win: "Live-built automation became the centrepiece of my portfolio",
  },
];

const SOCIAL_PROOF_LOGOS = [
  {
    name: "Allied Media",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http://www.w3.org/2000/svg'%20width%3D'160'%20height%3D'48'%20viewBox%3D'0%200%20160%2048'%3E%3Crect%20width%3D'160'%20height%3D'48'%20rx%3D'16'%20fill%3D'%23E9E3FF'/%3E%3Ctext%20x%3D'80'%20y%3D'30'%20text-anchor%3D'middle'%20fill%3D'%233B2E66'%20font-family%3D'Inter,%20Arial'%20font-size%3D'16'%3EAllied%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Studio North",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http://www.w3.org/2000/svg'%20width%3D'160'%20height%3D'48'%20viewBox%3D'0%200%20160%2048'%3E%3Crect%20width%3D'160'%20height%3D'48'%20rx%3D'16'%20fill%3D'%23FCEFD6'/%3E%3Ctext%20x%3D'80'%20y%3D'30'%20text-anchor%3D'middle'%20fill%3D'%23452D18'%20font-family%3D'Inter,%20Arial'%20font-size%3D'16'%3ENorth%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Brightline Ops",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http://www.w3.org/2000/svg'%20width%3D'160'%20height%3D'48'%20viewBox%3D'0%200%20160%2048'%3E%3Crect%20width%3D'160'%20height%3D'48'%20rx%3D'16'%20fill%3D'%23E2F7FF'/%3E%3Ctext%20x%3D'80'%20y%3D'30'%20text-anchor%3D'middle'%20fill%3D'%23224455'%20font-family%3D'Inter,%20Arial'%20font-size%3D'16'%3EOPS%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Orbital Films",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http://www.w3.org/2000/svg'%20width%3D'160'%20height%3D'48'%20viewBox%3D'0%200%20160%2048'%3E%3Crect%20width%3D'160'%20height%3D'48'%20rx%3D'16'%20fill%3D'%23EDE9FF'/%3E%3Ctext%20x%3D'80'%20y%3D'30'%20text-anchor%3D'middle'%20fill%3D'%23331F66'%20font-family%3D'Inter,%20Arial'%20font-size%3D'16'%3EOrbital%3C/text%3E%3C/svg%3E",
  },
];

const TRUST_BADGES = [
  { label: "CPD-accredited pathway", icon: "🎓" },
  { label: "Trusted by 50+ professionals", icon: "🤝" },
];

const CERTIFICATE_POINTS = [
  {
    key: "evidence",
    title: "We track the work",
    detail: "Attendance, live builds, and deployment reviews feed the CPD audit trail.",
  },
  {
    key: "recognition",
    title: "Recognised credits",
    detail: "Use the certificate for professional reviews, appraisals, or continuing education reports.",
  },
  {
    key: "community",
    title: "Keep building",
    detail: "Finish every module to unlock alumni-only build clinics and private workflows.",
  },
];

const CERTIFICATE_IMAGE =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22500%22%20height%3D%22320%22%20viewBox%3D%220%200%20500%20320%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23140C2A%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%232D1745%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22border%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23F6C978%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%238B5CF6%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22shine%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.45%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22500%22%20height%3D%22320%22%20rx%3D%2236%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20x%3D%2220%22%20y%3D%2220%22%20width%3D%22460%22%20height%3D%22280%22%20rx%3D%2228%22%20fill%3D%22rgba%2820%2C12%2C42%2C0.55%29%22%20stroke%3D%22url%28%23border%29%22%20stroke-width%3D%222%22/%3E%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22428%22%20height%3D%22248%22%20rx%3D%2220%22%20fill%3D%22%23FCFBFF%22%20opacity%3D%220.92%22/%3E%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22428%22%20height%3D%22248%22%20rx%3D%2220%22%20fill%3D%22url%28%23shine%29%22/%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22110%22%20text-anchor%3D%22middle%22%20fill%3D%22%232B1F4F%22%20font-family%3D%22%27Playfair%20Display%27%2C%20serif%22%20font-size%3D%2232%22%20letter-spacing%3D%221%22%3ECertificate%20of%20Mastery%3C/text%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22140%22%20text-anchor%3D%22middle%22%20fill%3D%22%235A4A80%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2215%22%3Eawarded%20for%20completing%20the%20Starterclass%20journey%3C/text%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22176%22%20text-anchor%3D%22middle%22%20fill%3D%22%232B1F4F%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2222%22%3EStarterclass%20Full%20Track%3C/text%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22210%22%20text-anchor%3D%22middle%22%20fill%3D%22%238167B5%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2213%22%3EProjects%20%E2%80%A2%20Private%20GPTs%20%E2%80%A2%20Automations%20%E2%80%A2%20Deployment%3C/text%3E%0A%20%20%3Cline%20x1%3D%22140%22%20y1%3D%22238%22%20x2%3D%22360%22%20y2%3D%22238%22%20stroke%3D%22%23D8C6FA%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%3Ctext%20x%3D%22140%22%20y%3D%22262%22%20fill%3D%22%238D7AAD%22%20font-family%3D%22%27Great%20Vibes%27%2C%20cursive%22%20font-size%3D%2222%22%3EMikael%20Gabriel%3C/text%3E%0A%20%20%3Ctext%20x%3D%22140%22%20y%3D%22280%22%20fill%3D%22%235A4A80%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2211%22%3EProgramme%20Lead%3C/text%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22262%22%20text-anchor%3D%22end%22%20fill%3D%22%238D7AAD%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2212%22%3ECertificate%20ID%3A%20SC-2025%3C/text%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22280%22%20text-anchor%3D%22end%22%20fill%3D%22%235A4A80%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2210%22%3EIssued%20digitally%20with%20verification%20link%3C/text%3E%0A%20%20%3Cg%20transform%3D%22translate%28388%2078%29%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2242%22%20cy%3D%2242%22%20r%3D%2242%22%20fill%3D%22url%28%23border%29%22%20opacity%3D%220.25%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2242%22%20cy%3D%2242%22%20r%3D%2234%22%20fill%3D%22%23F7F3FF%22%20stroke%3D%22%23DEC48A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2242%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20fill%3D%22%236B4FA3%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2214%22%20font-weight%3D%22600%22%3ECPD%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2242%22%20y%3D%2266%22%20text-anchor%3D%22middle%22%20fill%3D%22%23A07FD8%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%229%22%3EACCREDITED%3C/text%3E%0A%20%20%3C/g%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20fill%3D%22%237058A3%22%20font-family%3D%22%27Inter%27%2C%20Arial%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%3EStarterclass%20by%20ICUNI%3C/text%3E%0A%3C/svg%3E";

const ANNOUNCEMENT_KEYS = ["live", "countdown", "earlybird"];

// Royal interactive PIE colours
const PIE_TOPICS = [
  {
    key: "Projects & Personality",
    value: 36,
    desc: "One-word briefs become action steps when your workspace mirrors your tone and priorities.",
    headline: "Say it once, your workspace runs with it",
    outcome: "A personality-rich Project board that routes every request and keeps context ready.",
    toolkit: "Reusable board template, tone sliders, and follow-up automations.",
    color: "#C8A145",
  },
  {
    key: "Vibe Coding Basics",
    value: 32,
    desc: "Describe the experience you want and watch AI scaffold a microsite or automation in real time.",
    headline: "Tell the vibe, ship a working mini-build",
    outcome: "A guided build that outputs a shareable mini-app or workflow blueprint.",
    toolkit: "Code handoff, automation blueprint, and safety checklist.",
    color: "#3B5CCC",
  },
  {
    key: "Prompt Like a Pro",
    value: 32,
    desc: "Prompt loops demystified for business, creative, and personal wins without jargon.",
    headline: "Know exactly what to say for results",
    outcome: "Prompt frameworks for sales, stories, decisions, and daily productivity.",
    toolkit: "Prompt cards, feedback loops, and guardrail heuristics.",
    color: "#8B5CF6",
  },
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

function GlassButton({ children, onClick, className = "", variant = "primary", type = "button", ...rest }) {
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
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition shadow-lg ${className}`}
      style={{
        ...styles,
        boxShadow: palette.buttonShadow,
      }}
      {...rest}
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
function formatCurrencyValue(amountUSD, currencyCode) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const formatter = new Intl.NumberFormat('en', { style: 'currency', currency: currency.label, minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return formatter.format(amountUSD * currency.rate);
}

function track(eventName, detail = {}) {
  if (typeof window === 'undefined') return;
  const payload = { event: eventName, detail, timestamp: new Date().toISOString() };
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
  if (typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
  }
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
  const cx = 200;
  const cy = 180;
  const r = 160;
  const titleId = useMemo(() => `pie-title-${Math.random().toString(36).slice(2, 7)}`, []);
  const descId = `${titleId}-desc`;
  const description = topics.map((t) => `${t.key} ${Math.round((t.value / total) * 100)}%`).join(", ");
  return (
    <svg
      viewBox="0 0 400 360"
      className="w-full h-full"
      role="img"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <title id={titleId}>Module focus chart</title>
      <desc id={descId}>{description}</desc>
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
            onFocus={() => onSelect(idx)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(idx);
              }
            }}
            tabIndex={0}
            role="listitem"
            aria-label={`${t.key}: ${Math.round((t.value / total) * 100)} percent`}
          />
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r={96}
        style={{
          fill: isDark ? "#0B0B1A" : palette.surfaceSoft,
          stroke: isDark ? "rgba(255,255,255,0.1)" : palette.border,
        }}
      />
    </svg>
  );
}

// Client Value Calculator focused on a single participant
function ClientValueCalculator({ currency, formatCurrency, onIntro, onFull, onExplore }) {
  const { palette } = useTheme();
  const [hours, setHours] = useState(2);
  const [focus, setFocus] = useState("foundation");

  const focusOptions = [
    { key: "foundation", label: "Foundation", icon: "🧱" },
    { key: "build", label: "Build workflows", icon: "🛠️" },
    { key: "scale", label: "Scale delivery", icon: "📈" },
  ];

  const results = useMemo(() => {
    const price = (months) => formatCurrency(100 * months, currency);
    return {
      intro_solo: {
        badge: "Start here",
        title: "Reserve the Starterclass",
        summary: "Lock in the 90-minute build sprint and collect the Project, private GPT, and prompt kit.",
        detail: "Ideal when you’re testing the waters or can’t commit beyond November just yet. Complete the form above to lock your spot and receive the calendar invite.",
        cta: "Reserve your seat",
        action: () => onIntro?.(),
        secondary: { label: `See the Full Track (${price(3)})`, action: () => onExplore?.({ months: 3 }) },
        focusNotes: {
          foundation: "Start with the Starterclass to get your workspace wired without extra commitments.",
          build: "Book the Starterclass, then decide if you want November once you feel the build rhythm.",
          scale: "Use the Starterclass to scope value; upgrade later if you need deeper delivery support.",
        },
      },
      intro_plus_nov: {
        badge: "November focus",
        title: `Starterclass + November for ${price(1)}`,
        summary: "Keep momentum after the Starterclass with Canvas, Projects, and GPT labs paced for one person.",
        detail: "You’ll spread tuition across November with zero payments due until then. Submit the Starterclass form now and we’ll follow up with the November enrollment steps.",
        cta: "Hold my November seat",
        action: () => onFull?.({ months: 1, plan: "november" }),
        secondary: { label: "Reserve the free Starterclass first", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Adds the November labs to cement the fundamentals you learn in the Starterclass.",
          build: "Gives you four straight Saturdays to get workflows production-ready.",
          scale: "Start with November before adding the heavier automation blocks.",
        },
      },
      two_month_arc: {
        badge: "Systems ready",
        title: `November + December for ${price(2)}`,
        summary: "Add safety, orchestration, and platform depth before the January launch push.",
        detail: "Payments split across November and January — December is tuition-free. Complete the registration form to reserve this two-month arc.",
        cta: "Join the two-month arc",
        action: () => onFull?.({ months: 2, plan: "november_december" }),
        secondary: { label: "Reserve Starterclass access", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Graduate from fundamentals into agent safety and orchestration.",
          build: "Balance hands-on builds with system architecture before January.",
          scale: "Use December’s systems focus to prep for team rollout.",
        },
      },
      full_track_focus: {
        badge: "Full Track",
        title: `Full Track for ${price(3)}`,
        summary: "January adds live AgentKit and N8N builds so you deploy a working automation.",
        detail: `Pay ${price(1)} in November, pause in December, and settle the final ${price(1)} in January. Submit the form and we’ll send the full-track agreement within 24 hours.`,
        cta: "Get the Full Track",
        action: () => onFull?.({ months: 3, plan: "full_track" }),
        secondary: { label: "Book the Starterclass seat", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Ready for the full build marathon with guided support through January.",
          build: "Best when you want the automation shipped before February.",
          scale: "Keeps you accountable through to deployment and reporting.",
        },
      },
      full_track_builder: {
        badge: "Builder pace",
        title: `Full Track + accountability (${price(3)})`,
        summary: "Use office hours, labs, and peer critique to ship an end-to-end agent system.",
        detail: "You’ll stay accountable through January and graduate with the CPD certificate. Completing the form lets us schedule a quick intake to tune the track for you.",
        cta: "Commit to the Full Track",
        action: () => onFull?.({ months: 3, plan: "full_track_accountability", intensive: true }),
        secondary: { label: "Reserve the Starterclass", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Adds accountability so you never lose momentum after the Starterclass.",
          build: "Pairs every module with labs to stress-test your automations.",
          scale: "Designed if you’re monetising or rolling AI into a team offer quickly.",
        },
      },
    };
  }, [currency, formatCurrency, onFull, onIntro, onExplore]);

  const resultKey = useMemo(() => {
    if (hours <= 1) {
      return focus === "foundation" ? "intro_solo" : "intro_plus_nov";
    }
    if (hours <= 2) {
      return focus === "foundation" ? "intro_plus_nov" : "two_month_arc";
    }
    if (hours <= 3) {
      return focus === "scale" ? "full_track_focus" : "two_month_arc";
    }
    if (hours <= 4) {
      return focus === "scale" ? "full_track_focus" : "two_month_arc";
    }
    if (hours <= 5) {
      return focus === "scale" ? "full_track_focus" : "full_track_builder";
    }
    return "full_track_builder";
  }, [hours, focus]);

  const result = results[resultKey];
  const focusExplainer = result?.focusNotes?.[focus];

  return (
    <GlowCard className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Client Value Calculator</h3>
          <p className="mt-1 text-sm" style={{ color: palette.textSecondary }}>
            Set the weekly time you can invest and choose your focus. One recommendation appears so you know where to start.
          </p>
          <p className="mt-1 text-xs" style={{ color: palette.textMuted }} id="cvc-helper">
            Tip: Hover the icons to see what each focus means. Slider updates announce changes for screen readers.
          </p>
        </div>
        <Badge>Solo participant</Badge>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs" style={{ color: palette.textMuted }}>
            <span>Weekly focus hours</span>
            <span>{hours}h / week</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
            className="w-full accent-current"
            style={{ accentColor: palette.accentPrimary }}
            id="cvc-hours"
            aria-describedby="cvc-helper"
            aria-valuemin={1}
            aria-valuemax={6}
            aria-valuenow={hours}
            aria-valuetext={`${hours} hour${hours === 1 ? "" : "s"} per week`}
          />
          <div className="flex justify-between text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: palette.textMuted }}>
            <span>1h</span>
            <span>3h</span>
            <span>6h</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {focusOptions.map((option) => {
            const active = focus === option.key;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => setFocus(option.key)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold transition"
                style={{
                  border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                  background: active ? `linear-gradient(135deg, ${palette.accentPrimary}33, ${palette.accentSecondary}33)` : palette.surfaceSoft,
                  color: active ? palette.textPrimary : palette.textSecondary,
                }}
                aria-pressed={active}
                aria-describedby={`focus-tooltip-${option.key}`}
                title={option.label}
              >
                <span className="block text-lg" aria-hidden="true">{option.icon}</span>
                {option.label}
                <span id={`focus-tooltip-${option.key}`} className="sr-only">
                  {results[resultKey].focusNotes?.[option.key] || `Focus on ${option.label}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {focusExplainer && (
        <div className="rounded-2xl border px-4 py-3 text-xs" style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}>
          {focusExplainer}
        </div>
      )}

      <div
        className="rounded-2xl p-5 space-y-3"
        style={{ border: `1px solid ${palette.border}`, background: palette.surface }}
        aria-live="polite"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]" style={{ color: palette.textMuted }}>
          <span className="inline-flex h-2 w-2 rounded-full" style={{ background: palette.accentPrimary }} />
          {result.badge}
        </div>
        <div className="text-lg font-semibold" style={{ color: palette.textPrimary }}>
          {result.title}
        </div>
        <p className="text-sm" style={{ color: palette.textSecondary }}>{result.summary}</p>
        <p className="text-xs" style={{ color: palette.textMuted }}>{result.detail}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <GlassButton onClick={result.action} className="px-5 py-3 text-sm" aria-label={result.cta}>
            {result.cta}
          </GlassButton>
          {result.secondary && (
            <button
              type="button"
              onClick={result.secondary.action}
              className="text-xs underline underline-offset-4"
              style={{ color: palette.textSecondary }}
            >
              {result.secondary.label}
            </button>
          )}
        </div>
      </div>
    </GlowCard>
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
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showPaid, setShowPaid] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem("sc_paid_reveal") === "1";
    } catch {
      return false;
    }
  });
  const [activeModule, setActiveModule] = useState("intro");
  const [heroGlowPoint, setHeroGlowPoint] = useState({ x: 0.5, y: 0.5 });
  const [isHeroGlowActive, setIsHeroGlowActive] = useState(false);
  const [siteGlowPoint, setSiteGlowPoint] = useState({ x: 0.5, y: 0.5 });
  const [isSiteGlowActive, setIsSiteGlowActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    try {
      return localStorage.getItem("sc_theme_pref") || "light";
    } catch {
      return "light";
    }
  });
  const [currency, setCurrency] = useState(() => {
    if (typeof window === "undefined") return "USD";
    try {
      return localStorage.getItem("sc_currency") || "USD";
    } catch {
      return "USD";
    }
  });
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [overviewFocus, setOverviewFocus] = useState("workspace");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stickyDismissed, setStickyDismissed] = useState(false);
  const [stickyMinimized, setStickyMinimized] = useState(false);
  const [openFaq, setOpenFaq] = useState(FAQ_ITEMS[0]?.question || "");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [fullTrackExpanded, setFullTrackExpanded] = useState(false);
  const [certificateFocus, setCertificateFocus] = useState(CERTIFICATE_POINTS[0]?.key || "evidence");

  const heroHeadlineGlowRef = useRef(null);
  const siteLabelGlowRef = useRef(null);
  const fullTrackSectionAnchorRef = useRef(null);
  const fullTrackPrimaryCtaRef = useRef(null);

  const sessions = useMemo(() => SESSIONS, []);
  const monthBundles = useMemo(() => MONTH_BUNDLES, []);
  const { d, h, m, s, expired } = useCountdown(INTRO_START_ISO);
  const earlyBird = useCountdown(EARLY_BIRD_DEADLINE_ISO);
  const palette = useMemo(() => getPalette(activeTheme), [activeTheme]);
  const formatCurrency = useCallback((amountUSD, forced) => formatCurrencyValue(amountUSD, forced || currency), [currency]);
  const heroHighlights = HERO_HIGHLIGHTS;
  const announcementMessages = useMemo(() => {
    const timeMessage = d > 0 ? `Next session in ${d} day${d === 1 ? "" : "s"}` : expired ? "Doors opening now" : "Next session today";
    return [
      "Live on 15 Nov · 11:00 UK",
      timeMessage,
      "Early-bird 15% ends when the Starterclass ends",
    ];
  }, [d, expired]);
  const testimonials = TESTIMONIALS;
  const testimonial = testimonials[activeTestimonial] || testimonials[0];
  const activeCertificate = useMemo(
    () => CERTIFICATE_POINTS.find((point) => point.key === certificateFocus) || CERTIFICATE_POINTS[0],
    [certificateFocus]
  );
  const earlyBirdActive = !earlyBird.expired;
  const fullTrackTotalUSD = earlyBirdActive ? 255 : 300;
  const fullTrackMonthlyUSD = earlyBirdActive ? 85 : 100;

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("sc_theme_pref", activeTheme);
      } catch {}
      try {
        localStorage.setItem("sc_currency", currency);
      } catch {}
    }
    document.body.style.background = palette.simpleBackground;
    document.body.style.color = palette.textPrimary;
  }, [activeTheme, palette, currency]);

  useEffect(() => {
    if (!announcementMessages.length) return undefined;
    const id = setInterval(() => {
      setAnnouncementIndex((idx) => (idx + 1) % announcementMessages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [announcementMessages.length]);

  useEffect(() => {
    if (!testimonials.length) return undefined;
    const rotation = setInterval(() => {
      setActiveTestimonial((idx) => (idx + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(rotation);
  }, [testimonials.length]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const threshold = doc.scrollHeight * 0.25;
      setStickyVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!stickyVisible) {
      setStickyMinimized(false);
    }
  }, [stickyVisible]);

  useEffect(() => {
    const node = fullTrackPrimaryCtaRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    let seen = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !seen) {
          seen = true;
          track("fulltrack_cta_view", { location: "full_track_section" });
        }
      });
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [fullTrackPrimaryCtaRef]);

  const themeClass = activeTheme === "dark" ? "theme-dark" : "theme-light";
  const themeOverrides = useMemo(() => {
    if (activeTheme !== "light") return "";
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
  }, [activeTheme, palette]);

  const toggleTheme = useCallback(() => {
    setActiveTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const updateGlow = useCallback((event, ref, setter) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    setter({ x, y });
  }, []);

  const heroHeadlineStyle = useMemo(() => {
    if (!isHeroGlowActive) {
      return { color: palette.textPrimary, transition: "color 160ms ease" };
    }
    return {
      backgroundImage: `radial-gradient(180px circle at ${heroGlowPoint.x * 100}% ${heroGlowPoint.y * 100}%, ${palette.accentSecondary}, transparent), linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: `0 0 24px ${palette.accentGlow}`,
      transition: "background-position 120ms ease",
    };
  }, [isHeroGlowActive, heroGlowPoint, palette]);

  const siteLabelStyle = useMemo(() => {
    if (!isSiteGlowActive) {
      return { color: palette.textPrimary, transition: "color 160ms ease" };
    }
    return {
      backgroundImage: `radial-gradient(140px circle at ${siteGlowPoint.x * 100}% ${siteGlowPoint.y * 100}%, ${palette.accentSecondary}, transparent), linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: `0 0 18px ${palette.accentGlow}`,
      transition: "background-position 120ms ease",
    };
  }, [isSiteGlowActive, siteGlowPoint, palette]);

  const upcomingModules = useMemo(
    () => sessions.filter((s) => s.track === "paid").slice(0, 3),
    [sessions]
  );

  const upcomingSchedule = useMemo(
    () => sessions.filter((s) => s.track !== "break").slice(0, 3),
    [sessions]
  );

  const handleCurrencySwitch = useCallback((code) => {
    setCurrency(code);
  }, []);

  function triggerIntroForm(source) {
    track("intro_cta_click", { location: source });
    setModalOpen(true);
  }

  function revealPaidAndGoCurriculum(source = "hero_secondary") {
    if (!showPaid) {
      setShowPaid(true);
      try { localStorage.setItem("sc_paid_reveal", "1"); } catch {}
    }
    track("fulltrack_cta_click", { location: source, intent: "explore" });
    setTab("curriculum");
    setActiveModule("s2");
    requestAnimationFrame(() => {
      document.getElementById("curriculum-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function triggerFullTrackForm(source = "full_track", detail = {}) {
    if (!showPaid) {
      setShowPaid(true);
      try { localStorage.setItem("sc_paid_reveal", "1"); } catch {}
    }
    track("fulltrack_cta_click", { location: source, intent: "enrol", ...detail });
    setTab("curriculum");
    setFullTrackExpanded(true);
    setActiveModule("s2");
    requestAnimationFrame(() => {
      document.getElementById("full-track-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    setModalOpen(true);
  }

  function openCalendarModal(location) {
    track("calendar_modal_open", { location });
    setCalendarOpen(true);
  }

  function scrollToFullTrack() {
    setTab("curriculum");
    setFullTrackExpanded(true);
    requestAnimationFrame(() => {
      document.getElementById("full-track-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleCalendarClick(location) {
    track("calendar_add", { location });
    window.open(
      googleCalUrl({ title: INTRO_NAME, startISO: INTRO_START_ISO, endISO: INTRO_END_ISO, details: `${INTRO_NAME} — ICUNI Starterclass`, location: "Online (Zoom)" }),
      "_blank",
      "noopener"
    );
  }

  return (
    <ThemeProvider theme={activeTheme} palette={palette}>
      <main
        className={`min-h-screen ${themeClass}`}
        style={{
          background: palette.background,
          color: palette.textPrimary,
          transition: "background 300ms ease, color 300ms ease",
        }}
      >
        {themeOverrides && <style>{themeOverrides}</style>}

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[70vh] w-[90vw]" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 h-80 w-80" style={{ background: "radial-gradient(circle at center, rgba(200,161,69,0.12), transparent 60%)" }} />
        </div>

        <header
          className="sticky top-0 z-40 backdrop-blur"
          style={{
            background: palette.headerBg,
            borderBottom: `1px solid ${palette.border}`,
          }}
        >
          <Section className="py-3 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-4 flex-1 min-w-[220px]">
                <button
                  ref={siteLabelGlowRef}
                  type="button"
                  onClick={() => window.location.reload()}
                  onMouseMove={(event) => {
                    setIsSiteGlowActive(true);
                    updateGlow(event, siteLabelGlowRef, setSiteGlowPoint);
                  }}
                  onMouseLeave={() => {
                    setIsSiteGlowActive(false);
                    setSiteGlowPoint({ x: 0.5, y: 0.5 });
                  }}
                  className="text-base md:text-lg font-semibold tracking-tight"
                  style={siteLabelStyle}
                >
                  Starterclass · ICUNI
                </button>
              </div>
              <div className="order-3 md:order-none w-full md:w-auto flex justify-center">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full border p-2 text-xl"
                  style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                  aria-label={activeTheme === "dark" ? "Switch to bright mode" : "Switch to dark mode"}
                >
                  {activeTheme === "dark" ? "☀️" : "🌙"}
                </button>
              </div>
              <div className="ml-auto hidden md:flex items-center text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.textSecondary }}>
                Free Starterclass · 90 minutes
              </div>
            </div>
            <div
              className="text-xs uppercase tracking-[0.28em]"
              style={{ color: palette.textMuted }}
            >
              {announcementMessages[announcementIndex]}
            </div>
          </Section>
        </header>

        <Section className="pt-10 pb-16">
          <GlowCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${palette.accentPrimary}33, ${palette.accentSecondary}33)`,
                    border: `1px solid ${palette.border}`,
                    color: palette.textPrimary,
                  }}
                >
                  <span aria-hidden="true">🎟️</span>
                  Free 90-min AI Starterclass
                </div>
                <div className="mt-3">
                  <Badge>Starterclass · no payment required</Badge>
                </div>
                <h1
                  ref={heroHeadlineGlowRef}
                  className="mt-4 text-3xl md:text-5xl font-bold tracking-tight"
                  style={heroHeadlineStyle}
                  onMouseMove={(event) => {
                    setIsHeroGlowActive(true);
                    updateGlow(event, heroHeadlineGlowRef, setHeroGlowPoint);
                  }}
                  onMouseLeave={() => {
                    setIsHeroGlowActive(false);
                    setHeroGlowPoint({ x: 0.5, y: 0.5 });
                  }}
                >
                  Make AI work like a teammate
                </h1>
                <p className="mt-4 text-lg max-w-2xl" style={{ color: palette.textSecondary }}>
                  In 90 minutes we’ll set up your workspace, bring a private GPT online, and send you prompt kits you can use the same afternoon.
                </p>
                <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                  {heroAudienceLine}
                </p>
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {heroHighlights.map((feature) => (
                    <div
                      key={feature.title}
                      className="group relative overflow-hidden rounded-2xl border p-4 text-sm transition-transform duration-200 hover:-translate-y-1"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ background: `linear-gradient(135deg, ${palette.accentPrimary}22, ${palette.accentSecondary}22)` }}
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
                </div>
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
                            activeTheme === "dark"
                              ? "linear-gradient(160deg, rgba(20,20,40,0.92), rgba(11,11,26,0.9))"
                              : `linear-gradient(160deg, ${palette.surfaceSoft}, rgba(255,255,255,0.92))`,
                          boxShadow: activeTheme === "dark" ? "0 24px 48px rgba(5,0,45,0.45)" : palette.shadow,
                        }}
                      >
                        <div className="font-mono font-bold" style={{ fontSize: "2.4rem", color: palette.textPrimary }}>
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
                  <GlassButton onClick={() => triggerIntroForm("hero_primary")}>Reserve your seat</GlassButton>
                  <GlassButton variant="secondary" onClick={() => revealPaidAndGoCurriculum("hero_secondary")} className="px-5 py-3">
                    Explore the full track
                  </GlassButton>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs items-center">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold"
                    style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft, color: palette.textPrimary }}
                    onClick={() => openCalendarModal("hero_button")}
                  >
                    Add to calendar
                  </button>
                  <span style={{ color: palette.textMuted }}>Replays unlock for Full Track participants.</span>
                  <span className="basis-full" style={{ color: palette.textMuted }}>
                    Submit the registration form so we can email the invite and reminder.
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs" style={{ color: palette.textSecondary }}>
                  {TRUST_BADGES.map((badge) => (
                    <span
                      key={badge.label}
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                    >
                      <span aria-hidden="true">{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleNavClick("#reviews")}
                  className="mt-3 text-xs underline underline-offset-4"
                  style={{ color: palette.accentSecondary }}
                >
                  Read attendee reviews
                </button>
              </div>
              <div>
                <PieBlock />
              </div>
            </div>
          </GlowCard>
        </Section>

        <Section className="pb-20" id="overview-tab">
          <div
            className="flex items-center gap-2 p-1 rounded-2xl w-fit"
            style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft }}
          >
            {[
              { k: "overview", t: "Overview" },
              { k: "curriculum", t: "Curriculum" },
              { k: "faq", t: "FAQ" },
            ].map(({ k, t }) => (
              <button
                key={k}
                onClick={() => {
                  if (k === "curriculum") {
                    revealPaidAndGoCurriculum("tab_switch");
                  } else {
                    setTab(k);
                  }
                }}
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

          {tab === "overview" && (
            <div className="mt-8 space-y-8">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-6">
                  <GlowCard className="p-6 space-y-5">
                    <h3 className="text-xl font-semibold">What this Starterclass unlocks</h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {OVERVIEW_WINS.map((win) => {
                        const isActive = overviewFocus === win.key;
                        return (
                          <button
                            key={win.key}
                            type="button"
                            onClick={() => setOverviewFocus(win.key)}
                            className="rounded-2xl p-4 text-left transition"
                            style={{
                              border: `1px solid ${isActive ? palette.accentPrimary : palette.border}`,
                              background: isActive ? `linear-gradient(135deg, ${palette.accentPrimary}22, ${palette.accentSecondary}22)` : palette.surfaceSoft,
                              color: palette.textPrimary,
                            }}
                          >
                            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>{win.label}</div>
                            <div className="mt-2 text-sm font-semibold">{win.headline}</div>
                            <div className="mt-2 text-xs" style={{ color: palette.textSecondary }}>{win.detail}</div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                      <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Thinking ahead</div>
                      <div className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                        The Starterclass counts toward the full track. When you’re ready, add the monthly bundles from {formatCurrency(85)} with the early-bird or {formatCurrency(100)} after.
                      </div>
                    </div>
                  </GlowCard>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <GlowCard className="p-6">
                    <h3 className="text-xl font-semibold">Next live times</h3>
                    <div className="mt-3 space-y-3">
                      {upcomingSchedule.map((s) => {
                        const isStarterclassSlot = s.track === "intro";
                        const badgeLabel = isStarterclassSlot ? "Free Starterclass" : "Full Track";
                        const handleSlotClick = () => {
                          if (isStarterclassSlot) {
                            triggerIntroForm("next_live_schedule");
                          } else {
                            revealPaidAndGoCurriculum("next_live_schedule");
                          }
                        };
                        return (
                          <button
                            key={s.k}
                            type="button"
                            onClick={handleSlotClick}
                            className="w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus:-translate-y-0.5"
                            style={{
                              borderColor: palette.border,
                              background: palette.surfaceSoft,
                              color: palette.textPrimary,
                            }}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs" style={{ color: palette.textMuted }}>
                              <span className="font-semibold text-sm" style={{ color: palette.textPrimary }}>
                                {s.date}
                              </span>
                              <span
                                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5"
                                style={{
                                  border: `1px solid ${palette.border}`,
                                  background: palette.surface,
                                  color: isStarterclassSlot ? palette.accentPrimary : palette.accentSecondary,
                                }}
                              >
                                {badgeLabel}
                              </span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4 text-xs" style={{ color: palette.textMuted }}>
                              <span>UK: {formatUKRange(s.start, s.end)}</span>
                              <span>Your: {formatLocalRange(s.start, s.end)}</span>
                            </div>
                            <div className="mt-2 text-sm font-semibold" style={{ color: palette.textPrimary }}>
                              {s.title}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-4 text-xs" style={{ color: palette.textMuted }}>
                      Ready for more after the Starterclass? Explore the curriculum tab to see how the Full Track expands these builds.
                    </div>
                  </GlowCard>
                  {showPaid && (
                    <GlowCard className="p-6" id="value-calculator">
                      <ClientValueCalculator
                        currency={currency}
                        formatCurrency={formatCurrency}
                        onIntro={() => triggerIntroForm("cvc_intro")}
                        onFull={(detail) => triggerFullTrackForm("cvc_full", detail || {})}
                        onExplore={() => revealPaidAndGoCurriculum("cvc_explore")}
                      />
                    </GlowCard>
                  )}
                </div>
              </div>
              <GlowCard className="p-6 space-y-4" id="instructor">
                <h3 className="text-xl font-semibold">Meet your instructor</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-sm" style={{ color: palette.textSecondary }}>
                    <p>
                      <strong style={{ color: palette.textPrimary }}>Mikael Gabriel</strong> — AI nerd & consultant guiding teams into everyday AI since 2021.
                    </p>
                    <p>
                      I live in the tools we’ll use: ChatGPT Projects, Custom GPTs, Claude, Midjourney, Leonardo, and the quieter frontier models. My work spans automations, marketing ops, production pipelines, and the systems that keep them running.
                    </p>
                    <p>
                      The Starterclass keeps things human. We build live, we document plainly, and we make sure you leave with assets you can actually use.
                    </p>
                    <div className="aspect-video overflow-hidden rounded-2xl border" style={{ borderColor: palette.border }}>
                      <iframe
                        title="Meet the instructor"
                        src="https://www.youtube.com/embed/ke4bYVQjRBE"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 text-sm" style={{ color: palette.textSecondary }}>
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Snapshot</div>
                      <ul className="mt-2 space-y-2 list-disc pl-5">
                        <li><strong style={{ color: palette.textPrimary }}>50+ professionals onboarded</strong> into daily AI use across strategy, media, and product teams.</li>
                        <li><strong style={{ color: palette.textPrimary }}>Global Executive MBA (AI specialisation)</strong> in progress; certified in Microsoft Azure AI Fundamentals.</li>
                        <li><strong style={{ color: palette.textPrimary }}>Client wins:</strong> media networks, independent studios, and consultancies delivering AI services.</li>
                        <li><strong style={{ color: palette.textPrimary }}>No-code systems builder</strong> — this site, its automations, and support workflows are all AI-powered.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Philosophy</div>
                      <ol className="mt-2 space-y-2 list-decimal pl-5">
                        <li>Keep humans in control — AI supports, it doesn’t replace.</li>
                        <li>Build visibly so teams can trust the workflows they inherit.</li>
                        <li>Ship outcomes: working GPTs, automations, and prompt kits you can deploy immediately.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          )}

          {tab === "curriculum" && (
            <div className="mt-10 space-y-8" id="curriculum-anchor">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Full track by month</h3>
                <div
                  className="flex rounded-full border"
                  style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                >
                  {Object.entries(CURRENCIES).map(([code, meta]) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => handleCurrencySwitch(code)}
                      className={`px-3 py-2 text-sm transition ${currency === code ? "font-semibold" : ""}`}
                      style={{
                        color: currency === code ? palette.textPrimary : palette.textSecondary,
                        background: currency === code ? `linear-gradient(135deg, ${palette.accentPrimary}33, ${palette.accentSecondary}33)` : "transparent",
                        borderRadius: "9999px",
                      }}
                      aria-label={`Show pricing in ${meta.label}`}
                    >
                      {meta.symbol}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                  {monthBundles.map((bundle) => {
                    const filtered = sessions.filter((s) => s.month === bundle.key && s.track !== "break");
                    const monthPrice = earlyBirdActive ? Math.round(bundle.priceUSD * 0.85) : bundle.priceUSD;
                    const monthLabel = `${bundle.label} · ${formatCurrency(monthPrice)}`;
                    return (
                    <div key={bundle.key} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{monthLabel}</h3>
                        <div className="text-xs" style={{ color: palette.textMuted }}>Weekly cadence · pay per month</div>
                      </div>
                      <div className="space-y-4">
                        {filtered.map((module) => {
                          const open = activeModule === module.k;
                          return (
                            <div key={module.k} className="rounded-3xl border" style={{ borderColor: palette.border, background: palette.surface }}>
                              <button
                                type="button"
                                className="w-full px-5 py-4 flex items-start gap-4 text-left"
                                onClick={() => setActiveModule((prev) => (prev === module.k ? "" : module.k))}
                              >
                                <div className="flex-1">
                                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>{module.date}</div>
                                  <div className="mt-1 font-semibold" style={{ color: palette.textPrimary }}>{module.title}</div>
                                  <div className="mt-1 text-sm" style={{ color: palette.textSecondary }}>{module.desc}</div>
                                </div>
                                <div className="text-xs" style={{ color: palette.textMuted }}>{formatUKRange(module.start, module.end)}</div>
                                <div className="ml-auto text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                                  {open ? "–" : "+"}
                                </div>
                              </button>
                              {open && (
                                <div className="px-5 pb-5">
                                  <ModuleOutlineChart segments={module.outline} />
                                  <div className="mt-4 rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                                    <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>What you accomplish</div>
                                    <div className="mt-2 text-sm" style={{ color: palette.textSecondary }}>{module.outcome}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                        {bundle.key === "dec" && (
                          <div className="rounded-3xl border p-5 text-sm" style={{ borderColor: palette.border, color: palette.textSecondary, background: palette.surfaceSoft }}>
                            Winter break: pause to refine builds before January resumes.
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <GlowCard className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold">Monthly investment</h3>
                    <ul className="space-y-3 text-sm" style={{ color: palette.textSecondary }}>
                      {monthBundles.map((bundle) => (
                        <li key={bundle.key} className="flex items-center justify-between">
                          <span>{bundle.label}</span>
                          <span style={{ color: palette.textPrimary }}>
                            {formatCurrency(earlyBirdActive ? Math.round(bundle.priceUSD * 0.85) : bundle.priceUSD)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs" style={{ color: palette.textMuted }}>
                      {earlyBirdActive
                        ? "15% early-bird active until the Starterclass ends"
                        : "Early-bird wrapped · standard tuition applies"}
                    </div>
                  </GlowCard>
                  <GlowCard className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Early-bird status</h3>
                    <div className="text-sm" style={{ color: palette.textSecondary }}>
                      {earlyBirdActive
                        ? `Secure the discount within ${earlyBird.d}d ${String(earlyBird.h).padStart(2, "0")}h ${String(earlyBird.m).padStart(2, "0")}m.`
                        : "The Starterclass window closed the early-bird. Tuition reverts to $300 equivalent."}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs" style={{ color: palette.textMuted }}>
                      <span>Pay per month in your chosen currency.</span>
                      <span>No payments collected in December.</span>
                    </div>
                  </GlowCard>
                </div>
              </div>
              <div className="space-y-8" id="full-track-panel" ref={fullTrackSectionAnchorRef}>
                <GlowCard className="p-6 md:p-8">
                  <details
                    open={fullTrackExpanded}
                    onToggle={(event) => setFullTrackExpanded(event.currentTarget.open)}
                    className="space-y-5"
                  >
                    <summary className="flex flex-wrap items-center justify-between gap-2 cursor-pointer">
                      <h3 className="text-2xl font-semibold">Full Track enrolment</h3>
                      <span className="text-xs" style={{ color: palette.textMuted }}>
                        {fullTrackExpanded ? "Hide details" : "Tap to view tuition & enrol"}
                      </span>
                    </summary>
                    <div className="space-y-5 pt-2">
                      <div className="space-y-2 text-sm" style={{ color: palette.textSecondary }}>
                        <p>
                          {formatCurrency(fullTrackTotalUSD)} total · pay {formatCurrency(fullTrackMonthlyUSD)} per month across November, December, and January.
                        </p>
                        <span className="text-xs" style={{ color: palette.textMuted }}>
                          {earlyBirdActive
                            ? `Early-bird window closes in ${earlyBird.d}d ${String(earlyBird.h).padStart(2, "0")}h ${String(earlyBird.m).padStart(2, "0")}m`
                            : "Early-bird window closed"}
                        </span>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {FULL_TRACK_OUTCOMES.map((item) => (
                          <li key={item} className="rounded-2xl border p-4 text-sm" style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <div ref={fullTrackPrimaryCtaRef}>
                          <GlassButton
                            onClick={() => triggerFullTrackForm("full_track_section", { plan: "full_track" })}
                            className="px-6 py-3"
                          >
                            Get the Full Track
                          </GlassButton>
                        </div>
                        <button
                          type="button"
                          onClick={() => triggerIntroForm("full_track_secondary")}
                          className="text-sm underline underline-offset-4"
                          style={{ color: palette.textSecondary }}
                        >
                          Reserve the Starterclass seat first
                        </button>
                      </div>
                    </div>
                  </details>
                </GlowCard>
                <GlowCard className="p-6 md:p-8" id="certificate">
                  <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div className="rounded-3xl border overflow-hidden" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                      <img src={CERTIFICATE_IMAGE} alt="Starterclass certificate preview" className="w-full" loading="lazy" />
                    </div>
                    <div className="space-y-4 text-sm" style={{ color: palette.textSecondary }}>
                      <p>
                        Complete every module and we issue an ICUNI certificate with CPD points. Every live build, submission, and deployment review feeds the evidence we file on your behalf.
                      </p>
                      <div className="grid gap-3">
                        {CERTIFICATE_POINTS.map((point) => {
                          const active = point.key === activeCertificate.key;
                          return (
                            <button
                              key={point.key}
                              type="button"
                              onMouseEnter={() => setCertificateFocus(point.key)}
                              onFocus={() => setCertificateFocus(point.key)}
                              onClick={() => setCertificateFocus(point.key)}
                              className="rounded-2xl border p-4 text-left transition"
                              style={{
                                borderColor: palette.border,
                                background: active ? palette.surface : palette.surfaceSoft,
                                color: palette.textPrimary,
                              }}
                            >
                              <div className="font-semibold text-sm">{point.title}</div>
                              <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>
                                {point.detail}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="rounded-2xl border p-4 text-xs" style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}>
                        <span style={{ color: palette.textPrimary, fontWeight: 600 }}>Current focus:</span> {activeCertificate.title}
                        <div className="mt-1">{activeCertificate.detail}</div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          )}

        {tab === "faq" && (
          <div className="mt-8 grid md:grid-cols-2 gap-4" id="faq">
            {FAQ_ITEMS.map((item) => {
              const expanded = openFaq === item.question;
              const panelId = `faq-panel-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <GlowCard key={item.question} className="p-0" aria-expanded={expanded}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq((prev) => (prev === item.question ? "" : item.question))}
                    className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left"
                    aria-controls={panelId}
                    aria-expanded={expanded}
                    style={{ color: palette.textPrimary }}
                  >
                    <span className="text-sm font-semibold">{item.question}</span>
                    <span aria-hidden="true" className="text-xl" style={{ color: palette.textSecondary }}>
                      {expanded ? "–" : "+"}
                    </span>
                  </button>
                  {expanded && (
                    <div id={panelId} className="px-6 pb-6 text-sm" style={{ color: palette.textSecondary }}>
                      {item.answer}
                    </div>
                  )}
                </GlowCard>
              );
            })}
          </div>
        )}
        </Section>

        <Section className="pb-16" id="reviews">
          <GlowCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
              <div className="space-y-5">
                <div className="text-sm uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Reviews</div>
                <blockquote
                  className="text-xl leading-relaxed"
                  style={{ color: palette.textPrimary }}
                  aria-live="polite"
                >
                  “{testimonial.quote}”
                </blockquote>
                <div className="text-sm" style={{ color: palette.textSecondary }}>
                  {testimonial.name} · {testimonial.role}
                </div>
                <div className="text-xs uppercase tracking-[0.26em]" style={{ color: palette.textMuted }}>
                  {testimonial.win}
                </div>
                <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background: index === activeTestimonial ? palette.accentPrimary : palette.border,
                        border: `1px solid ${palette.border}`,
                      }}
                      aria-label={`Show testimonial from ${item.name}`}
                      aria-pressed={index === activeTestimonial}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Trusted by teams at</div>
                  <div className="grid grid-cols-2 gap-3">
                    {SOCIAL_PROOF_LOGOS.map((logo) => (
                      <span
                        key={logo.name}
                        className="flex h-14 items-center justify-center rounded-xl border"
                        style={{ borderColor: palette.border, background: palette.surface }}
                      >
                        <img src={logo.src} alt={`${logo.name} logo`} className="max-h-8 w-auto" loading="lazy" />
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => triggerIntroForm("reviews_cta")}
                    className="text-xs underline underline-offset-4"
                    style={{ color: palette.accentSecondary }}
                  >
                    Reserve your Starterclass seat
                  </button>
                </div>
              </div>
            </div>
          </GlowCard>
        </Section>

        <Section className="pb-14">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl font-semibold">What comes after the Starterclass</h2>
              <button
                type="button"
                onClick={() => {
                  revealPaidAndGoCurriculum("track_preview");
                  scrollToFullTrack();
                }}
                className="text-sm underline underline-offset-4"
                style={{ color: palette.accentSecondary }}
              >
                Explore the full track
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {upcomingModules.map((module) => (
                <GlowCard key={module.k} className="p-4">
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Included in Full Track</div>
                  <div className="mt-2 text-sm font-semibold" style={{ color: palette.textPrimary }}>{module.title}</div>
                  <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>{module.outcome}</div>
                  <div className="mt-3 text-xs" style={{ color: palette.textMuted }}>{module.date} · {formatUKRange(module.start, module.end)}</div>
                </GlowCard>
              ))}
            </div>
          </div>
        </Section>
        <>

          <BackToTop />

          <footer className="mt-24 mb-16">
            <Section>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm" style={{ color: palette.textMuted }}>
                <div>© {new Date().getFullYear()} ICUNI — Starterclass</div>
                <div className="flex gap-4">
                  <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#terms" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms</a>
                  <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy</a>
                  <a className="underline-offset-4" style={{ color: palette.textSecondary }} href="#contact" onClick={(e) => { e.preventDefault(); setShowContact(true); }}>Contact</a>
                </div>
              </div>
            </Section>
          </footer>

          {stickyShouldRender && !stickyMinimized && (
            <div className="fixed inset-x-0 bottom-0 z-40">
              <div className="mx-auto max-w-5xl px-4 pb-6">
                <GlowCard className="px-5 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm" style={{ color: palette.textSecondary }}>
                    Reserve your seat for the Starterclass (15 Nov · 11:00 UK)
                  </div>
                  <div className="flex items-center gap-2">
                    <GlassButton onClick={() => triggerIntroForm("sticky_bar")} className="px-5 py-2 text-sm">
                      Reserve your seat
                    </GlassButton>
                    <button
                      type="button"
                      className="text-xs underline underline-offset-4"
                      style={{ color: palette.textSecondary }}
                      onClick={handleStickyMinimize}
                    >
                      Minimise
                    </button>
                    <button
                      type="button"
                      className="text-xs"
                      style={{ color: palette.textMuted }}
                      onClick={handleStickyDismiss}
                      aria-label="Dismiss reservation reminder"
                    >
                      ×
                    </button>
                  </div>
                </GlowCard>
              </div>
            </div>
          )}
          {stickyShouldRender && stickyMinimized && (
            <button
              type="button"
              className="fixed bottom-4 right-4 z-40 rounded-full px-4 py-2 text-xs font-semibold shadow-lg"
              style={{
                background: palette.accentSecondary,
                color: "white",
                boxShadow: palette.shadow,
              }}
              onClick={handleStickyRestore}
            >
              Reserve the Starterclass
            </button>
          )}

          {modalOpen && (
            <div className="fixed inset-0 z-50 grid place-items-center p-4">
              <div className="absolute inset-0 backdrop-blur" style={{ background: activeTheme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)" }} onClick={() => setModalOpen(false)} />
              <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden" style={{ border: `1px solid ${palette.border}`, background: palette.surface, color: palette.textPrimary }}>
                <div className="px-4 md:px-6 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${palette.border}` }}>
                  <div className="font-semibold">Register — {INTRO_NAME}</div>
                  <button onClick={() => setModalOpen(false)} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
                </div>
                <div className="p-6 space-y-6">
                  <div
                    className="rounded-2xl overflow-hidden border"
                    style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                  >
                    <iframe
                      src={GOOGLE_FORM_URL_EMBED}
                      title="Starterclass registration form"
                      width="100%"
                      height="680"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      style={{ width: "100%" }}
                    >
                      Loading…
                    </iframe>
                  </div>
                  <div className="space-y-3" style={{ color: palette.textSecondary }}>
                    <p className="text-sm">
                      Submit the form above to reserve your seat. When you’re done, add the session straight to your calendar.
                    </p>
                    <GlassButton
                      onClick={() => {
                        track("form_submit_success", { location: "embedded_form" });
                        openCalendarModal("registration_modal");
                      }}
                      className="px-6 py-3"
                    >
                      I’ve submitted — open the calendar
                    </GlassButton>
                    <button
                      type="button"
                      className="text-sm underline underline-offset-4"
                      style={{ color: palette.textSecondary }}
                      onClick={() => setModalOpen(false)}
                    >
                      Close window
                    </button>
                    <p className="text-xs" style={{ color: palette.textMuted }}>
                      Replays unlock for Full Track participants. You’ll receive confirmation and prep materials by email within a few minutes of submitting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {calendarOpen && (
            <CalendarModal
              onClose={() => setCalendarOpen(false)}
              onAdd={() => handleCalendarClick("registration_modal")}
            />
          )}

          {showTerms && (
            <PolicyModal title="Terms of Service" onClose={() => setShowTerms(false)}>
              <p className="text-sm" style={{ color: palette.textSecondary }}>These terms govern enrollment in the ICUNI Starterclass.</p>
              <ul className="list-disc pl-5 text-sm space-y-2 mt-3" style={{ color: palette.textSecondary }}>
                <li><span style={{ color: palette.textMuted }}>Scope:</span> The Starterclass Session provides live instruction, templates, and materials for personal or business use. Redistribution or resale is not permitted without written consent.</li>
                <li><span style={{ color: palette.textMuted }}>Payments:</span> All payments are processed via Stripe. Taxes and fees may apply per region.</li>
                <li><span style={{ color: palette.textMuted }}>Refunds:</span> Cancel up to 48 hours before the first paid session for a full refund. After that, we provide credit toward a future cohort.</li>
                <li><span style={{ color: palette.textMuted }}>Recordings & materials:</span> Starterclass replay unlocks for Full Track participants and remains accessible for 60 days after the January capstone, alongside slide decks and prompt kits.</li>
                <li><span style={{ color: palette.textMuted }}>Conduct:</span> Be respectful in live sessions and forums. Disruptive behaviour may result in removal without refund.</li>
                <li><span style={{ color: palette.textMuted }}>IP:</span> Your data remains yours. Course IP remains ICUNI’s and is licensed for your use.</li>
                <li><span style={{ color: palette.textMuted }}>Changes:</span> We may adjust dates or contents for quality or operational reasons; you’ll be notified by email.</li>
                <li><span style={{ color: palette.textMuted }}>Governing law:</span> England & Wales.</li>
              </ul>
            </PolicyModal>
          )}
          {showPrivacy && (
            <PolicyModal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
              <p className="text-sm" style={{ color: palette.textSecondary }}>We collect the minimum necessary data to run the cohort and support you.</p>
              <ul className="list-disc pl-5 text-sm space-y-2 mt-3" style={{ color: palette.textSecondary }}>
                <li><span style={{ color: palette.textMuted }}>Data collected:</span> Name, email, form responses, attendance, and homework links.</li>
                <li><span style={{ color: palette.textMuted }}>Use:</span> Enrollment, reminders, certification, and support. Optional marketing with explicit opt-in.</li>
                <li><span style={{ color: palette.textMuted }}>Processors:</span> Google (Forms/Sheets/Drive), Stripe (payments), email provider (Postmark/SendGrid). We use N8N to automate notifications.</li>
                <li><span style={{ color: palette.textMuted }}>Security:</span> Access is limited to ICUNI admins on a need-to-know basis. We use least-privilege accounts and audit access periodically.</li>
                <li><span style={{ color: palette.textMuted }}>Retention:</span> Enrollment records are retained for up to 24 months; you may request deletion anytime.</li>
                <li><span style={{ color: palette.textMuted }}>Your rights:</span> Access, correction, deletion. Email <a className="underline" href="mailto:starterclass@icuni.org">starterclass@icuni.org</a>.</li>
              </ul>
            </PolicyModal>
          )}
          {showContact && (
            <PolicyModal title="Contact" onClose={() => setShowContact(false)}>
              <div className="text-sm space-y-2" style={{ color: palette.textSecondary }}>
                <p>We reply within 2 business days.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span style={{ color: palette.textMuted }}>Enrollment & support:</span> <a className="underline" href="mailto:starterclass@icuni.org">starterclass@icuni.org</a></li>
                  <li><span style={{ color: palette.textMuted }}>Automation ops (N8N):</span> <a className="underline" href="mailto:ai@icuni.org">ai@icuni.org</a></li>
                  <li><span style={{ color: palette.textMuted }}>Receipts & reminders (no-reply):</span> no-reply@icuni.org</li>
                </ul>
                <p className="text-xs" style={{ color: palette.textMuted }}>Prefer not to email? Register via the on-page form; we’ll follow up with materials and calendar invites.</p>
              </div>
            </PolicyModal>
          )}

        </>
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
        <div className="relative mx-auto w-full max-w-[540px]">
          <div
            className="relative"
            style={{
              animation: "pieRotate 120s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            <Pie topics={topics} activeIndex={activeIndex} onSelect={setActiveIndex} />
          </div>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-8" style={{ color: palette.textPrimary }}>
            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>{active?.key}</div>
            <div className="mt-2 text-lg font-semibold leading-snug">{active?.headline}</div>
            <div className="mt-2 text-xs leading-relaxed max-w-[300px]" style={{ color: palette.textSecondary }}>{active?.desc}</div>
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

function ModuleOutlineChart({ segments = [] }) {
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

function CalendarModal({ onClose, onAdd }) {
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
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{ border: `1px solid ${palette.border}`, background: palette.surface, color: palette.textPrimary }}
      >
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${palette.border}` }}>
          <div className="font-semibold">Add Starterclass Session</div>
          <button onClick={onClose} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
        </div>
        <div className="p-6 space-y-4" style={{ color: palette.textSecondary }}>
          <p className="text-sm">Pop open your calendar now so the session is locked in.</p>
          <GlassButton onClick={onAdd} className="w-full justify-center px-6 py-3 text-sm">
            Add 15 Nov · 11:00 UK to calendar
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
  const handleNavClick = useCallback(
    (href, tabTarget) => {
      track("nav_click", { href, tabTarget: tabTarget || null });
      if (tabTarget) {
        if (tabTarget === "curriculum") {
          revealPaidAndGoCurriculum("nav_link");
        } else {
          setTab(tabTarget);
        }
      }
      requestAnimationFrame(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },
    [revealPaidAndGoCurriculum]
  );

const heroAudienceLine = "This Starterclass is free for business leaders, consultants, and curious operators—no coding required.";
  const stickyShouldRender = stickyVisible && !stickyDismissed;
  const handleStickyDismiss = useCallback(() => {
    setStickyDismissed(true);
    track("sticky_cta_dismiss", {});
  }, []);
  const handleStickyMinimize = useCallback(() => {
    setStickyMinimized(true);
    track("sticky_cta_minimize", {});
  }, []);
  const handleStickyRestore = useCallback(() => {
    setStickyMinimized(false);
    track("sticky_cta_restore", {});
  }, []);
