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

const INTRO_NAME = "Essentials and Customisations";
const INTRO_START_ISO = "2025-11-15T11:00:00Z"; // Sat 15 Nov 2025 11:00 AM UK (UTC)
const INTRO_END_ISO = "2025-11-15T12:30:00Z";

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
      badge: "Future lab · registration soon",
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
      badge: "Future lab · registration soon",
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
      badge: "Future lab · registration soon",
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
      badge: "Future lab · registration soon",
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
      badge: "Future lab · registration soon",
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

const TOOL_DEFINITIONS = [
  {
    slug: "universal-ai-personality",
    title: "Universal AI Personality",
    tagline: "Design Custom Instructions that make ChatGPT feel like it works for you.",
    accent: "#C28424",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60",
  },
  {
    slug: "task-codes",
    title: "Task Codes Workspace",
    tagline: "Organise every AI request with consistent project codes.",
    accent: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=60",
  },
  {
    slug: "client-brief-generator",
    title: "Client Brief Generator",
    tagline: "Capture every requirement, auto-save it, and export a polished brief.",
    accent: "#3B82F6",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60",
  },
  {
    slug: "content-quality-analyzer",
    title: "Content Quality Analyzer",
    tagline: "Paste anything, get a structured critique plus a rewritten version.",
    accent: "#F59E0B",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=60",
  },
  {
    slug: "client-project-planner",
    title: "Client Project Planner & Value Calculator",
    tagline: "Scope projects, estimate value, and package a client-facing summary.",
    accent: "#10B981",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=60",
  },
  {
    slug: "youtube-mp3",
    title: "YouTube to MP3 Studio",
    tagline: "Pull the cleanest audio from any lecture or talk in seconds.",
    accent: "#EF4444",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=60",
  },
];

const PROMPT_SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/1_P4Pkf8lprKff6doEjFj2uT-qScI1_CSwGDWVj1cU-M/export?format=csv";

const PROMPT_IMAGE_POOL = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1500534314209-43a1cd3b84b9?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=60",
];

const PROMPT_FALLBACKS = [
  {
    action: "Win a hesitant client",
    prompt:
      "[STRATEGY] Review this proposal and highlight 3 risks plus one stronger angle to pitch.",
  },
  {
    action: "Prep a kickoff call",
    prompt:
      "[PLAN] Build a 30-minute agenda with probing questions for a new automation client.",
  },
  {
    action: "Ship research faster",
    prompt: "[RESEARCH] Summarise the top 5 AI trends for boutique consultancies with proof points.",
  },
];

const LAB_LEVEL_LABELS = {
  starterclass: "Level 1",
  canvas: "Level 2",
  agents1: "Level 3",
  agents2: "Level 4",
  n8n_deep_dive: "Level 5",
  n8n_mastery: "Level 6",
};

const LAB_LEVEL_ACCENTS = {
  1: {
    border: "rgba(194,132,36,0.45)",
    background: "linear-gradient(135deg, rgba(255,233,208,0.8), rgba(255,255,255,0.9))",
  },
  2: {
    border: "rgba(123,61,240,0.45)",
    background: "linear-gradient(135deg, rgba(233,223,255,0.85), rgba(255,255,255,0.92))",
  },
  3: {
    border: "rgba(59,92,204,0.45)",
    background: "linear-gradient(135deg, rgba(209,230,255,0.85), rgba(246,249,255,0.95))",
  },
  4: {
    border: "rgba(16,185,129,0.35)",
    background: "linear-gradient(135deg, rgba(209,251,235,0.9), rgba(255,255,255,0.96))",
  },
  5: {
    border: "rgba(248,113,113,0.4)",
    background: "linear-gradient(135deg, rgba(255,228,230,0.92), rgba(255,255,255,0.95))",
  },
};

const GLOBAL_NAV_LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "lab", label: "Starterclass Lab", href: "/ai-starterclass-lab.html" },
  { key: "tools", label: "Tools", href: "/tools.html" },
  { key: "prompts", label: "Prompt Library", href: "/prompts.html" },
];

const MONTH_BUNDLES = [
  { key: "nov", label: "November momentum", modules: ["starterclass", "canvas"], priceUSD: 0 },
  { key: "dec", label: "December agent systems", modules: ["agents1", "agents2"], priceUSD: 0 },
  { key: "jan", label: "January automation labs", modules: ["n8n_deep_dive", "n8n_mastery"], priceUSD: 0 },
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

const FAQ_ITEMS = [
  {
    question: "Do I need the full lab sequence to start?",
    answer:
      "No. The Starterclass Lab is designed as a complete win on its own. When you’re ready for more, add the November, December, or January labs one cycle at a time.",
  },
  {
    question: "Will there be a replay?",
    answer:
      "Yes. As soon as the live session wraps, this page updates with the archived lab so you can keep studying.",
  },
  {
    question: "Is the Starterclass really free?",
    answer:
      "Yes. The Starterclass, the on-demand lab, and every future session listed on this page are free to attend.",
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
    question: "Can I join just one month of the lab sequence?",
    answer:
      "Yes. Treat each month as its own lab cycle. Join the ones that match your goals and revisit the others later—no payment needed.",
  },
  {
    question: "What tools will we touch?",
    answer:
      "We work inside ChatGPT Projects, Custom GPTs, and our vibe-coding toolkit. The full lab sequence adds shared assets for AI film production and n8n automation. Everything is demoed live with no-code interfaces.",
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

function ScrollControls() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setShowTop(y > 320);
      setShowBottom(y < maxScroll - 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { theme, palette } = useTheme();
  const isDark = theme === "dark";
  const dockVisible = showTop || showBottom;
  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-row flex-wrap gap-3 transition ${dockVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ filter: dockVisible ? "none" : "blur(0.5px)" }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-full px-4 py-3 text-sm font-semibold"
        style={{
          border: `1px solid ${palette.border}`,
          background: isDark ? palette.surface : palette.surfaceSoft,
          color: palette.textPrimary,
          boxShadow: palette.shadow,
          opacity: showTop ? 1 : 0.4,
          pointerEvents: showTop ? "auto" : "none",
        }}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
      <button
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
        className="rounded-full px-4 py-3 text-sm font-semibold"
        style={{
          border: `1px solid ${palette.border}`,
          background: isDark ? palette.surface : palette.surfaceSoft,
          color: palette.textPrimary,
          boxShadow: palette.shadow,
          opacity: showBottom ? 1 : 0.4,
          pointerEvents: showBottom ? "auto" : "none",
        }}
        aria-label="Skip to bottom"
      >
        ↓ Bottom
      </button>
    </div>
  );
}

function FooterMenu({ onShowTerms, onShowPrivacy, onShowContact }) {
  const { palette } = useTheme();
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Starterclass Lab", href: "/ai-starterclass-lab.html" },
    { label: "Tools", href: "/tools.html" },
    { label: "Prompt Library", href: "/prompts.html" },
  ];
  const legalLinks = [
    onShowTerms && { label: "Terms", onClick: onShowTerms },
    onShowPrivacy && { label: "Privacy", onClick: onShowPrivacy },
    onShowContact && { label: "Contact", onClick: onShowContact },
  ].filter(Boolean);
  return (
    <footer className="mt-24 mb-16">
      <Section>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: palette.textMuted }}>
            <div>© {new Date().getFullYear()} ICUNI — Starterclass</div>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="underline-offset-4"
                  style={{ color: palette.textSecondary }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-4 text-xs" style={{ color: palette.textSecondary }}>
              {legalLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  className="underline underline-offset-4"
                  onClick={link.onClick}
                  style={{ color: palette.textSecondary }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Section>
    </footer>
  );
}

function GlobalNavRow({ activeKey }) {
  const { palette } = useTheme();
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Site">
      {GLOBAL_NAV_LINKS.map((link) => {
        const isActive = link.key === activeKey;
        return (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
            style={{
              background: isActive ? palette.accentSecondary : palette.surfaceSoft,
              color: isActive ? "#fff" : palette.textSecondary,
              border: `1px solid ${isActive ? palette.accentSecondary : palette.border}`,
            }}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
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

function usePageTheme(storageKey = "sc_theme_pref", fallback = "light") {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return fallback;
    try {
      return localStorage.getItem(storageKey) || fallback;
    } catch {
      return fallback;
    }
  });
  const palette = useMemo(() => getPalette(theme), [theme]);
  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const root = document.documentElement;
    const body = document.body;
    const themeClass = theme === "dark" ? "theme-dark" : "theme-light";
    const otherClass = theme === "dark" ? "theme-light" : "theme-dark";
    const backgroundColor = theme === "dark" ? "#030213" : "#FCFBFF";
    root.classList.remove(otherClass);
    root.classList.add(themeClass);
    root.dataset.theme = theme;
    body.dataset.theme = theme;
    root.style.backgroundColor = backgroundColor;
    body.style.backgroundColor = backgroundColor;
    body.style.color = palette.textPrimary;
    return () => {};
  }, [palette.textPrimary, theme]);
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const handleStorage = (event) => {
      if (event.key === storageKey && event.newValue) {
        setTheme(event.newValue);
      }
    };
    const handleBroadcast = (event) => {
      if (event.detail?.theme) {
        setTheme(event.detail.theme);
      }
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("sc-theme-change", handleBroadcast);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("sc-theme-change", handleBroadcast);
    };
  }, [storageKey]);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, next);
        window.dispatchEvent(new CustomEvent("sc-theme-change", { detail: { theme: next } }));
      } catch {}
      return next;
    });
  }, [storageKey]);
  return { theme, palette, toggleTheme };
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

function sessionStatusLabel(status, sessionKey) {
  switch (status) {
    case "live":
      return "Live now";
    case "completed":
      return LAB_LEVEL_LABELS[sessionKey] || "Level complete";
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
function ClientValueCalculator({ onIntro, onExplore }) {
  const { palette } = useTheme();
  const [hours, setHours] = useState(2);
  const [focus, setFocus] = useState("foundation");

  const focusOptions = [
    { key: "foundation", label: "Foundation", icon: "🧱" },
    { key: "build", label: "Build workflows", icon: "🛠️" },
    { key: "scale", label: "Scale delivery", icon: "📈" },
  ];

  const results = useMemo(() => {
    return {
      starterclass_only: {
        badge: "Starterclass Lab",
        title: "Open the AI Starterclass Lab",
        summary:
          "Work through five interactive levels covering prompts, personalisation, copilots, tooling, and safety. Earn points as you go.",
        detail:
          "Perfect when you want to learn immediately. The lab mirrors the live session with quizzes, templates, and self-scoring.",
        cta: "Study the lab",
        action: () => {
          window.location.href = "/ai-starterclass-lab.html";
        },
        secondary: { label: "Register the next live sprint", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Use the lab to master the basics before the next live call.",
          build: "Click through the interactive levels whenever you need a refresher.",
          scale: "Share the lab with teammates so everyone levels up fast.",
        },
      },
      full_track: {
        badge: "Lab roadmap",
        title: "Follow the entire lab sequence",
        summary:
          "November focuses on Starterclass fundamentals, December on agent systems, and January on automation labs.",
        detail:
          "Ideal when you want structure across several months. Add the roadmap to your calendar and you’ll get reminders when each lab unlocks.",
        cta: "Explore upcoming labs",
        action: () => onExplore?.({ months: 3 }),
        secondary: { label: "Lock your seat for the next live build", action: () => onIntro?.() },
        focusNotes: {
          foundation: "Plan the lab path now so momentum never drops.",
          build: "Line up the Canvas, agents, and automation labs right after Starterclass.",
          scale: "Use every lab to build a repeatable workflow for your team.",
        },
      },
    };
  }, [onExplore, onIntro]);

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
  const [showPaid, setShowPaid] = useState(true);
  const [activeModule, setActiveModule] = useState("canvas");
  const [heroGlowPoint, setHeroGlowPoint] = useState({ x: 0.5, y: 0.5 });
  const [isHeroGlowActive, setIsHeroGlowActive] = useState(false);
  const [siteGlowPoint, setSiteGlowPoint] = useState({ x: 0.5, y: 0.5 });
  const [isSiteGlowActive, setIsSiteGlowActive] = useState(false);
  const { theme: activeTheme, palette, toggleTheme } = usePageTheme();
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [overviewFocus, setOverviewFocus] = useState(() => OVERVIEW_WINS[0]?.key || "projects");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(FAQ_ITEMS[0]?.question || "");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [fullTrackExpanded, setFullTrackExpanded] = useState(false);
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
  const isDark = activeTheme === "dark";
  const announcementMessages = useMemo(() => {
    if (!heroSession) {
      return ["Cohort timeline updating", "", ""];
    }
    const countdownHeadline = formatCountdownHeadline(countdown);
    const statusLine =
      scheduleCompleted
        ? "Starterclass Lab available on-demand"
        : heroStatus === "live"
        ? "Session live now — check your inbox for the Meet link"
        : countdown.expired
        ? "Session starting now"
        : `Next live lab in ${countdownHeadline}`;
    const labLine = "Explore the AI Starterclass Lab anytime";
    return [
      `${heroSession.title} · ${formatSessionDateLabel(heroSession)}`,
      statusLine,
      labLine,
    ];
  }, [countdown, heroSession, heroStatus, scheduleCompleted]);
  const testimonials = TESTIMONIALS;
  const testimonial = testimonials[activeTestimonial] || testimonials[0];
  const heroAudienceLine = heroSession?.hero?.audience ||
    "Free Starterclass for business leaders, consultants, and curious operators — no coding required.";
  const heroBadge = heroSession?.hero?.badge || "Starterclass · no payment required";
  const heroChipLabel = heroSession?.hero?.label || heroSession?.title || "All sessions completed";
  const heroTitle = heroSession?.title || INTRO_NAME;
  const heroTimeDetail = heroSession ? formatSessionDateLabel(heroSession) : "Sessions completed";
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
    if (sessions?.length) {
      const wedge = Math.floor(100 / sessions.length) || 16;
      return sessions.map((session, idx) => {
        const color = PIE_TOPICS[idx % PIE_TOPICS.length]?.color || "#C8A145";
        return {
          key: session.title,
          value: wedge,
          desc: session.desc,
          headline: session.hero?.label || session.outcome,
          outcome: session.outcome,
          toolkit: session.hero?.audience,
          color,
        };
      });
    }
    return PIE_TOPICS;
  }, [sessions]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("sc_theme_pref", activeTheme);
      } catch {}
    }
    document.body.style.background = palette.simpleBackground;
    document.body.style.color = palette.textPrimary;
  }, [activeTheme, palette]);

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
          "name": `${bundle.label} — ICUNI Lab Roadmap`,
          "startDate": startDate,
          "endDate": endDate,
          "courseMode": "https://schema.org/OnlineCourse",
          "location": {
            "@type": "VirtualLocation",
            "url": "https://starterclass.icuni.org/",
          },
          "offers": {
            "@type": "Offer",
            "price": String(bundle.priceUSD ?? 0),
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
                  aria-label={`Switch to ${activeTheme === "dark" ? "light" : "dark"} mode`}
                >
                  {activeTheme === "dark" ? "☀️" : "🌙"}
                </button>
              </div>
              <div className="ml-auto hidden md:flex items-center text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.textSecondary }}>
                {scheduleCompleted ? "Labs archived" : "Starterclass Lab · live access"}
              </div>
            </div>
            <div className="pt-2 flex justify-center">
              <GlobalNavRow activeKey="home" />
            </div>
          </Section>
        </header>

        <Section className="pt-10 pb-16">
          <GlowCard className="p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    track("hero_chip_lab", { source: "hero_chip" });
                    window.location.href = "/ai-starterclass-lab.html";
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${palette.accentPrimary}33, ${palette.accentSecondary}33)`,
                    border: `1px solid ${palette.border}`,
                    color: palette.textPrimary,
                  }}
                >
                  <span aria-hidden="true">🎟️</span>
                  {heroChipLabel}
                  <span className="text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
                    Open lab
                  </span>
                </button>
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
                  The entire Starterclass experience now lives inside an on-demand lab. Click through interactive levels, collect points, and keep building alongside the live sessions that rotate every few weeks.
                </p>
                <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                  {heroAudienceLine}
                </p>
                <p className="mt-2 text-xs" style={{ color: palette.textMuted }}>
                  Delivered live online via Google Meet. Access details arrive once you register.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <GlassButton
                    className="px-6 py-4 text-lg"
                    onClick={() => {
                      track("hero_lab_primary", { source: "hero_cta" });
                      window.location.href = "/ai-starterclass-lab.html";
                    }}
                  >
                    Enter the AI Starterclass Lab
                  </GlassButton>
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
                    variant="secondary"
                  >
                    {scheduleCompleted ? "Join the waitlist" : "Reserve a live seat"}
                  </GlassButton>
                  <p className="text-xs" style={{ color: palette.textMuted }}>
                    Study the replay instantly, then join the next live sprint for Q&A.
                  </p>
                </div>
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
                <div className="mt-8 rounded-3xl border p-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Lab playlist</div>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    {heroTopics.slice(0, 4).map((topic) => (
                      <div key={topic.key} className="rounded-2xl border p-3" style={{ borderColor: `${topic.color}55`, background: palette.surface }}>
                        <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
                          {topic.key}
                        </div>
                        <p className="mt-1 text-xs" style={{ color: palette.textSecondary }}>
                          {topic.headline}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 text-xs underline underline-offset-4"
                    style={{ color: palette.accentSecondary }}
                    onClick={() => handleNavClick("#overview-tab", "overview")}
                  >
                    See the full session breakdown
                  </button>
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
                        The Starterclass counts toward the full lab sequence. When you’re ready, add the monthly bundles to your calendar so you never miss a build.
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
                              const badgeLabel = isStarterclassSlot ? "Starterclass Lab" : "Future lab";
                              const statusLabel = sessionStatusLabel(s.status, s.k);
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
                            Ready for more after the Starterclass? Explore the curriculum tab to see how the future labs expand these builds.
                          </div>
                        </>
                      ) : (
                        <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                          All sessions are archived. Join the waitlist from the hero to hear about future dates.
                        </p>
                      )
                    ) : (
                      <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                        Tap to view the Starterclass time, local conversions, and the next labs in the roadmap.
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
                        <span className="text-xl font-semibold">Lab Navigator</span>
                        <span className="text-xl" aria-hidden="true" style={{ color: palette.textSecondary }}>
                          {valueCalcOpen ? "–" : "+"}
                        </span>
                      </button>
                      {valueCalcOpen ? (
                        <ClientValueCalculator
                          onIntro={() => triggerIntroForm("cvc_intro")}
                          onExplore={() => revealPaidAndGoCurriculum("cvc_explore")}
                        />
                      ) : (
                        <p className="mt-3 text-xs" style={{ color: palette.textSecondary }}>
                          Preview whether you should stay inside the on-demand lab or book every upcoming live sprint.
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
                <h3 className="text-lg font-semibold">Lab roadmap by month</h3>
                <p className="text-xs" style={{ color: palette.textSecondary }}>
                  Three monthly focuses: Starterclass foundations, agent systems, and automation labs.
                </p>
              </div>
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                  {monthBundles.map((bundle) => {
                    const filtered = sessionTimeline.all.filter((s) => s.month === bundle.key && s.track !== "break");
                    const monthLabel = `${bundle.label} · Lab cycle`;
                    return (
                    <div key={bundle.key} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{monthLabel}</h3>
                        <div className="text-xs" style={{ color: palette.textMuted }}>Weekly cadence · free live labs</div>
                      </div>
                      <div className="space-y-4">
                        {filtered.map((module) => {
                          const open = activeModule === module.k;
                          const statusText = sessionStatusLabel(module.status, module.k);
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
                    <h3 className="text-lg font-semibold">What each month unlocks</h3>
                    <ul className="space-y-3 text-sm" style={{ color: palette.textSecondary }}>
                      {monthBundles.map((bundle) => (
                        <li key={bundle.key} className="flex flex-col gap-1">
                          <span className="font-semibold" style={{ color: palette.textPrimary }}>{bundle.label}</span>
                          <span className="text-xs" style={{ color: palette.textMuted }}>
                            {sessionTimeline.all
                              .filter((module) => module.month === bundle.key && module.track !== "break")
                              .map((module) => module.title)
                              .join(" · ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs" style={{ color: palette.textMuted }}>
                      Every lab remains free to attend. The roadmap simply keeps you organised.
                    </div>
                    <div className="text-xs" style={{ color: palette.textMuted }}>
                      Sessions auto-mark as Archived after each live run so you always know what’s next.
                    </div>
                  </GlowCard>
                  <GlowCard className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">Lab status</h3>
                    <div className="text-sm" style={{ color: palette.textSecondary }}>
                      {scheduleCompleted
                        ? "All labs are archived. Join the waitlist to be notified when the next cycle opens."
                        : `Next unlock: ${heroSession?.title || "Starterclass"} on ${heroSession ? formatSessionDateLabel(heroSession) : formatSessionDateLabel(SESSIONS[0])}.`}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs" style={{ color: palette.textMuted }}>
                      <span>Countdown updates automatically after each live lab.</span>
                      <span>Hero, pie chart, and tabs refresh at 12:30 UK time the day of the next session.</span>
                    </div>
                  </GlowCard>
                </div>
              </div>
              <div className="space-y-8" id="full-track-panel" ref={fullTrackSectionAnchorRef}>
                {/* Reserved for future roadmap highlights */}
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
                      <li>Every live session becomes an interactive lab you can revisit on this page.</li>
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
                    <span>Upcoming lab</span>
                    <span style={{ color: module.status === "completed" ? palette.textMuted : module.status === "live" ? palette.accentSecondary : palette.accentPrimary }}>
                      {sessionStatusLabel(module.status, module.k)}
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

          <ScrollControls />
          <VeronicaChatbot />

          <FooterMenu
            onShowTerms={() => setShowTerms(true)}
            onShowPrivacy={() => setShowPrivacy(true)}
            onShowContact={() => setShowContact(true)}
          />

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
                      Replays unlock automatically in the Lab. You’ll receive confirmation and prep materials by email within a few minutes of submitting.
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
                <li><span style={{ color: palette.textMuted }}>Access:</span> Starterclass labs are free. Corporate workshops and private trainings use their own agreements.</li>
                <li><span style={{ color: palette.textMuted }}>Changes:</span> Not applicable for the free lab experience. Optional add-ons will publish their own policies if needed.</li>
                <li><span style={{ color: palette.textMuted }}>Recordings & materials:</span> Starterclass labs live on this page indefinitely alongside slide decks and prompt kits.</li>
                <li><span style={{ color: palette.textMuted }}>Conduct:</span> Be respectful in live sessions and forums. Disruptive behaviour may result in removal from the live lab.</li>
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
                <li><span style={{ color: palette.textMuted }}>Processors:</span> Google (Forms/Sheets/Drive), our email provider (Postmark/SendGrid), and n8n automations for reminders.</li>
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
      setStepError("Let us know if you'd like lab-sequence follow-ups.");
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
                    Every session listed here is included for free. Use this summary to decide which labs to join live.
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
                  Would you like updates about the full lab sequence?
                </div>
                <div className="mt-2 grid gap-2 md:grid-cols-3">
                  {[
                    { value: 'yes', label: 'Yes — remind me for every lab' },
                    { value: 'maybe', label: 'Maybe — send highlights' },
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
                  I agree to the Terms & Privacy and understand this lab is free; you’ll send reminders before each live session.
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
                We’ll keep you posted with reminder emails 24 hours before the session and any lab-sequence follow-up you requested.
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
const LAB_PERSONA_OPTIONS = [
  {
    value: "creative",
    label: "Creative / Marketing",
    heading: "Client Project Copilot – Creative",
    body:
      "You translate messy creative briefs into clear deliverables, campaign plans, and client-ready updates. Ask 3–5 clarifying questions, separate facts vs assumptions, and flag risks before presenting ideas.",
  },
  {
    value: "consulting",
    label: "Consulting / Professional Services",
    heading: "Client Project Copilot – Consulting",
    body:
      "You specialise in structuring projects, defining scope, and aligning stakeholders. Surface unknowns early, propose phased approaches, and highlight legal or compliance considerations.",
  },
  {
    value: "finance",
    label: "Finance / FinTech",
    heading: "Client Project Copilot – Finance",
    body:
      "You turn client requests into structured analyses, lightweight models, and investor-ready summaries. Always note assumptions, confidence levels, and regulatory implications.",
  },
  {
    value: "healthcare",
    label: "Healthcare / Psych / Life Sciences",
    heading: "Client Project Copilot – Healthcare",
    body:
      "You emphasise ethics, privacy, and clear disclaimers. Capture context carefully, suggest verification steps, and keep recommendations grounded in evidence-based practice.",
  },
  {
    value: "nonprofit",
    label: "Nonprofit / Public Sector",
    heading: "Client Project Copilot – Public Impact",
    body:
      "You turn policy goals into action plans, stakeholder updates, and grant-friendly reporting. Clarify impact metrics, constraints, and accountability requirements.",
  },
  {
    value: "tech",
    label: "Tech / IT / Software",
    heading: "Client Project Copilot – Technology",
    body:
      "You break feature requests into user stories, technical tasks, risks, and comms packs. Highlight dependencies, integrations, and test plans before implementation.",
  },
  {
    value: "other",
    label: "Other",
    heading: "Client Project Copilot – Universal",
    body:
      "You adapt to whatever project lands on your desk. Start by restating the goal, list key assumptions, then recommend the smartest starting command.",
  },
];

const LAB_COMMANDS = [
  { command: "/scope", summary: "Scope the project", detail: "Summarise context, list unknowns, and present a phases table." },
  { command: "/brief", summary: "Draft a project brief", detail: "Turn raw inputs into a polished, client-facing overview." },
  { command: "/plan", summary: "Implementation plan", detail: "Lay out milestones, owners, and checklists." },
  { command: "/email", summary: "Client email", detail: "Draft ready-to-send updates or approvals." },
  { command: "/retro", summary: "Project retrospective", detail: "Capture lessons, wins, and fixes in a tight doc." },
];

const LAB_INPUT_OPTIONS = [
  "Industry / field",
  "Client type",
  "Project description",
  "Urgency",
  "Estimated effort",
  "Strategic value",
  "Your base day rate / internal cost",
  "Risks/constraints already known",
];

const LAB_OUTPUT_TEMPLATES = [
  {
    value: "minimal",
    title: "Minimalist",
    bullets: ["Summary", "Price band", "3–5 tasks"],
    tip: "Choose Minimalist when speed matters and you just need a direction.",
  },
  {
    value: "standard",
    title: "Standard",
    bullets: ["Summary", "Price band with explanation", "Phases & tasks", "Risks & questions", "Email skeleton"],
    tip: "Use Standard for most client-facing scoping conversations.",
  },
  {
    value: "detailed",
    title: "Detailed",
    bullets: ["Everything in Standard", "Timeline", "Suggested deliverable formats"],
    tip: "Detailed is for high-stakes work when you need zero ambiguity.",
  },
];

const LAB_RISKS = [
  {
    title: "Legal / Compliance",
    bullets: ["Don't treat outputs as legal advice.", "Flag when regulations may apply.", "Note when clients need professional review."],
  },
  {
    title: "Healthcare / Mental Health",
    bullets: ["Never offer diagnoses.", "Keep PHI out of prompts.", "Suggest human review before acting."],
  },
  {
    title: "Financial Advice",
    bullets: ["Provide ranges, not guarantees.", "Disclose assumptions.", "Remind clients to verify numbers."],
  },
  {
    title: "Confidential Data",
    bullets: ["Strip identifiers before sharing.", "Store sensitive notes outside chat.", "Mark unknowns vs facts."],
  },
];

const LAB_BADGES = [
  { min: 90, label: "AI Operator", description: "You run AI like infrastructure. Build full workflows next." },
  { min: 70, label: "Workflow Builder", description: "You're building systems. Upgrade tiny tools into team utilities." },
  { min: 40, label: "Prompt Explorer", description: "You know the tools exist. Commit one real workflow this week." },
  { min: 0, label: "Prompt Tourist", description: "You're still visiting. Re-run the lab with a live project." },
];

const PROMPT_ASSEMBLY_PARTS = [
  {
    key: "role",
    label: "Role",
    options: [
      "You are my project assistant.",
      "You are my client success lead.",
      "You are my strategic advisor.",
    ],
  },
  {
    key: "context",
    label: "Context",
    options: [
      "We are starting a 6-week branding project for a boutique e-commerce brand.",
      "We just wrapped discovery for a fintech workflow overhaul.",
      "We are pitching a content retainer for a healthcare startup.",
    ],
  },
  {
    key: "goal",
    label: "Goal",
    options: [
      "Confirm scope, timeline, and next steps.",
      "Turn messy notes into a concise update.",
      "Highlight decisions and ask for approval by Friday.",
    ],
  },
  {
    key: "format",
    label: "Format",
    options: [
      "Use sections: Greeting, Summary, Bullet list, CTA.",
      "Use sections: Situation, Actions, Next steps.",
      "Use sections: Recap, Timeline, Questions, CTA.",
    ],
  },
];

const LAB_SCENARIOS = [
  {
    id: "brand_sprint",
    title: "Brand sprint kickoff",
    detail: "Client sent a stream-of-consciousness email with hopes, fears, and random inspo links.",
    best: "scope",
  },
  {
    id: "email_rescue",
    title: "Email rescue",
    detail: "You need to send a clear plan back to a client who keeps changing requirements.",
    best: "brief",
  },
  {
    id: "implementation",
    title: "Implementation push",
    detail: "You already have a brief and just received the green light to execute.",
    best: "plan",
  },
];

const STRATEGY_GAMIFIED_CHOICES = {
  stop: [
    "Manual status emails",
    "Formatting research by hand",
    "Guessing project scope",
    "Rewriting the same prompt",
  ],
  keep: [
    "Final client approval",
    "Budget sign-off",
    "Risk decisions",
    "Team coaching moments",
  ],
  skill: [
    "Agent orchestration",
    "Automation design",
    "AI-native storytelling",
    "Data instrumentation",
  ],
};

const CUSTOM_TWEAK_OPTIONS = [
  "Tone and personality",
  "Structure preferences",
  "Clarifying question rules",
  "How to handle uncertainty",
  "Default deliverable format",
  "Depth cues (quick vs deep)",
];

const PROMPT_BLUEPRINT_TEXT = `Prompt Blueprint

Role: "You are my [X] assistant…"
Context: "Here is the situation…"
Goal: "Your job is to help me…"
Constraints: "Keep it under 200 words / use bullets…"
Output format: "Use headings: A, B, C…"
Example (optional): "Here’s what a good answer looks like…"`;

const CUSTOM_INSTRUCTIONS_TEMPLATE = `Treat me as a busy knowledge worker.

Respond like this by default:
- Start with 1–2 bullet points of what you understood.
- If my request is vague, ask up to 3 clarifying questions before answering.
- Prefer headings, bullet points, and short paragraphs.
- When there are multiple options, compare them in a small table then recommend one.
- If you’re uncertain or info might be outdated, say so directly and suggest how I can verify it.
- For practical tasks (emails, briefs, plans), create outputs I can copy-paste with minimal edits.
Tone: clear, confident, no fake enthusiasm.`;

const CUSTOM_INSTRUCTIONS_STYLE = `TONE: Professional but conversational. Like a smart colleague who gets things done.

STRUCTURE:
- Lead with the answer or key insight
- Then provide context if needed
- End with next steps or implications when relevant

FORMAT PREFERENCES:
- Use headings and bold sparingly - only when it genuinely helps clarity
- Write in paragraphs for explanations, analysis, and strategy
- Use lists only when I ask for them, or when comparing distinct options
- For deliverables (emails, scripts, copy), give me the final version first, then notes

WHEN I ASK YOU TO CREATE SOMETHING:
Give me the polished version immediately. Don’t ask for clarification unless absolutely critical. Make smart assumptions based on context, then note what you assumed so I can correct if needed.

WHEN I’M EXPLORING IDEAS:
Push back when something could be stronger. Suggest alternatives. Help me think, don’t just transcribe my thoughts.

SPECIAL INSTRUCTIONS:
- If I upload a document, treat it as source material unless I specify otherwise
- When I say "build this", create something I can actually use or deploy
- Remember context within our conversation - don’t make me repeat myself
- If you notice I’m approaching something inefficiently, flag it`;

const PROJECT_PROMPT_TEMPLATE = `[RESEARCH] - Deep dive investigation
→ Find credible sources, pull key insights, identify trends, note contradictions
→ Output: Synthesized brief with source links

[DRAFT] - Create usable content
→ Write emails, documents, scripts, copy, proposals ready to send/use
→ Output: Polished draft with one alternative approach

[STRATEGY] - Think through approach
→ Analyze situations, map options, identify risks, recommend paths
→ Output: Recommendation with reasoning and trade-offs

[BUILD] - Create a tool or system
→ Design workflows, templates, calculators, trackers
→ Output: Functional tool I can copy and use immediately

[ANALYZE] - Break down what I give you
→ Review documents, data, feedback, trends
→ Output: Key findings, patterns, gaps, implications

[REFINE] - Improve existing work
→ Edit, restructure, strengthen arguments, improve clarity
→ Output: Enhanced version with change notes

[IDEATE] - Generate possibilities
→ Brainstorm options, explore angles, find creative solutions
→ Output: Diverse options with quick pros/cons

When no code is present, default to [STRATEGY] mode and help me think through the goal.`;

const CLIENT_TOOL_PROMPT = `You are my “Client Project Planner & Value Calculator”.

Use the following inputs to scope and price a project:
[Industry / Field]:
[Client type]:
[Project description]:
[Urgency (Low/Medium/High)]:
[Estimated effort (hours or S/M/L)]:
[Strategic value to client (1–5)]:
[My base day rate or internal cost]:
[Known risks/constraints]:

Your job:
1) Write a 2–3 line project summary.
2) Recommend a price range or effort band and explain your reasoning.
3) Break the work into phases and tasks.
4) List 3–5 key risks and questions I should discuss with the client.
5) Draft a short client email or proposal outline I can copy-paste.

Format your answer with clear headings and bullet points.
If information is missing, clearly state your assumptions before giving recommendations.`;

const ANALYZER_PROMPT = `Build a Content Quality Analyzer in Canvas.

Features:
1. Paste text on the left, analysis on the right
2. Analyse clarity, structure, tone, strength, length, and gaps
3. Output format:
   - Quick Score (0–10 + one-line assessment)
   - What’s Working (2–3 strengths)
   - What Needs Work (2–3 issues)
   - Suggested Edits (concrete changes)
   - Rewritten Version (show improvements)
4. Include “Analyze” and “Copy Improved Version” buttons
5. Use green for strengths, amber for improvements
6. Keep the interface clean and focus-friendly.`;

const QUICK_START_ACTIONS = [
  {
    id: "custom_instructions",
    title: "Set up Custom Instructions",
    steps: [
      "Settings → Personalization → Custom Instructions.",
      "Paste the Universal AI Personality, then personalise tone, depth, and guardrails.",
      "Ask a fast question to confirm every reply now matches your style.",
    ],
    resource: { label: "Personalise now", href: "/tools-universal-ai-personality.html" },
    placeholder: "Note the lines you edited so you can reuse them everywhere.",
  },
  {
    id: "custom_gpt",
    title: "Create Your First Custom GPT",
    steps: [
      "ChatGPT → Explore GPTs → Create.",
      "Use the Client Brief Architect instructions or remix them for your industry.",
      "Test with a real scenario and save the GPT so it’s ready for Monday.",
    ],
    resource: { label: "Open task codes", href: "/tools-task-codes.html" },
    placeholder: "What did you name it? Jot the use case so you keep iterating.",
  },
  {
    id: "canvas_tool",
    title: "Build One Canvas Tool",
    steps: [
      "Start a new chat and request the Client Brief Generator or Content Quality Analyzer.",
      "Test it with a real client scenario.",
      "Save the chat (and the artifact) so you can reopen it instantly.",
    ],
    resource: { label: "Launch tools", href: "/tools.html" },
    placeholder: "Which tool did you ship? Capture the link or notes here.",
  },
  {
    id: "project_setup",
    title: "Set Up a Project",
    steps: [
      "ChatGPT → Projects → New Project.",
      "Drop in the Task Codes prompt so every request stays organised.",
      "Run at least one [TASK CODE] request to confirm it sticks.",
    ],
    resource: { label: "Use Project prompt", href: "/tools-task-codes.html" },
    placeholder: "Which project did you create? Note the focus or client here.",
  },
];

const QUICK_START_FOLLOWUPS = [
  {
    title: "Build another Custom GPT this week",
    detail: "Clone the workflow for a second workflow or client so the habit sticks.",
  },
  {
    title: "Create one Canvas tool you’ll reuse",
    detail: "Turn a messy doc into a form, planner, or analyzer that lives in Canvas.",
  },
  {
    title: "Share a win in the group chat",
    detail: "Once the cohort space opens, post a screenshot or lesson so others copy you.",
  },
  {
    title: "Leave a fast review",
    detail: "Two sentences help us keep the Starterclass free and evolving.",
  },
  {
    title: "Sign up for the newsletter",
    detail: "Get fresh prompts, tools, and automation drops every week.",
  },
];

const CLIENT_BRIEF_INSTRUCTIONS = `You are the Client Brief Architect.

Purpose: Turn messy inputs into structured briefs that prevent scope creep.

How you work:
1. Information gathering — ask about problems, success, deliverables, timeline, scope, stakeholders, budget, constraints.
2. Brief creation — always include: Executive Summary, Project Overview, Scope & Deliverables, Timeline & Milestones, Budget & Resources, Success Metrics, Stakeholders & Governance, Assumptions & Constraints, Risks & Mitigation, Next Steps.
3. Style — ask targeted questions, fill reasonable assumptions, flag gaps, suggest improvements, format for sharing.
4. Special features — extract info from messy notes, analyse existing briefs, adapt tone per industry, offer detailed + executive versions.
5. Outputs — complete brief, key unanswered questions, one alternative framing.

Kick off with: “What project are we briefing today?”`;

function StarterclassLabPage() {
  const { theme: activeTheme, palette, toggleTheme } = usePageTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [levelScores, setLevelScores] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [levelCompletion, setLevelCompletion] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [copiedKey, setCopiedKey] = useState("");
  const copyTimeoutRef = useRef(null);
  const labNow = useNow(60000, prefersReducedMotion);
  const labSessions = useMemo(() => {
    return SESSIONS.map((session) => {
      const start = new Date(session.start).getTime();
      const end = new Date(session.end).getTime();
      const status = labNow > end ? "Archived" : labNow >= start ? "Live" : "Upcoming";
      const statusLabel = status === "Archived" ? LAB_LEVEL_LABELS[session.k] || "Level complete" : status;
      return { ...session, status, statusLabel };
    });
  }, [labNow]);
  const upcomingLabs = useMemo(() => labSessions.filter((session) => session.status !== "Archived"), [labSessions]);

  const [level1Card, setLevel1Card] = useState(null);
  const [level1Q1, setLevel1Q1] = useState("");
  const [level1Q2, setLevel1Q2] = useState("");
  const [promptAssembly, setPromptAssembly] = useState(() => {
    const base = {};
    PROMPT_ASSEMBLY_PARTS.forEach((part) => {
      base[part.key] = null;
    });
    return base;
  });

  const [toggles, setToggles] = useState({ clarify: true, structure: true, concise: false });
  const [tweakSelections, setTweakSelections] = useState([]);
  const [level2Q4, setLevel2Q4] = useState("");
  const [level2Q5, setLevel2Q5] = useState("");

  const [personaChoice, setPersonaChoice] = useState(LAB_PERSONA_OPTIONS[0].value);
  const [level3Command, setLevel3Command] = useState("");
  const [level3ScenarioChoice, setLevel3ScenarioChoice] = useState(null);
  const [activeScenario, setActiveScenario] = useState(LAB_SCENARIOS[0]);

  const [selectedInputs, setSelectedInputs] = useState([]);
  const [outputTemplate, setOutputTemplate] = useState("standard");
  const [level4SelfScore, setLevel4SelfScore] = useState(0);

  const [activeRisk, setActiveRisk] = useState(LAB_RISKS[0].title);
  const [level5Q7, setLevel5Q7] = useState("");
  const [level5Q8, setLevel5Q8] = useState("");
  const [strategyChoices, setStrategyChoices] = useState({ stop: null, keep: null, skill: null });
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const announcementMessages = useMemo(
    () => [
      `Resume Level ${nextActiveLevel} to keep your score climbing`,
      "Copy every template you unlock — zero typing required.",
      "Open the tools hub to practise each build on a real project.",
    ],
    [nextActiveLevel]
  );

  useEffect(() => () => clearTimeout(copyTimeoutRef.current), []);

  const handleCopy = useCallback((key, text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        clearTimeout(copyTimeoutRef.current);
        setCopiedKey(key);
        copyTimeoutRef.current = setTimeout(() => setCopiedKey(""), 2000);
      });
    }
  }, []);

  const handleLevelComplete = useCallback((level, points) => {
    setLevelScores((prev) => ({ ...prev, [level]: points }));
    setLevelCompletion((prev) => ({ ...prev, [level]: true }));
  }, []);

  const completedLevels = useMemo(() => Object.values(levelCompletion).filter(Boolean).length, [levelCompletion]);
  const totalPoints = useMemo(() => Object.values(levelScores).reduce((sum, pts) => sum + pts, 0), [levelScores]);
  const cappedPoints = Math.min(totalPoints, 120);
  const scorePercent = Math.round((cappedPoints / 120) * 100);
  const progressPercent = Math.round((completedLevels / 5) * 100);
  const badge = useMemo(() => {
    return LAB_BADGES.find((entry) => scorePercent >= entry.min) || LAB_BADGES[LAB_BADGES.length - 1];
  }, [scorePercent]);
  const showGlow = scorePercent >= 70;
  const level1AssemblyScore = useMemo(() => {
    const filled = Object.values(promptAssembly).filter(Boolean).length;
    if (filled === PROMPT_ASSEMBLY_PARTS.length) return 5;
    if (filled >= PROMPT_ASSEMBLY_PARTS.length - 1) return 3;
    return 0;
  }, [promptAssembly]);
  const assembledPrompt = useMemo(() => buildPromptFromSelection(promptAssembly), [promptAssembly]);
  const level2TweakScore = useMemo(() => {
    if (tweakSelections.length >= 4) return 10;
    if (tweakSelections.length >= 2) return 5;
    return 0;
  }, [tweakSelections.length]);
  const reflectionScore = useMemo(() => {
    const filled = Object.values(strategyChoices).filter(Boolean).length;
    if (filled === 3) return 5;
    if (filled === 2) return 3;
    return 0;
  }, [strategyChoices]);

  const nextActiveLevel = useMemo(() => {
    const orderedLevels = Object.keys(levelCompletion)
      .map((level) => Number(level))
      .sort((a, b) => a - b);
    const pending = orderedLevels.find((level) => !levelCompletion[level]);
    return pending || orderedLevels[0] || 1;
  }, [levelCompletion]);
  const allLevelsComplete = useMemo(() => Object.values(levelCompletion).every(Boolean), [levelCompletion]);

  const level1Points = useMemo(() => {
    let pts = 0;
    if (level1Q1 === "B") pts += 10;
    if (level1Q2 === "C") pts += 10;
    pts += level1AssemblyScore;
    return pts;
  }, [level1AssemblyScore, level1Q1, level1Q2]);

  const level2Points = useMemo(() => {
    let pts = 0;
    pts += level2TweakScore;
    if (level2Q4 === "B") pts += 10;
    if (level2Q5 === "C") pts += 10;
    return pts;
  }, [level2Q4, level2Q5, level2TweakScore]);

  const level3Points = useMemo(() => {
    let pts = 0;
    if (level3Command === "B") pts += 10;
    if (level3ScenarioChoice?.points) pts += level3ScenarioChoice.points;
    return pts;
  }, [level3Command, level3ScenarioChoice]);

  const level4Points = useMemo(() => {
    let pts = 0;
    if (selectedInputs.length >= 5) pts += 5;
    if (outputTemplate) pts += 5;
    pts += level4SelfScore;
    return pts;
  }, [selectedInputs.length, outputTemplate, level4SelfScore]);

  const level5Points = useMemo(() => {
    let pts = 0;
    if (level5Q7 === "C") pts += 10;
    if (level5Q8 === "C") pts += 10;
    pts += reflectionScore;
    return pts;
  }, [level5Q7, level5Q8, reflectionScore]);

  const persona = LAB_PERSONA_OPTIONS.find((option) => option.value === personaChoice) || LAB_PERSONA_OPTIONS[0];
  const personaPrompt = useMemo(() => `${persona.heading}\n${persona.body}`, [persona]);

  const toggleBehavior = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAssemblySelect = useCallback((partKey, option) => {
    setPromptAssembly((prev) => ({ ...prev, [partKey]: option }));
  }, []);

  const handleTweakToggle = useCallback((label) => {
    setTweakSelections((prev) => (prev.includes(label) ? prev.filter((entry) => entry !== label) : [...prev, label]));
  }, []);

  const handleScenarioShuffle = useCallback(() => {
    setLevel3ScenarioChoice(null);
    setActiveScenario((prev) => {
      const currentIndex = LAB_SCENARIOS.findIndex((scenario) => scenario.id === prev.id);
      const nextIndex = (currentIndex + 1) % LAB_SCENARIOS.length;
      return LAB_SCENARIOS[nextIndex];
    });
  }, []);

  const handleScenarioDecision = useCallback(
    (command) => {
      const best = activeScenario.best;
      let points = 0;
      let message = "";
      if (command === best) {
        points = 10;
        message = "Perfect — you picked the command that sets this scenario up for a win.";
      } else if (
        (best === "scope" && command === "brief") ||
        (best === "brief" && command === "scope") ||
        (best === "plan" && command === "brief")
      ) {
        points = 5;
        message = "Close. You picked a command that can work, but there’s a stronger order to follow.";
      } else {
        points = 0;
        message = "That command skips a vital step. Revisit the order: scope → brief → plan.";
      }
      setLevel3ScenarioChoice({ choice: command, points, message });
    },
    [activeScenario]
  );

  const handleStrategySelect = useCallback((category, option) => {
    setStrategyChoices((prev) => ({ ...prev, [category]: prev[category] === option ? null : option }));
  }, []);

  const sampleResponse = useMemo(() => {
    const parts = [];
    if (toggles.clarify) {
      parts.push("First, here’s what I heard and 2 quick clarifying questions before I draft anything.");
    } else {
      parts.push("Jumping straight into the draft with the info provided.");
    }
    if (toggles.structure) {
      parts.push("## Plan\n- Scope summary\n- Timeline\n- Risks & follow-ups");
    } else {
      parts.push("Here’s a stream-of-consciousness reply with ideas you can shape.");
    }
    if (toggles.concise) {
      parts.push("Keeping it brutal and concise — no filler, just the essentials.");
    } else {
      parts.push("Adding nuance so you can see the trade-offs before deciding.");
    }
    return parts.join("\n\n");
  }, [toggles]);

  const handleInputToggle = (label) => {
    setSelectedInputs((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      }
      return [...prev, label];
    });
  };

  const scrollToActiveLevel = useCallback(() => {
    const targetId = `level-${nextActiveLevel}`;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  }, [nextActiveLevel, prefersReducedMotion]);
  const scrollToRoadmap = useCallback(() => {
    const target = document.getElementById("lab-roadmap");
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  }, [prefersReducedMotion]);

  const themeClass = activeTheme === "dark" ? "theme-dark" : "theme-light";
  const labBackground = activeTheme === "dark"
    ? "radial-gradient(circle at 18% 15%, rgba(123,61,240,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 70%), #030213"
    : "linear-gradient(115deg, #FCF4EA, #F2EEFF 45%, #E7F9FF)";

  useEffect(() => {
    if (announcementMessages.length <= 1 || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setAnnouncementIndex((idx) => (idx + 1) % announcementMessages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [announcementMessages.length, prefersReducedMotion]);

  return (
    <ThemeProvider theme={activeTheme} palette={palette}>
      <div className={`${themeClass} min-h-screen`} style={{ background: labBackground, color: palette.textPrimary }}>
        <header
          className="sticky top-0 z-40 backdrop-blur"
          style={{ background: palette.headerBg, borderBottom: `1px solid ${palette.border}` }}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <div className="flex flex-wrap items-center gap-3 justify-between">
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: palette.textPrimary }}
              >
                <span aria-hidden="true">←</span>
                Back to Starterclass
              </button>
              <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                AI Starterclass Lab
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border p-2 text-xl"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                aria-label={`Switch to ${activeTheme === "dark" ? "light" : "dark"} mode`}
              >
                {activeTheme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
            <div className="flex justify-center">
              <GlobalNavRow activeKey="lab" />
            </div>
          </div>
        </header>
        <div className="relative overflow-hidden">
          <Sparkles />
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-16 lg:space-y-20">
            <section className="relative rounded-3xl border p-6 md:p-10 overflow-hidden" style={{ borderColor: palette.border, background: palette.surface }}>
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-80"
                style={{
                  background:
                    activeTheme === "dark"
                      ? "linear-gradient(135deg, rgba(123,61,240,0.25), rgba(16,185,129,0.2))"
                      : "linear-gradient(135deg, rgba(194,132,36,0.15), rgba(59,92,204,0.12))",
                }}
                aria-hidden="true"
              />
              <div className="relative">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <Badge>Estimated time: 45–60 mins</Badge>
                  <h1 className="text-3xl lg:text-4xl font-semibold">
                    AI Starterclass Lab – Learn by Clicking, Not Just Reading
                  </h1>
                <p className="text-lg" style={{ color: palette.textSecondary }}>
                  Turn random prompts into a reusable AI assistant for your work. Click through the modules, answer the questions, build your own system, and score yourself as you go.
                </p>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  {upcomingLabs.length
                    ? `${upcomingLabs.length} more labs unlock after this replay. Track them below and return when each session goes live.`
                    : "This entire cycle is archived—scroll down to relive every level at your own pace."}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em]" style={{ borderColor: palette.border, color: palette.textSecondary }}>
                  <span className="text-xs" aria-hidden="true">⚡</span>
                  {announcementMessages[announcementIndex]}
                </div>
                <div className="flex flex-wrap gap-3">
                  <GlassButton onClick={scrollToActiveLevel} className="px-6 py-3">
                    {allLevelsComplete ? "Replay Level 1" : `Resume Level ${nextActiveLevel}`}
                  </GlassButton>
                  <GlassButton variant="secondary" onClick={scrollToRoadmap} className="px-6 py-3">
                    View the lab roadmap
                  </GlassButton>
                </div>
                </div>
                <div className="w-full max-w-sm rounded-3xl border p-5 space-y-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>Progress</div>
                      <div className="text-2xl font-semibold">{progressPercent}%</div>
                    </div>
                    <div className="text-sm" style={{ color: palette.textSecondary }}>{completedLevels}/5 levels</div>
                  </div>
                  <div className="h-3 w-full rounded-full" style={{ background: palette.surface }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${progressPercent}%`, backgroundImage: `linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})` }} />
                  </div>
                  <div className="text-sm" style={{ color: palette.textSecondary }}>
                    Score so far: <span className="font-semibold" style={{ color: palette.textPrimary }}>{scorePercent}/100</span>
                  </div>
                  <div className="text-xs" style={{ color: palette.textMuted }}>
                    Points lock when you mark each level complete.
                  </div>
                </div>
              </div>
              <div
                id="lab-roadmap"
                className="mt-8 rounded-3xl border p-5 space-y-4"
                style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>Lab roadmap</div>
                  <span className="text-xs" style={{ color: palette.textSecondary }}>
                    {upcomingLabs.length ? `${upcomingLabs.length} labs ahead` : "All labs archived"}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {labSessions.map((session) => {
                    const statusColor =
                      session.status === "Live"
                        ? palette.accentSecondary
                        : session.status === "Upcoming"
                        ? palette.accentPrimary
                        : palette.textMuted;
                    return (
                      <div key={session.k} className="rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surface }}>
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                          <span>{(session.month || "lab").toUpperCase()}</span>
                          <span style={{ color: statusColor }}>{session.statusLabel}</span>
                        </div>
                        <div className="mt-1 text-sm font-semibold" style={{ color: palette.textPrimary }}>{session.title}</div>
                        <div className="mt-1 text-xs" style={{ color: palette.textSecondary }}>{formatSessionDateLabel(session)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              </div>
            </section>
            <LevelSection
              id="level-1"
              title="Level 1 – Talk to AI Like a Pro, Not a Tourist"
              subtitle="Learn how to structure prompts so ChatGPT stops giving mid answers. Spot bad prompts, fix them, and get scored for it."
              points="Max 25 pts"
              level={1}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {["A", "B"].map((card) => (
                  <button
                    key={card}
                    type="button"
                    onClick={() => setLevel1Card(card)}
                    className="relative rounded-2xl border p-4 text-left"
                    style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                  >
                    <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>
                      Prompt {card}
                    </div>
                    <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                      {card === "A"
                        ? "Write an email to a client about a project."
                        : "You are my project assistant. Write a concise email confirming scope, timeline, and next steps."
                      }
                    </p>
                    {level1Card === card && (
                      <div className="mt-4 rounded-2xl border px-3 py-2 text-xs" style={{ borderColor: palette.accentPrimary, background: palette.surface }}>
                        <div className="font-semibold" style={{ color: palette.textPrimary }}>AI’s answer</div>
                        <p className="mt-1" style={{ color: palette.textSecondary }}>
                          {card === "A"
                            ? "Hey! Kicking off soon. Let me know what you think."
                            : "Hi Sam — here’s the scoped outline, bulletproofed timeline, and CTA with a date."
                          }
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Question 1</p>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  Which prompt is better, and what is the main reason?
                </p>
                <div className="grid gap-2">
                  {["A", "B", "C", "D"].map((option) => (
                    <QuizOption
                      key={option}
                      label={option}
                      text={{
                        A: "A is better – it gives AI freedom",
                        B: "B is better – it gives role, context, tone, and structure",
                        C: "They’re basically the same",
                        D: "B is better – just because it’s longer",
                      }[option]}
                      selected={level1Q1 === option}
                      onSelect={() => setLevel1Q1(option)}
                    />
                  ))}
                </div>
                {level1Q1 && (
                  <FeedbackBlock success={level1Q1 === "B"}>
                    {level1Q1 === "B"
                      ? "Nice. Length doesn’t matter. Structure does: role + context + goal + format + tone."
                      : "Not quite. The win isn’t more words — it’s role + context + goal + format + tone packed into one prompt."}
                  </FeedbackBlock>
                )}
              </div>

              <EditablePromptPanel
                id="blueprint"
                title="Prompt Blueprint"
                description="Use it to rewrite any prompt instantly."
                initialValue={PROMPT_BLUEPRINT_TEXT}
                copiedKey={copiedKey}
                onCopy={(key, value) => handleCopy(key, value)}
                rows={8}
              />

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Question 2</p>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  You want a research summary you can use in a pitch deck. Which part is missing in this prompt?
                </p>
                <div className="grid gap-2">
                  {["A", "B", "C", "D"].map((option) => (
                    <QuizOption
                      key={option}
                      label={option}
                      text={{ A: "Role", B: "Context", C: "Output format", D: "Tone" }[option]}
                      selected={level1Q2 === option}
                      onSelect={() => setLevel1Q2(option)}
                    />
                  ))}
                </div>
                {level1Q2 && (
                  <FeedbackBlock success={level1Q2 === "C"}>
                    {level1Q2 === "C"
                      ? "Right. Bullet points are not a real format. Create sections like Market size / Feature trends / Risks."
                      : "Close. You still need a clear format for the deck — think sections, not just bullet points."}
                  </FeedbackBlock>
                )}
              </div>

              <PromptAssemblyGame
                selection={promptAssembly}
                onSelect={handleAssemblySelect}
                assembledPrompt={assembledPrompt}
                copied={copiedKey === "level1_builder"}
                onCopy={(text) => handleCopy("level1_builder", text)}
              />

              <LevelCompleteRow
                completed={levelCompletion[1]}
                lockedPoints={levelScores[1]}
                onClick={() => handleLevelComplete(1, level1Points)}
                label="Mark Level 1 Complete"
                note="25 pts max"
              />
            </LevelSection>
            <LevelSection
              id="level-2"
              title="Level 2 – Make ChatGPT Feel Like It’s Hired By You"
              subtitle="Design how ChatGPT behaves by default: tone, structure, and how it handles confusion."
              points="Max 30 pts"
              level={2}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl border p-4 space-y-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <p className="text-sm font-semibold">Slide the toggles to see behaviour change.</p>
                  {[{ key: "clarify", label: "Ask clarifying questions first" }, { key: "structure", label: "Use headings & bullets" }, { key: "concise", label: "Be brutally concise" }].map((toggle) => (
                    <ToggleSwitch key={toggle.key} label={toggle.label} value={toggles[toggle.key]} onChange={() => toggleBehavior(toggle.key)} />
                  ))}
                </div>
                <div className="rounded-3xl border p-4" style={{ borderColor: palette.border, background: palette.surface }}>
                  <div className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>Sample response</div>
                  <pre className="mt-3 text-sm whitespace-pre-wrap" style={{ color: palette.textSecondary }}>{sampleResponse}</pre>
                </div>
              </div>

              <EditablePromptPanel
                id="custom_instructions"
                title="Custom Instructions template"
                description="Paste into ChatGPT, then personalise before you copy."
                initialValue={`${CUSTOM_INSTRUCTIONS_TEMPLATE}\n\n${CUSTOM_INSTRUCTIONS_STYLE}`}
                copiedKey={copiedKey}
                onCopy={(key, value) => handleCopy(key, value)}
                rows={10}
              />
              <TweakChecklist selections={tweakSelections} onToggle={handleTweakToggle} />

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold">Question 4</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>Which setting affects every chat?</p>
                  <div className="grid gap-2 mt-2">
                    {["A", "B", "C", "D"].map((option) => (
                      <QuizOption
                        key={option}
                        label={option}
                        text={{ A: "Tone picker", B: "Custom Instructions", C: "Your last message", D: "Theme" }[option]}
                        selected={level2Q4 === option}
                        onSelect={() => setLevel2Q4(option)}
                      />
                    ))}
                  </div>
                  {level2Q4 && (
                    <FeedbackBlock success={level2Q4 === "B"}>
                      {level2Q4 === "B"
                        ? "Exactly. Custom Instructions = global brain."
                        : "Prompts change per chat. Custom Instructions control the default brain."}
                    </FeedbackBlock>
                  )}
                </div>
                <div>
                  <p className="font-semibold">Question 5</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>Why turn Memory off in sensitive fields?</p>
                  <div className="grid gap-2 mt-2">
                    {["A", "B", "C", "D"].map((option) => (
                      <QuizOption
                        key={option}
                        label={option}
                        text={{ A: "You dislike AI", B: "Reduce hallucinations", C: "Avoid persistent storage", D: "Faster responses" }[option]}
                        selected={level2Q5 === option}
                        onSelect={() => setLevel2Q5(option)}
                      />
                    ))}
                  </div>
                  {level2Q5 && (
                    <FeedbackBlock success={level2Q5 === "C"}>
                      {level2Q5 === "C"
                        ? "Yup. Kill Memory when you can’t store sensitive info long-term."
                        : "Memory is about persistence, not speed. Turn it off to avoid storing sensitive details."}
                    </FeedbackBlock>
                  )}
                </div>
              </div>

              <LevelCompleteRow
                completed={levelCompletion[2]}
                lockedPoints={levelScores[2]}
                onClick={() => handleLevelComplete(2, level2Points)}
                label="Mark Level 2 Complete"
                note="30 pts max"
              />
            </LevelSection>
            <LevelSection
              id="level-3"
              title="Level 3 – Build a Client Project Copilot"
              subtitle="Turn ChatGPT into a saved assistant that scopes projects, writes briefs, and drafts client messages."
              points="Max 20 pts"
              level={3}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <label className="text-sm font-semibold" htmlFor="persona-select">
                    Choose your field
                  </label>
                  <select
                    id="persona-select"
                    className="w-full rounded-2xl border p-3 text-sm"
                    style={{ borderColor: palette.border, background: palette.surface }}
                    value={personaChoice}
                    onChange={(event) => setPersonaChoice(event.target.value)}
                  >
                    {LAB_PERSONA_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <EditablePromptPanel
                    id="persona"
                    title={persona.heading}
                    description={persona.body}
                    initialValue={personaPrompt}
                    copiedKey={copiedKey}
                    onCopy={(key, value) => handleCopy(key, value)}
                    rows={5}
                  />
                </div>
                <div className="rounded-3xl border p-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <p className="text-sm font-semibold">Command shortcuts</p>
                  <div className="mt-3 grid gap-3">
                    {LAB_COMMANDS.map((cmd) => (
                      <div key={cmd.command} className="rounded-2xl border p-3" style={{ borderColor: palette.border, background: palette.surface }}>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-semibold" style={{ color: palette.accentSecondary }}>{cmd.command}</span>
                          <span className="text-sm font-semibold">{cmd.summary}</span>
                        </div>
                        <p className="mt-1 text-xs" style={{ color: palette.textSecondary }}>{cmd.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold">Question 6</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>You pasted a long client email and want a clean brief. Which command?</p>
                  <div className="grid gap-2 mt-2">
                    {["A", "B", "C", "D"].map((option) => (
                      <QuizOption
                        key={option}
                        label={option}
                        text={{ A: "/scope", B: "/brief", C: "/plan", D: "/retro" }[option]}
                        selected={level3Command === option}
                        onSelect={() => setLevel3Command(option)}
                      />
                    ))}
                  </div>
                  {level3Command && (
                    <FeedbackBlock success={level3Command === "B"}>
                      {level3Command === "B"
                        ? "Correct. /scope organises, /brief drafts the client-facing version."
                        : "Use /brief for the polished client doc. /scope is for organising inputs."}
                    </FeedbackBlock>
                  )}
                </div>

                <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">Scenario practice</p>
                      <p className="text-sm" style={{ color: palette.textSecondary }}>Shuffle a scenario, then pick the first command you’d run.</p>
                    </div>
                    <GlassButton variant="secondary" onClick={handleScenarioShuffle} className="px-4 py-2">
                      Shuffle scenario
                    </GlassButton>
                  </div>
                  <div className="rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surface }}>
                    <p className="text-sm font-semibold">{activeScenario.title}</p>
                    <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>{activeScenario.detail}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[{ value: "scope", label: "Run /scope first" }, { value: "brief", label: "Run /brief first" }, { value: "plan", label: "Run /plan first" }].map((option) => (
                      <GlassButton key={option.value} variant="secondary" onClick={() => handleScenarioDecision(option.value)}>
                        {option.label}
                      </GlassButton>
                    ))}
                  </div>
                  {level3ScenarioChoice && (
                    <FeedbackBlock success={level3ScenarioChoice.points === 10}>
                      {level3ScenarioChoice.message}
                    </FeedbackBlock>
                  )}
                </div>
              </div>

              <LevelCompleteRow
                completed={levelCompletion[3]}
                lockedPoints={levelScores[3]}
                onClick={() => handleLevelComplete(3, level3Points)}
                label="Mark Level 3 Complete"
                note="20 pts max"
              />
            </LevelSection>
            <LevelSection
              id="level-4"
              title="Level 4 – Tiny Tool Lab: Client Project Planner & Value Calculator"
              subtitle="Move from chatting to tooling. Design a reusable prompt/template that scopes and prices work."
              points="Max 20 pts"
              level={4}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                  <p className="font-semibold">Input design</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>Tick at least 5 inputs.</p>
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                    {LAB_INPUT_OPTIONS.map((label) => (
                      <label key={label} className="flex items-center gap-3 text-sm">
                        <input type="checkbox" className="h-4 w-4" checked={selectedInputs.includes(label)} onChange={() => handleInputToggle(label)} />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                  <FeedbackBlock success={selectedInputs.length >= 5}>
                    {selectedInputs.length >= 5
                      ? "Good. More structured inputs = more consistent outputs."
                      : "This will work, but your tool will be blind in places. Capture at least 5 inputs."}
                  </FeedbackBlock>
                </div>
                <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surface }}>
                  <p className="font-semibold">Output template</p>
                  <div className="grid gap-3">
                    {LAB_OUTPUT_TEMPLATES.map((template) => (
                      <button
                        key={template.value}
                        type="button"
                        onClick={() => setOutputTemplate(template.value)}
                        className={`rounded-2xl border p-3 text-left ${outputTemplate === template.value ? "ring-2" : ""}`}
                        style={{ borderColor: palette.border, background: outputTemplate === template.value ? palette.surfaceSoft : palette.surface }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">{template.title}</div>
                          {outputTemplate === template.value && <span className="text-xs" style={{ color: palette.accentSecondary }}>Selected</span>}
                        </div>
                        <ul className="mt-2 text-xs list-disc pl-5" style={{ color: palette.textSecondary }}>
                          {template.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className="mt-2 text-xs" style={{ color: palette.textMuted }}>{template.tip}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <EditablePromptPanel
                id="tool_prompt"
                title="Final tool prompt"
                description="Copy into ChatGPT or Canvas."
                initialValue={CLIENT_TOOL_PROMPT}
                copiedKey={copiedKey}
                onCopy={(key, value) => handleCopy(key, value)}
                rows={10}
              />
              <SelfScoreButtons value={level4SelfScore} onChange={setLevel4SelfScore} max={10} />

              <LevelCompleteRow
                completed={levelCompletion[4]}
                lockedPoints={levelScores[4]}
                onClick={() => handleLevelComplete(4, level4Points)}
                label="Mark Level 4 Complete"
                note="20 pts max"
              />
            </LevelSection>

            <LevelSection
              id="level-5"
              title="Level 5 – Safety, Limits & Strategy"
              subtitle="Understand when AI is helpful, when it’s dangerous, and how to stay valuable."
              points="Max 25 pts"
              level={5}
            >
              <div className="grid md:grid-cols-4 gap-4">
                {LAB_RISKS.map((risk) => (
                  <button
                    key={risk.title}
                    type="button"
                    onClick={() => setActiveRisk(risk.title)}
                    className="rounded-2xl border p-4 text-left"
                    style={{ borderColor: palette.border, background: activeRisk === risk.title ? palette.surface : palette.surfaceSoft }}
                  >
                    <div className="font-semibold">{risk.title}</div>
                    {activeRisk === risk.title && (
                      <ul className="mt-2 text-xs list-disc pl-4" style={{ color: palette.textSecondary }}>
                        {risk.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold">Question 7</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>Which is the safest default rule?</p>
                  <div className="grid gap-2 mt-2">
                    {["A", "B", "C", "D"].map((option) => (
                      <QuizOption
                        key={option}
                        label={option}
                        text={{
                          A: "AI is always right if it sounds confident.",
                          B: "If AI says it’s up to date, trust it.",
                          C: "Treat AI as a drafting assistant; you own the final call.",
                          D: "Never use AI for anything serious.",
                        }[option]}
                        selected={level5Q7 === option}
                        onSelect={() => setLevel5Q7(option)}
                      />
                    ))}
                  </div>
                  {level5Q7 && (
                    <FeedbackBlock success={level5Q7 === "C"}>
                      {level5Q7 === "C"
                        ? "Exactly. It’s a drafting tool — you own the judgment."
                        : "Treat AI as a drafting assistant, not the final authority."}
                    </FeedbackBlock>
                  )}
                </div>
                <div>
                  <p className="font-semibold">Question 8</p>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>When is AI most appropriate?</p>
                  <div className="grid gap-2 mt-2">
                    {["A", "B", "C", "D"].map((option) => (
                      <QuizOption
                        key={option}
                        label={option}
                        text={{
                          A: "Choosing medication",
                          B: "Writing a final legal argument",
                          C: "Drafting a first version you’ll review",
                          D: "Sending client advice without reading it",
                        }[option]}
                        selected={level5Q8 === option}
                        onSelect={() => setLevel5Q8(option)}
                      />
                    ))}
                  </div>
                  {level5Q8 && (
                    <FeedbackBlock success={level5Q8 === "C"}>
                      {level5Q8 === "C"
                        ? "Yes. First drafts, summaries, and plans you review are the sweet spot."
                        : "Use AI for first drafts that you double-check, not final high-risk decisions."}
                    </FeedbackBlock>
                  )}
                </div>
              </div>

              <StrategyReflectionBoard selections={strategyChoices} onSelect={handleStrategySelect} />

              <LevelCompleteRow
                completed={levelCompletion[5]}
                lockedPoints={levelScores[5]}
                onClick={() => handleLevelComplete(5, level5Points)}
                label="Mark Level 5 Complete"
                note="25 pts max"
              />
            </LevelSection>
            <section className="rounded-3xl border p-6 md:p-10" style={{ borderColor: palette.border, background: palette.surface }}>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-3">
                  <p className="text-xs uppercase tracking-[0.24em]" style={{ color: palette.textMuted }}>Final score</p>
                  <div className="text-5xl font-semibold">{scorePercent}</div>
                  <p className="text-sm" style={{ color: palette.textSecondary }}>
                    Raw points: {cappedPoints} / 120
                  </p>
                  <div className={`rounded-3xl border p-4 space-y-2 ${showGlow ? "shadow-[0_0_40px_rgba(194,132,36,0.35)]" : ""}`} style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                    <div className="text-lg font-semibold">Badge: {badge.label}</div>
                    <p className="text-sm" style={{ color: palette.textSecondary }}>{badge.description}</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-sm font-semibold">Level breakdown</p>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div key={level} className="flex items-center justify-between rounded-2xl border px-4 py-2 text-sm" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
                        <span>Level {level}</span>
                        <span className="font-semibold">{levelScores[level]} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border p-6 md:p-10" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">You’ve Built the Copilot. Now Put It To Work.</h2>
                  <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                    Don’t stop at a clever prompt. Use your Copilot on the next real client, run the Planner & Value Calculator before quoting anyone, and revisit this lab monthly to see your score climb.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <GlassButton variant="secondary" onClick={() => window.open("https://starterclass.icuni.org/#resources", "_blank")}>Download Starter Prompts & Templates (PDF)</GlassButton>
                  <GlassButton onClick={() => window.open("https://starterclass.icuni.org/", "_blank")}>Join the AI Starterclass Cohort</GlassButton>
                  <GlassButton variant="secondary" onClick={() => window.open("https://starterclass.icuni.org/#contact", "_blank")}>Book a Corporate Workshop</GlassButton>
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold">More tools to add</h2>
                <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
                  Copy these templates straight into Custom Instructions, Projects, or Canvas — then launch the full luxury tools page to keep building.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <LabResourceCard
                  title="Custom Instructions – Universal AI Personality"
                  description="Give ChatGPT the context, preferences, and boundaries it needs to act like a smart colleague."
                  text={`${CUSTOM_INSTRUCTIONS_TEMPLATE}\n\n${CUSTOM_INSTRUCTIONS_STYLE}`}
                  copied={copiedKey === "resource_custom"}
                  onCopy={(value) => handleCopy("resource_custom", value)}
                  linkHref="/tools-universal-ai-personality.html"
                />
                <LabResourceCard
                  title="Project Prompt – Task Codes"
                  description="Drop this into ChatGPT Projects so every conversation stays organised."
                  text={PROJECT_PROMPT_TEMPLATE}
                  copied={copiedKey === "resource_project"}
                  onCopy={(value) => handleCopy("resource_project", value)}
                  linkHref="/tools-task-codes.html"
                />
                <LabResourceCard
                  title="Canvas Tool Prompt — Content Quality Analyzer"
                  description="Paste any content and get structured feedback plus rewrites."
                  text={ANALYZER_PROMPT}
                  copied={copiedKey === "resource_analyzer"}
                  onCopy={(value) => handleCopy("resource_analyzer", value)}
                  linkHref="/tools-content-quality-analyzer.html"
                />
              </div>
            </section>

            <section className="space-y-6" id="client-brief-tool">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Client Brief Generator</h2>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  You asked for the real tool — here it is. Capture every section, auto-save it, and export before you leave the lab.
                </p>
              </div>
              <ClientBriefGeneratorTool compact />
              <div className="flex justify-end">
                <GlassButton onClick={() => (window.location.href = "/tools-client-brief-generator.html")}>Open full tool</GlassButton>
              </div>
            </section>

            <section className="space-y-6">
              <QuickStartWorkshop />
              <LabResourceCard
                title="Client Brief Generator – Custom GPT instructions"
                description="Use this when you want ChatGPT to act like a proper brief architect."
                text={CLIENT_BRIEF_INSTRUCTIONS}
                copied={copiedKey === "resource_brief"}
                onCopy={(value) => handleCopy("resource_brief", value)}
                linkHref="/tools-client-brief-generator.html"
              />
            </section>
          </div>
        </div>
        <FooterMenu />
        <ScrollControls />
        <FloatingLabProgress progress={progressPercent} score={scorePercent} completed={completedLevels} />
      </div>
    </ThemeProvider>
  );
}
function LevelSection({ id, title, subtitle, points, level, children }) {
  const { palette } = useTheme();
  const accent = level ? LAB_LEVEL_ACCENTS[level] : null;
  return (
    <section
      id={id}
      className="rounded-3xl border p-6 md:p-10 space-y-6"
      style={{ borderColor: accent?.border || palette.border, background: accent?.background || palette.surface }}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {points && <span className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>{points}</span>}
        </div>
        <p className="text-sm" style={{ color: palette.textSecondary }}>{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function QuizOption({ label, text, selected, onSelect }) {
  const { palette } = useTheme();
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left ${selected ? "ring-2" : ""}`}
      style={{
        borderColor: selected ? palette.accentSecondary : palette.border,
        background: selected ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary,
      }}
    >
      <span className="h-8 w-8 rounded-full flex items-center justify-center font-semibold" style={{ background: selected ? palette.accentSecondary : palette.surface, color: selected ? "#fff" : palette.textSecondary }}>
        {label}
      </span>
      <span className="text-sm">{text}</span>
    </button>
  );
}

function FeedbackBlock({ children, success }) {
  const { palette } = useTheme();
  return (
    <div
      className="rounded-2xl border px-4 py-3 text-sm"
      style={{
        borderColor: success ? palette.accentSecondary : palette.border,
        background: success ? `${palette.accentSecondary}11` : palette.surfaceSoft,
        color: palette.textSecondary,
      }}
    >
      {children}
    </div>
  );
}

function ToggleSwitch({ label, value, onChange }) {
  const { palette } = useTheme();
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm" style={{ color: palette.textSecondary }}>{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-12 rounded-full transition ${value ? "justify-end" : "justify-start"}`}
        style={{ background: value ? palette.accentSecondary : palette.surface }}
      >
        <span className="h-5 w-5 rounded-full bg-white shadow" />
      </button>
    </div>
  );
}

function SelfScoreButtons({ value, onChange, max }) {
  const { palette } = useTheme();
  const options = [
    { label: "✅ I nailed it", val: max },
    { label: "⚠ I’m close", val: Math.max(0, Math.min(max, Math.round(max / 2))) },
    { label: "❌ I need to redo", val: 0 },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          onClick={() => onChange(option.val)}
          className={`rounded-2xl border px-4 py-2 text-sm ${value === option.val ? "ring-2" : ""}`}
          style={{ borderColor: palette.border, background: value === option.val ? palette.surface : palette.surfaceSoft }}
        >
          {option.label} · +{option.val} pts
        </button>
      ))}
    </div>
  );
}

function LevelCompleteRow({ completed, lockedPoints, onClick, label, note }) {
  const { palette } = useTheme();
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <GlassButton onClick={onClick}>
        {completed ? "Update level score" : label}
      </GlassButton>
      <div className="text-sm" style={{ color: palette.textSecondary }}>
        {completed ? `Locked at ${lockedPoints} pts (${note})` : note}
      </div>
    </div>
  );
}

function PromptAssemblyGame({ selection, onSelect, assembledPrompt, onCopy, copied }) {
  const { palette } = useTheme();
  return (
    <div className="mt-6 rounded-3xl border p-4 space-y-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-semibold">Prompt Assembly</p>
          <p className="text-sm" style={{ color: palette.textSecondary }}>
            Click through each part to build a reusable prompt without typing.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {PROMPT_ASSEMBLY_PARTS.map((part) => (
          <div key={part.key} className="rounded-2xl border p-4 space-y-2" style={{ borderColor: palette.border, background: palette.surface }}>
            <p className="text-sm font-semibold">{part.label}</p>
            <div className="flex flex-wrap gap-2">
              {part.options.map((option) => {
                const active = selection[part.key] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(part.key, option)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? "shadow" : ""}`}
                    style={{
                      border: `1px solid ${active ? palette.accentSecondary : palette.border}`,
                      background: active ? `${palette.accentSecondary}15` : palette.surfaceSoft,
                      color: active ? palette.accentSecondary : palette.textSecondary,
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surface }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold">Prompt preview</p>
          <GlassButton variant="secondary" onClick={() => onCopy(assembledPrompt || PROMPT_BLUEPRINT_TEXT)}>
            {copied ? "Copied" : "Copy prompt"}
          </GlassButton>
        </div>
        <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
          {assembledPrompt || "Choose a role, context, goal, and format above to see the full prompt."}
        </p>
      </div>
    </div>
  );
}

function EditablePromptPanel({ id, title, description, initialValue, rows = 8, copiedKey, onCopy }) {
  const { palette } = useTheme();
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-semibold">{title}</p>
          {description && (
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              {description}
            </p>
          )}
        </div>
        <GlassButton variant="secondary" onClick={() => onCopy(id, value)}>
          {copiedKey === id ? "Copied" : "Copy"}
        </GlassButton>
      </div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={rows}
        className="w-full rounded-2xl border p-3 text-sm"
        style={{ borderColor: palette.border, background: palette.surface }}
      />
    </div>
  );
}

function TweakChecklist({ selections, onToggle }) {
  const { palette } = useTheme();
  return (
    <div className="rounded-3xl border p-4 space-y-3" style={{ borderColor: palette.border, background: palette.surface }}>
      <p className="text-sm font-semibold">Mark the custom tweaks you applied</p>
      <div className="flex flex-wrap gap-2">
        {CUSTOM_TWEAK_OPTIONS.map((option) => {
          const active = selections.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? "shadow" : ""}`}
              style={{
                border: `1px solid ${active ? palette.accentSecondary : palette.border}`,
                background: active ? `${palette.accentSecondary}15` : palette.surfaceSoft,
                color: active ? palette.accentSecondary : palette.textSecondary,
              }}
            >
              {active ? "✓ " : ""}
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StrategyReflectionBoard({ selections, onSelect }) {
  const { palette } = useTheme();
  const labels = {
    stop: "Stop doing manually",
    keep: "Keep human-only",
    skill: "Skill to invest in",
  };
  return (
    <div className="rounded-3xl border p-4 space-y-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
      <div>
        <p className="font-semibold">Strategy reflection</p>
        <p className="text-sm" style={{ color: palette.textSecondary }}>
          Tap one tile per row to lock in your choices.
        </p>
      </div>
      <div className="space-y-4">
        {Object.entries(STRATEGY_GAMIFIED_CHOICES).map(([category, options]) => (
          <div key={category} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
              {labels[category]}
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => {
                const active = selections[category] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(category, option)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? "shadow" : ""}`}
                    style={{
                      border: `1px solid ${active ? palette.accentPrimary : palette.border}`,
                      background: active ? `${palette.accentPrimary}20` : palette.surface,
                      color: active ? palette.accentPrimary : palette.textSecondary,
                    }}
                  >
                    {active ? "Selected · " : ""}
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingLabProgress({ progress, score, completed }) {
  const { palette } = useTheme();
  return (
    <div
      className="pointer-events-none fixed left-4 right-4 bottom-28 sm:bottom-10 sm:left-6 sm:right-auto sm:w-72 rounded-3xl border px-4 py-3 shadow-lg backdrop-blur"
      style={{ borderColor: palette.border, background: palette.surface }}
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em]" style={{ color: palette.textMuted }}>
        <span>Lab progress</span>
        <span>{completed}/5</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xl font-semibold">{progress}%</p>
        <p className="text-sm" style={{ color: palette.textSecondary }}>
          Score {score}%
        </p>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full" style={{ background: palette.surfaceSoft }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})` }}
        />
      </div>
    </div>
  );
}

function LabResourceCard({ title, description, text, copied, onCopy, linkHref, linkLabel = "Launch tool", children }) {
  const { palette } = useTheme();
  const [value, setValue] = useState(text || "");
  useEffect(() => {
    setValue(text || "");
  }, [text]);
  return (
    <div className="rounded-3xl border p-5 space-y-3" style={{ borderColor: palette.border, background: palette.surface }}>
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm" style={{ color: palette.textSecondary }}>{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {onCopy && (
            <GlassButton variant="secondary" onClick={() => onCopy(value)}>
              {copied ? "Copied" : "Copy"}
            </GlassButton>
          )}
          {linkHref && (
            <GlassButton onClick={() => (window.location.href = linkHref)}>{linkLabel}</GlassButton>
          )}
        </div>
      </div>
      {text && (
        <textarea
          className="w-full rounded-2xl border p-3 text-sm"
          style={{ borderColor: palette.border, background: palette.surfaceSoft }}
          value={value}
          rows={6}
          onChange={(event) => setValue(event.target.value)}
        />
      )}
      {children}
    </div>
  );
}

function buildPromptFromSelection(selection) {
  if (!selection) return "";
  const parts = [];
  if (selection.role) parts.push(selection.role);
  if (selection.context) parts.push(`Context: ${selection.context}`);
  if (selection.goal) parts.push(`Goal: ${selection.goal}`);
  if (selection.format) parts.push(selection.format);
  return parts.join("\n\n");
}

function QuickStartWorkshop() {
  const { palette } = useTheme();
  const [entries, setEntries] = useState(() => {
    const initial = {};
    QUICK_START_ACTIONS.forEach((action) => {
      initial[action.id] = { done: false, steps: action.steps.map(() => false) };
    });
    return initial;
  });
  const completed = Object.values(entries).filter((entry) => entry.done).length;
  const progress = Math.round((completed / QUICK_START_ACTIONS.length) * 100);

  const toggleDone = (id) => {
    setEntries((prev) => {
      const entry = prev[id];
      const nextDone = !entry.done;
      return { ...prev, [id]: { done: nextDone, steps: entry.steps.map(() => nextDone) } };
    });
  };

  const toggleStep = (id, index) => {
    setEntries((prev) => {
      const entry = prev[id];
      const steps = [...entry.steps];
      steps[index] = !steps[index];
      const done = steps.every(Boolean);
      return { ...prev, [id]: { done, steps } };
    });
  };

  return (
    <div className="rounded-3xl border p-6 md:p-10 space-y-6" style={{ borderColor: palette.border, background: palette.surface }}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
            Participant quick-start workshop
          </p>
          <h3 className="text-2xl font-semibold">Ship the four actions before you close the browser.</h3>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">Progress</p>
          <p className="text-3xl font-semibold">{progress}%</p>
          <p className="text-xs" style={{ color: palette.textSecondary }}>
            {completed} of {QUICK_START_ACTIONS.length} locked in
          </p>
        </div>
      </div>
      <div className="w-full h-2 rounded-full" style={{ background: palette.surfaceSoft }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, background: palette.accentSecondary, transition: "width 300ms ease" }}
        />
      </div>
      <div className="space-y-6">
        {QUICK_START_ACTIONS.map((action) => {
          const entry = entries[action.id];
          const done = entry?.done;
          return (
            <div
              key={action.id}
              className="rounded-3xl border p-5 space-y-4"
              style={{
                borderColor: done ? palette.accentSecondary : palette.border,
                background: done ? `${palette.accentSecondary}15` : palette.surfaceSoft,
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em]" style={{ color: palette.textMuted }}>
                    {done ? "Completed" : "In progress"}
                  </p>
                  <h4 className="text-lg font-semibold">{action.title}</h4>
                </div>
                <GlassButton onClick={() => toggleDone(action.id)}>
                  {done ? "Undo" : "Mark complete"}
                </GlassButton>
              </div>
              <div className="space-y-2">
                {action.steps.map((step, stepIndex) => {
                  const stepDone = entry?.steps?.[stepIndex];
                  return (
                    <button
                      key={step}
                      type="button"
                      onClick={() => toggleStep(action.id, stepIndex)}
                      className="flex w-full items-center gap-2 rounded-2xl border px-3 py-2 text-left"
                      style={{
                        borderColor: palette.border,
                        background: stepDone ? `${palette.accentSecondary}15` : palette.surface,
                        color: palette.textSecondary,
                      }}
                    >
                      <span className="text-lg" aria-hidden="true">{stepDone ? "✓" : "○"}</span>
                      <span>{step}</span>
                    </button>
                  );
                })}
              </div>
              {action.resource && (
                <GlassButton
                  variant="secondary"
                  onClick={() => (window.location.href = action.resource.href)}
                  className="px-4 py-2"
                >
                  {action.resource.label}
                </GlassButton>
              )}
            </div>
          );
        })}
      </div>
      <div className="rounded-3xl border p-5" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.textMuted }}>
          After today
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {QUICK_START_FOLLOWUPS.map((item) => (
            <div key={item.title} className="rounded-2xl border p-4" style={{ borderColor: palette.border }}>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs mt-1" style={{ color: palette.textSecondary }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs" style={{ color: palette.textSecondary }}>
          Trouble? Ask for Canvas explicitly, tighten instructions, or say “Debug this and fix errors” and the assistant will
          rerun the tool.
        </p>
      </div>
    </div>
  );
}

function ClientBriefGeneratorTool({ compact = false }) {
  const { palette } = useTheme();
  const storageKey = compact ? "client_brief_tool_lab" : "client_brief_tool_full";
  const initialState = {
    company: "",
    projectName: "",
    contact: "",
    date: "",
    goals: "",
    metrics: "",
    scope: "",
    outOfScope: "",
    format: "",
    timeline: "",
    budget: "",
    payment: "",
    resources: "",
    stakeholders: "",
    approvals: "",
    communications: "",
    constraints: "",
  };
  const [form, setForm] = useState(() => {
    if (typeof window === "undefined") return initialState;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        return { ...initialState, ...JSON.parse(stored) };
      }
    } catch {}
    return initialState;
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(form));
    } catch {}
  }, [form, storageKey]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formattedBrief = useMemo(() => {
    const lines = [
      `Client & Project Overview`,
      `Company: ${form.company || ""}`,
      `Project: ${form.projectName || ""}`,
      `Contact: ${form.contact || ""}`,
      `Date: ${form.date || ""}`,
      "",
      `Project Goals`,
      form.goals,
      form.metrics ? `Success metrics: ${form.metrics}` : "",
      "",
      `Scope & Deliverables`,
      form.scope,
      form.outOfScope ? `Out of scope: ${form.outOfScope}` : "",
      form.format ? `Delivery format: ${form.format}` : "",
      "",
      `Timeline & Milestones`,
      form.timeline,
      "",
      `Budget & Resources`,
      form.budget,
      form.payment ? `Payment terms: ${form.payment}` : "",
      form.resources ? `Resources needed: ${form.resources}` : "",
      "",
      `Stakeholders & Approvals`,
      form.stakeholders,
      form.approvals ? `Approval process: ${form.approvals}` : "",
      form.communications ? `Communication preferences: ${form.communications}` : "",
      "",
      `Constraints & Considerations`,
      form.constraints,
    ]
      .filter(Boolean)
      .join("\n");
    return lines;
  }, [form]);

  const requiredFields = ["company", "projectName", "goals", "scope", "timeline", "budget", "stakeholders"];

  const validate = () => {
    const missing = requiredFields.filter((field) => !form[field]?.trim());
    if (missing.length) {
      setMessage(`Add: ${missing.map((field) => field.replace(/([A-Z])/g, " $1")).join(", ")}`);
      return false;
    }
    setMessage("Ready to export");
    return true;
  };

  const copyAll = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(formattedBrief);
      setMessage("Copied to clipboard");
    }
  };

  const downloadPDF = () => {
    if (!validate()) return;
    const safeHtml = formattedBrief.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
    const doc = window.open("", "_blank");
    if (!doc) return;
    doc.document.write(`<html><head><title>Client Brief</title></head><body style="font-family: 'Inter', sans-serif; padding: 40px;">${safeHtml}</body></html>`);
    doc.document.close();
    doc.focus();
    doc.print();
  };

  const inputClass = "w-full rounded-2xl border p-3 text-sm";

  return (
    <div
      className={`rounded-3xl border ${compact ? "p-5" : "p-6 md:p-10"} space-y-6`}
      style={{ borderColor: palette.border, background: palette.surface }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
            Client Brief Generator
          </p>
          <h3 className="text-2xl font-semibold">Capture requirements, auto-save them, and export in seconds.</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <GlassButton variant="secondary" onClick={copyAll}>
            Copy all content
          </GlassButton>
          <GlassButton onClick={downloadPDF}>Download as PDF</GlassButton>
        </div>
      </div>
      {message && (
        <div className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: palette.border, color: palette.textSecondary }}>
          {message}
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold">Client & Project Overview</p>
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Company name"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Project name"
            value={form.projectName}
            onChange={(event) => handleChange("projectName", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Primary contact"
            value={form.contact}
            onChange={(event) => handleChange("contact", event.target.value)}
          />
          <input
            type="date"
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            value={form.date}
            onChange={(event) => handleChange("date", event.target.value)}
          />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Project Goals</p>
          <textarea
            rows={4}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="What does success look like?"
            value={form.goals}
            onChange={(event) => handleChange("goals", event.target.value)}
          />
          <textarea
            rows={3}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Key metrics or objectives"
            value={form.metrics}
            onChange={(event) => handleChange("metrics", event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold">Scope & Deliverables</p>
          <textarea
            rows={5}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="What’s included?"
            value={form.scope}
            onChange={(event) => handleChange("scope", event.target.value)}
          />
          <textarea
            rows={3}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="What’s explicitly out?"
            value={form.outOfScope}
            onChange={(event) => handleChange("outOfScope", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Delivery format (deck, doc, site, etc.)"
            value={form.format}
            onChange={(event) => handleChange("format", event.target.value)}
          />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Timeline & Milestones</p>
          <textarea
            rows={6}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Start date, checkpoints, final delivery"
            value={form.timeline}
            onChange={(event) => handleChange("timeline", event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold">Budget & Resources</p>
          <textarea
            rows={4}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Budget range or investment band"
            value={form.budget}
            onChange={(event) => handleChange("budget", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Payment terms"
            value={form.payment}
            onChange={(event) => handleChange("payment", event.target.value)}
          />
          <textarea
            rows={3}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Resources or tools required"
            value={form.resources}
            onChange={(event) => handleChange("resources", event.target.value)}
          />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Stakeholders & Approvals</p>
          <textarea
            rows={4}
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Decision makers and responsibilities"
            value={form.stakeholders}
            onChange={(event) => handleChange("stakeholders", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Approval process"
            value={form.approvals}
            onChange={(event) => handleChange("approvals", event.target.value)}
          />
          <input
            className={inputClass}
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Communication preferences"
            value={form.communications}
            onChange={(event) => handleChange("communications", event.target.value)}
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold">Constraints & Considerations</p>
        <textarea
          rows={4}
          className={`${inputClass} mt-3`}
          style={{ borderColor: palette.border, background: palette.surfaceSoft }}
          placeholder="Technical limits, brand rules, known risks"
          value={form.constraints}
          onChange={(event) => handleChange("constraints", event.target.value)}
        />
      </div>
    </div>
  );
}

function ToolPageShell({ slug, title, subtitle, accent, heroBadge = "Starterclass Tools", actions, children }) {
  const { theme, palette, toggleTheme } = usePageTheme();
  const toolBackground = theme === "dark"
    ? "radial-gradient(circle at 15% 20%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 85% 0%, rgba(16,185,129,0.2), transparent 70%), #040312"
    : "linear-gradient(120deg, #FDF4E8, #F4F0FF 45%, #E7F8FF)";
  return (
    <ThemeProvider theme={theme} palette={palette}>
      <div className="min-h-screen" style={{ background: toolBackground, color: palette.textPrimary }}>
        <header className="sticky top-0 z-40 backdrop-blur" style={{ background: palette.headerBg, borderBottom: `1px solid ${palette.border}` }}>
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => (window.location.href = "/tools.html")}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: palette.textPrimary }}
              >
                <span aria-hidden="true">←</span>
                Back to tools
              </button>
              <div className="text-xs uppercase tracking-[0.28em]" style={{ color: palette.textMuted }}>
                {title}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border p-2 text-xl"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
            <div className="flex justify-center">
              <GlobalNavRow activeKey="tools" />
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
          <section className="rounded-3xl border p-6 md:p-10 space-y-4" style={{ borderColor: palette.border, background: palette.surface }}>
            <Badge>{heroBadge}</Badge>
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
            <p className="text-sm md:text-base" style={{ color: palette.textSecondary }}>
              {subtitle}
            </p>
            {actions}
          </section>
          {children}
        </main>
        <FooterMenu />
        <ScrollControls />
      </div>
    </ThemeProvider>
  );
}

function ToolsGalleryPage() {
  const { theme, palette, toggleTheme } = usePageTheme();
  const [sortOrder, setSortOrder] = useState("az");
  const sortedTools = useMemo(() => sortByOrder(TOOL_DEFINITIONS, sortOrder, "title"), [sortOrder]);
  const galleryBackground = theme === "dark"
    ? "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 65%), #03020f"
    : "linear-gradient(120deg, #FCF1E7, #F2EFFF 45%, #E6F9FF)";
  return (
    <ThemeProvider theme={theme} palette={palette}>
      <div className="min-h-screen" style={{ background: galleryBackground, color: palette.textPrimary }}>
        <header className="sticky top-0 z-40 backdrop-blur" style={{ background: palette.headerBg, borderBottom: `1px solid ${palette.border}` }}>
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-semibold" style={{ color: palette.textPrimary }}>
                Starterclass Tools Lab
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border p-2 text-xl"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
            <div className="flex justify-center">
              <GlobalNavRow activeKey="tools" />
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
          <section className="rounded-3xl border p-6 md:p-10" style={{ borderColor: palette.border, background: palette.surface }}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <Badge>Interactive collection</Badge>
                <h1 className="text-3xl md:text-4xl font-semibold">Pick a luxury tool, make it yours, keep building.</h1>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  Every tool mirrors the live Starterclass build — auto-save, responsive layouts, and Canvas-ready prompts included.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <GlassButton onClick={() => (window.location.href = "/ai-starterclass-lab.html")}>Return to the lab</GlassButton>
                <GlassButton variant="secondary" onClick={() => (window.location.href = "/prompts.html")}>Browse prompts</GlassButton>
              </div>
            </div>
          </section>
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold" style={{ color: palette.textSecondary }}>
                Tap a tool to launch the full-screen build.
              </p>
              <SortControl value={sortOrder} onChange={setSortOrder} />
            </div>
            <div className="grid gap-3 grid-cols-3 lg:grid-cols-4">
              {sortedTools.map((tool) => (
                <button
                  key={tool.slug}
                  type="button"
                  onClick={() => (window.location.href = `/tools-${tool.slug}.html`)}
                  className="group rounded-[1.75rem] overflow-hidden border text-left relative"
                  style={{
                    borderColor: tool.accent,
                    background: `linear-gradient(160deg, ${tool.accent}22, ${palette.surface})`,
                    boxShadow: `0 20px 45px ${tool.accent}22`,
                  }}
                >
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <img src={tool.image} alt={tool.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <p className="text-[0.65rem] uppercase tracking-[0.3em]">{tool.title}</p>
                      <p className="text-sm font-semibold md:text-lg">{tool.tagline}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between text-xs" style={{ color: palette.textSecondary }}>
                    <span>Tap to launch</span>
                    <span className="text-lg" aria-hidden="true">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
        <FooterMenu />
        <ScrollControls />
      </div>
    </ThemeProvider>
  );
}

function UniversalAIPersonalityTool() {
  const { palette } = useTheme();
  const initial = {
    about: "I'm a professional who uses AI to amplify my work, not replace my thinking. I value efficiency, clarity, and outputs I can actually use.",
    workContext: "I work across multiple projects that require research, content creation, strategic planning, and execution.",
    preferences: "- Give me actionable outputs, not just information\n- Show your work when reasoning matters\n- Format for real use so I can copy/paste",
    dontWant: "- Overly formal corporate speak unless I ask\n- Apologies for being AI\n- Generic advice\n- Lists when prose would work better",
    quick: "Quick version = essentials only",
    deep: "Deep dive = comprehensive with examples and context",
    defaultMode: "Default = balanced, practical, ready to use",
    tone: "Professional but conversational. Like a smart colleague who gets things done.",
    structure: "- Lead with the answer or key insight\n- Provide context after\n- End with next steps or implications when relevant",
    format: "- Use headings and bold sparingly\n- Write in paragraphs for explanations\n- Use lists only when comparing options\n- For deliverables, give the final version first, then notes",
    special: "- If I upload a document, treat it as source material\n- When I say \"build this\", create something I can deploy\n- Remember context in our conversation\n- Flag inefficient approaches\n- Challenge weak ideas with alternatives",
  };
  const [form, setForm] = useState(initial);
  const [copied, setCopied] = useState(false);

  const instructions = useMemo(() => {
    return [
      "WHAT TO KNOW ABOUT ME:",
      form.about,
      "",
      "WORK CONTEXT:",
      form.workContext,
      "",
      "MY PREFERENCES:",
      form.preferences,
      "",
      "WHAT I DON'T WANT:",
      form.dontWant,
      "",
      "DEPTH LEVELS:",
      form.quick,
      form.deep,
      form.defaultMode,
      "",
      "HOW TO RESPOND:",
      `Tone: ${form.tone}`,
      `Structure:\n${form.structure}`,
      `Format:\n${form.format}`,
      "",
      "SPECIAL INSTRUCTIONS:",
      form.special,
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(instructions).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const inputClass = "w-full rounded-2xl border p-3 text-sm";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6 md:p-10 space-y-6" style={{ borderColor: palette.border, background: palette.surface }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
              Personalise
            </p>
            <h2 className="text-2xl font-semibold">Tell ChatGPT how to behave by default.</h2>
          </div>
          <GlassButton onClick={handleCopy}>{copied ? "Copied" : "Copy instructions"}</GlassButton>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold">About you</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.about}
              onChange={(event) => handleChange("about", event.target.value)}
            />
            <label className="text-sm font-semibold">Work context</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.workContext}
              onChange={(event) => handleChange("workContext", event.target.value)}
            />
            <label className="text-sm font-semibold">Preferences</label>
            <textarea
              rows={5}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.preferences}
              onChange={(event) => handleChange("preferences", event.target.value)}
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold">What you don't want</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.dontWant}
              onChange={(event) => handleChange("dontWant", event.target.value)}
            />
            <label className="text-sm font-semibold">Depth cues</label>
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.quick}
              onChange={(event) => handleChange("quick", event.target.value)}
              placeholder="Quick version"
            />
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.deep}
              onChange={(event) => handleChange("deep", event.target.value)}
              placeholder="Deep dive"
            />
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.defaultMode}
              onChange={(event) => handleChange("defaultMode", event.target.value)}
              placeholder="Default mode"
            />
            <label className="text-sm font-semibold">Tone</label>
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.tone}
              onChange={(event) => handleChange("tone", event.target.value)}
            />
            <label className="text-sm font-semibold">Structure</label>
            <textarea
              rows={3}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.structure}
              onChange={(event) => handleChange("structure", event.target.value)}
            />
            <label className="text-sm font-semibold">Format preferences</label>
            <textarea
              rows={3}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.format}
              onChange={(event) => handleChange("format", event.target.value)}
            />
            <label className="text-sm font-semibold">Special instructions</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.special}
              onChange={(event) => handleChange("special", event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="rounded-3xl border p-5" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
        <p className="text-sm font-semibold">Generated instructions</p>
        <pre className="mt-3 whitespace-pre-wrap text-sm" style={{ color: palette.textSecondary }}>{instructions}</pre>
      </div>
    </div>
  );
}

const TASK_CODE_DEFINITIONS = [
  {
    code: "[RESEARCH]",
    description: "Deep dive investigation",
    output: "Synthesis with credible sources, trends, contradictions",
  },
  {
    code: "[DRAFT]",
    description: "Create usable content",
    output: "Polished draft with one alternative approach",
  },
  {
    code: "[STRATEGY]",
    description: "Think through approach",
    output: "Recommendation with reasoning and trade-offs",
  },
  {
    code: "[BUILD]",
    description: "Create a tool or system",
    output: "Functional template, workflow, or calculator",
  },
  {
    code: "[ANALYZE]",
    description: "Break down what I provide",
    output: "Key findings, patterns, gaps, implications",
  },
  {
    code: "[REFINE]",
    description: "Improve existing work",
    output: "Enhanced version with change notes",
  },
  {
    code: "[IDEATE]",
    description: "Generate possibilities",
    output: "Options with quick pros/cons",
  },
];

function TaskCodesTool() {
  const { palette } = useTheme();
  const [selectedCode, setSelectedCode] = useState(TASK_CODE_DEFINITIONS[0].code);
  const [taskDescription, setTaskDescription] = useState("");
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const promptText = useMemo(() => {
    const detailLines = [
      `${selectedCode} ${taskDescription || "Describe the task clearly"}`,
      context && `Context: ${context}`,
      constraints && `Constraints: ${constraints}`,
      "Remember: maintain project memory, reference previous deliverables, and call out assumptions before answering.",
    ]
      .filter(Boolean)
      .join("\n");
    return detailLines;
  }, [selectedCode, taskDescription, context, constraints]);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(promptText);
    }
  };

  const inputClass = "w-full rounded-2xl border p-3 text-sm";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6 md:p-10 space-y-6" style={{ borderColor: palette.border, background: palette.surface }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
              Project operating system
            </p>
            <h2 className="text-2xl font-semibold">Pick a task code and generate the perfect ask.</h2>
          </div>
          <GlassButton onClick={handleCopy}>Copy prompt</GlassButton>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TASK_CODE_DEFINITIONS.map((entry) => (
            <button
              key={entry.code}
              type="button"
              onClick={() => setSelectedCode(entry.code)}
              className={`rounded-2xl border p-4 text-left ${selectedCode === entry.code ? "ring-2" : ""}`}
              style={{ borderColor: selectedCode === entry.code ? palette.accentSecondary : palette.border }}
            >
              <p className="font-semibold">{entry.code}</p>
              <p className="text-sm" style={{ color: palette.textSecondary }}>
                {entry.description}
              </p>
              <p className="text-xs mt-2" style={{ color: palette.textMuted }}>
                {entry.output}
              </p>
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Task</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              placeholder="What do you need?"
              value={taskDescription}
              onChange={(event) => setTaskDescription(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Context</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              placeholder="Links, goals, blockers"
              value={context}
              onChange={(event) => setContext(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Constraints or extras</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              placeholder="Tone, length, format"
              value={constraints}
              onChange={(event) => setConstraints(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="rounded-3xl border p-5" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
        <p className="text-sm font-semibold">Preview prompt</p>
        <pre className="mt-3 whitespace-pre-wrap text-sm" style={{ color: palette.textSecondary }}>{promptText}</pre>
      </div>
    </div>
  );
}

function ContentQualityAnalyzerTool() {
  const { palette } = useTheme();
  const [input, setInput] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [copied, setCopied] = useState(false);

  const analyze = () => {
    if (!input.trim()) {
      setAnalysis(null);
      return;
    }
    const sentences = input.trim().split(/(?<=[.!?])\s+/).filter(Boolean);
    const wordCount = input.trim().split(/\s+/).filter(Boolean).length;
    const paragraphCount = input.trim().split(/\n+/).filter(Boolean).length;
    const clarityScore = Math.max(3, 10 - Math.max(0, Math.round(wordCount / Math.max(1, sentences.length)) - 18));
    const structureScore = paragraphCount > 1 ? 8 : 5;
    const toneScore = /sorry|apolog/i.test(input) ? 5 : 8;
    const quickScore = Math.min(10, Math.round((clarityScore + structureScore + toneScore) / 3));
    const strengths = [];
    if (wordCount < 220) strengths.push("Tight length keeps readers moving.");
    if (/[0-9%]/.test(input)) strengths.push("Specific numbers build credibility.");
    if (paragraphCount > 1) strengths.push("Paragraph breaks improve scan-ability.");
    const needsWork = [];
    if (paragraphCount === 1) needsWork.push("Break the text into smaller paragraphs for easier reading.");
    if (!/[0-9%]/.test(input)) needsWork.push("Add concrete metrics or examples.");
    if (!/[A-Z]/.test(input.split("\n")[0] || "")) needsWork.push("Lead with a headline or hook that states the promise.");
    const suggestions = [
      "State the main outcome in the first sentence.",
      "Group related thoughts and use transitions between sections.",
      "End with a clear next step or CTA.",
    ];
    const rewrite = input
      .split(/\n+/)
      .map((para) => para.trim())
      .filter(Boolean)
      .map((para, idx) => {
        if (idx === 0) {
          return `**Key takeaway:** ${para}`;
        }
        if (!para.startsWith("-")) {
          return `- ${para}`;
        }
        return para;
      })
      .join("\n\n");
    setAnalysis({ quickScore, strengths, needsWork, suggestions, rewrite });
  };

  const handleCopy = () => {
    if (!analysis) return;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(analysis.rewrite);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const panelStyle = (color) => ({ borderColor: palette.border, background: color });

  return (
    <div className="rounded-3xl border p-6 md:p-10 space-y-6" style={{ borderColor: palette.border, background: palette.surface }}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold">Original content</p>
          <textarea
            rows={16}
            className="w-full rounded-2xl border p-4 text-sm"
            style={{ borderColor: palette.border, background: palette.surfaceSoft }}
            placeholder="Paste an email, proposal, article, or script."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <GlassButton onClick={analyze} className="w-full justify-center">
            Analyze
          </GlassButton>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border p-4" style={panelStyle("rgba(16,185,129,0.08)")}>
            <p className="text-sm font-semibold">Quick score</p>
            <p className="text-4xl font-semibold">{analysis ? `${analysis.quickScore}/10` : "—"}</p>
            <p className="text-xs" style={{ color: palette.textSecondary }}>
              {analysis ? "Higher score = publish-ready." : "Paste content and run the analyzer."}
            </p>
          </div>
          <div className="rounded-3xl border p-4 space-y-2" style={panelStyle("rgba(16,185,129,0.08)")}>
            <p className="text-sm font-semibold">What’s working</p>
            <ul className="list-disc pl-5 text-sm" style={{ color: palette.textSecondary }}>
              {analysis?.strengths?.length
                ? analysis.strengths.map((item) => <li key={item}>{item}</li>)
                : <li>Strengths will appear here.</li>}
            </ul>
          </div>
          <div className="rounded-3xl border p-4 space-y-2" style={panelStyle("rgba(249,115,22,0.12)")}>
            <p className="text-sm font-semibold">What needs work</p>
            <ul className="list-disc pl-5 text-sm" style={{ color: palette.textSecondary }}>
              {analysis?.needsWork?.length
                ? analysis.needsWork.map((item) => <li key={item}>{item}</li>)
                : <li>Issues appear after analysis.</li>}
            </ul>
          </div>
          <div className="rounded-3xl border p-4 space-y-2" style={panelStyle(palette.surfaceSoft)}>
            <p className="text-sm font-semibold">Suggested edits</p>
            <ul className="list-disc pl-5 text-sm" style={{ color: palette.textSecondary }}>
              {analysis?.suggestions?.length
                ? analysis.suggestions.map((item) => <li key={item}>{item}</li>)
                : <li>Suggestions appear here.</li>}
            </ul>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border p-5 space-y-3" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold">Rewritten version</p>
          <GlassButton variant="secondary" onClick={handleCopy}>
            {copied ? "Copied" : "Copy improved version"}
          </GlassButton>
        </div>
        <pre className="whitespace-pre-wrap text-sm" style={{ color: palette.textSecondary }}>
          {analysis ? analysis.rewrite : "Run the analyzer to get a rewritten version."}
        </pre>
      </div>
    </div>
  );
}

function ClientProjectPlannerTool() {
  const { palette } = useTheme();
  const [selectedInputs, setSelectedInputs] = useState(LAB_INPUT_OPTIONS.slice(0, 5));
  const [form, setForm] = useState({
    industry: "Creative",
    clientType: "Startup",
    description: "Brand refresh with lightweight automation",
    urgency: "Medium",
    effort: "M",
    value: 3,
    baseRate: 1800,
    risks: "Scope creep around content volume",
    timeline: "Discovery → Build → Launch",
  });
  const [plan, setPlan] = useState(null);
  const [message, setMessage] = useState("");

  const toggleInput = (label) => {
    setSelectedInputs((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      }
      return [...prev, label];
    });
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

  const generatePlan = () => {
    if (selectedInputs.length < 5) {
      setMessage("Select at least five inputs so the tool has context.");
      return;
    }
    const effortMap = { S: 1, M: 1.8, L: 2.6 };
    const urgencyMap = { Low: 0.9, Medium: 1, High: 1.35 };
    const base = Number(form.baseRate) || 1500;
    const priceLow = Math.round(base * (effortMap[form.effort] || 1.6) * (urgencyMap[form.urgency] || 1) * (1 + Number(form.value || 3) * 0.05));
    const priceHigh = Math.round(priceLow * 1.4);
    const phases = [
      {
        name: "Discovery & scope",
        detail: "Clarify goals, surface risks, lock success metrics.",
      },
      {
        name: "Build & iterate",
        detail: "Co-create assets, run checkpoints, log decisions.",
      },
      {
        name: "Launch & handover",
        detail: "QA deliverables, prepare comms, document next steps.",
      },
    ];
    const email = `Hi team,\n\nHere’s how we’ll approach ${form.description || "the project"}:\n- ${phases
      .map((phase) => `${phase.name}: ${phase.detail}`)
      .join("\n- ")}\n\nRecommended investment: ${formatCurrency(priceLow)} – ${formatCurrency(priceHigh)} based on effort (${form.effort}) and urgency (${form.urgency}). Let me know if you want to adjust scope before we lock it in.`;
    setPlan({
      summary: `You’re helping a ${form.clientType} in ${form.industry} move from idea to delivery. The project description focuses on ${form.description}.`,
      priceBand: `${formatCurrency(priceLow)} – ${formatCurrency(priceHigh)}`,
      phases,
      risks: form.risks || "Capture approvals in writing and document every assumption.",
      email,
    });
    setMessage("Planner updated — copy or share it immediately.");
  };

  const copyPlan = () => {
    if (!plan) return;
    const text = [
      "CLIENT PROJECT PLANNER",
      plan.summary,
      "",
      `Recommended investment: ${plan.priceBand}`,
      "",
      "Phases:",
      ...plan.phases.map((phase) => `- ${phase.name}: ${phase.detail}`),
      "",
      `Risks & watch-outs: ${plan.risks}`,
      "",
      "Client email:",
      plan.email,
    ].join("\n");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  const inputClass = "w-full rounded-2xl border p-3 text-sm";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6 md:p-10 space-y-6" style={{ borderColor: palette.border, background: palette.surface }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
              Inputs first
            </p>
            <h2 className="text-2xl font-semibold">Select the data your tool collects.</h2>
          </div>
          <GlassButton onClick={generatePlan}>Generate plan</GlassButton>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {LAB_INPUT_OPTIONS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => toggleInput(label)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm ${selectedInputs.includes(label) ? "ring-2" : ""}`}
              style={{ borderColor: selectedInputs.includes(label) ? palette.accentSecondary : palette.border }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold">Industry / Field</label>
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.industry}
              onChange={(event) => handleChange("industry", event.target.value)}
            />
            <label className="text-sm font-semibold">Client type</label>
            <input
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.clientType}
              onChange={(event) => handleChange("clientType", event.target.value)}
            />
            <label className="text-sm font-semibold">Project description</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.description}
              onChange={(event) => handleChange("description", event.target.value)}
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold">Urgency</label>
            <select
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.urgency}
              onChange={(event) => handleChange("urgency", event.target.value)}
            >
              {['Low','Medium','High'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-sm font-semibold">Estimated effort</label>
            <select
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.effort}
              onChange={(event) => handleChange("effort", event.target.value)}
            >
              {['S','M','L'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-sm font-semibold">Strategic value (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.value}
              onChange={(event) => handleChange("value", event.target.value)}
            />
            <label className="text-sm font-semibold">Base day rate</label>
            <input
              type="number"
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.baseRate}
              onChange={(event) => handleChange("baseRate", event.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold">Risks / constraints</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.risks}
              onChange={(event) => handleChange("risks", event.target.value)}
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold">Timeline notes</label>
            <textarea
              rows={4}
              className={inputClass}
              style={{ borderColor: palette.border, background: palette.surfaceSoft }}
              value={form.timeline}
              onChange={(event) => handleChange("timeline", event.target.value)}
            />
          </div>
        </div>
        {message && (
          <div className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: palette.border, color: palette.textSecondary }}>
            {message}
          </div>
        )}
      </div>
      {plan && (
        <div className="rounded-3xl border p-6 space-y-4" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Output</p>
              <p className="text-xl font-semibold">{plan.priceBand}</p>
              <p className="text-xs" style={{ color: palette.textSecondary }}>
                Investment band based on your inputs
              </p>
            </div>
            <GlassButton variant="secondary" onClick={copyPlan}>
              Copy planner
            </GlassButton>
          </div>
          <p className="text-sm" style={{ color: palette.textSecondary }}>
            {plan.summary}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {plan.phases.map((phase) => (
              <div key={phase.name} className="rounded-2xl border p-4" style={{ borderColor: palette.border, background: palette.surface }}>
                <p className="font-semibold text-sm">{phase.name}</p>
                <p className="text-xs mt-2" style={{ color: palette.textSecondary }}>
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border p-4" style={{ borderColor: palette.border }}>
            <p className="text-sm font-semibold">Risks & watch-outs</p>
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              {plan.risks}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Client-ready email</p>
            <pre className="whitespace-pre-wrap text-sm" style={{ color: palette.textSecondary }}>{plan.email}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

function YoutubeMp3Tool() {
  const { palette } = useTheme();
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [history, setHistory] = useState([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  const handleConvert = useCallback(async () => {
    if (busy) {
      return;
    }
    setError("");
    const videoId = extractYouTubeId(link);
    if (!videoId) {
      setError("Enter a valid YouTube URL or video ID.");
      return;
    }
    setBusy(true);
    setStatus("fetching");
    setProgress(10);
    try {
      const manifest = await fetchYoutubeManifest(videoId);
      const audioStream = pickBestAudioStream(manifest.audioStreams || []);
      if (!audioStream) {
        throw new Error("No downloadable audio stream was returned.");
      }
      const meta = {
        title: manifest.title || "Untitled video",
        channel: manifest.uploader || manifest.channel?.name || "Unknown creator",
        duration: manifest.duration,
        thumbnail:
          manifest.thumbnailUrl ||
          manifest.thumbnailUrlSet?.[0]?.url ||
          manifest.thumbnail?.[0]?.url,
        id: videoId,
        originalFormat: audioStream.mimeType,
      };
      setResult({ ...meta });
      setStatus("converting");
      setProgress(45);
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
        setDownloadUrl("");
      }
      const blob = await convertStreamToMp3(audioStream.url, (value) => setProgress(Math.min(95, value)));
      const safeName = `${sanitizeFileName(meta.title)}.mp3`;
      setResult((prev) => ({ ...prev, fileName: safeName, fileSize: blob.size }));
      setDownloadUrl(URL.createObjectURL(blob));
      setProgress(100);
      setStatus("ready");
      setHistory((prev) =>
        [
          {
            title: meta.title,
            channel: meta.channel,
            timestamp: new Date().toISOString(),
            size: blob.size,
          },
          ...prev,
        ].slice(0, 4)
      );
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err.message || "Unable to convert this link right now.");
    } finally {
      setBusy(false);
    }
  }, [busy, downloadUrl, link]);

  const downloadFile = useCallback(() => {
    if (!downloadUrl || !result?.fileName) {
      return;
    }
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = result.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }, [downloadUrl, result]);

  const statusMap = {
    idle: "Ready when you are.",
    fetching: "Fetching the cleanest stream…",
    converting: "Transcoding to 320 kbps MP3…",
    ready: "MP3 ready to download.",
    error: "Something went wrong.",
  };

  const formatSeconds = (value) => {
    if (!value && value !== 0) {
      return "—";
    }
    const total = Number(value);
    const minutes = Math.floor(total / 60);
    const seconds = Math.round(total % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const formatBytes = (bytes) => {
    if (!bytes && bytes !== 0) {
      return "—";
    }
    const units = ["B", "KB", "MB", "GB"];
    let value = bytes;
    let unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex += 1;
    }
    return `${value.toFixed(1)} ${units[unitIndex]}`;
  };

  return (
    <div className="space-y-8">
      <div
        className="rounded-3xl border p-6 space-y-6"
        style={{ borderColor: palette.border, background: palette.surfaceSoft, boxShadow: "0 40px 120px rgba(0,0,0,0.25)" }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: palette.textSecondary }}>
            Step 1 · Paste link
          </p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=…"
              className="flex-1 rounded-2xl border px-4 py-3 text-sm"
              style={{ borderColor: palette.border, background: palette.surface }}
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
            <GlassButton onClick={handleConvert} disabled={busy}>
              {busy ? "Processing" : "Convert"}
            </GlassButton>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-2" style={{ color: palette.textSecondary }}>
            Progress
          </p>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: palette.surface }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${palette.accentPrimary}, ${palette.accentSecondary})`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
          <p className="mt-2 text-sm" style={{ color: palette.textSecondary }}>
            {statusMap[status]}
          </p>
        </div>
        {error && (
          <div className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "#F87171", color: "#F87171" }}>
            {error}
          </div>
        )}
        {result && (
          <div className="rounded-3xl border p-4 flex flex-col gap-4 md:flex-row" style={{ borderColor: palette.border }}>
            {result.thumbnail && (
              <img src={result.thumbnail} alt="Video thumbnail" className="w-full md:w-56 rounded-2xl object-cover" />
            )}
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: palette.textSecondary }}>
                  Track info
                </p>
                <p className="text-2xl font-semibold mt-1">{result.title}</p>
                <p className="text-sm" style={{ color: palette.textSecondary }}>
                  {result.channel} · {formatSeconds(result.duration)}
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border p-3" style={{ borderColor: palette.border }}>
                  <p className="text-xs" style={{ color: palette.textSecondary }}>
                    Encoder
                  </p>
                  <p className="font-semibold">LAME · 320 kbps</p>
                </div>
                <div className="rounded-2xl border p-3" style={{ borderColor: palette.border }}>
                  <p className="text-xs" style={{ color: palette.textSecondary }}>
                    Size
                  </p>
                  <p className="font-semibold">{formatBytes(result.fileSize)}</p>
                </div>
                <div className="rounded-2xl border p-3" style={{ borderColor: palette.border }}>
                  <p className="text-xs" style={{ color: palette.textSecondary }}>
                    Original stream
                  </p>
                  <p className="font-semibold truncate">{result.originalFormat || "—"}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <GlassButton onClick={downloadFile} disabled={!downloadUrl}>
                  Download MP3
                </GlassButton>
                <GlassButton
                  variant="secondary"
                  onClick={() => navigator.clipboard.writeText(result.fileName || `${result.id}.mp3`)}
                >
                  Copy filename
                </GlassButton>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-5" style={{ borderColor: palette.border }}>
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: palette.textSecondary }}>
            Quality protocol
          </p>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: palette.textSecondary }}>
            <li>We request the Piped manifest to pick the highest bitrate audio stream.</li>
            <li>Audio is decoded locally so source links never leave your browser.</li>
            <li>LAME encoder runs at 320 kbps CBR for studio-grade MP3 output.</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-5" style={{ borderColor: palette.border }}>
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: palette.textSecondary }}>
            Recent renders
          </p>
          <div className="mt-4 space-y-3">
            {history.length === 0 && (
              <p className="text-sm" style={{ color: palette.textSecondary }}>
                Your conversions will show up here with timestamps and file sizes.
              </p>
            )}
            {history.map((item) => (
              <div key={item.timestamp} className="rounded-2xl border px-3 py-2" style={{ borderColor: palette.border }}>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs" style={{ color: palette.textSecondary }}>
                  {item.channel} · {formatBytes(item.size)} ·
                  {" "}
                  {new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsUniversalAIPersonalityPage() {
  return (
    <ToolPageShell
      slug="universal-ai-personality"
      title="Universal AI Personality"
      subtitle="Design Custom Instructions that stick across every chat, GPT, and Project."
    >
      <UniversalAIPersonalityTool />
    </ToolPageShell>
  );
}

function ToolsTaskCodesPage() {
  return (
    <ToolPageShell
      slug="task-codes"
      title="Task Codes Workspace"
      subtitle="Keep every AI request organised with battle-tested project codes."
    >
      <TaskCodesTool />
    </ToolPageShell>
  );
}

function ToolsClientBriefGeneratorPage() {
  return (
    <ToolPageShell
      slug="client-brief-generator"
      title="Client Brief Generator"
      subtitle="Auto-save detailed briefs, validate required inputs, and export a PDF-ready report."
    >
      <ClientBriefGeneratorTool />
    </ToolPageShell>
  );
}

function ToolsContentQualityAnalyzerPage() {
  return (
    <ToolPageShell
      slug="content-quality-analyzer"
      title="Content Quality Analyzer"
      subtitle="Paste anything and get instant strengths, fixes, and a rewritten version."
    >
      <ContentQualityAnalyzerTool />
    </ToolPageShell>
  );
}

function ToolsClientProjectPlannerPage() {
  return (
    <ToolPageShell
      slug="client-project-planner"
      title="Client Project Planner & Value Calculator"
      subtitle="Scope projects, price them confidently, and send a client-ready email in minutes."
    >
      <ClientProjectPlannerTool />
    </ToolPageShell>
  );
}

function ToolsYoutubeMp3Page() {
  return (
    <ToolPageShell
      slug="youtube-mp3"
      title="YouTube to MP3 Studio"
      subtitle="Paste a link, fetch the cleanest audio, and leave with a 320 kbps MP3 in minutes."
      accent="#EF4444"
      actions={(
        <div className="flex flex-wrap gap-3">
          <GlassButton variant="secondary" onClick={() => (window.location.href = "/tools.html")}>
            Back to tools
          </GlassButton>
          <GlassButton onClick={() => (window.location.href = "/ai-starterclass-lab.html")}>
            Study the Starterclass Lab
          </GlassButton>
        </div>
      )}
    >
      <YoutubeMp3Tool />
    </ToolPageShell>
  );
}

function PromptsGalleryPage() {
  const { theme, palette, toggleTheme } = usePageTheme();
  const [prompts, setPrompts] = useState(assignPromptImages(PROMPT_FALLBACKS));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editablePrompt, setEditablePrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [sortOrder, setSortOrder] = useState("random");
  const displayPrompts = useMemo(() => sortByOrder(prompts, sortOrder, "action"), [prompts, sortOrder]);

  useEffect(() => {
    let cancelled = false;
    const fetchPrompts = async () => {
      try {
        const response = await fetch(PROMPT_SHEET_CSV);
        const text = await response.text();
        if (cancelled) return;
        const parsed = parsePromptCsv(text);
        setPrompts(assignPromptImages(parsed));
        setError("");
      } catch (err) {
        setError("Couldn’t load Google Sheet — showing starter prompts.");
        setPrompts(assignPromptImages(PROMPT_FALLBACKS));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchPrompts();
    return () => {
      cancelled = true;
    };
  }, []);

  const openPrompt = (prompt) => {
    setSelectedPrompt(prompt);
    setEditablePrompt(prompt.prompt);
    setCopied(false);
  };

  const closePrompt = () => {
    setSelectedPrompt(null);
    setCopied(false);
  };

  const copyPrompt = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(editablePrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const promptBackground = theme === "dark"
    ? "radial-gradient(circle at 20% 15%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.2), transparent 70%), #030212"
    : "linear-gradient(125deg, #FCF1E9, #F1EEFF 45%, #E5F8FF)";

  return (
    <ThemeProvider theme={theme} palette={palette}>
      <div className="min-h-screen" style={{ background: promptBackground, color: palette.textPrimary }}>
        <header className="sticky top-0 z-40 backdrop-blur" style={{ background: palette.headerBg, borderBottom: `1px solid ${palette.border}` }}>
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-semibold">Starterclass Prompt Library</div>
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border p-2 text-xl"
                style={{ borderColor: palette.border, background: palette.surfaceSoft, color: palette.textPrimary }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
            <div className="flex justify-center">
              <GlobalNavRow activeKey="prompts" />
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
          <section className="rounded-3xl border p-6 md:p-10 space-y-3" style={{ borderColor: palette.border, background: palette.surface }}>
            <Badge>Prompt grid</Badge>
            <h1 className="text-3xl font-semibold">Tap a card, edit the prompt, copy it instantly.</h1>
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              Data flows from the shared Google Sheet, so every refresh can reveal fresh angles.
            </p>
            <SortControl value={sortOrder} onChange={setSortOrder} />
          </section>
          {error && (
            <div className="rounded-3xl border p-4 text-sm" style={{ borderColor: palette.border, background: palette.surfaceSoft }}>
              {error}
            </div>
          )}
          {loading ? (
            <p className="text-sm" style={{ color: palette.textSecondary }}>
              Loading prompts…
            </p>
          ) : (
            <section className="grid gap-3 grid-cols-3 lg:grid-cols-4">
              {displayPrompts.map((prompt) => (
                <button
                  key={`${prompt.action}-${prompt.image}`}
                  type="button"
                  onClick={() => openPrompt(prompt)}
                  className="relative aspect-square overflow-hidden rounded-3xl border text-left"
                  style={{ borderColor: palette.border }}
                >
                  <img src={prompt.image} alt={prompt.action} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative h-full w-full p-4 flex flex-col justify-end text-white">
                    <p className="text-[0.55rem] uppercase tracking-[0.35em]">Prompt</p>
                    <p className="text-sm font-semibold md:text-lg">{prompt.action}</p>
                  </div>
                </button>
              ))}
            </section>
          )}
        </main>
        <FooterMenu />
        <ScrollControls />
        {selectedPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} onClick={closePrompt} />
            <div className="relative w-full max-w-2xl rounded-3xl border p-6 space-y-4" style={{ borderColor: palette.border, background: palette.surface }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.textMuted }}>
                    Prompt
                  </p>
                  <h3 className="text-xl font-semibold">{selectedPrompt.action}</h3>
                </div>
                <button type="button" onClick={closePrompt} className="text-2xl" style={{ color: palette.textSecondary }}>
                  ×
                </button>
              </div>
              <textarea
                rows={8}
                className="w-full rounded-2xl border p-4 text-sm"
                style={{ borderColor: palette.border, background: palette.surfaceSoft }}
                value={editablePrompt}
                onChange={(event) => setEditablePrompt(event.target.value)}
              />
              <div className="flex flex-wrap gap-3 justify-end">
                <GlassButton variant="secondary" onClick={copyPrompt}>
                  {copied ? "Copied" : "Copy"}
                </GlassButton>
                <GlassButton onClick={closePrompt}>Close</GlassButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

function parsePromptCsv(text) {
  const rows = text.trim().split(/\r?\n/);
  const [header, ...data] = rows;
  const columns = header.split(",").map((col) => col.trim().toLowerCase());
  return data
    .map((line) => {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let char of line) {
        if (char === '"') {
          inQuotes = !inQuotes;
          continue;
        }
        if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      const record = {};
      columns.forEach((col, idx) => {
        record[col] = values[idx] || "";
      });
      return { action: record.action || "Untitled", prompt: record.prompt || "" };
    })
    .filter((row) => row.prompt);
}

function assignPromptImages(list) {
  const seed = Math.floor(Math.random() * PROMPT_IMAGE_POOL.length);
  return list.map((item, index) => ({
    ...item,
    image: PROMPT_IMAGE_POOL[(seed + index) % PROMPT_IMAGE_POOL.length],
  }));
}

function SortControl({ value, onChange }) {
  const { palette } = useTheme();
  const options = [
    { value: "az", label: "A → Z" },
    { value: "za", label: "Z → A" },
    { value: "random", label: "Shuffle" },
  ];
  return (
    <div className="flex items-center gap-2 text-xs" style={{ color: palette.textSecondary }}>
      <span className="uppercase tracking-[0.3em]">Sort</span>
      <div className="flex gap-1">
        {options.map((option) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-full px-3 py-1 font-semibold ${active ? "shadow" : ""}`}
              style={{
                border: `1px solid ${active ? palette.accentSecondary : palette.border}`,
                background: active ? `${palette.accentSecondary}20` : palette.surface,
                color: active ? palette.accentSecondary : palette.textSecondary,
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function sortByOrder(list, order, key = "title") {
  const arr = [...list];
  if (order === "az") {
    return arr.sort((a, b) => (a[key] || "").localeCompare(b[key] || ""));
  }
  if (order === "za") {
    return arr.sort((a, b) => (b[key] || "").localeCompare(a[key] || ""));
  }
  if (order === "random") {
    return shuffleArray(arr);
  }
  return arr;
}

function shuffleArray(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildProxyUrls(url) {
  if (!url) {
    return [];
  }
  const sanitized = url.replace(/^https?:\/\//, "");
  const proxies = [
    `https://r.jina.ai/http://${sanitized}`,
    `https://r.jina.ai/https://${sanitized}`,
    `https://cors.isomorphic-git.org/${url}`,
  ];
  return Array.from(new Set(proxies));
}

async function fetchYoutubeManifest(videoId) {
  const pipedInstances = [
    "https://piped.video",
    "https://piped.mha.fi",
    "https://piped.garudalinux.org",
    "https://piped.adminforge.de",
    "https://piped.projectsegfau.lt",
    "https://piped.lunar.icu",
    "https://watch.leptons.xyz",
    "https://piped.privacy.com.de",
  ];
  const invidiousInstances = [
    "https://yewtu.be",
    "https://inv.nadeko.net",
    "https://vid.puffyan.us",
  ];
  const pipedEndpoints = pipedInstances.flatMap((instance) => {
    const base = `${instance}/api/v1/streams/${videoId}`;
    return [
      `${base}?hl=en`,
      `${base}?region=us`,
      `${base}?local=true`,
      ...buildProxyUrls(`${base}?hl=en`),
      ...buildProxyUrls(`${base}?region=us`),
    ];
  });
  const invidiousEndpoints = invidiousInstances.flatMap((instance) => {
    const base = `${instance}/api/v1/videos/${videoId}`;
    return [base, ...buildProxyUrls(base)];
  });
  const endpoints = Array.from(new Set([...pipedEndpoints, ...invidiousEndpoints]));
  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      const payload = await fetchJsonSafe(endpoint);
      if (!payload) {
        continue;
      }
      if (endpoint.includes("/api/v1/videos/")) {
        const normalized = normalizeInvidiousManifest(payload);
        if (normalized) {
          return normalized;
        }
        continue;
      }
      if (payload.audioStreams?.length || payload.hls) {
        return payload;
      }
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(lastError?.message || "Unable to reach the audio manifest right now.");
}

async function fetchJsonSafe(endpoint) {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json,text/plain;q=0.9",
    },
  });
  if (!response.ok) {
    return null;
  }
  const text = await response.text();
  const trimmed = text.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) {
    return null;
  }
  try {
    return JSON.parse(trimmed);
  } catch (error) {
    return null;
  }
}

function normalizeInvidiousManifest(data) {
  if (!data) return null;
  const candidateStreams = data?.adaptiveFormats || data?.formatStreams || [];
  const audioStreams = candidateStreams
    .filter((stream) => /audio\//i.test(stream.type || "") && stream.url)
    .map((stream) => ({
      url: stream.url,
      bitrate: stream.bitrate || stream.bitrate_value || stream.avgBitrate,
      mimeType: stream.type,
    }));
  if (!audioStreams.length) {
    return null;
  }
  return {
    title: data.title,
    uploader: data.author,
    duration: Number(data.lengthSeconds || data.duration) || undefined,
    thumbnailUrl: data.videoThumbnails?.[0]?.url,
    audioStreams,
  };
}

function pickBestAudioStream(streams) {
  if (!Array.isArray(streams) || streams.length === 0) {
    return null;
  }
  const sorted = [...streams].sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
  return (
    sorted.find((stream) => /audio\/(mp4|mpeg|webm)/i.test(stream.mimeType || "")) ||
    sorted[0]
  );
}

async function fetchAudioStream(url) {
  const endpoints = Array.from(new Set([url, ...buildProxyUrls(url)]));
  let lastError = null;
  for (const endpoint of endpoints) {
    if (!endpoint) {
      continue;
    }
    try {
      const response = await fetch(endpoint, {
        headers: {
          Accept: "audio/*;q=0.9,application/octet-stream;q=0.8",
        },
      });
      if (!response.ok) {
        lastError = new Error(`Stream responded with status ${response.status}`);
        continue;
      }
      return await response.arrayBuffer();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Unable to download the audio stream.");
}

async function convertStreamToMp3(url, onProgress) {
  if (!url) {
    throw new Error("Missing audio stream URL.");
  }
  const arrayBuffer = await fetchAudioStream(url);
  onProgress?.(60);
  const AudioContextClass = typeof window !== "undefined" ? window.AudioContext || window.webkitAudioContext : null;
  if (!AudioContextClass) {
    throw new Error("Audio conversion is not supported in this browser.");
  }
  const audioContext = new AudioContextClass();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
  onProgress?.(75);
  await ensureLameEncoder();
  const monoData = downmixToMono(audioBuffer);
  const int16Data = floatTo16BitPCM(monoData);
  const mp3Blob = encodeMp3(int16Data, audioBuffer.sampleRate, onProgress);
  audioContext.close?.();
  onProgress?.(95);
  return mp3Blob;
}

let lameScriptPromise = null;
function ensureLameEncoder() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Encoder unavailable in this environment."));
  }
  if (window.lamejs) {
    return Promise.resolve(window.lamejs);
  }
  if (!lameScriptPromise) {
    lameScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-lame="true"]');
      if (existing) {
        existing.addEventListener("load", () => resolve(window.lamejs));
        existing.addEventListener("error", () => reject(new Error("Failed to load MP3 encoder.")));
        return;
      }
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js";
      script.async = true;
      script.dataset.lame = "true";
      script.onload = () => resolve(window.lamejs);
      script.onerror = () => reject(new Error("Failed to load MP3 encoder."));
      document.body.appendChild(script);
    });
  }
  return lameScriptPromise;
}

function downmixToMono(audioBuffer) {
  if (audioBuffer.numberOfChannels === 1) {
    return audioBuffer.getChannelData(0);
  }
  const length = audioBuffer.length;
  const mono = new Float32Array(length);
  for (let channel = 0; channel < audioBuffer.numberOfChannels; channel += 1) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      mono[i] += channelData[i] / audioBuffer.numberOfChannels;
    }
  }
  return mono;
}

function floatTo16BitPCM(float32Array) {
  const buffer = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i += 1) {
    const sample = Math.max(-1, Math.min(1, float32Array[i]));
    buffer[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return buffer;
}

function encodeMp3(int16Array, sampleRate, onProgress) {
  if (!window.lamejs) {
    throw new Error("MP3 encoder missing.");
  }
  const mp3Encoder = new window.lamejs.Mp3Encoder(1, sampleRate, 320);
  const chunkSize = 1152;
  const mp3Data = [];
  for (let i = 0; i < int16Array.length; i += chunkSize) {
    const chunk = int16Array.subarray(i, i + chunkSize);
    const mp3buf = mp3Encoder.encodeBuffer(chunk);
    if (mp3buf.length > 0) {
      mp3Data.push(mp3buf);
    }
    if (onProgress) {
      const percent = 80 + Math.round((i / int16Array.length) * 15);
      onProgress(Math.min(95, percent));
    }
  }
  const flushed = mp3Encoder.flush();
  if (flushed.length > 0) {
    mp3Data.push(flushed);
  }
  return new Blob(mp3Data, { type: "audio/mpeg" });
}

function sanitizeFileName(text) {
  return (text || "starterclass-track")
    .replace(/[\s]+/g, "-")
    .replace(/[^a-z0-9-_]/gi, "")
    .slice(0, 80) || "starterclass-track";
}

function extractYouTubeId(value) {
  if (!value) {
    return "";
  }
  const trimmed = value.trim();
  const direct = trimmed.match(/^[a-zA-Z0-9_-]{11}$/);
  if (direct) {
    return direct[0];
  }
  const patterns = [
    /v=([a-zA-Z0-9_-]{11})/, // watch?v=
    /youtu\.be\/([a-zA-Z0-9_-]{11})/, // youtu.be/
    /shorts\/([a-zA-Z0-9_-]{11})/, // shorts
    /embed\/([a-zA-Z0-9_-]{11})/, // embed
  ];
  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return "";
}

window.ToolsGalleryPage = ToolsGalleryPage;
window.ToolsUniversalAIPersonalityPage = ToolsUniversalAIPersonalityPage;
window.ToolsTaskCodesPage = ToolsTaskCodesPage;
window.ToolsClientBriefGeneratorPage = ToolsClientBriefGeneratorPage;
window.ToolsContentQualityAnalyzerPage = ToolsContentQualityAnalyzerPage;
window.ToolsClientProjectPlannerPage = ToolsClientProjectPlannerPage;
window.ToolsYoutubeMp3Page = ToolsYoutubeMp3Page;
window.PromptsGalleryPage = PromptsGalleryPage;
window.StarterclassLabPage = StarterclassLabPage;
