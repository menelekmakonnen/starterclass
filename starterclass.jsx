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

const INTRO_NAME = "Free Starterclass — Customisation, Projects & Applications";
const INTRO_START_ISO = "2025-11-15T11:00:00Z"; // Sat 15 Nov 2025 11:00 AM UK (UTC)
const INTRO_END_ISO = "2025-11-15T12:30:00Z";
const EARLY_BIRD_DEADLINE_ISO = "2025-11-15T12:30:00Z";

// Sessions (UK times in UTC) for the six-session track.
const SESSIONS = [
  {
    k: "starterclass",
    month: "nov",
    title: INTRO_NAME,
    date: "Sat 15 Nov 2025",
    start: "2025-11-15T11:00:00Z",
    end: "2025-11-15T12:30:00Z",
    desc: "Customise ChatGPT to your tone, build a vibe-coded mini project, and assemble knowledge packs with prompt flows.",
    outcome: "Leave with a persona-tuned workspace, a vibe-coded mini build, and prompt systems ready to run that afternoon.",
    track: "starterclass",
    outline: [
      {
        key: "Persona tuning",
        value: 34,
        desc: "Shape Projects so one phrase triggers the right voice and guardrails.",
        color: "#C8A145",
        headline: "Say the brief once, your workspace remembers",
        outcome: "Projects that reply in your tone with the right guardrails already in place.",
        toolkit: "Tone calibration checklist and project prompt pack.",
      },
      {
        key: "Vibe-coded sprint",
        value: 33,
        desc: "Co-build a mini app or workflow that reflects your tone and intent.",
        color: "#3B5CCC",
        headline: "Narrate the vibe, leave with a working build",
        outcome: "A vibe-coded mini app you can share with your team or clients.",
        toolkit: "Component snippets and deployment walk-through.",
      },
      {
        key: "Prompt systems",
        value: 33,
        desc: "Practise reusable prompt flows for business, creative, and personal wins.",
        color: "#8B5CF6",
        headline: "Know exactly how to ask for what you need",
        outcome: "Prompt sequences for content, decisions, and client updates.",
        toolkit: "Prompt kit, escalation cues, and QA checklist.",
      },
    ],
    hero: {
      label: "Free 90-minute AI Starterclass",
      badge: "Starterclass · no payment required",
      audience: "Free Starterclass for business leaders, consultants, and curious operators — no coding required.",
      highlights: [
        {
          icon: "🗂️",
          title: "Projects tuned to you",
          sub: "Design a Project workspace that remembers your tone, priorities, and approvals automatically.",
        },
        {
          icon: "⚡",
          title: "Vibe-coded mini build",
          sub: "Co-create a tiny AI site or tool live so you leave with a working prototype you can share.",
        },
        {
          icon: "🧠",
          title: "Prompt systems mastered",
          sub: "Practise conversational flows for business, creative, and personal wins you can run this week.",
        },
      ],
    },
  },
  {
    k: "canvas",
    month: "nov",
    title: "Canvas Deep Dive & Vibe Coding",
    date: "Sat 29 Nov 2025",
    start: "2025-11-29T11:00:00Z",
    end: "2025-11-29T12:30:00Z",
    desc: "Build and deploy AI websites or apps with vibe-coded components and live deployment confidence.",
    outcome: "Ship a vibe-coded site or mini app with instrumentation so you can iterate instantly.",
    track: "paid",
    outline: [
      {
        key: "Vibe-coding basics",
        value: 34,
        desc: "Translate tone boards into layout, prompts, and guardrails.",
        color: "#C8A145",
        headline: "Convert moodboards into working canvases",
        outcome: "A layout that matches your visual identity and narrative cues.",
        toolkit: "Design handoff worksheet and brand voice prompt starters.",
      },
      {
        key: "Components & state",
        value: 33,
        desc: "Manage sections, memory, and context like a creative system.",
        color: "#3B5CCC",
        headline: "Structure interactive sections without code",
        outcome: "Reusable component stacks with state you can tweak live.",
        toolkit: "Component inventory template and state mapping checklist.",
      },
      {
        key: "Deployment & logging",
        value: 33,
        desc: "Push live with audits, changelogs, and rollback comfort.",
        color: "#8B5CF6",
        headline: "Launch with observability baked in",
        outcome: "Logging and changelog rituals so updates stay safe.",
        toolkit: "Deployment playbook and issue triage prompts.",
      },
    ],
    hero: {
      label: "Full-course lab — Canvas & vibe coding",
      badge: "Full course · tuition applies",
      audience: "For designers, founders, and operators ready to ship branded AI experiences fast.",
      highlights: [
        {
          icon: "🎨",
          title: "Vibe-coded layout systems",
          sub: "Narrate your tone and translate it into components that actually deploy.",
        },
        {
          icon: "🧱",
          title: "Reusable component kit",
          sub: "Assemble content blocks, memory, and guardrails you can remix after class.",
        },
        {
          icon: "🚀",
          title: "Confident launch workflow",
          sub: "Deploy live with logging, audits, and rollback comfort built-in.",
        },
      ],
    },
  },
  {
    k: "agents1",
    month: "dec",
    title: "ChatGPT Agents 1 — Prompts, Processes & Systems",
    date: "Sat 13 Dec 2025",
    start: "2025-12-13T11:00:00Z",
    end: "2025-12-13T12:30:00Z",
    desc: "Integrate agents into workflows with LinkedIn, site deployment, and film production examples.",
    outcome: "An agent template that reads from data, calls tools, and hands off to you when needed.",
    track: "paid",
    outline: [
      {
        key: "Prompt systems",
        value: 34,
        desc: "Structure instructions, memory, and tone for reliable hand-offs.",
        color: "#8B5CF6",
        headline: "Blueprint prompts that never lose context",
        outcome: "A reusable prompt and memory stack tuned for your org.",
        toolkit: "Agent briefing template and prompt escalation ladder.",
      },
      {
        key: "Tool orchestration",
        value: 33,
        desc: "Link Sheets, Notion, and APIs into the agent safely.",
        color: "#3B5CCC",
        headline: "Connect data sources without breaking trust",
        outcome: "Tool call flows that log every action and fallback.",
        toolkit: "Integration matrix and safety checklist.",
      },
      {
        key: "Process design",
        value: 33,
        desc: "Design escalations, logs, and human approvals that keep quality high.",
        color: "#C8A145",
        headline: "Decide when the agent hands back control",
        outcome: "Escalation paths and review rituals to keep humans in the loop.",
        toolkit: "Runbook template and approval scripts.",
      },
    ],
    hero: {
      label: "Agent systems sprint — Prompts & processes",
      badge: "Full course · tuition applies",
      audience: "For operators formalising ChatGPT agents with governance, logs, and safe hand-offs.",
      highlights: [
        {
          icon: "🧩",
          title: "Memory + tooling glue",
          sub: "Map prompts, data, and API calls so your agent keeps context flawlessly.",
        },
        {
          icon: "🛡️",
          title: "Guardrails that scale",
          sub: "Design escalation and approval flows stakeholders will sign off.",
        },
        {
          icon: "📈",
          title: "Live operations ritual",
          sub: "Leave with a monitoring loop and human-in-the-loop rhythm.",
        },
      ],
    },
  },
  {
    k: "agents2",
    month: "dec",
    title: "ChatGPT Agents 2 — AI Short-Film Production",
    date: "Sat 27 Dec 2025",
    start: "2025-12-27T11:00:00Z",
    end: "2025-12-27T12:30:00Z",
    desc: "Master image, image-to-video, and text-to-video tools to produce a 2–4 minute AI short film.",
    outcome: "A teaser sequence for your AI short film and a repeatable creative pipeline.",
    track: "paid",
    outline: [
      {
        key: "Storyboard & shotlist",
        value: 34,
        desc: "Break narratives into beats, scenes, and production-ready prompts.",
        color: "#C8A145",
        headline: "Plot the film before you touch a tool",
        outcome: "Scene outlines and shot prompts aligned to your story arc.",
        toolkit: "Narrative beat sheet and storyboard prompt frames.",
      },
      {
        key: "Asset generation",
        value: 33,
        desc: "Create images and clips that stay on-tone across the story arc.",
        color: "#3B5CCC",
        headline: "Generate assets that stay on-tone",
        outcome: "Consistent character, lighting, and pacing across frames.",
        toolkit: "Model settings bank and look continuity checklist.",
      },
      {
        key: "Assembly & review",
        value: 33,
        desc: "Sequence, narrate, and critique the edit so it feels human.",
        color: "#8B5CF6",
        headline: "Cut, narrate, and polish like a studio",
        outcome: "A teaser sequence with audio beds, captions, and review notes.",
        toolkit: "Editorial workflow board and critique rubric.",
      },
    ],
    hero: {
      label: "Creative lab — AI short-film production",
      badge: "Full course · tuition applies",
      audience: "For storytellers and content teams crafting cinematic AI sequences end-to-end.",
      highlights: [
        {
          icon: "🎬",
          title: "Narratives that hold",
          sub: "Build story beats that translate into consistent prompts across scenes.",
        },
        {
          icon: "🖼️",
          title: "Visual continuity",
          sub: "Keep your characters, lighting, and motion aligned across every generation.",
        },
        {
          icon: "🎧",
          title: "Editorial polish",
          sub: "Assemble audio, captions, and reviews so the final cut feels human.",
        },
      ],
    },
  },
  {
    k: "n8n_deep_dive",
    month: "jan",
    title: "N8N Deep Dive — Create Your First AI Assistant",
    date: "Sat 10 Jan 2026",
    start: "2026-01-10T11:00:00Z",
    end: "2026-01-10T12:30:00Z",
    desc: "Build an autonomous assistant with branching, retries, queues, observability, and error handling.",
    outcome: "A working n8n workflow triggered from a form or webhook with retries and logging built in.",
    track: "paid",
    outline: [
      {
        key: "Workflow mapping",
        value: 34,
        desc: "Plot triggers, decisions, and payloads before you build.",
        color: "#C8A145",
        headline: "Design the assistant before it runs",
        outcome: "A visual workflow plan stakeholders can approve.",
        toolkit: "Trigger inventory and payload worksheet.",
      },
      {
        key: "Assistant build",
        value: 33,
        desc: "Wire branches, retries, and queues that keep responses reliable.",
        color: "#3B5CCC",
        headline: "Ship reliable branches and retries",
        outcome: "A resilient n8n flow with safeguards for every failure mode.",
        toolkit: "Retry pattern library and queue template.",
      },
      {
        key: "Observability",
        value: 33,
        desc: "Instrument logs, metrics, and alerts so issues surface fast.",
        color: "#8B5CF6",
        headline: "See issues before users do",
        outcome: "Dashboards and alerts that surface failures instantly.",
        toolkit: "Logging schema and alert routing map.",
      },
    ],
    hero: {
      label: "Automation lab — Build your first AI assistant",
      badge: "Full course · tuition applies",
      audience: "For ops teams and builders turning prompt ideas into dependable automations.",
      highlights: [
        {
          icon: "🗺️",
          title: "Workflow blueprints",
          sub: "Map every trigger, payload, and decision before you build.",
        },
        {
          icon: "🔁",
          title: "Reliable execution",
          sub: "Implement retries, queues, and safeguards so automations never ghost.",
        },
        {
          icon: "📊",
          title: "Observability baked in",
          sub: "Instrument logs and alerts that keep stakeholders calm.",
        },
      ],
    },
  },
  {
    k: "n8n_mastery",
    month: "jan",
    title: "N8N Mastery — Orchestrate the System",
    date: "Sat 24 Jan 2026",
    start: "2026-01-24T11:00:00Z",
    end: "2026-01-24T12:30:00Z",
    desc: "Scale your assistant into a multi-workflow system with webhooks, triggers, security, and access gates.",
    outcome: "A production-ready system with multiple n8n workflows, secure tokens, approvals, and a published output.",
    track: "paid",
    outline: [
      {
        key: "System topology",
        value: 34,
        desc: "Map multi-workflow architecture and secrets management.",
        color: "#C8A145",
        headline: "Architect the full automation stack",
        outcome: "A topology diagram covering every workflow and credential.",
        toolkit: "Topology canvas and secret rotation checklist.",
      },
      {
        key: "Auth & approvals",
        value: 33,
        desc: "Layer security, access gates, and human check-ins.",
        color: "#3B5CCC",
        headline: "Keep humans in charge",
        outcome: "Approval flows, audit logs, and escalation scripts.",
        toolkit: "Access policy templates and reviewer prompts.",
      },
      {
        key: "Capstone integration",
        value: 33,
        desc: "Launch the final tool or film with documentation and support rituals.",
        color: "#8B5CF6",
        headline: "Launch with confidence",
        outcome: "A capstone deployment backed by documentation and support loops.",
        toolkit: "Handoff checklist and go-live comms kit.",
      },
    ],
    hero: {
      label: "Automation mastery — Orchestrate the system",
      badge: "Full course · tuition applies",
      audience: "For teams scaling assistants into secure, multi-workflow operations.",
      highlights: [
        {
          icon: "🌐",
          title: "Multi-workflow architecture",
          sub: "Connect every workflow, secret, and approval in one map.",
        },
        {
          icon: "🔐",
          title: "Security rituals",
          sub: "Layer authentication, reviews, and audit logs without slowing delivery.",
        },
        {
          icon: "🏁",
          title: "Capstone launch",
          sub: "Publish your final build with documentation stakeholders trust.",
        },
      ],
    },
  },
];

const MONTH_BUNDLES = [
  { key: "nov", label: "November momentum", priceUSD: 100, modules: ["starterclass", "canvas"] },
  { key: "dec", label: "December agent systems", priceUSD: 100, modules: ["agents1", "agents2"] },
  { key: "jan", label: "January automation labs", priceUSD: 100, modules: ["n8n_deep_dive", "n8n_mastery"] },
];

const CURRENCIES = {
  USD: { symbol: "$", rate: 1, label: "USD" },
  GBP: { symbol: "£", rate: 0.82, label: "GBP" },
  GHS: { symbol: "₵", rate: 13.1, label: "GHS" },
};

const HERO_HIGHLIGHTS = [
  {
    icon: "🗂️",
    title: "Projects tuned to you",
    sub: "Design a Project workspace that remembers your tone, priorities, and approvals automatically.",
  },
  {
    icon: "⚡",
    title: "Vibe-coded mini build",
    sub: "Co-create a tiny AI site or tool live so you leave with a working prototype you can share.",
  },
  {
    icon: "🧠",
    title: "Prompt systems mastered",
    sub: "Practise conversational flows for business, creative, and personal wins you can run this week.",
  },
];

const OVERVIEW_WINS = [
  {
    key: "projects",
    label: "Design your AI project",
    headline: "Organise knowledge, tone, and guardrails into one powerful workspace.",
    detail:
      "Structure knowledge packs and instructions so a single brief delivers the results you imagined.",
  },
  {
    key: "vibecoding",
    label: "Build a real application",
    headline: "Narrate the vibe and ship a working mini-app without code.",
    detail:
      "Use vibe coding to turn your idea into a functioning prototype you can keep iterating after class.",
  },
  {
    key: "momentum",
    label: "Keep momentum",
    headline: "Leave confident to experiment on your own.",
    detail:
      "Take home prompt kits, checklists, and a working build so Monday’s experiments feel easy.",
  },
];

const FULL_TRACK_OUTCOMES = [
  "Personalised AI — calibrate ChatGPT to your brand with knowledge packs and prompt kits.",
  "Vibe-coded web & app builds — design and deploy AI sites and mini-apps in your tone.",
  "Agents for real use cases — integrate assistants into LinkedIn, sites, film, and more.",
  "Orchestrated systems — launch an autonomous n8n pipeline with security and approvals.",
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
      "We work inside ChatGPT Projects, Custom GPTs, and our vibe-coding toolkit. The full course adds shared assets for AI film production and n8n automation. Everything is demoed live with no-code interfaces.",
  },
];

const VERONICA_IDLE_EMOJIS = ["🙄", "😏", "🥱", "😌", "😴"];

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
      "Our indie film crew used the agent pipeline from December to storyboard and assemble a teaser in a single weekend.",
    name: "Jess T.",
    role: "Screenwriter & director",
    win: "Produced a vibe-coded short film sequence without renting a studio",
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

const TRUST_BADGES = [
  { label: "Six-session cohort · Nov to Jan", icon: "📆" },
  { label: "Trusted by 50+ professionals", icon: "🤝" },
];

const CERTIFICATE_POINTS = [
  {
    key: "completion",
    title: "Complete all six sessions",
    detail: "We log attendance and deliverables so your certificate reflects the full Starterclass journey.",
  },
  {
    key: "recognition",
    title: "Show your capability",
    detail: "Share the certificate with clients or employers to prove you ship vibe-coded builds and real automations.",
  },
  {
    key: "portfolio",
    title: "Bring proof to reviews",
    detail: "Your mini-app, agent system, and n8n workflows double as evidence for appraisals and performance conversations.",
  },
];

const ALTERNATIVE_FORM_ENDPOINT = "https://ainerd.app.n8n.cloud/webhook/starterclass-registration";

const ANNOUNCEMENT_KEYS = ["live", "countdown", "earlybird"];

// Royal interactive PIE colours
const PIE_TOPICS = [
  {
    key: "Projects & personality",
    value: 36,
    desc: "Shape ChatGPT Projects so one-word cues unlock the right tone, resources, and guardrails instantly.",
    headline: "Say the brief once, your workspace remembers",
    outcome: "A configured Project hub that mirrors your goals and catches every follow-up.",
    toolkit: "Knowledge pack template, tone calibration checklist, follow-up scripts.",
    color: "#C8A145",
  },
  {
    key: "Vibe coding basics",
    value: 32,
    desc: "Narrate the experience and co-build a mini site or workflow that deploys before the session ends.",
    headline: "Talk through the vibe, leave with a live build",
    outcome: "A vibe-coded prototype you can share with clients or teammates immediately.",
    toolkit: "Component library, launch steps, live demo prompts.",
    color: "#3B5CCC",
  },
  {
    key: "Prompt like a pro",
    value: 32,
    desc: "Learn prompt frameworks for business, creative, and personal wins that still feel human.",
    headline: "Know how to ask for exactly what you need",
    outcome: "Reusable prompt flows for content, decisions, and daily check-ins.",
    toolkit: "Prompt kit, review scorecards, escalation cues.",
    color: "#8B5CF6",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Utilities & Small UI
// ─────────────────────────────────────────────────────────────────────────────
function Section({ children, className = "" }) {
  return <section className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</section>;
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

function VeronicaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleRegisterLink = useCallback((event) => {
    event.preventDefault();
    if (typeof document !== "undefined") {
      const target = document.getElementById("register-free-cta");
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center",
        });
        if (typeof target.focus === "function") {
          try {
            target.focus({ preventScroll: true });
          } catch {
            target.focus();
          }
        }
        target.click();
        return;
      }
    }
    if (typeof window !== "undefined") {
      window.location.hash = "register-free-cta";
    }
  }, [prefersReducedMotion]);
  const welcomeMessage = useMemo(
    () => (
      <span>
        Hi, I&apos;m Veronica. Want the shortcut? Tap{" "}
        <a
          href="#register-free-cta"
          onClick={handleRegisterLink}
          className="font-semibold underline"
        >
          Register free
        </a>{" "}
        to lock your seat.
      </span>
    ),
    [handleRegisterLink]
  );
  const [messages, setMessages] = useState(() => [
    { role: "assistant", content: welcomeMessage },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dock, setDock] = useState("right");
  const [isDragging, setIsDragging] = useState(false);
  const [dragLeft, setDragLeft] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1024 : window.innerWidth
  );
  const [sessionId, setSessionId] = useState(() => {
    if (typeof window === "undefined") return "";
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  });
  const [idleEmojiIndex, setIdleEmojiIndex] = useState(0);
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);
  const bubbleRef = useRef(null);
  const dragMetaRef = useRef({ pointerOffset: 0, width: 0, lastLeft: 0 });
  const dragIntentRef = useRef({ active: false, moved: false, source: null });
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  const isMobileLayout = viewportWidth < 640;
  const horizontalOffset = isMobileLayout ? 4 : 16;
  const verticalOffset = isMobileLayout ? 12 : 16;
  const moodEmoji = useMemo(() => {
    if (isLoading) return "🤔";
    return VERONICA_IDLE_EMOJIS[idleEmojiIndex] || VERONICA_IDLE_EMOJIS[0];
  }, [idleEmojiIndex, isLoading]);

  const computedPanelWidth = viewportWidth - horizontalOffset * 2;
  let panelWidth =
    computedPanelWidth > 0
      ? computedPanelWidth
      : Math.max(viewportWidth - horizontalOffset * 2, viewportWidth * 0.9, 0);
  if (!isMobileLayout) {
    panelWidth = Math.min(380, panelWidth);
  }

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  // Show welcome popup after 2 seconds
  useEffect(() => {
    if (!hasShownWelcome && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShownWelcome(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (!hasShownWelcome && prefersReducedMotion) {
      setHasShownWelcome(true);
    }
  }, [hasShownWelcome, prefersReducedMotion]);

  useEffect(() => {
    if (!hasShownWelcome || !isOpen) return undefined;
    if (prefersReducedMotion) {
      scrollToBottom();
      return undefined;
    }
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 400);
    return () => clearTimeout(timer);
  }, [hasShownWelcome, isOpen, scrollToBottom, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || isOpen || isLoading) return undefined;
    const id = setInterval(() => {
      setIdleEmojiIndex((prev) => {
        if (VERONICA_IDLE_EMOJIS.length <= 1) return prev;
        const available = VERONICA_IDLE_EMOJIS.map((_, idx) => idx).filter(
          (idx) => idx !== prev
        );
        const next = available[Math.floor(Math.random() * available.length)];
        return next;
      });
    }, 4800);
    return () => clearInterval(id);
  }, [isOpen, isLoading, prefersReducedMotion]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, scrollToBottom]);

  // Drag handlers
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startDrag = useCallback((clientX, element, source) => {
    if (!element) return;
    const width = element.offsetWidth || 0;
    const minLeft = horizontalOffset;
    const maxLeft = Math.max(minLeft, viewportWidth - width - horizontalOffset);
    const initialLeft = dock === 'left' ? minLeft : maxLeft;
    dragMetaRef.current = {
      pointerOffset: clientX - initialLeft,
      width,
      lastLeft: initialLeft,
    };
    dragIntentRef.current = { active: true, moved: false, source };
    setDragLeft(initialLeft);
    setIsDragging(true);
  }, [dock, horizontalOffset, viewportWidth]);

  const updateDrag = useCallback((clientX) => {
    if (!isDragging) return;
    const { pointerOffset, width } = dragMetaRef.current;
    const minLeft = horizontalOffset;
    const maxLeft = Math.max(minLeft, viewportWidth - width - horizontalOffset);
    const nextLeft = Math.min(Math.max(minLeft, clientX - pointerOffset), maxLeft);
    if (Math.abs(nextLeft - dragMetaRef.current.lastLeft) > 1) {
      dragIntentRef.current.moved = true;
    }
    dragMetaRef.current.lastLeft = nextLeft;
    setDragLeft(nextLeft);
  }, [horizontalOffset, isDragging, viewportWidth]);

  const finishDrag = useCallback(() => {
    if (!isDragging) return;
    const { width, lastLeft } = dragMetaRef.current;
    const center = lastLeft + width / 2;
    setDock(center < viewportWidth / 2 ? 'left' : 'right');
    setIsDragging(false);
    setDragLeft(null);
    const intent = dragIntentRef.current;
    dragIntentRef.current = {
      active: false,
      moved: intent.moved,
      source: intent.source || null,
    };
  }, [isDragging, viewportWidth]);

  useEffect(() => {
    if (!isDragging) return undefined;
    const handleMouseMove = (event) => updateDrag(event.clientX);
    const handleTouchMove = (event) => {
      if (event.touches[0]) {
        updateDrag(event.touches[0].clientX);
        event.preventDefault();
      }
    };
    const handlePointerUp = () => finishDrag();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    window.addEventListener('touchcancel', handlePointerUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('touchcancel', handlePointerUp);
    };
  }, [finishDrag, isDragging, updateDrag]);

  const handleHeaderMouseDown = (event) => {
    if (event.target.closest('[data-chatbot-close]')) return;
    if (event.target.closest('.chatbot-header')) {
      event.preventDefault();
      startDrag(event.clientX, chatbotRef.current, 'chat');
    }
  };

  const handleHeaderTouchStart = (event) => {
    if (event.target.closest('[data-chatbot-close]')) return;
    if (event.target.closest('.chatbot-header')) {
      const touch = event.touches[0];
      if (touch) {
        startDrag(touch.clientX, chatbotRef.current, 'chat');
      }
      event.preventDefault();
    }
  };

  const handleBubbleMouseDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    startDrag(event.clientX, bubbleRef.current, 'bubble');
  };

  const handleBubbleTouchStart = (event) => {
    const touch = event.touches[0];
    if (touch) {
      startDrag(touch.clientX, bubbleRef.current, 'bubble');
    }
  };

  const handleBubbleClick = () => {
    if (dragIntentRef.current.source === 'bubble' && dragIntentRef.current.moved) {
      dragIntentRef.current = { active: false, moved: false, source: null };
      return;
    }
    dragIntentRef.current = { active: false, moved: false, source: null };
    if (!hasShownWelcome) {
      setHasShownWelcome(true);
    }
    setIsOpen(true);
  };

  const handleHeaderClick = (event) => {
    if (event.target.closest('[data-chatbot-close]')) return;
    const { source, moved } = dragIntentRef.current;
    if (source === 'chat' && moved) {
      dragIntentRef.current = { active: false, moved: false, source: null };
      return;
    }
    dragIntentRef.current = { active: false, moved: false, source: null };
    setIsOpen(false);
  };

  const horizontalStyles = isDragging && dragLeft !== null
    ? { left: `${dragLeft}px`, right: 'auto' }
    : dock === 'left'
      ? { left: `${horizontalOffset}px`, right: 'auto' }
      : { right: `${horizontalOffset}px`, left: 'auto' };

  const baseBottomOffset = `calc(env(safe-area-inset-bottom, 0px) + ${verticalOffset}px)`;
  const bubbleBottomOffset = `calc(env(safe-area-inset-bottom, 0px) + ${verticalOffset + (isMobileLayout ? 56 : 72)}px)`;
  const panelBottomOffset = baseBottomOffset;
  const bubbleSize = isMobileLayout ? 60 : 72;
  const messagesHeight = isMobileLayout ? 'min(55vh, 420px)' : '420px';

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://ainerd.app.n8n.cloud/webhook/a7d037fb-6494-4881-8642-e7f1521445ca/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: inputValue,
          sessionId: sessionId,
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.output || data.response || data.message || 'I apologize, I encountered an issue. Please try again.',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: 'I apologize, I\'m having trouble connecting right now. Please try again in a moment.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        ref={bubbleRef}
        onClick={handleBubbleClick}
        onMouseDown={handleBubbleMouseDown}
        onTouchStart={handleBubbleTouchStart}
        className="fixed z-30 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C28424] dark:focus:ring-[#8B5CF6]"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #8B5CF6, #3B5CCC)'
            : 'linear-gradient(135deg, #C28424, #7A3DF0)',
          boxShadow: `0 8px 32px ${isDark ? 'rgba(139,92,246,0.5)' : 'rgba(194,132,36,0.4)'}`,
          border: `2px solid ${isDark ? 'rgba(139,92,246,0.4)' : 'rgba(194,132,36,0.3)'}`,
          width: `${bubbleSize}px`,
          height: `${bubbleSize}px`,
          bottom: bubbleBottomOffset,
          ...horizontalStyles,
        }}
        aria-label="Open Veronica chatbot"
      >
        <span className="text-3xl">{moodEmoji}</span>
      </button>
    );
  }

  return (
    <div
      ref={chatbotRef}
      onMouseDown={handleHeaderMouseDown}
      onTouchStart={handleHeaderTouchStart}
      className="fixed z-30 rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: isDark ? 'rgba(11,11,26,0.97)' : 'rgba(255,255,255,0.97)',
        border: `2px solid ${isDark ? 'rgba(139,92,246,0.5)' : 'rgba(194,132,36,0.4)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 20px 60px ${isDark ? 'rgba(139,92,246,0.4)' : 'rgba(194,132,36,0.3)'}`,
        maxHeight: 'min(600px, calc(100vh - 120px))',
        width: `${panelWidth}px`,
        bottom: panelBottomOffset,
        ...horizontalStyles,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
    >
      {/* Header - Draggable to move, clickable to close */}
      <div
        className="chatbot-header cursor-move border-b transition-all hover:opacity-95 p-3 sm:p-4"
        onClick={handleHeaderClick}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #8B5CF6, #3B5CCC)'
            : 'linear-gradient(135deg, #C28424, #7A3DF0)',
          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              <span className="text-2xl">{moodEmoji}</span>
            </div>
            <div>
              <div className="font-bold text-white text-lg tracking-wide">Veronica</div>
            </div>
          </div>
          <button
            onClick={() => {
              dragIntentRef.current = { active: false, moved: false, source: null };
              setIsOpen(false);
            }}
            className="text-white text-2xl opacity-80 hover:opacity-100 transition cursor-pointer"
            data-chatbot-close
            aria-label="Close chatbot"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="overflow-y-auto p-3 sm:p-4 space-y-4"
        style={{
          height: messagesHeight,
          background: isDark ? 'rgba(11,11,26,0.6)' : 'rgba(255,255,255,0.8)',
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}`}
              style={{
                background: msg.role === 'user'
                  ? `linear-gradient(135deg, ${palette.accentSecondary}, ${palette.accentTertiary})`
                  : isDark ? 'rgba(17,17,34,0.9)' : 'rgba(246,244,255,0.9)',
                color: msg.role === 'user' ? 'white' : palette.textPrimary,
                border: `1px solid ${msg.role === 'user' ? 'rgba(255,255,255,0.2)' : palette.border}`,
                boxShadow: msg.role === 'user' ? '0 4px 12px rgba(139,92,246,0.2)' : '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl px-4 py-3"
              style={{
                background: isDark ? 'rgba(17,17,34,0.9)' : 'rgba(246,244,255,0.9)',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: palette.accentSecondary, animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: palette.accentSecondary, animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: palette.accentSecondary, animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="border-t p-3 sm:p-4"
        style={{
          background: isDark ? 'rgba(17,17,34,0.95)' : 'rgba(255,255,255,0.95)',
          borderColor: palette.border,
        }}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-xl outline-none transition-all focus:ring-2"
            style={{
              background: isDark ? 'rgba(11,11,26,0.8)' : 'rgba(246,244,255,0.6)',
              border: `1px solid ${palette.border}`,
              color: palette.textPrimary,
              focusRing: palette.accentSecondary,
            }}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="px-5 py-3 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(135deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
              color: 'white',
              boxShadow: palette.buttonShadow,
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
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
  const opts = { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Europe/London" };
  return `${new Date(startISO).toLocaleTimeString([], opts)}–${new Date(endISO).toLocaleTimeString([], opts)}`;
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

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;
    let mediaQuery;
    try {
      mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    } catch {
      return undefined;
    }
    const handleChange = (event) => setPrefers(event.matches);
    handleChange(mediaQuery);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefers;
}

function useNow(tick = 1000, prefersReducedMotionArg) {
  const prefersReducedMotion = prefersReducedMotionArg ?? usePrefersReducedMotion();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    let intervalId = null;
    const effectiveTick = prefersReducedMotion ? Math.max(tick, 1000) : tick;
    const restart = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => setNow(Date.now()), effectiveTick);
    };
    restart();
    const handleVisibility = () => {
      if (document.hidden) {
        if (intervalId) clearInterval(intervalId);
      } else {
        setNow(Date.now());
        restart();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      if (intervalId) clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion, tick]);

  return now;
}

function getCountdownParts(targetISO, nowMs) {
  if (!targetISO) {
    return { d: 0, h: 0, m: 0, s: 0, expired: true, totalMs: 0 };
  }
  const target = new Date(targetISO).getTime();
  if (!Number.isFinite(target)) {
    return { d: 0, h: 0, m: 0, s: 0, expired: true, totalMs: 0 };
  }
  const diff = target - nowMs;
  const expired = diff <= 0;
  const clamped = expired ? 0 : diff;
  const totalSeconds = Math.floor(clamped / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { d: days, h: hours, m: minutes, s: seconds, expired, totalMs: diff };
}

function buildSessionTimeline(sessions, nowMs) {
  const enriched = sessions.map((session, index) => {
    const startMs = new Date(session.start).getTime();
    const endMs = new Date(session.end).getTime();
    const status = nowMs < startMs ? "upcoming" : nowMs >= endMs ? "completed" : "live";
    return { ...session, index, startMs, endMs, status };
  });
  const upcoming = enriched.filter((session) => nowMs < session.endMs);
  const hero = upcoming[0] || enriched[enriched.length - 1] || null;
  const next = upcoming.length > 1 ? upcoming[1] : null;
  const statusMap = enriched.reduce((acc, session) => {
    acc[session.k] = session.status;
    return acc;
  }, {});
  return {
    all: enriched,
    hero,
    next,
    upcoming,
    completed: enriched.filter((session) => session.status === "completed"),
    statusMap,
    scheduleCompleted: upcoming.length === 0,
  };
}

function formatSessionDateLabel(session) {
  if (!session) return "";
  const start = new Date(session.start);
  const date = start.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const time = new Date(session.start).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/London",
  });
  return `${date} · ${time}`;
}

function formatCountdownHeadline(parts) {
  if (!parts) return "";
  if (parts.expired) return "0d 00h 00m";
  const pad = (value) => String(value).padStart(2, "0");
  return `${parts.d}d ${pad(parts.h)}h ${pad(parts.m)}m`;
}

function sessionStatusLabel(status) {
  switch (status) {
    case "live":
      return "Live now";
    case "completed":
      return "Archived";
    default:
      return "Upcoming";
  }
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
function ClientValueCalculator({ currency, formatCurrency, onIntro, onFull, onExplore, earlyBirdActive }) {
  const { palette } = useTheme();
  const [hours, setHours] = useState(2);
  const [focus, setFocus] = useState("foundation");

  const focusOptions = [
    { key: "foundation", label: "Foundation", icon: "🧱" },
    { key: "build", label: "Build workflows", icon: "🛠️" },
    { key: "scale", label: "Scale delivery", icon: "📈" },
  ];

  const results = useMemo(() => {
    const monthlyUSD = earlyBirdActive ? 90 : 100;
    const totalLabel = formatCurrency(monthlyUSD * 3, currency);
    const monthlyLabel = formatCurrency(monthlyUSD, currency);
    const standardMonthly = formatCurrency(100, currency);
    return {
      starterclass_only: {
        badge: "Free Starterclass",
        title: "Register for the free Starterclass",
        summary:
          "Lock your seat for the 90-minute live build. You’ll tune Projects, co-build a vibe-coded mini app, and leave with prompt systems that work immediately.",
        detail:
          "Ideal when you’re validating fit or need a fast win before committing tuition. Submit the form to receive the Google Meet link and calendar invite.",
        cta: "Register free",
        action: () => onIntro?.(),
        secondary: { label: `See the full six-session course (${totalLabel})`, action: () => onExplore?.({ months: 3 }) },
        focusNotes: {
          foundation: "Start with the Starterclass to prove impact with zero spend.",
          build: "Use the free session to finish your first vibe-coded prototype before upgrading.",
          scale: "Benchmark outcomes, then decide if you need the full automation arc.",
        },
      },
      full_track: {
        badge: "Full six-session course",
        title: `Join the full course (${totalLabel})`,
        summary:
          `Three monthly payments of ${monthlyLabel} (standard ${standardMonthly}). Continue from the Starterclass into agents, AI short-film production, and n8n orchestration.`,
        detail:
          "Perfect when you want the complete build system, accountability, and the final capstone deployment. Registration unlocks all six sessions and replay access.",
        cta: "Join the full course",
        action: () => onFull?.({ months: 3, plan: "full_track" }),
        secondary: { label: "Register the free Starterclass first", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Commit now to secure every live seat and the 10% early-bird.",
          build: "Keep momentum from your Starterclass mini build straight into agents and deployment.",
          scale: "Best if you already know you’ll need agents, film workflows, and n8n mastery.",
        },
      },
    };
  }, [currency, earlyBirdActive, formatCurrency, onExplore, onFull, onIntro]);

  const resultKey = useMemo(() => {
    if (hours <= 2 && focus !== "scale") {
      return "starterclass_only";
    }
    return "full_track";
  }, [hours, focus]);

  const result = results[resultKey];
  const focusExplainer = result?.focusNotes?.[focus];

  return (
    <div className="mt-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm" style={{ color: palette.textSecondary }}>
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
    </div>
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
  const [formLoading, setFormLoading] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [altFormOpen, setAltFormOpen] = useState(false);
  const [showPaid, setShowPaid] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem("sc_paid_reveal") === "1";
    } catch {
      return false;
    }
  });
  const [activeModule, setActiveModule] = useState("canvas");
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
  const [overviewFocus, setOverviewFocus] = useState(() => OVERVIEW_WINS[0]?.key || "projects");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(FAQ_ITEMS[0]?.question || "");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [fullTrackExpanded, setFullTrackExpanded] = useState(false);
  const [certificateFocus, setCertificateFocus] = useState(CERTIFICATE_POINTS[0]?.key || "evidence");
  const [nextLiveOpen, setNextLiveOpen] = useState(false);
  const [valueCalcOpen, setValueCalcOpen] = useState(false);
  const [activeRegistrationSession, setActiveRegistrationSession] = useState(() => SESSIONS[0] || null);
  const [instructorOpen, setInstructorOpen] = useState(true);
  const [reviewsOpen, setReviewsOpen] = useState(true);

  const prefersReducedMotion = usePrefersReducedMotion();
  const now = useNow(1000, prefersReducedMotion);

  const heroHeadlineGlowRef = useRef(null);
  const siteLabelGlowRef = useRef(null);
  const fullTrackSectionAnchorRef = useRef(null);
  const fullTrackPrimaryCtaRef = useRef(null);

  const sessions = useMemo(() => SESSIONS, []);
  const monthBundles = useMemo(() => MONTH_BUNDLES, []);
  const sessionTimeline = useMemo(() => buildSessionTimeline(sessions, now), [sessions, now]);
  const heroSession = sessionTimeline.hero;
  const heroStatus = heroSession?.status;
  const scheduleCompleted = sessionTimeline.scheduleCompleted;
  const countdownTarget = scheduleCompleted
    ? null
    : heroStatus === "live"
    ? heroSession?.end
    : heroSession?.start;
  const countdown = useMemo(() => getCountdownParts(countdownTarget, now), [countdownTarget, now]);
  const { d, h, m, s, expired } = countdown;
  const earlyBirdCountdown = useMemo(() => getCountdownParts(EARLY_BIRD_DEADLINE_ISO, now), [now]);
  const palette = useMemo(() => getPalette(activeTheme), [activeTheme]);
  const isDark = activeTheme === "dark";
  const formatCurrency = useCallback((amountUSD, forced) => formatCurrencyValue(amountUSD, forced || currency), [currency]);
  const earlyBirdActive = !earlyBirdCountdown.expired;
  const heroHighlights = heroSession?.hero?.highlights || HERO_HIGHLIGHTS;
  const announcementMessages = useMemo(() => {
    if (scheduleCompleted) {
      return [
        "All sessions completed",
        "Replays and dossiers are being delivered",
        "Join the waitlist for the next cohort",
      ];
    }
    if (!heroSession) {
      return ["Cohort timeline updating", "", ""];
    }
    const countdownHeadline = formatCountdownHeadline(countdown);
    const statusLine =
      heroStatus === "live"
        ? "Session live now — check your inbox for the Meet link"
        : countdown.expired
        ? "Session starting now"
        : `Next session in ${countdownHeadline}`;
    const starterclassStatus = sessionTimeline.statusMap?.starterclass;
    const earlyBirdLine = earlyBirdActive
      ? "10% early-bird active until the Starterclass wraps"
      : starterclassStatus === "completed"
      ? "Starterclass archived — standard tuition applies"
      : "Secure your seat before the Starterclass finishes";
    return [
      `${heroSession.title} · ${formatSessionDateLabel(heroSession)}`,
      statusLine,
      earlyBirdLine,
    ];
  }, [countdown, earlyBirdActive, heroSession, heroStatus, scheduleCompleted, sessionTimeline.statusMap]);
  const testimonials = TESTIMONIALS;
  const testimonial = testimonials[activeTestimonial] || testimonials[0];
  const heroAudienceLine = heroSession?.hero?.audience ||
    "Free Starterclass for business leaders, consultants, and curious operators — no coding required.";
  const heroBadge = heroSession?.hero?.badge || "Starterclass · no payment required";
  const heroChipLabel = heroSession?.hero?.label || heroSession?.title || "All sessions completed";
  const heroTitle = heroSession?.title || INTRO_NAME;
  const heroTimeDetail = heroSession ? formatSessionDateLabel(heroSession) : "Sessions completed";
  const heroUkRange = heroSession ? formatUKRange(heroSession.start, heroSession.end) : formatUKRange(INTRO_START_ISO, INTRO_END_ISO);
  const heroLocalRange = heroSession
    ? formatLocalRange(heroSession.start, heroSession.end)
    : formatLocalRange(INTRO_START_ISO, INTRO_END_ISO);
  const shareWhatsAppText = heroSession?.track === "starterclass"
    ? `🎓 Join me at the FREE ${heroTitle} by ICUNI!`
    : `🎓 Join me at ${heroTitle} by ICUNI!`;
  const shareEmailSubject = heroSession?.track === "starterclass"
    ? "Join the FREE AI Starterclass"
    : `Join me for ${heroTitle}`;
  const shareEmailBody = heroSession?.track === "starterclass"
    ? `I wanted to share this free Starterclass with you!\n\n${heroTitle}`
    : `I wanted to share this AI session with you!\n\n${heroTitle}`;
  const heroCountdownLabel = scheduleCompleted
    ? "Cohort completed"
    : heroStatus === "live"
    ? "Session wraps in"
    : "Next session begins in";
  const upcomingHeading = scheduleCompleted
    ? "Cohort recap"
    : heroSession?.track === "starterclass"
    ? "What comes after the Starterclass"
    : "Upcoming cohort sessions";
  const heroTopics = useMemo(() => {
    if (heroSession?.outline?.length) {
      return heroSession.outline.map((topic) => ({
        ...topic,
        headline: topic.headline || topic.key,
        outcome: topic.outcome || heroSession.outcome,
        toolkit: topic.toolkit || heroSession.outcome,
      }));
    }
    return PIE_TOPICS;
  }, [heroSession]);
  const activeCertificate = useMemo(
    () => CERTIFICATE_POINTS.find((point) => point.key === certificateFocus) || CERTIFICATE_POINTS[0],
    [certificateFocus]
  );
  const fullTrackTotalUSD = earlyBirdActive ? 270 : 300;
  const fullTrackMonthlyUSD = earlyBirdActive ? 90 : 100;

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
    if (typeof document === "undefined") return undefined;
    const previousHtmlOverflow = document.documentElement.style.overflowX;
    const previousBodyOverflow = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = previousHtmlOverflow;
      document.body.style.overflowX = previousBodyOverflow;
    };
  }, []);

  useEffect(() => {
    if (!announcementMessages.length || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setAnnouncementIndex((idx) => (idx + 1) % announcementMessages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [announcementMessages.length, prefersReducedMotion]);

  useEffect(() => {
    if (!testimonials.length || prefersReducedMotion) return undefined;
    const rotation = setInterval(() => {
      setActiveTestimonial((idx) => (idx + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(rotation);
  }, [prefersReducedMotion, testimonials.length]);

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
    () =>
      sessionTimeline.all
        .filter((session) => session.track === "paid" && (scheduleCompleted ? true : session.status !== "completed")),
    [scheduleCompleted, sessionTimeline]
  );

  const upcomingSchedule = useMemo(
    () => (scheduleCompleted ? [] : sessionTimeline.upcoming.slice(0, 3)),
    [scheduleCompleted, sessionTimeline]
  );

  const structuredData = useMemo(() => {
    const organizer = {
      "@type": "Organization",
      "name": "ICUNI",
      "url": "https://starterclass.icuni.org/",
    };

    const introSession = sessions.find((session) => session.k === "starterclass") || sessions[0];
    const introStatus = sessionTimeline.statusMap?.starterclass || "upcoming";
    const eventStatusMap = {
      upcoming: "https://schema.org/EventScheduled",
      live: "https://schema.org/EventInProgress",
      completed: "https://schema.org/EventCompleted",
    };

    const event = {
      "@type": "Event",
      "@id": "https://starterclass.icuni.org/#starterclass-event",
      "name": introSession?.title || INTRO_NAME,
      "description":
        "Live online Starterclass covering ChatGPT Projects, vibe-coded builds, and reusable prompt systems.",
      "startDate": introSession?.start || INTRO_START_ISO,
      "endDate": introSession?.end || INTRO_END_ISO,
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": eventStatusMap[introStatus] || "https://schema.org/EventScheduled",
      "isAccessibleForFree": true,
      "location": {
        "@type": "VirtualLocation",
        "url": "https://starterclass.icuni.org/",
      },
      "organizer": organizer,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": introStatus === "completed" ? "https://schema.org/Discontinued" : "https://schema.org/InStock",
        "url": "https://starterclass.icuni.org/#register-free-cta",
      },
      "url": "https://starterclass.icuni.org/",
    };

    const courseInstances = monthBundles
      .map((bundle) => {
        const bundleSessions = sessions.filter((session) => bundle.modules.includes(session.k));
        if (!bundleSessions.length) return null;
        const startDate = bundleSessions.reduce(
          (earliest, session) => (earliest && earliest < session.start ? earliest : session.start),
          bundleSessions[0]?.start
        );
        const endDate = bundleSessions.reduce(
          (latest, session) => (latest && latest > session.end ? latest : session.end),
          bundleSessions[0]?.end
        );
        const moduleTitles = bundleSessions.map((session) => session.title).join("; ");
        return {
          "@type": "CourseInstance",
          "name": `${bundle.label} — ICUNI Full Track`,
          "startDate": startDate,
          "endDate": endDate,
          "courseMode": "https://schema.org/OnlineCourse",
          "location": {
            "@type": "VirtualLocation",
            "url": "https://starterclass.icuni.org/",
          },
          "offers": {
            "@type": "Offer",
            "price": String(bundle.priceUSD),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://starterclass.icuni.org/#full-track-panel",
          },
          "description": moduleTitles,
        };
      })
      .filter(Boolean);

    const course = {
      "@type": "Course",
      "@id": "https://starterclass.icuni.org/#starterclass-course",
      "name": "ICUNI Six-session Cohort: AI Project Customisation, Agent Systems, and N8N Automation",
      "description":
        "Build an autonomous assistant, ship a vibe-coded site, and master prompt systems with a verifiable completion dossier.",
      "provider": organizer,
      "url": "https://starterclass.icuni.org/",
      ...(courseInstances.length ? { hasCourseInstance: courseInstances } : {}),
    };

    return {
      "@context": "https://schema.org",
      "@graph": [event, course],
    };
  }, [monthBundles, sessionTimeline.statusMap, sessions]);

  const handleCurrencySwitch = useCallback((code) => {
    setCurrency(code);
  }, []);

  function triggerIntroForm(source) {
    track("intro_cta_click", { location: source });
    const intro = sessions.find((session) => session.k === "starterclass") || heroSession || sessions[0] || null;
    setActiveRegistrationSession(intro);
    setFormLoading(true);
    setModalOpen(true);
  }

  function revealPaidAndGoCurriculum(source = "hero_secondary") {
    if (!showPaid) {
      setShowPaid(true);
      try { localStorage.setItem("sc_paid_reveal", "1"); } catch {}
    }
    track("fulltrack_cta_click", { location: source, intent: "explore" });
    setTab("curriculum");
    setActiveModule("canvas");
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
    setActiveModule("canvas");
    requestAnimationFrame(() => {
      document.getElementById("full-track-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    const targetKey = detail.session || heroSession?.k;
    const targetSession = (targetKey && sessions.find((session) => session.k === targetKey)) || heroSession || sessions.find((session) => session.track === "paid") || sessions[0] || null;
    setActiveRegistrationSession(targetSession);
    setFormLoading(true);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setFormLoading(false);
  }

  function openAlternativeForm(location) {
    track("alt_form_open", { location });
    setActiveRegistrationSession(heroSession || sessions[0] || null);
    setAltFormOpen(true);
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
    const targetSession = activeRegistrationSession || heroSession || sessions[0];
    if (!targetSession) return;
    window.open(
      googleCalUrl({ title: targetSession.title, startISO: targetSession.start, endISO: targetSession.end, details: `${targetSession.title} — ICUNI Starterclass`, location: "Online (Google Meet)" }),
      "_blank",
      "noopener"
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

  return (
    <ThemeProvider theme={activeTheme} palette={palette}>
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <main
          className={`min-h-screen ${themeClass}`}
          style={{
            background: palette.background,
            color: palette.textPrimary,
            width: "100%",
            overflowX: "clip",
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
                {scheduleCompleted ? "Cohort completed" : heroTimeDetail}
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
                  {heroChipLabel}
                </div>
                <div className="mt-2 text-xs font-medium tracking-wide" style={{ color: palette.textSecondary }}>
                  {heroTimeDetail}
                </div>
                <div className="mt-3">
                  <Badge>{heroBadge}</Badge>
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
                  In one powerful session you’ll calibrate ChatGPT to match your tone, co-build a vibe-coded mini-app, and learn prompt systems you can run the same afternoon. Leave empowered to ship your own AI workflows immediately.
                </p>
                <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                  {heroAudienceLine}
                </p>
                <p className="mt-2 text-xs" style={{ color: palette.textMuted }}>
                  Delivered live online via Google Meet. Access details arrive once you register.
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
                  <div><span style={{ color: palette.textMuted }}>UK Time:</span> {heroUkRange}</div>
                  <div><span style={{ color: palette.textMuted }}>Your Time:</span> {heroLocalRange}</div>
                </div>
                {earlyBirdActive ? (
                  <p className="mt-3 text-sm" style={{ color: palette.textSecondary }}>
                    10% early-bird discount if you enrol in the full course before the Starterclass ends.
                  </p>
                ) : scheduleCompleted ? (
                  <p className="mt-3 text-sm" style={{ color: palette.textSecondary }}>
                    This cohort has wrapped. Explore the completed sessions and join the waitlist for future dates.
                  </p>
                ) : (
                  <p className="mt-3 text-sm" style={{ color: palette.textSecondary }}>
                    Tuition is now at the standard rate — seats remain for upcoming sessions.
                  </p>
                )}
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>{heroCountdownLabel}</div>
                  {scheduleCompleted ? (
                    <div className="mt-4 text-sm" style={{ color: palette.textSecondary }}>
                      All sessions are complete. We’ll email you when new cohort dates open.
                    </div>
                  ) : (
                    <>
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
                      <div className="mt-3 text-xs" style={{ color: palette.textMuted }}>
                        {heroStatus === "live"
                          ? "We’re live right now — open the Meet link from your inbox to join us."
                          : "Reminder emails arrive 24 hours before we open the Google Meet room."}
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <GlassButton
                    id="register-free-cta"
                    onClick={() => {
                      if (scheduleCompleted) {
                        triggerFullTrackForm("hero_waitlist", { intent: "waitlist" });
                      } else if (heroSession?.track === "starterclass" && heroStatus !== "completed") {
                        triggerIntroForm("hero_primary");
                      } else {
                        triggerFullTrackForm("hero_primary", { session: heroSession?.k });
                      }
                    }}
                  >
                    {scheduleCompleted
                      ? "Join the waitlist"
                      : heroSession?.track === "starterclass" && heroStatus !== "completed"
                      ? "Register free"
                      : "Join this session"}
                  </GlassButton>
                  <GlassButton
                    variant="secondary"
                    onClick={() => revealPaidAndGoCurriculum("hero_secondary")}
                    className="px-5 py-3"
                  >
                    {heroSession?.track === "starterclass" ? "View the full course (6 sessions)" : "See the full curriculum"}
                  </GlassButton>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  <span className="text-sm font-semibold" style={{ color: palette.textPrimary }}>Share this event:</span>
                  <button
                    type="button"
                    onClick={() => {
                      const text = encodeURIComponent(shareWhatsAppText);
                      const url = encodeURIComponent(window.location.href);
                      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                    style={{
                      background: '#25D366',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                    }}
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const subject = encodeURIComponent(shareEmailSubject);
                      const body = encodeURIComponent(`${shareEmailBody}\n\nRegister here: ${window.location.href}`);
                      window.location.href = `mailto:?subject=${subject}&body=${body}`;
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
                      color: 'white',
                      border: 'none',
                      boxShadow: palette.buttonShadow
                    }}
                  >
                    <span>✉️</span>
                    <span>Email</span>
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs items-center">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold"
                    style={{ border: `1px solid ${palette.border}`, background: palette.surfaceSoft, color: palette.textPrimary }}
                    onClick={() => openAlternativeForm("hero_button")}
                  >
                    Alternative registration form
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
                <PieBlock topics={heroTopics} prefersReducedMotion={prefersReducedMotion} />
              </div>
            </div>
          </GlowCard>
        </Section>

        <Section className="pb-20" id="overview-tab">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: palette.textPrimary }}>
              Explore the Starterclass
            </h2>
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              Click below to learn more about what you'll discover
            </p>
          </div>
          <div
            className="flex items-center gap-3 p-2 rounded-2xl w-fit mx-auto md:mx-0 shadow-lg"
            style={{
              border: `2px solid ${palette.accentPrimary}`,
              background: `linear-gradient(135deg, ${palette.surfaceSoft}, ${palette.surface})`,
              boxShadow: `0 8px 24px ${isDark ? 'rgba(139,92,246,0.3)' : 'rgba(194,132,36,0.2)'}`
            }}
          >
            {[
              { k: "overview", t: "Overview", icon: "📋" },
              { k: "curriculum", t: "Curriculum", icon: "📚" },
              { k: "faq", t: "FAQ", icon: "❓" },
            ].map(({ k, t, icon }) => (
              <button
                key={k}
                onClick={() => {
                  if (k === "curriculum") {
                    revealPaidAndGoCurriculum("tab_switch");
                  } else {
                    setTab(k);
                  }
                }}
                className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2"
                style={{
                  background: tab === k
                    ? `linear-gradient(135deg, ${palette.accentPrimary}, ${palette.accentSecondary})`
                    : "transparent",
                  color: tab === k ? "white" : palette.textPrimary,
                  border: tab === k ? "none" : `1px solid ${palette.border}`,
                  boxShadow: tab === k ? palette.buttonShadow : "none",
                  fontSize: "1rem",
                }}
              >
                <span>{icon}</span>
                <span>{t}</span>
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
                        The Starterclass counts toward the full course. When you’re ready, add the monthly bundles from {formatCurrency(fullTrackMonthlyUSD)} {earlyBirdActive ? "while the early-bird lasts." : "at the standard rate."}
                      </div>
                    </div>
                  </GlowCard>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <GlowCard className="p-6">
                    <button
                      type="button"
                      onClick={() => setNextLiveOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between gap-3 text-left"
                      aria-expanded={nextLiveOpen}
                    >
                      <span className="text-xl font-semibold">Next live times</span>
                      <span className="text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                        {nextLiveOpen ? "–" : "+"}
                      </span>
                    </button>
                    {nextLiveOpen ? (
                      upcomingSchedule.length ? (
                        <>
                          <div className="mt-3 space-y-3">
                            {upcomingSchedule.map((s) => {
                              const isStarterclassSlot = s.track === "starterclass";
                              const badgeLabel = isStarterclassSlot ? "Free Starterclass" : "Full course";
                              const statusLabel = sessionStatusLabel(s.status);
                              const statusColor = s.status === "live"
                                ? palette.accentSecondary
                                : s.status === "completed"
                                ? palette.textMuted
                                : palette.accentPrimary;
                              const background = s.status === "completed" ? palette.surface : palette.surfaceSoft;
                              const handleSlotClick = () => {
                                if (s.status === "completed") return;
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
                                  className="w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus:-translate-y-0.5 disabled:opacity-60"
                                  style={{
                                    borderColor: palette.border,
                                    background,
                                    color: palette.textPrimary,
                                  }}
                                  disabled={s.status === "completed"}
                                >
                                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs" style={{ color: palette.textMuted }}>
                                    <span className="font-semibold text-sm" style={{ color: palette.textPrimary }}>
                                      {s.date}
                                    </span>
                                    <div className="flex items-center gap-1">
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
                                      <span
                                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5"
                                        style={{
                                          border: `1px solid ${palette.border}`,
                                          background: palette.surface,
                                          color: statusColor,
                                        }}
                                      >
                                        {statusLabel}
                                      </span>
                                    </div>
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
                            Ready for more after the Starterclass? Explore the curriculum tab to see how the full course expands these builds.
                          </div>
                        </>
                      ) : (
                        <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                          All sessions are archived. Join the waitlist from the hero to hear about future dates.
                        </p>
                      )
                    ) : (
                      <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                        Tap to view the Starterclass time, local conversions, and the next full-course labs.
                      </p>
                    )}
                  </GlowCard>
                  {showPaid && (
                    <GlowCard className="p-6" id="value-calculator">
                      <button
                        type="button"
                        onClick={() => setValueCalcOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between gap-3 text-left"
                        aria-expanded={valueCalcOpen}
                      >
                        <span className="text-xl font-semibold">Client Value Calculator</span>
                        <span className="text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                          {valueCalcOpen ? "–" : "+"}
                        </span>
                      </button>
                      {valueCalcOpen ? (
                        <ClientValueCalculator
                          currency={currency}
                          formatCurrency={formatCurrency}
                          earlyBirdActive={earlyBirdActive}
                          onIntro={() => triggerIntroForm("cvc_intro")}
                          onFull={(detail) => triggerFullTrackForm("cvc_full", detail || {})}
                          onExplore={() => revealPaidAndGoCurriculum("cvc_explore")}
                        />
                      ) : (
                        <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                          Compare staying with the free Starterclass against committing to the full six-session course.
                        </p>
                      )}
                    </GlowCard>
                  )}
                </div>
              </div>
              <GlowCard className="p-6" id="instructor">
                <button
                  type="button"
                  onClick={() => setInstructorOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                  aria-expanded={instructorOpen}
                >
                  <span className="text-xl font-semibold">Meet your instructor</span>
                  <span className="text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                    {instructorOpen ? "–" : "+"}
                  </span>
                </button>
                {instructorOpen && (
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
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
                )}
              </GlowCard>
            </div>
          )}

          {tab === "curriculum" && (
            <div className="mt-10 space-y-8" id="curriculum-anchor">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Full course by month</h3>
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
                    const filtered = sessionTimeline.all.filter((s) => s.month === bundle.key && s.track !== "break");
                    const monthPrice = earlyBirdActive ? Math.round(bundle.priceUSD * 0.9) : bundle.priceUSD;
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
                          const statusText = sessionStatusLabel(module.status);
                          const statusColor = module.status === "completed" ? palette.textMuted : module.status === "live" ? palette.accentSecondary : palette.accentPrimary;
                          return (
                            <div key={module.k} className="rounded-3xl border" style={{ borderColor: palette.border, background: palette.surface }}>
                              <button
                                type="button"
                                className="w-full px-5 py-4 flex items-start gap-4 text-left"
                                onClick={() => setActiveModule((prev) => (prev === module.k ? "" : module.k))}
                              >
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                                    <span>{module.date}</span>
                                    <span style={{ color: statusColor }}>{statusText}</span>
                                  </div>
                                  <div className="mt-1 font-semibold" style={{ color: palette.textPrimary }}>{module.title}</div>
                                  <div className="mt-1 text-sm" style={{ color: palette.textSecondary }}>{module.desc}</div>
                                  <div className="mt-2 flex flex-wrap gap-3 text-xs" style={{ color: palette.textMuted }}>
                                    <span>UK: {formatUKRange(module.start, module.end)}</span>
                                    <span>Your: {formatLocalRange(module.start, module.end)}</span>
                                  </div>
                                </div>
                                <div className="ml-auto text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                                  {open ? "–" : "+"}
                                </div>
                              </button>
                              {open && (
                                <div className="px-5 pb-5">
                                  <ModuleOutlineChart segments={module.outline} prefersReducedMotion={prefersReducedMotion} />
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
                            Holiday pause between 27 Dec and 10 Jan: refine assets, rest, and come back ready to automate.
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
                            {formatCurrency(earlyBirdActive ? Math.round(bundle.priceUSD * 0.9) : bundle.priceUSD)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs" style={{ color: palette.textMuted }}>
                      {earlyBirdActive
                        ? "10% early-bird active until the Starterclass ends"
                        : "Early-bird wrapped · standard tuition applies"}
                    </div>
                    <div className="text-xs" style={{ color: palette.textMuted }}>
                      Taxes may apply based on your billing location.
                    </div>
                  </GlowCard>
                  <GlowCard className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Early-bird status</h3>
                    <div className="text-sm" style={{ color: palette.textSecondary }}>
                      {earlyBirdActive
                        ? `Secure the discount within ${earlyBirdCountdown.d}d ${String(earlyBirdCountdown.h).padStart(2, "0")}h ${String(earlyBirdCountdown.m).padStart(2, "0")}m.`
                        : "The Starterclass window closed the early-bird. Tuition reverts to $300 equivalent."}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs" style={{ color: palette.textMuted }}>
                      <span>Pay $100 per month (or local equivalent).</span>
                      {earlyBirdActive ? (
                        <span>Early-bird drops each payment to {formatCurrency(90)}.</span>
                      ) : (
                        <span>Missed the early-bird? Tuition stays at {formatCurrency(100)} per month.</span>
                      )}
                    </div>
                  </GlowCard>
                </div>
              </div>
              <div className="space-y-8" id="full-track-panel" ref={fullTrackSectionAnchorRef}>
                <GlowCard className="p-6 md:p-8" id="certificate">
                  <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">
                    <div
                      className="rounded-3xl border overflow-hidden"
                      style={{
                        borderColor: palette.border,
                        background:
                          activeTheme === "dark"
                            ? "linear-gradient(160deg, rgba(18,18,38,0.92), rgba(30,24,60,0.88))"
                            : "linear-gradient(160deg, rgba(255,255,255,0.95), rgba(245,240,255,0.92))",
                      }}
                    >
                      <div className="flex h-full flex-col gap-5 p-6 md:p-8">
                        <div>
                          <span
                            className="text-xs uppercase tracking-[0.32em]"
                            style={{ color: palette.textMuted }}
                          >
                            ICUNI credential
                          </span>
                          <div
                            className="mt-3 text-2xl font-semibold leading-snug"
                            style={{ color: palette.textPrimary }}
                          >
                            Your completion dossier
                          </div>
                          <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.textSecondary }}>
                            Instead of a static certificate image, you receive a polished dossier capturing the work you ship
                            across the Starterclass. It is built to share with stakeholders who need proof you can deliver.
                          </p>
                        </div>
                        <div className="grid gap-3">
                          {[
                            {
                              icon: "🪶",
                              label: "Signed welcome note",
                              text: "Personal message from the programme lead summarising the focus areas you mastered.",
                            },
                            {
                              icon: "🧾",
                              label: "Evidence timeline",
                              text: "Chronological log of projects, submissions, and reviews that backed your final credential.",
                            },
                            {
                              icon: "🔗",
                              label: "Verification link",
                              text: "Private, shareable link so teams can instantly verify attendance and deliverables.",
                            },
                          ].map(({ icon, label, text }) => (
                            <div
                              key={label}
                              className="flex items-start gap-3 rounded-2xl border px-4 py-3"
                              style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
                            >
                              <span className="text-xl" aria-hidden="true">
                                {icon}
                              </span>
                              <div>
                                <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
                                  {label}
                                </div>
                                <div className="mt-1 text-xs">{text}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div
                          className="mt-auto rounded-2xl border px-4 py-3 text-xs leading-relaxed"
                          style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
                        >
                          Delivered within 72 hours of the final January session as both a PDF dossier and a live verification page.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 text-sm" style={{ color: palette.textSecondary }}>
                      <p>
                        Complete all six sessions and we issue an ICUNI certificate that documents the builds you shipped across the programme. Every live sprint, submission, and review contributes to the evidence file you keep.
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
            <button
              type="button"
              onClick={() => setReviewsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={reviewsOpen}
            >
              <span className="text-sm uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Reviews</span>
              <span className="text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                {reviewsOpen ? "–" : "+"}
              </span>
            </button>
            {reviewsOpen && (
              <div className="mt-6 grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
                <div className="space-y-5">
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
                    <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Why people trust this</div>
                    <ul className="space-y-2 text-xs" style={{ color: palette.textSecondary }}>
                      <li>Built for business leaders, consultants, and operators — no coding required.</li>
                      <li>One Starterclass win plus a clear path through the six-session course.</li>
                      <li>{earlyBirdActive ? "10% early-bird discount when you enrol before the Starterclass ends." : "Standard tuition with archived Starterclass resources."}</li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        if (scheduleCompleted) {
                          triggerFullTrackForm("reviews_cta", { intent: "waitlist" });
                        } else {
                          triggerIntroForm("reviews_cta");
                        }
                      }}
                      className="text-xs underline underline-offset-4"
                      style={{ color: palette.accentSecondary }}
                    >
                      {scheduleCompleted ? "Join the waitlist" : "Register free"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </GlowCard>
        </Section>

        <Section className="pb-14">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl font-semibold">{upcomingHeading}</h2>
              <button
                type="button"
                onClick={() => {
                  revealPaidAndGoCurriculum("track_preview");
                  scrollToFullTrack();
                }}
                className="text-sm underline underline-offset-4"
                style={{ color: palette.accentSecondary }}
              >
                See the entire curriculum
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {upcomingModules.map((module) => (
                <GlowCard key={module.k} className="p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                    <span>Included in full course</span>
                    <span style={{ color: module.status === "completed" ? palette.textMuted : module.status === "live" ? palette.accentSecondary : palette.accentPrimary }}>
                      {sessionStatusLabel(module.status)}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold" style={{ color: palette.textPrimary }}>{module.title}</div>
                  <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>{module.outcome}</div>
                  <div className="mt-3 text-xs" style={{ color: palette.textMuted }}>
                    {module.date} · {formatUKRange(module.start, module.end)}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </Section>
        <>

          <BackToTop />
          <VeronicaChatbot />

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

          {modalOpen && (
            <div className="fixed inset-0 z-50 grid place-items-center p-4">
              <div className="absolute inset-0 backdrop-blur" style={{ background: activeTheme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)" }} onClick={closeModal} />
              <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden" style={{ border: `1px solid ${palette.border}`, background: palette.surface, color: palette.textPrimary }}>
                <div className="px-4 md:px-6 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${palette.border}` }}>
                  <div className="font-semibold">Register — {activeRegistrationSession?.title || heroTitle}</div>
                  <button onClick={closeModal} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
                </div>
                <div className="p-6 space-y-6">
                  <div
                    className="relative rounded-2xl overflow-hidden border"
                    style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                  >
                    {formLoading && (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        style={{
                          background: activeTheme === "dark" ? "rgba(11,11,26,0.88)" : "rgba(255,255,255,0.92)",
                          color: palette.textPrimary,
                        }}
                      >
                        <div
                          className="h-12 w-12 rounded-full border-2 border-current border-t-transparent animate-spin"
                          aria-hidden="true"
                        />
                        <div className="text-sm font-semibold">Preparing the registration form…</div>
                        <div className="text-xs" style={{ color: palette.textSecondary }}>
                          Sit tight — the Google Form loads in a moment.
                        </div>
                      </div>
                    )}
                    <iframe
                      src={GOOGLE_FORM_URL_EMBED}
                      title="Starterclass registration form"
                      width="100%"
                      height="680"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      onLoad={() => setFormLoading(false)}
                      style={{ width: "100%", opacity: formLoading ? 0 : 1, transition: "opacity 240ms ease" }}
                      aria-busy={formLoading ? "true" : "false"}
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
                      onClick={closeModal}
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

          {altFormOpen && (
            <AlternativeRegistrationModal
              onClose={() => setAltFormOpen(false)}
              onCalendar={() => openCalendarModal("alternative_form")}
            />
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
      </>
    </ThemeProvider>
  );
}

window.StarterclassLuxuryV8 = StarterclassLuxuryV8;

function PieBlock({ topics = PIE_TOPICS, prefersReducedMotion }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = topics[activeIndex] ?? topics[0];
  const { palette } = useTheme();

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % topics.length);
    }, 10000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, topics.length]);

  const activeColor = active?.color ?? "#C8A145";

  return (
    <div
      className="relative"
      onMouseEnter={() => !prefersReducedMotion && setPaused(true)}
      onMouseLeave={() => !prefersReducedMotion && setPaused(false)}
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
              animationPlayState: paused || prefersReducedMotion ? "paused" : "running",
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

function ModuleOutlineChart({ segments = [], prefersReducedMotion }) {
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
    if (!outline.length || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setFocus((prev) => (prev + 1) % outline.length);
    }, 8000);
    return () => clearInterval(id);
  }, [outline.length, prefersReducedMotion]);

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

function AlternativeRegistrationModal({ onClose, onCalendar }) {
  const { palette, theme } = useTheme();
  const isDark = theme === "dark";
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    role: "",
    industry: "",
    ageRange: "",
    aiExperience: "",
    goals: [],
    followUps: [],
    interests: ["starterclass"],
    fullCourseIntent: "",
    agreeFullCourse: false,
    submitConsent: false,
  });
  const [stepError, setStepError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const roleOptions = useMemo(
    () => [
      { value: "creative", label: "Creative" },
      { value: "entrepreneur", label: "Entrepreneur / Founder" },
      { value: "lead", label: "Head of Department / Team Lead" },
      { value: "employee", label: "Employee / Individual Contributor" },
      { value: "tech", label: "Tech Professional" },
      { value: "other", label: "Other" },
    ],
    []
  );

  const industryOptions = useMemo(
    () => [
      { value: "creative", label: "Creative (film/photo/design/music)" },
      { value: "finance", label: "Finance / FinTech" },
      { value: "education", label: "Education" },
      { value: "tech", label: "Tech / IT / Software" },
      { value: "marketing", label: "Marketing / Media / Agency" },
      { value: "health", label: "Healthcare / Life Sciences" },
      { value: "retail", label: "Retail / eCommerce" },
      { value: "services", label: "Professional Services (Legal/Accounting/Consulting)" },
      { value: "nonprofit", label: "Nonprofit / Public Sector" },
      { value: "hospitality", label: "Hospitality / Travel" },
      { value: "energy", label: "Oil & Gas" },
      { value: "other", label: "Other" },
    ],
    []
  );

  const ageRangeOptions = useMemo(
    () => [
      { value: "18-24", label: "18–24" },
      { value: "25-34", label: "25–34" },
      { value: "35-44", label: "35–44" },
      { value: "45-54", label: "45–54" },
      { value: "55+", label: "55+" },
    ],
    []
  );

  const aiExperienceOptions = useMemo(
    () => [
      { value: "beginner", label: "Beginner — never used it / barely tried" },
      { value: "casual", label: "Casual — I dabble, want to level up" },
      { value: "regular", label: "Regular — I use it weekly" },
      { value: "power", label: "Power user — I use it daily and build workflows" },
    ],
    []
  );

  const goalOptions = useMemo(
    () => [
      { value: "getting_started", label: "How do I get started with AI?" },
      { value: "automation", label: "Automation (how do I automate everything?)" },
      { value: "research", label: "Deep Research (pulling sources, briefs)" },
      { value: "projects", label: "Projects (multi-doc planning, long tasks)" },
      { value: "canvas", label: "Canvas (docs, slides, wireframes)" },
      { value: "custom_gpts", label: "Custom GPTs (private tools)" },
      { value: "coding", label: "Coding (light scripts, automations)" },
      { value: "prompt", label: "Prompt Engineering (frameworks that work)" },
      { value: "jobs", label: "Will AI take my job? (what to do now)" },
    ],
    []
  );

  const followUpOptions = useMemo(
    () => [
      { value: "review", label: "Give review after Starterclass", hint: "Send a short testimonial link" },
      { value: "newsletter", label: "Subscribe to AI newsletter", hint: "Prompts, updates, upcoming events" },
      { value: "community", label: "Join AI group chat", hint: "Invitation arrives once it's live" },
    ],
    []
  );

  const interestOptions = useMemo(
    () => [
      { value: "starterclass", label: "FREE 90 minute AI Starterclass session" },
      { value: "full_course", label: "Full 6 sessions Starterclass" },
    ],
    []
  );

  const wantsFullCourse = form.interests.includes("full_course");

  const updateField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleField = useCallback((key, value) => {
    setForm((prev) => {
      const list = Array.isArray(prev[key]) ? prev[key] : [];
      const exists = list.includes(value);
      const next = exists ? list.filter((item) => item !== value) : [...list, value];
      return { ...prev, [key]: next };
    });
  }, []);

  const selectFullCourseIntent = useCallback((value) => {
    setForm((prev) => ({
      ...prev,
      fullCourseIntent: value,
      agreeFullCourse: value === "yes" ? prev.agreeFullCourse : false,
    }));
    setStepError("");
  }, []);

  function findLabel(options, value) {
    return options.find((option) => option.value === value)?.label || value;
  }

  const summary = useMemo(
    () => ({
      role: findLabel(roleOptions, form.role),
      industry: findLabel(industryOptions, form.industry),
      ageRange: findLabel(ageRangeOptions, form.ageRange),
      aiExperience: findLabel(aiExperienceOptions, form.aiExperience),
      goals: form.goals.map((value) => findLabel(goalOptions, value)),
      followUps: form.followUps.map((value) => findLabel(followUpOptions, value)),
      interests: form.interests.map((value) => findLabel(interestOptions, value)),
    }),
    [
      form,
      roleOptions,
      industryOptions,
      ageRangeOptions,
      aiExperienceOptions,
      goalOptions,
      followUpOptions,
      interestOptions,
    ]
  );

  const sectionLabel = `Section ${Math.min(step, 3)} of 3`;

  function handleBack() {
    setStepError("");
    setSubmitError("");
    if (step === 1) {
      onClose();
      return;
    }
    if (step === 2) {
      setStep(1);
      track("alt_form_progress", { from: 2, to: 1, action: "back" });
      return;
    }
    if (step === 3 && !submitted) {
      const destination = wantsFullCourse ? 2 : 1;
      setStep(destination);
      track("alt_form_progress", { from: 3, to: destination, action: "back" });
    }
  }

  function handleSectionOneNext() {
    const trimmedName = form.firstName.trim();
    const trimmedEmail = form.email.trim();
    if (!trimmedName) {
      setStepError("Add your first name so we can personalise the invite.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setStepError("Enter a valid email address so we can send the Google Meet link.");
      return;
    }
    if (!form.role) {
      setStepError("Choose the role that best fits you.");
      return;
    }
    if (!form.industry) {
      setStepError("Select the industry you operate in.");
      return;
    }
    if (!form.ageRange) {
      setStepError("Let us know your age range.");
      return;
    }
    if (!form.aiExperience) {
      setStepError("Share your current AI experience level.");
      return;
    }
    if (!form.goals.length) {
      setStepError("Pick at least one outcome you want from the class.");
      return;
    }
    if (!form.interests.length) {
      setStepError("Select what you're registering for so we know how to follow up.");
      return;
    }
    setForm((prev) => ({ ...prev, firstName: trimmedName, email: trimmedEmail }));
    setStepError("");
    const nextStep = wantsFullCourse ? 2 : 3;
    setStep(nextStep);
    track("alt_form_progress", { from: 1, to: nextStep, wantsFullCourse });
  }

  function handleSectionTwoNext() {
    if (!form.fullCourseIntent) {
      setStepError("Let us know if you'd like the full course follow-up.");
      return;
    }
    if (form.fullCourseIntent === "yes" && !form.agreeFullCourse) {
      setStepError("Confirm the terms so we can send the enrolment details.");
      return;
    }
    setStepError("");
    setStep(3);
    track("alt_form_progress", { from: 2, to: 3, fullCourseIntent: form.fullCourseIntent });
  }

  async function handleSubmit() {
    if (submitting || submitted) return;
    if (!form.submitConsent) {
      setSubmitError("Please confirm you're ready to submit.");
      return;
    }
    setSubmitError("");
    setSubmitting(true);
    const wantsFullCourseRoute = wantsFullCourse ? form.fullCourseIntent || "interest_only" : "starterclass_only";
    const payload = {
      source: "alternative_form_modal",
      submittedAt: new Date().toISOString(),
      firstName: form.firstName.trim(),
      email: form.email.trim(),
      role: summary.role,
      roleValue: form.role,
      industry: summary.industry,
      industryValue: form.industry,
      ageRange: summary.ageRange,
      aiExperience: summary.aiExperience,
      goals: summary.goals,
      goalValues: form.goals,
      followUps: summary.followUps,
      followUpValues: form.followUps,
      interests: summary.interests,
      interestValues: form.interests,
      wantsFullCourse,
      fullCourseIntent: form.fullCourseIntent || (wantsFullCourse ? "undecided" : "not_requested"),
      agreeFullCourse: form.agreeFullCourse,
      newsletterOptIn: form.followUps.includes("newsletter"),
      reviewOptIn: form.followUps.includes("review"),
      communityOptIn: form.followUps.includes("community"),
      route: wantsFullCourseRoute,
    };
    try {
      track("alt_form_submit_attempt", { wantsFullCourse, fullCourseIntent: form.fullCourseIntent || null });
      const response = await fetch(ALTERNATIVE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setSubmitted(true);
      track("alt_form_submit_success", { route: wantsFullCourseRoute, wantsFullCourse });
    } catch (error) {
      console.error(error);
      setSubmitError("We hit a snag sending your details. Please try again in a moment.");
      track("alt_form_submit_error", { message: error?.message || String(error) });
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div
        className="absolute inset-0 backdrop-blur"
        style={{ background: isDark ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)" }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{ border: `1px solid ${palette.border}`, background: palette.surface, color: palette.textPrimary }}
      >
        <div className="px-4 md:px-6 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${palette.border}` }}>
          <div>
            <div className="text-xs uppercase tracking-[0.32em]" style={{ color: palette.textMuted }}>{sectionLabel}</div>
            <div className="font-semibold text-base md:text-lg">AI Starterclass Session Registration</div>
          </div>
          <button onClick={onClose} className="text-2xl leading-none" style={{ color: palette.textSecondary }}>×</button>
        </div>
        <div className="max-h-[85vh] overflow-y-auto p-6 space-y-6" style={{ color: palette.textSecondary }}>
          {stepError && (
            <div
              className="rounded-2xl border px-4 py-3 text-sm"
              style={{
                borderColor: palette.accentPrimary,
                background: isDark ? "rgba(200,161,69,0.08)" : "rgba(200,161,69,0.12)",
                color: palette.textPrimary,
              }}
            >
              {stepError}
            </div>
          )}

          {step === 1 && !submitted && (
            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <p>
                  Welcome! We're excited you're joining us for the FREE AI Starterclass on Saturday, 15 November 2025 at 11AM on Google Meet.
                </p>
                <p>
                  Read more on our website{' '}
                  <a
                    href="https://starterclass.icuni.org"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                    style={{ color: palette.accentSecondary }}
                  >
                    starterclass.icuni.org
                  </a>
                  .
                </p>
                <div
                  className="rounded-2xl border px-4 py-3 space-y-2 text-xs md:text-sm"
                  style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                >
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                    What to expect
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>90 minutes of practical, hands-on learning</li>
                    <li>Create your first custom AI project with knowledge packs</li>
                    <li>Build a working application using vibe coding basics</li>
                    <li>Leave with skills you can apply immediately</li>
                  </ul>
                  <div className="text-xs" style={{ color: palette.textMuted }}>
                    You'll need a ChatGPT account (Plus recommended), a willingness to experiment, and curiosity. No coding experience required.
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                      First Name (only)
                    </div>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(event) => updateField('firstName', event.target.value)}
                      placeholder="Veronica"
                      className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                      Email
                    </div>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                    Role
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {roleOptions.map((option) => {
                      const active = form.role === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateField('role', option.value)}
                          aria-pressed={active}
                          className="rounded-2xl px-4 py-2 text-sm font-medium transition"
                          style={{
                            border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                            background: active ? palette.surface : palette.surfaceSoft,
                            color: palette.textPrimary,
                          }}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                      Industry
                    </div>
                    <select
                      value={form.industry}
                      onChange={(event) => updateField('industry', event.target.value)}
                      className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                    >
                      <option value="">Select your industry</option>
                      {industryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                      Age range
                    </div>
                    <select
                      value={form.ageRange}
                      onChange={(event) => updateField('ageRange', event.target.value)}
                      className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                    >
                      <option value="">Select your age range</option>
                      {ageRangeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                    Your AI experience
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {aiExperienceOptions.map((option) => {
                      const active = form.aiExperience === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateField('aiExperience', option.value)}
                          aria-pressed={active}
                          className="rounded-2xl px-4 py-2 text-sm font-medium transition text-left"
                          style={{
                            border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                            background: active ? palette.surface : palette.surfaceSoft,
                            color: palette.textPrimary,
                          }}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                    What you want from the class
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {goalOptions.map((option) => {
                      const active = form.goals.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleField('goals', option.value)}
                          aria-pressed={active}
                          className="rounded-2xl px-4 py-2 text-sm font-medium transition text-left"
                          style={{
                            border: `1px solid ${active ? palette.accentSecondary : palette.border}`,
                            background: active ? palette.surface : palette.surfaceSoft,
                            color: palette.textPrimary,
                          }}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                    Do you want to…
                  </div>
                  <div className="mt-2 grid gap-2 md:grid-cols-3">
                    {followUpOptions.map((option) => {
                      const active = form.followUps.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleField('followUps', option.value)}
                          aria-pressed={active}
                          className="rounded-2xl border px-4 py-3 text-left text-sm transition"
                          style={{
                            border: `1px solid ${active ? palette.accentSecondary : palette.border}`,
                            background: active ? palette.surface : palette.surfaceSoft,
                            color: palette.textPrimary,
                          }}
                        >
                          <div className="font-semibold">{option.label}</div>
                          {option.hint && (
                            <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>
                              {option.hint}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                    Interests
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {interestOptions.map((option) => {
                      const active = form.interests.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleField('interests', option.value)}
                          aria-pressed={active}
                          className="rounded-2xl border px-5 py-3 text-sm font-semibold transition"
                          style={{
                            border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                            background: active ? palette.surface : palette.surfaceSoft,
                            color: palette.textPrimary,
                          }}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <GlassButton onClick={handleSectionOneNext} className="px-6 py-3">
                  Continue
                </GlassButton>
                <button
                  type="button"
                  className="text-sm underline underline-offset-4"
                  style={{ color: palette.textSecondary }}
                  onClick={onClose}
                >
                  I'll finish this later
                </button>
              </div>
            </div>
          )}

          {step === 2 && !submitted && (
            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <div className="rounded-2xl border px-4 py-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                    Full Starterclass course
                  </div>
                  <p className="mt-2">
                    The Starterclass is Session 1 of our nine-session programme running through January 2026. Every session is live, project-based, and paired with office hours.
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-xs">
                    <li>Deploy AI-powered websites and vibe-coded applications</li>
                    <li>Build autonomous agents and AI short-film pipelines</li>
                    <li>Master n8n for assistants, orchestration, and observability</li>
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: palette.textMuted }}>
                    Special pricing for Starterclass attendees — $300 total or $100/month across Nov, Dec, and Jan. Save 10% if you enrol before 15 November.
                  </p>
                </div>
                <div className="grid gap-2 text-xs" style={{ color: palette.textMuted }}>
                  <div>Sat 29 Nov 2025 — Canvas Deep Dive & Vibe Coding</div>
                  <div>Sat 13 Dec 2025 — ChatGPT Agents 1: Prompts, Processes & Systems</div>
                  <div>Sat 27 Dec 2025 — ChatGPT Agents 2: AI Short-Film Production</div>
                  <div>Sat 10 Jan 2026 — N8N Deep Dive: Create Your First AI Assistant</div>
                  <div>Sat 24 Jan 2026 — N8N Mastery: Orchestrate the System</div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                  Would you like to enrol for the full course?
                </div>
                <div className="mt-2 grid gap-2 md:grid-cols-3">
                  {[
                    { value: 'yes', label: 'Yes — reserve my seat' },
                    { value: 'maybe', label: 'Maybe — send details' },
                    { value: 'no', label: 'Not this time' },
                  ].map((option) => {
                    const active = form.fullCourseIntent === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => selectFullCourseIntent(option.value)}
                        aria-pressed={active}
                        className="rounded-2xl border px-4 py-3 text-sm font-semibold transition"
                        style={{
                          border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                          background: active ? palette.surface : palette.surfaceSoft,
                          color: palette.textPrimary,
                        }}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label
                className="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
              >
                <input
                  type="checkbox"
                  checked={form.agreeFullCourse}
                  onChange={(event) => updateField('agreeFullCourse', event.target.checked)}
                  disabled={form.fullCourseIntent !== 'yes'}
                  className="mt-1 h-4 w-4 rounded"
                  style={{ accentColor: palette.accentSecondary }}
                />
                <span>
                  I agree to the Terms & Privacy and understand the refund policy (cancel up to 48 hours before the first paid session for a full refund).
                </span>
              </label>

              <div className="flex flex-wrap gap-3">
                <GlassButton onClick={handleSectionTwoNext} className="px-6 py-3">
                  Continue
                </GlassButton>
                <GlassButton variant="secondary" onClick={handleBack} className="px-6 py-3">
                  Back
                </GlassButton>
              </div>
            </div>
          )}

          {step === 3 && !submitted && (
            <div className="space-y-6 text-sm">
              <div
                className="rounded-2xl border px-4 py-3 space-y-2"
                style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              >
                <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                  Review & privacy
                </div>
                <p>We collect the minimum necessary data to run the cohort and support you.</p>
                <p>Data collected: Name, email, form responses, attendance, and homework links.</p>
                <p>Security: Access is limited to ICUNI admins on a need-to-know basis. We use least-privilege accounts and audit access periodically.</p>
                <p>Retention: Enrollment records are retained for up to 24 months; you may request deletion anytime.</p>
                <p>Your rights: Access, correction, deletion. Email: <a href="mailto:starterclass@icuni.org" className="underline" style={{ color: palette.accentSecondary }}>starterclass@icuni.org</a>.</p>
              </div>

              <div
                className="rounded-2xl border px-4 py-3 text-xs space-y-2"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
              >
                <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                  Snapshot
                </div>
                <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
                  {(form.firstName || 'First name')} · {(form.email || 'email pending')}
                </div>
                <div>Role: {summary.role || '—'}</div>
                <div>Industry: {summary.industry || '—'}</div>
                <div>AI experience: {summary.aiExperience || '—'}</div>
                <div>Goals: {summary.goals.length ? summary.goals.join(', ') : '—'}</div>
                <div>Interests: {summary.interests.length ? summary.interests.join(', ') : '—'}</div>
              </div>

              <label
                className="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
              >
                <input
                  type="checkbox"
                  checked={form.submitConsent}
                  onChange={(event) => updateField('submitConsent', event.target.checked)}
                  className="mt-1 h-4 w-4 rounded"
                  style={{ accentColor: palette.accentSecondary }}
                />
                <span>Yes — submit my registration.</span>
              </label>

              {submitError && (
                <div
                  className="rounded-2xl border px-4 py-3 text-sm"
                  style={{
                    borderColor: palette.accentSecondary,
                    background: isDark ? "rgba(123,61,240,0.12)" : "rgba(123,61,240,0.14)",
                    color: palette.textPrimary,
                  }}
                >
                  {submitError}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <GlassButton onClick={handleSubmit} className="px-6 py-3" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit registration'}
                </GlassButton>
                <GlassButton variant="secondary" onClick={handleBack} className="px-6 py-3" disabled={submitting}>
                  Back
                </GlassButton>
              </div>
            </div>
          )}

          {submitted && (
            <div className="space-y-5 text-sm">
              <div>
                <div className="text-2xl font-semibold" style={{ color: palette.textPrimary }}>
                  You're confirmed!
                </div>
                <p className="mt-3">
                  Thanks {form.firstName || 'there'} — your details are on the way to our N8N workflow. Expect the Google Meet invite and prep pack in your inbox shortly.
                </p>
              </div>
              <div
                className="rounded-2xl border px-4 py-3 text-xs"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textSecondary }}
              >
                We’ll keep you posted with reminder emails 24 hours before the session and any full-course follow-up you requested.
              </div>
              <div className="flex flex-wrap gap-3">
                <GlassButton
                  onClick={() => {
                    track('alt_form_calendar', { source: 'success' });
                    onClose();
                    if (onCalendar) onCalendar();
                  }}
                  className="px-6 py-3"
                >
                  Add to calendar
                </GlassButton>
                <GlassButton variant="secondary" onClick={onClose} className="px-6 py-3">
                  Close
                </GlassButton>
              </div>
            </div>
          )}
        </div>
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
            Add 15 Nov · 11:00 AM to calendar
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
