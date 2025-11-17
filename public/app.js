"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "onClick", "className", "variant", "type"];
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var _React = React,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useState = _React.useState,
  useRef = _React.useRef,
  useCallback = _React.useCallback,
  useContext = _React.useContext;
var BASE_PALETTES = {
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
    simpleBackground: "linear-gradient(180deg,rgba(255,255,255,0.85),rgba(246,240,255,0.95))"
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
    simpleBackground: "linear-gradient(180deg,rgba(9,9,19,0.92),rgba(10,10,22,0.92))"
  }
};
function getPalette(theme) {
  return BASE_PALETTES[theme] || BASE_PALETTES.light;
}
var ThemeContext = React.createContext({
  theme: "light",
  palette: BASE_PALETTES.light
});
function ThemeProvider(_ref) {
  var theme = _ref.theme,
    palette = _ref.palette,
    children = _ref.children;
  var value = useMemo(function () {
    return {
      theme: theme,
      palette: palette
    };
  }, [theme, palette]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
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
var GOOGLE_FORM_URL_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLScmdBVzUHMAhe2hX7bW3ns6EeOw4D7RTyMDBT_C8XGemzjs-w/viewform?embedded=true";
var INTRO_NAME = "Essentials and Customisations";
var INTRO_START_ISO = "2025-11-15T11:00:00Z"; // Sat 15 Nov 2025 11:00 AM UK (UTC)
var INTRO_END_ISO = "2025-11-15T12:30:00Z";

// Sessions (UK times in UTC) for the six-session track.
var SESSIONS = [{
  k: "starterclass",
  month: "nov",
  title: INTRO_NAME,
  date: "Sat 15 Nov 2025",
  start: "2025-11-15T11:00:00Z",
  end: "2025-11-15T12:30:00Z",
  desc: "Customise ChatGPT to your tone, build a vibe-coded mini project, and assemble knowledge packs with prompt flows.",
  outcome: "Leave with a persona-tuned workspace, a vibe-coded mini build, and prompt systems ready to run that afternoon.",
  track: "starterclass",
  outline: [{
    key: "Persona tuning",
    value: 34,
    desc: "Shape Projects so one phrase triggers the right voice and guardrails.",
    color: "#C8A145",
    headline: "Say the brief once, your workspace remembers",
    outcome: "Projects that reply in your tone with the right guardrails already in place.",
    toolkit: "Tone calibration checklist and project prompt pack."
  }, {
    key: "Vibe-coded sprint",
    value: 33,
    desc: "Co-build a mini app or workflow that reflects your tone and intent.",
    color: "#3B5CCC",
    headline: "Narrate the vibe, leave with a working build",
    outcome: "A vibe-coded mini app you can share with your team or clients.",
    toolkit: "Component snippets and deployment walk-through."
  }, {
    key: "Prompt systems",
    value: 33,
    desc: "Practise reusable prompt flows for business, creative, and personal wins.",
    color: "#8B5CF6",
    headline: "Know exactly how to ask for what you need",
    outcome: "Prompt sequences for content, decisions, and client updates.",
    toolkit: "Prompt kit, escalation cues, and QA checklist."
  }],
  hero: {
    label: "Free 90-minute AI Starterclass",
    badge: "Starterclass · no payment required",
    audience: "Free Starterclass for business leaders, consultants, and curious operators — no coding required.",
    highlights: [{
      icon: "🗂️",
      title: "Projects tuned to you",
      sub: "Design a Project workspace that remembers your tone, priorities, and approvals automatically."
    }, {
      icon: "⚡",
      title: "Vibe-coded mini build",
      sub: "Co-create a tiny AI site or tool live so you leave with a working prototype you can share."
    }, {
      icon: "🧠",
      title: "Prompt systems mastered",
      sub: "Practise conversational flows for business, creative, and personal wins you can run this week."
    }]
  }
}, {
  k: "canvas",
  month: "nov",
  title: "Canvas Deep Dive & Vibe Coding",
  date: "Sat 29 Nov 2025",
  start: "2025-11-29T11:00:00Z",
  end: "2025-11-29T12:30:00Z",
  desc: "Build and deploy AI websites or apps with vibe-coded components and live deployment confidence.",
  outcome: "Ship a vibe-coded site or mini app with instrumentation so you can iterate instantly.",
  track: "paid",
  outline: [{
    key: "Vibe-coding basics",
    value: 34,
    desc: "Translate tone boards into layout, prompts, and guardrails.",
    color: "#C8A145",
    headline: "Convert moodboards into working canvases",
    outcome: "A layout that matches your visual identity and narrative cues.",
    toolkit: "Design handoff worksheet and brand voice prompt starters."
  }, {
    key: "Components & state",
    value: 33,
    desc: "Manage sections, memory, and context like a creative system.",
    color: "#3B5CCC",
    headline: "Structure interactive sections without code",
    outcome: "Reusable component stacks with state you can tweak live.",
    toolkit: "Component inventory template and state mapping checklist."
  }, {
    key: "Deployment & logging",
    value: 33,
    desc: "Push live with audits, changelogs, and rollback comfort.",
    color: "#8B5CF6",
    headline: "Launch with observability baked in",
    outcome: "Logging and changelog rituals so updates stay safe.",
    toolkit: "Deployment playbook and issue triage prompts."
  }],
  hero: {
    label: "Full-course lab — Canvas & vibe coding",
    badge: "Future lab · registration soon",
    audience: "For designers, founders, and operators ready to ship branded AI experiences fast.",
    highlights: [{
      icon: "🎨",
      title: "Vibe-coded layout systems",
      sub: "Narrate your tone and translate it into components that actually deploy."
    }, {
      icon: "🧱",
      title: "Reusable component kit",
      sub: "Assemble content blocks, memory, and guardrails you can remix after class."
    }, {
      icon: "🚀",
      title: "Confident launch workflow",
      sub: "Deploy live with logging, audits, and rollback comfort built-in."
    }]
  }
}, {
  k: "agents1",
  month: "dec",
  title: "ChatGPT Agents 1 — Prompts, Processes & Systems",
  date: "Sat 13 Dec 2025",
  start: "2025-12-13T11:00:00Z",
  end: "2025-12-13T12:30:00Z",
  desc: "Integrate agents into workflows with LinkedIn, site deployment, and film production examples.",
  outcome: "An agent template that reads from data, calls tools, and hands off to you when needed.",
  track: "paid",
  outline: [{
    key: "Prompt systems",
    value: 34,
    desc: "Structure instructions, memory, and tone for reliable hand-offs.",
    color: "#8B5CF6",
    headline: "Blueprint prompts that never lose context",
    outcome: "A reusable prompt and memory stack tuned for your org.",
    toolkit: "Agent briefing template and prompt escalation ladder."
  }, {
    key: "Tool orchestration",
    value: 33,
    desc: "Link Sheets, Notion, and APIs into the agent safely.",
    color: "#3B5CCC",
    headline: "Connect data sources without breaking trust",
    outcome: "Tool call flows that log every action and fallback.",
    toolkit: "Integration matrix and safety checklist."
  }, {
    key: "Process design",
    value: 33,
    desc: "Design escalations, logs, and human approvals that keep quality high.",
    color: "#C8A145",
    headline: "Decide when the agent hands back control",
    outcome: "Escalation paths and review rituals to keep humans in the loop.",
    toolkit: "Runbook template and approval scripts."
  }],
  hero: {
    label: "Agent systems sprint — Prompts & processes",
    badge: "Future lab · registration soon",
    audience: "For operators formalising ChatGPT agents with governance, logs, and safe hand-offs.",
    highlights: [{
      icon: "🧩",
      title: "Memory + tooling glue",
      sub: "Map prompts, data, and API calls so your agent keeps context flawlessly."
    }, {
      icon: "🛡️",
      title: "Guardrails that scale",
      sub: "Design escalation and approval flows stakeholders will sign off."
    }, {
      icon: "📈",
      title: "Live operations ritual",
      sub: "Leave with a monitoring loop and human-in-the-loop rhythm."
    }]
  }
}, {
  k: "agents2",
  month: "dec",
  title: "ChatGPT Agents 2 — AI Short-Film Production",
  date: "Sat 27 Dec 2025",
  start: "2025-12-27T11:00:00Z",
  end: "2025-12-27T12:30:00Z",
  desc: "Master image, image-to-video, and text-to-video tools to produce a 2–4 minute AI short film.",
  outcome: "A teaser sequence for your AI short film and a repeatable creative pipeline.",
  track: "paid",
  outline: [{
    key: "Storyboard & shotlist",
    value: 34,
    desc: "Break narratives into beats, scenes, and production-ready prompts.",
    color: "#C8A145",
    headline: "Plot the film before you touch a tool",
    outcome: "Scene outlines and shot prompts aligned to your story arc.",
    toolkit: "Narrative beat sheet and storyboard prompt frames."
  }, {
    key: "Asset generation",
    value: 33,
    desc: "Create images and clips that stay on-tone across the story arc.",
    color: "#3B5CCC",
    headline: "Generate assets that stay on-tone",
    outcome: "Consistent character, lighting, and pacing across frames.",
    toolkit: "Model settings bank and look continuity checklist."
  }, {
    key: "Assembly & review",
    value: 33,
    desc: "Sequence, narrate, and critique the edit so it feels human.",
    color: "#8B5CF6",
    headline: "Cut, narrate, and polish like a studio",
    outcome: "A teaser sequence with audio beds, captions, and review notes.",
    toolkit: "Editorial workflow board and critique rubric."
  }],
  hero: {
    label: "Creative lab — AI short-film production",
    badge: "Future lab · registration soon",
    audience: "For storytellers and content teams crafting cinematic AI sequences end-to-end.",
    highlights: [{
      icon: "🎬",
      title: "Narratives that hold",
      sub: "Build story beats that translate into consistent prompts across scenes."
    }, {
      icon: "🖼️",
      title: "Visual continuity",
      sub: "Keep your characters, lighting, and motion aligned across every generation."
    }, {
      icon: "🎧",
      title: "Editorial polish",
      sub: "Assemble audio, captions, and reviews so the final cut feels human."
    }]
  }
}, {
  k: "n8n_deep_dive",
  month: "jan",
  title: "N8N Deep Dive — Create Your First AI Assistant",
  date: "Sat 10 Jan 2026",
  start: "2026-01-10T11:00:00Z",
  end: "2026-01-10T12:30:00Z",
  desc: "Build an autonomous assistant with branching, retries, queues, observability, and error handling.",
  outcome: "A working n8n workflow triggered from a form or webhook with retries and logging built in.",
  track: "paid",
  outline: [{
    key: "Workflow mapping",
    value: 34,
    desc: "Plot triggers, decisions, and payloads before you build.",
    color: "#C8A145",
    headline: "Design the assistant before it runs",
    outcome: "A visual workflow plan stakeholders can approve.",
    toolkit: "Trigger inventory and payload worksheet."
  }, {
    key: "Assistant build",
    value: 33,
    desc: "Wire branches, retries, and queues that keep responses reliable.",
    color: "#3B5CCC",
    headline: "Ship reliable branches and retries",
    outcome: "A resilient n8n flow with safeguards for every failure mode.",
    toolkit: "Retry pattern library and queue template."
  }, {
    key: "Observability",
    value: 33,
    desc: "Instrument logs, metrics, and alerts so issues surface fast.",
    color: "#8B5CF6",
    headline: "See issues before users do",
    outcome: "Dashboards and alerts that surface failures instantly.",
    toolkit: "Logging schema and alert routing map."
  }],
  hero: {
    label: "Automation lab — Build your first AI assistant",
    badge: "Future lab · registration soon",
    audience: "For ops teams and builders turning prompt ideas into dependable automations.",
    highlights: [{
      icon: "🗺️",
      title: "Workflow blueprints",
      sub: "Map every trigger, payload, and decision before you build."
    }, {
      icon: "🔁",
      title: "Reliable execution",
      sub: "Implement retries, queues, and safeguards so automations never ghost."
    }, {
      icon: "📊",
      title: "Observability baked in",
      sub: "Instrument logs and alerts that keep stakeholders calm."
    }]
  }
}, {
  k: "n8n_mastery",
  month: "jan",
  title: "N8N Mastery — Orchestrate the System",
  date: "Sat 24 Jan 2026",
  start: "2026-01-24T11:00:00Z",
  end: "2026-01-24T12:30:00Z",
  desc: "Scale your assistant into a multi-workflow system with webhooks, triggers, security, and access gates.",
  outcome: "A production-ready system with multiple n8n workflows, secure tokens, approvals, and a published output.",
  track: "paid",
  outline: [{
    key: "System topology",
    value: 34,
    desc: "Map multi-workflow architecture and secrets management.",
    color: "#C8A145",
    headline: "Architect the full automation stack",
    outcome: "A topology diagram covering every workflow and credential.",
    toolkit: "Topology canvas and secret rotation checklist."
  }, {
    key: "Auth & approvals",
    value: 33,
    desc: "Layer security, access gates, and human check-ins.",
    color: "#3B5CCC",
    headline: "Keep humans in charge",
    outcome: "Approval flows, audit logs, and escalation scripts.",
    toolkit: "Access policy templates and reviewer prompts."
  }, {
    key: "Capstone integration",
    value: 33,
    desc: "Launch the final tool or film with documentation and support rituals.",
    color: "#8B5CF6",
    headline: "Launch with confidence",
    outcome: "A capstone deployment backed by documentation and support loops.",
    toolkit: "Handoff checklist and go-live comms kit."
  }],
  hero: {
    label: "Automation mastery — Orchestrate the system",
    badge: "Future lab · registration soon",
    audience: "For teams scaling assistants into secure, multi-workflow operations.",
    highlights: [{
      icon: "🌐",
      title: "Multi-workflow architecture",
      sub: "Connect every workflow, secret, and approval in one map."
    }, {
      icon: "🔐",
      title: "Security rituals",
      sub: "Layer authentication, reviews, and audit logs without slowing delivery."
    }, {
      icon: "🏁",
      title: "Capstone launch",
      sub: "Publish your final build with documentation stakeholders trust."
    }]
  }
}];
var TOOL_DEFINITIONS = [{
  slug: "universal-ai-personality",
  title: "Universal AI Personality",
  tagline: "Design Custom Instructions that make ChatGPT feel like it works for you.",
  accent: "#C28424",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60"
}, {
  slug: "task-codes",
  title: "Task Codes Workspace",
  tagline: "Organise every AI request with consistent project codes.",
  accent: "#8B5CF6",
  image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=60"
}, {
  slug: "client-brief-generator",
  title: "Client Brief Generator",
  tagline: "Capture every requirement, auto-save it, and export a polished brief.",
  accent: "#3B82F6",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60"
}, {
  slug: "content-quality-analyzer",
  title: "Content Quality Analyzer",
  tagline: "Paste anything, get a structured critique plus a rewritten version.",
  accent: "#F59E0B",
  image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=60"
}, {
  slug: "client-project-planner",
  title: "Client Project Planner & Value Calculator",
  tagline: "Scope projects, estimate value, and package a client-facing summary.",
  accent: "#10B981",
  image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=60"
}, {
  slug: "youtube-mp3",
  title: "YouTube to MP3 Studio",
  tagline: "Pull the cleanest audio from any lecture or talk in seconds.",
  accent: "#EF4444",
  image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=60"
}];
var PROMPT_SHEET_CSV = "https://docs.google.com/spreadsheets/d/1_P4Pkf8lprKff6doEjFj2uT-qScI1_CSwGDWVj1cU-M/export?format=csv";
var PROMPT_IMAGE_POOL = ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1500534314209-43a1cd3b84b9?auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=60"];
var PROMPT_FALLBACKS = [{
  action: "Win a hesitant client",
  prompt: "[STRATEGY] Review this proposal and highlight 3 risks plus one stronger angle to pitch."
}, {
  action: "Prep a kickoff call",
  prompt: "[PLAN] Build a 30-minute agenda with probing questions for a new automation client."
}, {
  action: "Ship research faster",
  prompt: "[RESEARCH] Summarise the top 5 AI trends for boutique consultancies with proof points."
}];
var LAB_LEVEL_LABELS = {
  starterclass: "Level 1",
  canvas: "Level 2",
  agents1: "Level 3",
  agents2: "Level 4",
  n8n_deep_dive: "Level 5",
  n8n_mastery: "Level 6"
};
var LAB_LEVEL_ACCENTS = {
  1: {
    border: "rgba(194,132,36,0.45)",
    background: "linear-gradient(135deg, rgba(255,233,208,0.8), rgba(255,255,255,0.9))"
  },
  2: {
    border: "rgba(123,61,240,0.45)",
    background: "linear-gradient(135deg, rgba(233,223,255,0.85), rgba(255,255,255,0.92))"
  },
  3: {
    border: "rgba(59,92,204,0.45)",
    background: "linear-gradient(135deg, rgba(209,230,255,0.85), rgba(246,249,255,0.95))"
  },
  4: {
    border: "rgba(16,185,129,0.35)",
    background: "linear-gradient(135deg, rgba(209,251,235,0.9), rgba(255,255,255,0.96))"
  },
  5: {
    border: "rgba(248,113,113,0.4)",
    background: "linear-gradient(135deg, rgba(255,228,230,0.92), rgba(255,255,255,0.95))"
  }
};
var GLOBAL_NAV_LINKS = [{
  key: "home",
  label: "Home",
  href: "/"
}, {
  key: "lab",
  label: "Starterclass Lab",
  href: "/ai-starterclass-lab.html"
}, {
  key: "tools",
  label: "Tools",
  href: "/tools.html"
}, {
  key: "prompts",
  label: "Prompt Library",
  href: "/prompts.html"
}];
var MONTH_BUNDLES = [{
  key: "nov",
  label: "November momentum",
  modules: ["starterclass", "canvas"],
  priceUSD: 0
}, {
  key: "dec",
  label: "December agent systems",
  modules: ["agents1", "agents2"],
  priceUSD: 0
}, {
  key: "jan",
  label: "January automation labs",
  modules: ["n8n_deep_dive", "n8n_mastery"],
  priceUSD: 0
}];
var OVERVIEW_WINS = [{
  key: "projects",
  label: "Design your AI project",
  headline: "Organise knowledge, tone, and guardrails into one powerful workspace.",
  detail: "Structure knowledge packs and instructions so a single brief delivers the results you imagined."
}, {
  key: "vibecoding",
  label: "Build a real application",
  headline: "Narrate the vibe and ship a working mini-app without code.",
  detail: "Use vibe coding to turn your idea into a functioning prototype you can keep iterating after class."
}, {
  key: "momentum",
  label: "Keep momentum",
  headline: "Leave confident to experiment on your own.",
  detail: "Take home prompt kits, checklists, and a working build so Monday’s experiments feel easy."
}];
var FAQ_ITEMS = [{
  question: "Do I need the full lab sequence to start?",
  answer: "No. The Starterclass Lab is designed as a complete win on its own. When you’re ready for more, add the November, December, or January labs one cycle at a time."
}, {
  question: "Will there be a replay?",
  answer: "Yes. As soon as the live session wraps, this page updates with the archived lab so you can keep studying."
}, {
  question: "Is the Starterclass really free?",
  answer: "Yes. The Starterclass, the on-demand lab, and every future session listed on this page are free to attend."
}, {
  question: "Do I need to code?",
  answer: "No. Everything is built with visual tooling. Optional code snippets are explained in plain language for non-technical professionals."
}, {
  question: "Who is the Starterclass best suited for?",
  answer: "Business leaders, consultants, freelancers, and operators who want to put AI to work quickly without hiring a developer."
}, {
  question: "Can I join just one month of the lab sequence?",
  answer: "Yes. Treat each month as its own lab cycle. Join the ones that match your goals and revisit the others later—no payment needed."
}, {
  question: "What tools will we touch?",
  answer: "We work inside ChatGPT Projects, Custom GPTs, and our vibe-coding toolkit. The full lab sequence adds shared assets for AI film production and n8n automation. Everything is demoed live with no-code interfaces."
}];
var VERONICA_IDLE_EMOJIS = ["🙄", "😏", "🥱", "😌", "😴"];
var TESTIMONIALS = [{
  quote: "I finally organised my family’s care calendar with a GPT that speaks like me. It’s saving arguments and last-minute scrambles every week.",
  name: "Hannah L.",
  role: "Producer & parent of three",
  win: "Family admin now lives in a shared GPT workspace"
}, {
  quote: "The Starterclass gave me language I could use with therapy clients. I now walk them through weekly reflections powered by the prompt kit we built together.",
  name: "Daniel M.",
  role: "Therapist",
  win: "Sessions include AI-guided check-ins clients actually finish"
}, {
  quote: "I’m in the middle of a career change and the automation demo became my pitch. I booked two coffee chats and a contract within a fortnight.",
  name: "Riya S.",
  role: "Strategy consultant pivoting to ops",
  win: "Used the workflow map to secure new-role interviews"
}, {
  quote: "I sell handmade pieces online. The prompts we built now draft listings and customer replies in minutes. I finally have evenings back.",
  name: "Kwesi A.",
  role: "Founder, home goods studio",
  win: "Freed up 5 hours a week on customer messaging"
}, {
  quote: "I help couples plan weddings. The private GPT keeps track of tone, budget, and preferences so planning calls stay calm and fun.",
  name: "Marta G.",
  role: "Relationship-focused event planner",
  win: "Introduced AI planning to 6 active clients without friction"
}, {
  quote: "Sales used to mean late-night follow-ups. Now the automation we sketched sends warm check-ins and reminders—my pipeline finally feels human again.",
  name: "Luis P.",
  role: "SaaS account executive",
  win: "Personalised follow-ups converted two dormant deals"
}, {
  quote: "Our indie film crew used the agent pipeline from December to storyboard and assemble a teaser in a single weekend.",
  name: "Jess T.",
  role: "Screenwriter & director",
  win: "Produced a vibe-coded short film sequence without renting a studio"
}, {
  quote: "My partner and I were stuck arguing about wedding plans. The private GPT we built now tracks decisions and tone so we talk things through before emotions boil over.",
  name: "Amara J.",
  role: "Producer balancing a long-distance engagement",
  win: "Shared reflection prompts diffused the relationship drama"
}, {
  quote: "I used the automation walkthrough to map my job hunt. Two weeks later I presented the workflow in interviews and moved from hospitality into a sales ops role.",
  name: "Omar N.",
  role: "Career changer pivoting into tech",
  win: "Live-built automation became the centrepiece of my portfolio"
}];
var TRUST_BADGES = [{
  label: "Six-session cohort · Nov to Jan",
  icon: "📆"
}, {
  label: "Trusted by 50+ professionals",
  icon: "🤝"
}];
var ALTERNATIVE_FORM_ENDPOINT = "https://ainerd.app.n8n.cloud/webhook/starterclass-registration";
var ANNOUNCEMENT_KEYS = ["live", "countdown", "earlybird"];

// Royal interactive PIE colours
var PIE_TOPICS = [{
  key: "Projects & personality",
  value: 36,
  desc: "Shape ChatGPT Projects so one-word cues unlock the right tone, resources, and guardrails instantly.",
  headline: "Say the brief once, your workspace remembers",
  outcome: "A configured Project hub that mirrors your goals and catches every follow-up.",
  toolkit: "Knowledge pack template, tone calibration checklist, follow-up scripts.",
  color: "#C8A145"
}, {
  key: "Vibe coding basics",
  value: 32,
  desc: "Narrate the experience and co-build a mini site or workflow that deploys before the session ends.",
  headline: "Talk through the vibe, leave with a live build",
  outcome: "A vibe-coded prototype you can share with clients or teammates immediately.",
  toolkit: "Component library, launch steps, live demo prompts.",
  color: "#3B5CCC"
}, {
  key: "Prompt like a pro",
  value: 32,
  desc: "Learn prompt frameworks for business, creative, and personal wins that still feel human.",
  headline: "Know how to ask for exactly what you need",
  outcome: "Reusable prompt flows for content, decisions, and daily check-ins.",
  toolkit: "Prompt kit, review scorecards, escalation cues.",
  color: "#8B5CF6"
}];

// ─────────────────────────────────────────────────────────────────────────────
// Utilities & Small UI
// ─────────────────────────────────────────────────────────────────────────────
function Section(_ref2) {
  var children = _ref2.children,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className;
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-auto w-full max-w-6xl px-4 ".concat(className)
  }, children);
}
function GlowCard(_ref3) {
  var children = _ref3.children,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? "" : _ref3$className;
  var _useTheme = useTheme(),
    theme = _useTheme.theme,
    palette = _useTheme.palette;
  var isDark = theme === "dark";
  return /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-3xl overflow-hidden transition-all duration-300 ".concat(className),
    style: {
      background: isDark ? palette.surface : palette.surface,
      border: "1px solid ".concat(palette.border),
      boxShadow: palette.shadow,
      color: palette.textPrimary,
      backdropFilter: "blur(24px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -inset-px rounded-3xl",
    style: {
      background: isDark ? "radial-gradient(60% 40% at 50% 0, rgba(139,92,246,0.2), transparent)" : "radial-gradient(60% 40% at 50% 0, rgba(194,132,36,0.14), transparent)",
      maskImage: "radial-gradient(60% 40% at 50% 0, black, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, children));
}
function GlassButton(_ref4) {
  var children = _ref4.children,
    onClick = _ref4.onClick,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? "" : _ref4$className,
    _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? "primary" : _ref4$variant,
    _ref4$type = _ref4.type,
    type = _ref4$type === void 0 ? "button" : _ref4$type,
    rest = _objectWithoutProperties(_ref4, _excluded);
  var _useTheme2 = useTheme(),
    theme = _useTheme2.theme,
    palette = _useTheme2.palette;
  var isDark = theme === "dark";
  var styles = variant === "primary" ? {
    backgroundImage: "linear-gradient(135deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
    color: "#fff",
    border: "none"
  } : {
    background: isDark ? palette.surfaceSoft : palette.glass,
    color: isDark ? "#ffffff" : palette.textPrimary,
    border: "1px solid ".concat(palette.border)
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition shadow-lg ".concat(className),
    style: _objectSpread(_objectSpread({}, styles), {}, {
      boxShadow: palette.buttonShadow
    })
  }, rest), children);
}
function Badge(_ref5) {
  var children = _ref5.children;
  var _useTheme3 = useTheme(),
    palette = _useTheme3.palette;
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-medium",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full",
    style: {
      background: palette.accentPrimary
    }
  }), children);
}
function VeronicaChatbot() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasShownWelcome = _useState4[0],
    setHasShownWelcome = _useState4[1];
  var prefersReducedMotion = usePrefersReducedMotion();
  var handleRegisterLink = useCallback(function (event) {
    event.preventDefault();
    if (typeof document !== "undefined") {
      var target = document.getElementById("register-free-cta");
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center"
        });
        if (typeof target.focus === "function") {
          try {
            target.focus({
              preventScroll: true
            });
          } catch (_unused) {
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
  var welcomeMessage = useMemo(function () {
    return /*#__PURE__*/React.createElement("span", null, "Hi, I'm Veronica. Want the shortcut? Tap", " ", /*#__PURE__*/React.createElement("a", {
      href: "#register-free-cta",
      onClick: handleRegisterLink,
      className: "font-semibold underline"
    }, "Register free"), " ", "to lock your seat.");
  }, [handleRegisterLink]);
  var _useState5 = useState(function () {
      return [{
        role: "assistant",
        content: welcomeMessage
      }];
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isLoading = _useState0[0],
    setIsLoading = _useState0[1];
  var _useState1 = useState("right"),
    _useState10 = _slicedToArray(_useState1, 2),
    dock = _useState10[0],
    setDock = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isDragging = _useState12[0],
    setIsDragging = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    dragLeft = _useState14[0],
    setDragLeft = _useState14[1];
  var _useState15 = useState(function () {
      return typeof window === "undefined" ? 1024 : window.innerWidth;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    viewportWidth = _useState16[0],
    setViewportWidth = _useState16[1];
  var _useState17 = useState(function () {
      if (typeof window === "undefined") return "";
      return "session_".concat(Date.now(), "_").concat(Math.random().toString(36).substr(2, 9));
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    sessionId = _useState18[0],
    setSessionId = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    idleEmojiIndex = _useState20[0],
    setIdleEmojiIndex = _useState20[1];
  var messagesEndRef = useRef(null);
  var chatbotRef = useRef(null);
  var bubbleRef = useRef(null);
  var dragMetaRef = useRef({
    pointerOffset: 0,
    width: 0,
    lastLeft: 0
  });
  var dragIntentRef = useRef({
    active: false,
    moved: false,
    source: null
  });
  var _useTheme4 = useTheme(),
    theme = _useTheme4.theme,
    palette = _useTheme4.palette;
  var isDark = theme === "dark";
  var isMobileLayout = viewportWidth < 640;
  var horizontalOffset = isMobileLayout ? 4 : 16;
  var verticalOffset = isMobileLayout ? 12 : 16;
  var moodEmoji = useMemo(function () {
    if (isLoading) return "🤔";
    return VERONICA_IDLE_EMOJIS[idleEmojiIndex] || VERONICA_IDLE_EMOJIS[0];
  }, [idleEmojiIndex, isLoading]);
  var computedPanelWidth = viewportWidth - horizontalOffset * 2;
  var panelWidth = computedPanelWidth > 0 ? computedPanelWidth : Math.max(viewportWidth - horizontalOffset * 2, viewportWidth * 0.9, 0);
  if (!isMobileLayout) {
    panelWidth = Math.min(380, panelWidth);
  }
  var scrollToBottom = useCallback(function () {
    var _messagesEndRef$curre;
    (_messagesEndRef$curre = messagesEndRef.current) === null || _messagesEndRef$curre === void 0 || _messagesEndRef$curre.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }, [prefersReducedMotion]);

  // Show welcome popup after 2 seconds
  useEffect(function () {
    if (!hasShownWelcome && !prefersReducedMotion) {
      var timer = setTimeout(function () {
        setIsOpen(true);
        setHasShownWelcome(true);
      }, 2000);
      return function () {
        return clearTimeout(timer);
      };
    }
    if (!hasShownWelcome && prefersReducedMotion) {
      setHasShownWelcome(true);
    }
  }, [hasShownWelcome, prefersReducedMotion]);
  useEffect(function () {
    if (!hasShownWelcome || !isOpen) return undefined;
    if (prefersReducedMotion) {
      scrollToBottom();
      return undefined;
    }
    var timer = setTimeout(function () {
      scrollToBottom();
    }, 400);
    return function () {
      return clearTimeout(timer);
    };
  }, [hasShownWelcome, isOpen, scrollToBottom, prefersReducedMotion]);
  useEffect(function () {
    if (prefersReducedMotion || isOpen || isLoading) return undefined;
    var id = setInterval(function () {
      setIdleEmojiIndex(function (prev) {
        if (VERONICA_IDLE_EMOJIS.length <= 1) return prev;
        var available = VERONICA_IDLE_EMOJIS.map(function (_, idx) {
          return idx;
        }).filter(function (idx) {
          return idx !== prev;
        });
        var next = available[Math.floor(Math.random() * available.length)];
        return next;
      });
    }, 4800);
    return function () {
      return clearInterval(id);
    };
  }, [isOpen, isLoading, prefersReducedMotion]);
  useEffect(function () {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, scrollToBottom]);

  // Drag handlers
  useEffect(function () {
    if (typeof window === 'undefined') return undefined;
    var handleResize = function handleResize() {
      return setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  var startDrag = useCallback(function (clientX, element, source) {
    if (!element) return;
    var width = element.offsetWidth || 0;
    var minLeft = horizontalOffset;
    var maxLeft = Math.max(minLeft, viewportWidth - width - horizontalOffset);
    var initialLeft = dock === 'left' ? minLeft : maxLeft;
    dragMetaRef.current = {
      pointerOffset: clientX - initialLeft,
      width: width,
      lastLeft: initialLeft
    };
    dragIntentRef.current = {
      active: true,
      moved: false,
      source: source
    };
    setDragLeft(initialLeft);
    setIsDragging(true);
  }, [dock, horizontalOffset, viewportWidth]);
  var updateDrag = useCallback(function (clientX) {
    if (!isDragging) return;
    var _dragMetaRef$current = dragMetaRef.current,
      pointerOffset = _dragMetaRef$current.pointerOffset,
      width = _dragMetaRef$current.width;
    var minLeft = horizontalOffset;
    var maxLeft = Math.max(minLeft, viewportWidth - width - horizontalOffset);
    var nextLeft = Math.min(Math.max(minLeft, clientX - pointerOffset), maxLeft);
    if (Math.abs(nextLeft - dragMetaRef.current.lastLeft) > 1) {
      dragIntentRef.current.moved = true;
    }
    dragMetaRef.current.lastLeft = nextLeft;
    setDragLeft(nextLeft);
  }, [horizontalOffset, isDragging, viewportWidth]);
  var finishDrag = useCallback(function () {
    if (!isDragging) return;
    var _dragMetaRef$current2 = dragMetaRef.current,
      width = _dragMetaRef$current2.width,
      lastLeft = _dragMetaRef$current2.lastLeft;
    var center = lastLeft + width / 2;
    setDock(center < viewportWidth / 2 ? 'left' : 'right');
    setIsDragging(false);
    setDragLeft(null);
    var intent = dragIntentRef.current;
    dragIntentRef.current = {
      active: false,
      moved: intent.moved,
      source: intent.source || null
    };
  }, [isDragging, viewportWidth]);
  useEffect(function () {
    if (!isDragging) return undefined;
    var handleMouseMove = function handleMouseMove(event) {
      return updateDrag(event.clientX);
    };
    var handleTouchMove = function handleTouchMove(event) {
      if (event.touches[0]) {
        updateDrag(event.touches[0].clientX);
        event.preventDefault();
      }
    };
    var handlePointerUp = function handlePointerUp() {
      return finishDrag();
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false
    });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    window.addEventListener('touchcancel', handlePointerUp);
    return function () {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('touchcancel', handlePointerUp);
    };
  }, [finishDrag, isDragging, updateDrag]);
  var handleHeaderMouseDown = function handleHeaderMouseDown(event) {
    if (event.target.closest('[data-chatbot-close]')) return;
    if (event.target.closest('.chatbot-header')) {
      event.preventDefault();
      startDrag(event.clientX, chatbotRef.current, 'chat');
    }
  };
  var handleHeaderTouchStart = function handleHeaderTouchStart(event) {
    if (event.target.closest('[data-chatbot-close]')) return;
    if (event.target.closest('.chatbot-header')) {
      var touch = event.touches[0];
      if (touch) {
        startDrag(touch.clientX, chatbotRef.current, 'chat');
      }
      event.preventDefault();
    }
  };
  var handleBubbleMouseDown = function handleBubbleMouseDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    startDrag(event.clientX, bubbleRef.current, 'bubble');
  };
  var handleBubbleTouchStart = function handleBubbleTouchStart(event) {
    var touch = event.touches[0];
    if (touch) {
      startDrag(touch.clientX, bubbleRef.current, 'bubble');
    }
  };
  var handleBubbleClick = function handleBubbleClick() {
    if (dragIntentRef.current.source === 'bubble' && dragIntentRef.current.moved) {
      dragIntentRef.current = {
        active: false,
        moved: false,
        source: null
      };
      return;
    }
    dragIntentRef.current = {
      active: false,
      moved: false,
      source: null
    };
    if (!hasShownWelcome) {
      setHasShownWelcome(true);
    }
    setIsOpen(true);
  };
  var handleHeaderClick = function handleHeaderClick(event) {
    if (event.target.closest('[data-chatbot-close]')) return;
    var _dragIntentRef$curren = dragIntentRef.current,
      source = _dragIntentRef$curren.source,
      moved = _dragIntentRef$curren.moved;
    if (source === 'chat' && moved) {
      dragIntentRef.current = {
        active: false,
        moved: false,
        source: null
      };
      return;
    }
    dragIntentRef.current = {
      active: false,
      moved: false,
      source: null
    };
    setIsOpen(false);
  };
  var horizontalStyles = isDragging && dragLeft !== null ? {
    left: "".concat(dragLeft, "px"),
    right: 'auto'
  } : dock === 'left' ? {
    left: "".concat(horizontalOffset, "px"),
    right: 'auto'
  } : {
    right: "".concat(horizontalOffset, "px"),
    left: 'auto'
  };
  var baseBottomOffset = "calc(env(safe-area-inset-bottom, 0px) + ".concat(verticalOffset, "px)");
  var bubbleBottomOffset = "calc(env(safe-area-inset-bottom, 0px) + ".concat(verticalOffset + (isMobileLayout ? 56 : 72), "px)");
  var panelBottomOffset = baseBottomOffset;
  var bubbleSize = isMobileLayout ? 60 : 72;
  var messagesHeight = isMobileLayout ? 'min(55vh, 420px)' : '420px';
  var sendMessage = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var userMessage, response, data, assistantMessage, errorMessage, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!inputValue.trim() || isLoading)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            userMessage = {
              role: 'user',
              content: inputValue
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [userMessage]);
            });
            setInputValue('');
            setIsLoading(true);
            _context.p = 2;
            _context.n = 3;
            return fetch('https://ainerd.app.n8n.cloud/webhook/a7d037fb-6494-4881-8642-e7f1521445ca/chat', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                chatInput: inputValue,
                sessionId: sessionId
              })
            });
          case 3:
            response = _context.v;
            _context.n = 4;
            return response.json();
          case 4:
            data = _context.v;
            assistantMessage = {
              role: 'assistant',
              content: data.output || data.response || data.message || 'I apologize, I encountered an issue. Please try again.'
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [assistantMessage]);
            });
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            errorMessage = {
              role: 'assistant',
              content: 'I apologize, I\'m having trouble connecting right now. Please try again in a moment.'
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [errorMessage]);
            });
          case 6:
            _context.p = 6;
            setIsLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5, 6, 7]]);
    }));
    return function sendMessage() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  if (!isOpen) {
    return /*#__PURE__*/React.createElement("button", {
      ref: bubbleRef,
      onClick: handleBubbleClick,
      onMouseDown: handleBubbleMouseDown,
      onTouchStart: handleBubbleTouchStart,
      className: "fixed z-30 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C28424] dark:focus:ring-[#8B5CF6]",
      style: _objectSpread({
        background: isDark ? 'linear-gradient(135deg, #8B5CF6, #3B5CCC)' : 'linear-gradient(135deg, #C28424, #7A3DF0)',
        boxShadow: "0 8px 32px ".concat(isDark ? 'rgba(139,92,246,0.5)' : 'rgba(194,132,36,0.4)'),
        border: "2px solid ".concat(isDark ? 'rgba(139,92,246,0.4)' : 'rgba(194,132,36,0.3)'),
        width: "".concat(bubbleSize, "px"),
        height: "".concat(bubbleSize, "px"),
        bottom: bubbleBottomOffset
      }, horizontalStyles),
      "aria-label": "Open Veronica chatbot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, moodEmoji));
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: chatbotRef,
    onMouseDown: handleHeaderMouseDown,
    onTouchStart: handleHeaderTouchStart,
    className: "fixed z-30 rounded-2xl overflow-hidden shadow-2xl",
    style: _objectSpread(_objectSpread({
      background: isDark ? 'rgba(11,11,26,0.97)' : 'rgba(255,255,255,0.97)',
      border: "2px solid ".concat(isDark ? 'rgba(139,92,246,0.5)' : 'rgba(194,132,36,0.4)'),
      backdropFilter: 'blur(20px)',
      boxShadow: "0 20px 60px ".concat(isDark ? 'rgba(139,92,246,0.4)' : 'rgba(194,132,36,0.3)'),
      maxHeight: 'min(600px, calc(100vh - 120px))',
      width: "".concat(panelWidth, "px"),
      bottom: panelBottomOffset
    }, horizontalStyles), {}, {
      cursor: isDragging ? 'grabbing' : 'default'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "chatbot-header cursor-move border-b transition-all hover:opacity-95 p-3 sm:p-4",
    onClick: handleHeaderClick,
    style: {
      background: isDark ? 'linear-gradient(135deg, #8B5CF6, #3B5CCC)' : 'linear-gradient(135deg, #C28424, #7A3DF0)',
      borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full flex items-center justify-center transition-all",
    style: {
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl"
  }, moodEmoji)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white text-lg tracking-wide"
  }, "Veronica"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      dragIntentRef.current = {
        active: false,
        moved: false,
        source: null
      };
      setIsOpen(false);
    },
    className: "text-white text-2xl opacity-80 hover:opacity-100 transition cursor-pointer",
    "data-chatbot-close": true,
    "aria-label": "Close chatbot"
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-auto p-3 sm:p-4 space-y-4",
    style: {
      height: messagesHeight,
      background: isDark ? 'rgba(11,11,26,0.6)' : 'rgba(255,255,255,0.8)'
    }
  }, messages.map(function (msg, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex ".concat(msg.role === 'user' ? 'justify-end' : 'justify-start')
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-[75%] rounded-2xl px-4 py-3 ".concat(msg.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'),
      style: {
        background: msg.role === 'user' ? "linear-gradient(135deg, ".concat(palette.accentSecondary, ", ").concat(palette.accentTertiary, ")") : isDark ? 'rgba(17,17,34,0.9)' : 'rgba(246,244,255,0.9)',
        color: msg.role === 'user' ? 'white' : palette.textPrimary,
        border: "1px solid ".concat(msg.role === 'user' ? 'rgba(255,255,255,0.2)' : palette.border),
        boxShadow: msg.role === 'user' ? '0 4px 12px rgba(139,92,246,0.2)' : '0 2px 8px rgba(0,0,0,0.05)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm leading-relaxed whitespace-pre-wrap"
    }, msg.content)));
  }), isLoading && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl px-4 py-3",
    style: {
      background: isDark ? 'rgba(17,17,34,0.9)' : 'rgba(246,244,255,0.9)',
      border: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full animate-bounce",
    style: {
      background: palette.accentSecondary,
      animationDelay: '0ms'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full animate-bounce",
    style: {
      background: palette.accentSecondary,
      animationDelay: '150ms'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full animate-bounce",
    style: {
      background: palette.accentSecondary,
      animationDelay: '300ms'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "border-t p-3 sm:p-4",
    style: {
      background: isDark ? 'rgba(17,17,34,0.95)' : 'rgba(255,255,255,0.95)',
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onKeyPress: handleKeyPress,
    placeholder: "Type your message...",
    disabled: isLoading,
    className: "flex-1 px-4 py-3 rounded-xl outline-none transition-all focus:ring-2",
    style: {
      background: isDark ? 'rgba(11,11,26,0.8)' : 'rgba(246,244,255,0.6)',
      border: "1px solid ".concat(palette.border),
      color: palette.textPrimary,
      focusRing: palette.accentSecondary
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: sendMessage,
    disabled: isLoading || !inputValue.trim(),
    className: "px-5 py-3 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
    style: {
      background: "linear-gradient(135deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
      color: 'white',
      boxShadow: palette.buttonShadow
    }
  }, "Send"))));
}
function ScrollControls() {
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showTop = _useState22[0],
    setShowTop = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showBottom = _useState24[0],
    setShowBottom = _useState24[1];
  useEffect(function () {
    var onScroll = function onScroll() {
      var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      var y = window.scrollY;
      setShowTop(y > 320);
      setShowBottom(y < maxScroll - 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return function () {
      return window.removeEventListener("scroll", onScroll);
    };
  }, []);
  var _useTheme5 = useTheme(),
    theme = _useTheme5.theme,
    palette = _useTheme5.palette;
  var isDark = theme === "dark";
  var dockVisible = showTop || showBottom;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-5 right-4 z-40 flex flex-row flex-wrap gap-3 transition ".concat(dockVisible ? "opacity-100" : "opacity-0 pointer-events-none"),
    style: {
      filter: dockVisible ? "none" : "blur(0.5px)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    className: "rounded-full px-4 py-3 text-sm font-semibold",
    style: {
      border: "1px solid ".concat(palette.border),
      background: isDark ? palette.surface : palette.surfaceSoft,
      color: palette.textPrimary,
      boxShadow: palette.shadow,
      opacity: showTop ? 1 : 0.4,
      pointerEvents: showTop ? "auto" : "none"
    },
    "aria-label": "Back to top"
  }, "\u2191 Top"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    },
    className: "rounded-full px-4 py-3 text-sm font-semibold",
    style: {
      border: "1px solid ".concat(palette.border),
      background: isDark ? palette.surface : palette.surfaceSoft,
      color: palette.textPrimary,
      boxShadow: palette.shadow,
      opacity: showBottom ? 1 : 0.4,
      pointerEvents: showBottom ? "auto" : "none"
    },
    "aria-label": "Skip to bottom"
  }, "\u2193 Bottom"));
}
function FooterMenu(_ref7) {
  var onShowTerms = _ref7.onShowTerms,
    onShowPrivacy = _ref7.onShowPrivacy,
    onShowContact = _ref7.onShowContact;
  var _useTheme6 = useTheme(),
    palette = _useTheme6.palette;
  var footerLinks = [{
    label: "Home",
    href: "/"
  }, {
    label: "Starterclass Lab",
    href: "/ai-starterclass-lab.html"
  }, {
    label: "Tools",
    href: "/tools.html"
  }, {
    label: "Prompt Library",
    href: "/prompts.html"
  }];
  var legalLinks = [onShowTerms && {
    label: "Terms",
    onClick: onShowTerms
  }, onShowPrivacy && {
    label: "Privacy",
    onClick: onShowPrivacy
  }, onShowContact && {
    label: "Contact",
    onClick: onShowContact
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("footer", {
    className: "mt-24 mb-16"
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4 text-sm",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " ICUNI \u2014 Starterclass"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4"
  }, footerLinks.map(function (link) {
    return /*#__PURE__*/React.createElement("a", {
      key: link.href,
      href: link.href,
      className: "underline-offset-4",
      style: {
        color: palette.textSecondary
      }
    }, link.label);
  }))), legalLinks.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, legalLinks.map(function (link) {
    return /*#__PURE__*/React.createElement("button", {
      key: link.label,
      type: "button",
      className: "underline underline-offset-4",
      onClick: link.onClick,
      style: {
        color: palette.textSecondary
      }
    }, link.label);
  })))));
}
function GlobalNavRow(_ref8) {
  var activeKey = _ref8.activeKey;
  var _useTheme7 = useTheme(),
    palette = _useTheme7.palette;
  return /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-wrap gap-2",
    "aria-label": "Site"
  }, GLOBAL_NAV_LINKS.map(function (link) {
    var isActive = link.key === activeKey;
    return /*#__PURE__*/React.createElement("a", {
      key: link.href,
      href: link.href,
      className: "rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em]",
      style: {
        background: isActive ? palette.accentSecondary : palette.surfaceSoft,
        color: isActive ? "#fff" : palette.textSecondary,
        border: "1px solid ".concat(isActive ? palette.accentSecondary : palette.border)
      }
    }, link.label);
  }));
}
function formatUKRange(startISO, endISO) {
  var opts = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/London"
  };
  return "".concat(new Date(startISO).toLocaleTimeString([], opts), "\u2013").concat(new Date(endISO).toLocaleTimeString([], opts));
}
function formatLocalRange(startISO, endISO) {
  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var opts = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };
  return "".concat(new Date(startISO).toLocaleTimeString([], opts), "\u2013").concat(new Date(endISO).toLocaleTimeString([], opts), " (").concat(tz, ")");
}
function track(eventName) {
  var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof window === 'undefined') return;
  var payload = {
    event: eventName,
    detail: detail,
    timestamp: new Date().toISOString()
  };
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
  if (typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent(eventName, {
      detail: payload
    }));
  }
}
function usePrefersReducedMotion() {
  var _useState25 = useState(function () {
      if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch (_unused2) {
        return false;
      }
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    prefers = _useState26[0],
    setPrefers = _useState26[1];
  useEffect(function () {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;
    var mediaQuery;
    try {
      mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    } catch (_unused3) {
      return undefined;
    }
    var handleChange = function handleChange(event) {
      return setPrefers(event.matches);
    };
    handleChange(mediaQuery);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return function () {
        return mediaQuery.removeEventListener("change", handleChange);
      };
    }
    mediaQuery.addListener(handleChange);
    return function () {
      return mediaQuery.removeListener(handleChange);
    };
  }, []);
  return prefers;
}
function useNow() {
  var tick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var prefersReducedMotionArg = arguments.length > 1 ? arguments[1] : undefined;
  var prefersReducedMotion = prefersReducedMotionArg !== null && prefersReducedMotionArg !== void 0 ? prefersReducedMotionArg : usePrefersReducedMotion();
  var _useState27 = useState(function () {
      return Date.now();
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    now = _useState28[0],
    setNow = _useState28[1];
  useEffect(function () {
    if (typeof window === "undefined") return undefined;
    var intervalId = null;
    var effectiveTick = prefersReducedMotion ? Math.max(tick, 1000) : tick;
    var restart = function restart() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(function () {
        return setNow(Date.now());
      }, effectiveTick);
    };
    restart();
    var handleVisibility = function handleVisibility() {
      if (document.hidden) {
        if (intervalId) clearInterval(intervalId);
      } else {
        setNow(Date.now());
        restart();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return function () {
      if (intervalId) clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion, tick]);
  return now;
}
function usePageTheme() {
  var storageKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "sc_theme_pref";
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "light";
  var _useState29 = useState(function () {
      if (typeof window === "undefined") return fallback;
      try {
        return localStorage.getItem(storageKey) || fallback;
      } catch (_unused4) {
        return fallback;
      }
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    theme = _useState30[0],
    setTheme = _useState30[1];
  var palette = useMemo(function () {
    return getPalette(theme);
  }, [theme]);
  useEffect(function () {
    if (typeof document === "undefined") return undefined;
    var root = document.documentElement;
    var body = document.body;
    var themeClass = theme === "dark" ? "theme-dark" : "theme-light";
    var otherClass = theme === "dark" ? "theme-light" : "theme-dark";
    var backgroundColor = theme === "dark" ? "#030213" : "#FCFBFF";
    root.classList.remove(otherClass);
    root.classList.add(themeClass);
    root.dataset.theme = theme;
    body.dataset.theme = theme;
    root.style.backgroundColor = backgroundColor;
    body.style.backgroundColor = backgroundColor;
    body.style.color = palette.textPrimary;
    return function () {};
  }, [palette.textPrimary, theme]);
  useEffect(function () {
    if (typeof window === "undefined") return undefined;
    var handleStorage = function handleStorage(event) {
      if (event.key === storageKey && event.newValue) {
        setTheme(event.newValue);
      }
    };
    var handleBroadcast = function handleBroadcast(event) {
      var _event$detail;
      if ((_event$detail = event.detail) !== null && _event$detail !== void 0 && _event$detail.theme) {
        setTheme(event.detail.theme);
      }
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("sc-theme-change", handleBroadcast);
    return function () {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("sc-theme-change", handleBroadcast);
    };
  }, [storageKey]);
  var toggleTheme = useCallback(function () {
    setTheme(function (prev) {
      var next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, next);
        window.dispatchEvent(new CustomEvent("sc-theme-change", {
          detail: {
            theme: next
          }
        }));
      } catch (_unused5) {}
      return next;
    });
  }, [storageKey]);
  return {
    theme: theme,
    palette: palette,
    toggleTheme: toggleTheme
  };
}
function getCountdownParts(targetISO, nowMs) {
  if (!targetISO) {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      expired: true,
      totalMs: 0
    };
  }
  var target = new Date(targetISO).getTime();
  if (!Number.isFinite(target)) {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      expired: true,
      totalMs: 0
    };
  }
  var diff = target - nowMs;
  var expired = diff <= 0;
  var clamped = expired ? 0 : diff;
  var totalSeconds = Math.floor(clamped / 1000);
  var days = Math.floor(totalSeconds / 86400);
  var hours = Math.floor(totalSeconds % 86400 / 3600);
  var minutes = Math.floor(totalSeconds % 3600 / 60);
  var seconds = totalSeconds % 60;
  return {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
    expired: expired,
    totalMs: diff
  };
}
function buildSessionTimeline(sessions, nowMs) {
  var enriched = sessions.map(function (session, index) {
    var startMs = new Date(session.start).getTime();
    var endMs = new Date(session.end).getTime();
    var status = nowMs < startMs ? "upcoming" : nowMs >= endMs ? "completed" : "live";
    return _objectSpread(_objectSpread({}, session), {}, {
      index: index,
      startMs: startMs,
      endMs: endMs,
      status: status
    });
  });
  var upcoming = enriched.filter(function (session) {
    return nowMs < session.endMs;
  });
  var hero = upcoming[0] || enriched[enriched.length - 1] || null;
  var next = upcoming.length > 1 ? upcoming[1] : null;
  var statusMap = enriched.reduce(function (acc, session) {
    acc[session.k] = session.status;
    return acc;
  }, {});
  return {
    all: enriched,
    hero: hero,
    next: next,
    upcoming: upcoming,
    completed: enriched.filter(function (session) {
      return session.status === "completed";
    }),
    statusMap: statusMap,
    scheduleCompleted: upcoming.length === 0
  };
}
function formatSessionDateLabel(session) {
  if (!session) return "";
  var start = new Date(session.start);
  var date = start.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  var time = new Date(session.start).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/London"
  });
  return "".concat(date, " \xB7 ").concat(time);
}
function formatCountdownHeadline(parts) {
  if (!parts) return "";
  if (parts.expired) return "0d 00h 00m";
  var pad = function pad(value) {
    return String(value).padStart(2, "0");
  };
  return "".concat(parts.d, "d ").concat(pad(parts.h), "h ").concat(pad(parts.m), "m");
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
function polarToCartesian(cx, cy, r, angle) {
  var rad = (angle - 90) * Math.PI / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}
function arcPath(x, y, r, startAngle, endAngle) {
  var start = polarToCartesian(x, y, r, endAngle);
  var end = polarToCartesian(x, y, r, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return "M ".concat(start.x, " ").concat(start.y, " A ").concat(r, " ").concat(r, " 0 ").concat(largeArcFlag, " 0 ").concat(end.x, " ").concat(end.y, " L ").concat(x, " ").concat(y, " Z");
}
function Pie(_ref9) {
  var _ref9$topics = _ref9.topics,
    topics = _ref9$topics === void 0 ? PIE_TOPICS : _ref9$topics,
    activeIndex = _ref9.activeIndex,
    onSelect = _ref9.onSelect;
  var _useTheme8 = useTheme(),
    palette = _useTheme8.palette,
    theme = _useTheme8.theme;
  var isDark = theme === "dark";
  var total = topics.reduce(function (a, b) {
    return a + b.value;
  }, 0);
  var angle = 0;
  var cx = 200;
  var cy = 180;
  var r = 160;
  var titleId = useMemo(function () {
    return "pie-title-".concat(Math.random().toString(36).slice(2, 7));
  }, []);
  var descId = "".concat(titleId, "-desc");
  var description = topics.map(function (t) {
    return "".concat(t.key, " ").concat(Math.round(t.value / total * 100), "%");
  }).join(", ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 360",
    className: "w-full h-full",
    role: "img",
    "aria-labelledby": titleId,
    "aria-describedby": descId
  }, /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Module focus chart"), /*#__PURE__*/React.createElement("desc", {
    id: descId
  }, description), topics.map(function (t, idx) {
    var start = angle;
    var end = angle + t.value / total * 360;
    angle = end;
    var isActive = activeIndex === idx;
    var fill = t.color;
    return /*#__PURE__*/React.createElement("path", {
      key: t.key,
      d: arcPath(cx, cy, isActive ? r + 10 : r, start, end),
      style: {
        fill: fill,
        opacity: isActive ? 1 : 0.35,
        transition: "all 420ms ease",
        filter: isActive ? "drop-shadow(0 0 12px rgba(255,255,255,0.2))" : "none"
      },
      onMouseEnter: function onMouseEnter() {
        return onSelect(idx);
      },
      onFocus: function onFocus() {
        return onSelect(idx);
      },
      onKeyDown: function onKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(idx);
        }
      },
      tabIndex: 0,
      role: "listitem",
      "aria-label": "".concat(t.key, ": ").concat(Math.round(t.value / total * 100), " percent")
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 96,
    style: {
      fill: isDark ? "#0B0B1A" : palette.surfaceSoft,
      stroke: isDark ? "rgba(255,255,255,0.1)" : palette.border
    }
  }));
}

// Client Value Calculator focused on a single participant
function ClientValueCalculator(_ref0) {
  var _result$focusNotes;
  var onIntro = _ref0.onIntro,
    onExplore = _ref0.onExplore;
  var _useTheme9 = useTheme(),
    palette = _useTheme9.palette;
  var _useState31 = useState(2),
    _useState32 = _slicedToArray(_useState31, 2),
    hours = _useState32[0],
    setHours = _useState32[1];
  var _useState33 = useState("foundation"),
    _useState34 = _slicedToArray(_useState33, 2),
    focus = _useState34[0],
    setFocus = _useState34[1];
  var focusOptions = [{
    key: "foundation",
    label: "Foundation",
    icon: "🧱"
  }, {
    key: "build",
    label: "Build workflows",
    icon: "🛠️"
  }, {
    key: "scale",
    label: "Scale delivery",
    icon: "📈"
  }];
  var results = useMemo(function () {
    return {
      starterclass_only: {
        badge: "Starterclass Lab",
        title: "Open the AI Starterclass Lab",
        summary: "Work through five interactive levels covering prompts, personalisation, copilots, tooling, and safety. Earn points as you go.",
        detail: "Perfect when you want to learn immediately. The lab mirrors the live session with quizzes, templates, and self-scoring.",
        cta: "Study the lab",
        action: function action() {
          window.location.href = "/ai-starterclass-lab.html";
        },
        secondary: {
          label: "Register the next live sprint",
          action: function action() {
            return onIntro === null || onIntro === void 0 ? void 0 : onIntro();
          }
        },
        focusNotes: {
          foundation: "Use the lab to master the basics before the next live call.",
          build: "Click through the interactive levels whenever you need a refresher.",
          scale: "Share the lab with teammates so everyone levels up fast."
        }
      },
      full_track: {
        badge: "Lab roadmap",
        title: "Follow the entire lab sequence",
        summary: "November focuses on Starterclass fundamentals, December on agent systems, and January on automation labs.",
        detail: "Ideal when you want structure across several months. Add the roadmap to your calendar and you’ll get reminders when each lab unlocks.",
        cta: "Explore upcoming labs",
        action: function action() {
          return onExplore === null || onExplore === void 0 ? void 0 : onExplore({
            months: 3
          });
        },
        secondary: {
          label: "Lock your seat for the next live build",
          action: function action() {
            return onIntro === null || onIntro === void 0 ? void 0 : onIntro();
          }
        },
        focusNotes: {
          foundation: "Plan the lab path now so momentum never drops.",
          build: "Line up the Canvas, agents, and automation labs right after Starterclass.",
          scale: "Use every lab to build a repeatable workflow for your team."
        }
      }
    };
  }, [onExplore, onIntro]);
  var resultKey = useMemo(function () {
    if (hours <= 2 && focus !== "scale") {
      return "starterclass_only";
    }
    return "full_track";
  }, [hours, focus]);
  var result = results[resultKey];
  var focusExplainer = result === null || result === void 0 || (_result$focusNotes = result.focusNotes) === null || _result$focusNotes === void 0 ? void 0 : _result$focusNotes[focus];
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Set the weekly time you can invest and choose your focus. One recommendation appears so you know where to start."), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-xs",
    style: {
      color: palette.textMuted
    },
    id: "cvc-helper"
  }, "Tip: Hover the icons to see what each focus means. Slider updates announce changes for screen readers.")), /*#__PURE__*/React.createElement(Badge, null, "Solo participant")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("span", null, "Weekly focus hours"), /*#__PURE__*/React.createElement("span", null, hours, "h / week")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "6",
    step: "1",
    value: hours,
    onChange: function onChange(event) {
      return setHours(Number(event.target.value));
    },
    className: "w-full accent-current",
    style: {
      accentColor: palette.accentPrimary
    },
    id: "cvc-hours",
    "aria-describedby": "cvc-helper",
    "aria-valuemin": 1,
    "aria-valuemax": 6,
    "aria-valuenow": hours,
    "aria-valuetext": "".concat(hours, " hour").concat(hours === 1 ? "" : "s", " per week")
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[0.65rem] uppercase tracking-[0.2em]",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("span", null, "1h"), /*#__PURE__*/React.createElement("span", null, "3h"), /*#__PURE__*/React.createElement("span", null, "6h"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2"
  }, focusOptions.map(function (option) {
    var _results$resultKey$fo;
    var active = focus === option.key;
    return /*#__PURE__*/React.createElement("button", {
      key: option.key,
      type: "button",
      onClick: function onClick() {
        return setFocus(option.key);
      },
      className: "rounded-2xl px-3 py-3 text-sm font-semibold transition",
      style: {
        border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
        background: active ? "linear-gradient(135deg, ".concat(palette.accentPrimary, "33, ").concat(palette.accentSecondary, "33)") : palette.surfaceSoft,
        color: active ? palette.textPrimary : palette.textSecondary
      },
      "aria-pressed": active,
      "aria-describedby": "focus-tooltip-".concat(option.key),
      title: option.label
    }, /*#__PURE__*/React.createElement("span", {
      className: "block text-lg",
      "aria-hidden": "true"
    }, option.icon), option.label, /*#__PURE__*/React.createElement("span", {
      id: "focus-tooltip-".concat(option.key),
      className: "sr-only"
    }, ((_results$resultKey$fo = results[resultKey].focusNotes) === null || _results$resultKey$fo === void 0 ? void 0 : _results$resultKey$fo[option.key]) || "Focus on ".concat(option.label)));
  }))), focusExplainer && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-xs",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, focusExplainer), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-5 space-y-3",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface
    },
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs uppercase tracking-[0.22em]",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex h-2 w-2 rounded-full",
    style: {
      background: palette.accentPrimary
    }
  }), result.badge), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, result.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, result.summary), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, result.detail), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 pt-1"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: result.action,
    className: "px-5 py-3 text-sm",
    "aria-label": result.cta
  }, result.cta), result.secondary && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: result.secondary.action,
    className: "text-xs underline underline-offset-4",
    style: {
      color: palette.textSecondary
    }
  }, result.secondary.label))));
}
function Stat(_ref1) {
  var label = _ref1.label,
    value = _ref1.value,
    hint = _ref1.hint,
    _ref1$emphasis = _ref1.emphasis,
    emphasis = _ref1$emphasis === void 0 ? false : _ref1$emphasis;
  var _useTheme0 = useTheme(),
    palette = _useTheme0.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4",
    style: {
      border: "1px solid ".concat(palette.border),
      background: emphasis ? "linear-gradient(135deg, ".concat(palette.accentPrimary, "22, ").concat(palette.accentSecondary, "22)") : palette.surfaceSoft,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-semibold mt-1",
    style: {
      color: emphasis ? palette.accentPrimary : palette.textPrimary
    }
  }, value), hint && /*#__PURE__*/React.createElement("div", {
    className: "text-[0.65rem] mt-2 uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, hint));
}

// Calendar helpers
function toGoogleDateRange(startISO, endISO) {
  var fmt = function fmt(d) {
    return new Date(d).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  };
  return "".concat(fmt(startISO), "/").concat(fmt(endISO));
}
function googleCalUrl(_ref10) {
  var title = _ref10.title,
    startISO = _ref10.startISO,
    endISO = _ref10.endISO,
    _ref10$details = _ref10.details,
    details = _ref10$details === void 0 ? "" : _ref10$details,
    _ref10$location = _ref10.location,
    location = _ref10$location === void 0 ? "Online" : _ref10$location;
  var base = "https://www.google.com/calendar/render?action=TEMPLATE";
  var params = new URLSearchParams({
    text: title,
    dates: toGoogleDateRange(startISO, endISO),
    details: details,
    location: location
  });
  return "".concat(base, "&").concat(params.toString());
}

// Decorative interactive graphics
function Orbits() {
  var _useTheme1 = useTheme(),
    palette = _useTheme1.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 -z-10 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full animate-[spin_40s_linear_infinite]",
    style: {
      border: "1px dashed ".concat(palette.accentPrimary, "33")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[24rem] w-[24rem] rounded-full animate-[spin_60s_linear_infinite_reverse]",
    style: {
      border: "1px dashed ".concat(palette.accentSecondary, "33")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[12rem] w-[12rem] rounded-full animate-[spin_90s_linear_infinite]",
    style: {
      border: "1px dashed ".concat(palette.accentTertiary, "33")
    }
  }));
}
function Sparkles() {
  var _useTheme10 = useTheme(),
    palette = _useTheme10.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 -z-10"
  }, Array.from({
    length: 16
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "absolute h-1 w-1 rounded-full",
      style: {
        background: i % 3 ? palette.accentPrimary : palette.accentSecondary,
        opacity: 0.6,
        left: "".concat(i * 113 % 100, "%"),
        top: "".concat(i * 73 % 100, "%"),
        filter: "blur(0.5px)",
        animation: "float".concat(i % 2 ? 1 : 2, " 8s ease-in-out ").concat(i, "s infinite")
      }
    });
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}"));
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
function StarterclassLuxuryV8() {
  var _FAQ_ITEMS$, _heroSession$hero, _heroSession$hero2, _heroSession$hero3;
  var _useState35 = useState("overview"),
    _useState36 = _slicedToArray(_useState35, 2),
    tab = _useState36[0],
    setTab = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    modalOpen = _useState38[0],
    setModalOpen = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    formLoading = _useState40[0],
    setFormLoading = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    calendarOpen = _useState42[0],
    setCalendarOpen = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    altFormOpen = _useState44[0],
    setAltFormOpen = _useState44[1];
  var _useState45 = useState(true),
    _useState46 = _slicedToArray(_useState45, 2),
    showPaid = _useState46[0],
    setShowPaid = _useState46[1];
  var _useState47 = useState("canvas"),
    _useState48 = _slicedToArray(_useState47, 2),
    activeModule = _useState48[0],
    setActiveModule = _useState48[1];
  var _useState49 = useState({
      x: 0.5,
      y: 0.5
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    heroGlowPoint = _useState50[0],
    setHeroGlowPoint = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    isHeroGlowActive = _useState52[0],
    setIsHeroGlowActive = _useState52[1];
  var _useState53 = useState({
      x: 0.5,
      y: 0.5
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    siteGlowPoint = _useState54[0],
    setSiteGlowPoint = _useState54[1];
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    isSiteGlowActive = _useState56[0],
    setIsSiteGlowActive = _useState56[1];
  var _usePageTheme = usePageTheme(),
    activeTheme = _usePageTheme.theme,
    palette = _usePageTheme.palette,
    toggleTheme = _usePageTheme.toggleTheme;
  var _useState57 = useState(0),
    _useState58 = _slicedToArray(_useState57, 2),
    announcementIndex = _useState58[0],
    setAnnouncementIndex = _useState58[1];
  var _useState59 = useState(function () {
      var _OVERVIEW_WINS$;
      return ((_OVERVIEW_WINS$ = OVERVIEW_WINS[0]) === null || _OVERVIEW_WINS$ === void 0 ? void 0 : _OVERVIEW_WINS$.key) || "projects";
    }),
    _useState60 = _slicedToArray(_useState59, 2),
    overviewFocus = _useState60[0],
    setOverviewFocus = _useState60[1];
  var _useState61 = useState(0),
    _useState62 = _slicedToArray(_useState61, 2),
    activeTestimonial = _useState62[0],
    setActiveTestimonial = _useState62[1];
  var _useState63 = useState(((_FAQ_ITEMS$ = FAQ_ITEMS[0]) === null || _FAQ_ITEMS$ === void 0 ? void 0 : _FAQ_ITEMS$.question) || ""),
    _useState64 = _slicedToArray(_useState63, 2),
    openFaq = _useState64[0],
    setOpenFaq = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    showTerms = _useState66[0],
    setShowTerms = _useState66[1];
  var _useState67 = useState(false),
    _useState68 = _slicedToArray(_useState67, 2),
    showPrivacy = _useState68[0],
    setShowPrivacy = _useState68[1];
  var _useState69 = useState(false),
    _useState70 = _slicedToArray(_useState69, 2),
    showContact = _useState70[0],
    setShowContact = _useState70[1];
  var _useState71 = useState(false),
    _useState72 = _slicedToArray(_useState71, 2),
    fullTrackExpanded = _useState72[0],
    setFullTrackExpanded = _useState72[1];
  var _useState73 = useState(false),
    _useState74 = _slicedToArray(_useState73, 2),
    nextLiveOpen = _useState74[0],
    setNextLiveOpen = _useState74[1];
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    valueCalcOpen = _useState76[0],
    setValueCalcOpen = _useState76[1];
  var _useState77 = useState(function () {
      return SESSIONS[0] || null;
    }),
    _useState78 = _slicedToArray(_useState77, 2),
    activeRegistrationSession = _useState78[0],
    setActiveRegistrationSession = _useState78[1];
  var _useState79 = useState(true),
    _useState80 = _slicedToArray(_useState79, 2),
    instructorOpen = _useState80[0],
    setInstructorOpen = _useState80[1];
  var _useState81 = useState(true),
    _useState82 = _slicedToArray(_useState81, 2),
    reviewsOpen = _useState82[0],
    setReviewsOpen = _useState82[1];
  var prefersReducedMotion = usePrefersReducedMotion();
  var now = useNow(1000, prefersReducedMotion);
  var heroHeadlineGlowRef = useRef(null);
  var siteLabelGlowRef = useRef(null);
  var fullTrackSectionAnchorRef = useRef(null);
  var fullTrackPrimaryCtaRef = useRef(null);
  var sessions = useMemo(function () {
    return SESSIONS;
  }, []);
  var monthBundles = useMemo(function () {
    return MONTH_BUNDLES;
  }, []);
  var sessionTimeline = useMemo(function () {
    return buildSessionTimeline(sessions, now);
  }, [sessions, now]);
  var heroSession = sessionTimeline.hero;
  var heroStatus = heroSession === null || heroSession === void 0 ? void 0 : heroSession.status;
  var scheduleCompleted = sessionTimeline.scheduleCompleted;
  var countdownTarget = scheduleCompleted ? null : heroStatus === "live" ? heroSession === null || heroSession === void 0 ? void 0 : heroSession.end : heroSession === null || heroSession === void 0 ? void 0 : heroSession.start;
  var countdown = useMemo(function () {
    return getCountdownParts(countdownTarget, now);
  }, [countdownTarget, now]);
  var d = countdown.d,
    h = countdown.h,
    m = countdown.m,
    s = countdown.s,
    expired = countdown.expired;
  var isDark = activeTheme === "dark";
  var announcementMessages = useMemo(function () {
    if (!heroSession) {
      return ["Cohort timeline updating", "", ""];
    }
    var countdownHeadline = formatCountdownHeadline(countdown);
    var statusLine = scheduleCompleted ? "Starterclass Lab available on-demand" : heroStatus === "live" ? "Session live now — check your inbox for the Meet link" : countdown.expired ? "Session starting now" : "Next live lab in ".concat(countdownHeadline);
    var labLine = "Explore the AI Starterclass Lab anytime";
    return ["".concat(heroSession.title, " \xB7 ").concat(formatSessionDateLabel(heroSession)), statusLine, labLine];
  }, [countdown, heroSession, heroStatus, scheduleCompleted]);
  var testimonials = TESTIMONIALS;
  var testimonial = testimonials[activeTestimonial] || testimonials[0];
  var heroAudienceLine = (heroSession === null || heroSession === void 0 || (_heroSession$hero = heroSession.hero) === null || _heroSession$hero === void 0 ? void 0 : _heroSession$hero.audience) || "Free Starterclass for business leaders, consultants, and curious operators — no coding required.";
  var heroBadge = (heroSession === null || heroSession === void 0 || (_heroSession$hero2 = heroSession.hero) === null || _heroSession$hero2 === void 0 ? void 0 : _heroSession$hero2.badge) || "Starterclass · no payment required";
  var heroChipLabel = (heroSession === null || heroSession === void 0 || (_heroSession$hero3 = heroSession.hero) === null || _heroSession$hero3 === void 0 ? void 0 : _heroSession$hero3.label) || (heroSession === null || heroSession === void 0 ? void 0 : heroSession.title) || "All sessions completed";
  var heroTitle = (heroSession === null || heroSession === void 0 ? void 0 : heroSession.title) || INTRO_NAME;
  var heroTimeDetail = heroSession ? formatSessionDateLabel(heroSession) : "Sessions completed";
  var shareWhatsAppText = (heroSession === null || heroSession === void 0 ? void 0 : heroSession.track) === "starterclass" ? "\uD83C\uDF93 Join me at the FREE ".concat(heroTitle, " by ICUNI!") : "\uD83C\uDF93 Join me at ".concat(heroTitle, " by ICUNI!");
  var shareEmailSubject = (heroSession === null || heroSession === void 0 ? void 0 : heroSession.track) === "starterclass" ? "Join the FREE AI Starterclass" : "Join me for ".concat(heroTitle);
  var shareEmailBody = (heroSession === null || heroSession === void 0 ? void 0 : heroSession.track) === "starterclass" ? "I wanted to share this free Starterclass with you!\n\n".concat(heroTitle) : "I wanted to share this AI session with you!\n\n".concat(heroTitle);
  var heroCountdownLabel = scheduleCompleted ? "Cohort completed" : heroStatus === "live" ? "Session wraps in" : "Next session begins in";
  var upcomingHeading = scheduleCompleted ? "Cohort recap" : (heroSession === null || heroSession === void 0 ? void 0 : heroSession.track) === "starterclass" ? "What comes after the Starterclass" : "Upcoming cohort sessions";
  var heroTopics = useMemo(function () {
    if (sessions !== null && sessions !== void 0 && sessions.length) {
      var wedge = Math.floor(100 / sessions.length) || 16;
      return sessions.map(function (session, idx) {
        var _PIE_TOPICS, _session$hero, _session$hero2;
        var color = ((_PIE_TOPICS = PIE_TOPICS[idx % PIE_TOPICS.length]) === null || _PIE_TOPICS === void 0 ? void 0 : _PIE_TOPICS.color) || "#C8A145";
        return {
          key: session.title,
          value: wedge,
          desc: session.desc,
          headline: ((_session$hero = session.hero) === null || _session$hero === void 0 ? void 0 : _session$hero.label) || session.outcome,
          outcome: session.outcome,
          toolkit: (_session$hero2 = session.hero) === null || _session$hero2 === void 0 ? void 0 : _session$hero2.audience,
          color: color
        };
      });
    }
    return PIE_TOPICS;
  }, [sessions]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("sc_theme_pref", activeTheme);
      } catch (_unused6) {}
    }
    document.body.style.background = palette.simpleBackground;
    document.body.style.color = palette.textPrimary;
  }, [activeTheme, palette]);
  useEffect(function () {
    if (typeof document === "undefined") return undefined;
    var previousHtmlOverflow = document.documentElement.style.overflowX;
    var previousBodyOverflow = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return function () {
      document.documentElement.style.overflowX = previousHtmlOverflow;
      document.body.style.overflowX = previousBodyOverflow;
    };
  }, []);
  useEffect(function () {
    if (!announcementMessages.length || prefersReducedMotion) return undefined;
    var id = setInterval(function () {
      setAnnouncementIndex(function (idx) {
        return (idx + 1) % announcementMessages.length;
      });
    }, 6000);
    return function () {
      return clearInterval(id);
    };
  }, [announcementMessages.length, prefersReducedMotion]);
  useEffect(function () {
    if (!testimonials.length || prefersReducedMotion) return undefined;
    var rotation = setInterval(function () {
      setActiveTestimonial(function (idx) {
        return (idx + 1) % testimonials.length;
      });
    }, 20000);
    return function () {
      return clearInterval(rotation);
    };
  }, [prefersReducedMotion, testimonials.length]);
  useEffect(function () {
    var node = fullTrackPrimaryCtaRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    var seen = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          track("fulltrack_cta_view", {
            location: "full_track_section"
          });
        }
      });
    }, {
      threshold: 0.4
    });
    observer.observe(node);
    return function () {
      return observer.disconnect();
    };
  }, [fullTrackPrimaryCtaRef]);
  var themeClass = activeTheme === "dark" ? "theme-dark" : "theme-light";
  var themeOverrides = useMemo(function () {
    if (activeTheme !== "light") return "";
    return "\n      .theme-light [class*=\"text-white\"] { color: ".concat(palette.textPrimary, " !important; }\n      .theme-light [class*=\"text-white/90\"] { color: ").concat(palette.textPrimary, " !important; }\n      .theme-light [class*=\"text-white/80\"] { color: ").concat(palette.textSecondary, " !important; }\n      .theme-light [class*=\"text-white/70\"] { color: ").concat(palette.textSecondary, " !important; }\n      .theme-light [class*=\"text-white/60\"] { color: ").concat(palette.textMuted, " !important; }\n      .theme-light [class*=\"text-white/50\"] { color: ").concat(palette.textMuted, " !important; }\n      .theme-light [class*=\"text-white/40\"] { color: ").concat(palette.textMuted, " !important; }\n      .theme-light [class*=\"bg-white/5\"] { background: ").concat(palette.surfaceSoft, " !important; }\n      .theme-light [class*=\"bg-white/10\"] { background: ").concat(palette.surfaceSoft, " !important; }\n      .theme-light [class*=\"bg-[#0B0B1A]\"] { background: ").concat(palette.surfaceSoft, " !important; }\n      .theme-light [class*=\"border-white/10\"] { border-color: ").concat(palette.border, " !important; }\n      .theme-light [class*=\"border-[#C8A145]/20\"] { border-color: ").concat(palette.border, " !important; }\n      .theme-light [class*=\"shadow-[0_0_0_1px_rgba(200,161,69,0.15)_inset]\"] { box-shadow: inset 0 0 0 1px ").concat(palette.border, " !important; }\n    ");
  }, [activeTheme, palette]);
  var updateGlow = useCallback(function (event, ref, setter) {
    var node = ref.current;
    if (!node) return;
    var rect = node.getBoundingClientRect();
    var x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    var y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    setter({
      x: x,
      y: y
    });
  }, []);
  var heroHeadlineStyle = useMemo(function () {
    if (!isHeroGlowActive) {
      return {
        color: palette.textPrimary,
        transition: "color 160ms ease"
      };
    }
    return {
      backgroundImage: "radial-gradient(180px circle at ".concat(heroGlowPoint.x * 100, "% ").concat(heroGlowPoint.y * 100, "%, ").concat(palette.accentSecondary, ", transparent), linear-gradient(90deg, ").concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: "0 0 24px ".concat(palette.accentGlow),
      transition: "background-position 120ms ease"
    };
  }, [isHeroGlowActive, heroGlowPoint, palette]);
  var siteLabelStyle = useMemo(function () {
    if (!isSiteGlowActive) {
      return {
        color: palette.textPrimary,
        transition: "color 160ms ease"
      };
    }
    return {
      backgroundImage: "radial-gradient(140px circle at ".concat(siteGlowPoint.x * 100, "% ").concat(siteGlowPoint.y * 100, "%, ").concat(palette.accentSecondary, ", transparent), linear-gradient(90deg, ").concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: "0 0 18px ".concat(palette.accentGlow),
      transition: "background-position 120ms ease"
    };
  }, [isSiteGlowActive, siteGlowPoint, palette]);
  var upcomingModules = useMemo(function () {
    return sessionTimeline.all.filter(function (session) {
      return session.track === "paid" && (scheduleCompleted ? true : session.status !== "completed");
    });
  }, [scheduleCompleted, sessionTimeline]);
  var upcomingSchedule = useMemo(function () {
    return scheduleCompleted ? [] : sessionTimeline.upcoming.slice(0, 3);
  }, [scheduleCompleted, sessionTimeline]);
  var structuredData = useMemo(function () {
    var _sessionTimeline$stat;
    var organizer = {
      "@type": "Organization",
      "name": "ICUNI",
      "url": "https://starterclass.icuni.org/"
    };
    var introSession = sessions.find(function (session) {
      return session.k === "starterclass";
    }) || sessions[0];
    var introStatus = ((_sessionTimeline$stat = sessionTimeline.statusMap) === null || _sessionTimeline$stat === void 0 ? void 0 : _sessionTimeline$stat.starterclass) || "upcoming";
    var eventStatusMap = {
      upcoming: "https://schema.org/EventScheduled",
      live: "https://schema.org/EventInProgress",
      completed: "https://schema.org/EventCompleted"
    };
    var event = {
      "@type": "Event",
      "@id": "https://starterclass.icuni.org/#starterclass-event",
      "name": (introSession === null || introSession === void 0 ? void 0 : introSession.title) || INTRO_NAME,
      "description": "Live online Starterclass covering ChatGPT Projects, vibe-coded builds, and reusable prompt systems.",
      "startDate": (introSession === null || introSession === void 0 ? void 0 : introSession.start) || INTRO_START_ISO,
      "endDate": (introSession === null || introSession === void 0 ? void 0 : introSession.end) || INTRO_END_ISO,
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": eventStatusMap[introStatus] || "https://schema.org/EventScheduled",
      "isAccessibleForFree": true,
      "location": {
        "@type": "VirtualLocation",
        "url": "https://starterclass.icuni.org/"
      },
      "organizer": organizer,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": introStatus === "completed" ? "https://schema.org/Discontinued" : "https://schema.org/InStock",
        "url": "https://starterclass.icuni.org/#register-free-cta"
      },
      "url": "https://starterclass.icuni.org/"
    };
    var courseInstances = monthBundles.map(function (bundle) {
      var _bundleSessions$, _bundleSessions$2, _bundle$priceUSD;
      var bundleSessions = sessions.filter(function (session) {
        return bundle.modules.includes(session.k);
      });
      if (!bundleSessions.length) return null;
      var startDate = bundleSessions.reduce(function (earliest, session) {
        return earliest && earliest < session.start ? earliest : session.start;
      }, (_bundleSessions$ = bundleSessions[0]) === null || _bundleSessions$ === void 0 ? void 0 : _bundleSessions$.start);
      var endDate = bundleSessions.reduce(function (latest, session) {
        return latest && latest > session.end ? latest : session.end;
      }, (_bundleSessions$2 = bundleSessions[0]) === null || _bundleSessions$2 === void 0 ? void 0 : _bundleSessions$2.end);
      var moduleTitles = bundleSessions.map(function (session) {
        return session.title;
      }).join("; ");
      return {
        "@type": "CourseInstance",
        "name": "".concat(bundle.label, " \u2014 ICUNI Lab Roadmap"),
        "startDate": startDate,
        "endDate": endDate,
        "courseMode": "https://schema.org/OnlineCourse",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://starterclass.icuni.org/"
        },
        "offers": {
          "@type": "Offer",
          "price": String((_bundle$priceUSD = bundle.priceUSD) !== null && _bundle$priceUSD !== void 0 ? _bundle$priceUSD : 0),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://starterclass.icuni.org/#full-track-panel"
        },
        "description": moduleTitles
      };
    }).filter(Boolean);
    var course = _objectSpread({
      "@type": "Course",
      "@id": "https://starterclass.icuni.org/#starterclass-course",
      "name": "ICUNI Six-session Cohort: AI Project Customisation, Agent Systems, and N8N Automation",
      "description": "Build an autonomous assistant, ship a vibe-coded site, and master prompt systems with a verifiable completion dossier.",
      "provider": organizer,
      "url": "https://starterclass.icuni.org/"
    }, courseInstances.length ? {
      hasCourseInstance: courseInstances
    } : {});
    return {
      "@context": "https://schema.org",
      "@graph": [event, course]
    };
  }, [monthBundles, sessionTimeline.statusMap, sessions]);
  var handleCurrencySwitch = useCallback(function (code) {
    setCurrency(code);
  }, []);
  function triggerIntroForm(source) {
    track("intro_cta_click", {
      location: source
    });
    var intro = sessions.find(function (session) {
      return session.k === "starterclass";
    }) || heroSession || sessions[0] || null;
    setActiveRegistrationSession(intro);
    setFormLoading(true);
    setModalOpen(true);
  }
  function revealPaidAndGoCurriculum() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hero_secondary";
    if (!showPaid) {
      setShowPaid(true);
      try {
        localStorage.setItem("sc_paid_reveal", "1");
      } catch (_unused7) {}
    }
    track("fulltrack_cta_click", {
      location: source,
      intent: "explore"
    });
    setTab("curriculum");
    setActiveModule("canvas");
    requestAnimationFrame(function () {
      var _document$getElementB;
      (_document$getElementB = document.getElementById("curriculum-anchor")) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  function triggerFullTrackForm() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "full_track";
    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!showPaid) {
      setShowPaid(true);
      try {
        localStorage.setItem("sc_paid_reveal", "1");
      } catch (_unused8) {}
    }
    track("fulltrack_cta_click", _objectSpread({
      location: source,
      intent: "enrol"
    }, detail));
    setTab("curriculum");
    setFullTrackExpanded(true);
    setActiveModule("canvas");
    requestAnimationFrame(function () {
      var _document$getElementB2;
      (_document$getElementB2 = document.getElementById("full-track-panel")) === null || _document$getElementB2 === void 0 || _document$getElementB2.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
    var targetKey = detail.session || (heroSession === null || heroSession === void 0 ? void 0 : heroSession.k);
    var targetSession = targetKey && sessions.find(function (session) {
      return session.k === targetKey;
    }) || heroSession || sessions.find(function (session) {
      return session.track === "paid";
    }) || sessions[0] || null;
    setActiveRegistrationSession(targetSession);
    setFormLoading(true);
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
    setFormLoading(false);
  }
  function openAlternativeForm(location) {
    track("alt_form_open", {
      location: location
    });
    setActiveRegistrationSession(heroSession || sessions[0] || null);
    setAltFormOpen(true);
  }
  function openCalendarModal(location) {
    track("calendar_modal_open", {
      location: location
    });
    setCalendarOpen(true);
  }
  function scrollToFullTrack() {
    setTab("curriculum");
    setFullTrackExpanded(true);
    requestAnimationFrame(function () {
      var _document$getElementB3;
      (_document$getElementB3 = document.getElementById("full-track-panel")) === null || _document$getElementB3 === void 0 || _document$getElementB3.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  function handleCalendarClick(location) {
    track("calendar_add", {
      location: location
    });
    var targetSession = activeRegistrationSession || heroSession || sessions[0];
    if (!targetSession) return;
    window.open(googleCalUrl({
      title: targetSession.title,
      startISO: targetSession.start,
      endISO: targetSession.end,
      details: "".concat(targetSession.title, " \u2014 ICUNI Starterclass"),
      location: "Online (Google Meet)"
    }), "_blank", "noopener");
  }
  var handleNavClick = useCallback(function (href, tabTarget) {
    track("nav_click", {
      href: href,
      tabTarget: tabTarget || null
    });
    if (tabTarget) {
      if (tabTarget === "curriculum") {
        revealPaidAndGoCurriculum("nav_link");
      } else {
        setTab(tabTarget);
      }
    }
    requestAnimationFrame(function () {
      var el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }, [revealPaidAndGoCurriculum]);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: activeTheme,
    palette: palette
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData)
    }
  }), /*#__PURE__*/React.createElement("main", {
    className: "min-h-screen ".concat(themeClass),
    style: {
      background: palette.background,
      color: palette.textPrimary,
      width: "100%",
      overflowX: "clip",
      transition: "background 300ms ease, color 300ms ease"
    }
  }, themeOverrides && /*#__PURE__*/React.createElement("style", null, themeOverrides), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none fixed inset-0 -z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-56 left-1/2 -translate-x-1/2 h-[70vh] w-[90vw]",
    style: {
      background: "radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 h-80 w-80",
    style: {
      background: "radial-gradient(circle at center, rgba(200,161,69,0.12), transparent 60%)"
    }
  })), /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 backdrop-blur",
    style: {
      background: palette.headerBg,
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement(Section, {
    className: "py-3 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 flex-1 min-w-[220px]"
  }, /*#__PURE__*/React.createElement("button", {
    ref: siteLabelGlowRef,
    type: "button",
    onClick: function onClick() {
      return window.location.reload();
    },
    onMouseMove: function onMouseMove(event) {
      setIsSiteGlowActive(true);
      updateGlow(event, siteLabelGlowRef, setSiteGlowPoint);
    },
    onMouseLeave: function onMouseLeave() {
      setIsSiteGlowActive(false);
      setSiteGlowPoint({
        x: 0.5,
        y: 0.5
      });
    },
    className: "text-base md:text-lg font-semibold tracking-tight",
    style: siteLabelStyle
  }, "Starterclass \xB7 ICUNI")), /*#__PURE__*/React.createElement("div", {
    className: "order-3 md:order-none w-full md:w-auto flex justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleTheme,
    className: "rounded-full border p-2 text-xl",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    "aria-label": "Switch to ".concat(activeTheme === "dark" ? "light" : "dark", " mode")
  }, activeTheme === "dark" ? "☀️" : "🌙")), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto hidden md:flex items-center text-xs font-semibold uppercase tracking-[0.24em]",
    style: {
      color: palette.textSecondary
    }
  }, scheduleCompleted ? "Labs archived" : "Starterclass Lab · live access")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex justify-center"
  }, /*#__PURE__*/React.createElement(GlobalNavRow, {
    activeKey: "home"
  })))), /*#__PURE__*/React.createElement(Section, {
    className: "pt-10 pb-16"
  }, /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      track("hero_chip_lab", {
        source: "hero_chip"
      });
      window.location.href = "/ai-starterclass-lab.html";
    },
    className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm",
    style: {
      background: "linear-gradient(135deg, ".concat(palette.accentPrimary, "33, ").concat(palette.accentSecondary, "33)"),
      border: "1px solid ".concat(palette.border),
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83C\uDF9F\uFE0F"), heroChipLabel, /*#__PURE__*/React.createElement("span", {
    className: "text-[0.65rem] uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Open lab")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(Badge, null, heroBadge)), /*#__PURE__*/React.createElement("h1", {
    ref: heroHeadlineGlowRef,
    className: "mt-4 text-3xl md:text-5xl font-bold tracking-tight",
    style: heroHeadlineStyle,
    onMouseMove: function onMouseMove(event) {
      setIsHeroGlowActive(true);
      updateGlow(event, heroHeadlineGlowRef, setHeroGlowPoint);
    },
    onMouseLeave: function onMouseLeave() {
      setIsHeroGlowActive(false);
      setHeroGlowPoint({
        x: 0.5,
        y: 0.5
      });
    }
  }, "Make AI work like a teammate"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg max-w-2xl",
    style: {
      color: palette.textSecondary
    }
  }, "The entire Starterclass experience now lives inside an on-demand lab. Click through interactive levels, collect points, and keep building alongside the live sessions that rotate every few weeks."), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, heroAudienceLine), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Delivered live online via Google Meet. Access details arrive once you register."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    className: "px-6 py-4 text-lg",
    onClick: function onClick() {
      track("hero_lab_primary", {
        source: "hero_cta"
      });
      window.location.href = "/ai-starterclass-lab.html";
    }
  }, "Enter the AI Starterclass Lab"), /*#__PURE__*/React.createElement(GlassButton, {
    id: "register-free-cta",
    onClick: function onClick() {
      if (scheduleCompleted) {
        triggerFullTrackForm("hero_waitlist", {
          intent: "waitlist"
        });
      } else if ((heroSession === null || heroSession === void 0 ? void 0 : heroSession.track) === "starterclass" && heroStatus !== "completed") {
        triggerIntroForm("hero_primary");
      } else {
        triggerFullTrackForm("hero_primary", {
          session: heroSession === null || heroSession === void 0 ? void 0 : heroSession.k
        });
      }
    },
    variant: "secondary"
  }, scheduleCompleted ? "Join the waitlist" : "Reserve a live seat"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Study the replay instantly, then join the next live sprint for Q&A.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, heroCountdownLabel), scheduleCompleted ? /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "All sessions are complete. We\u2019ll email you when new cohort dates open.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
  }, [["Days", d], ["Hours", h], ["Minutes", m], ["Seconds", s]].map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
      label = _ref12[0],
      val = _ref12[1];
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "relative overflow-hidden rounded-[1.75rem] px-5 py-6 text-center",
      style: {
        border: "1px solid ".concat(palette.border),
        background: activeTheme === "dark" ? "linear-gradient(160deg, rgba(20,20,40,0.92), rgba(11,11,26,0.9))" : "linear-gradient(160deg, ".concat(palette.surfaceSoft, ", rgba(255,255,255,0.92))"),
        boxShadow: activeTheme === "dark" ? "0 24px 48px rgba(5,0,45,0.45)" : palette.shadow
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-mono font-bold",
      style: {
        fontSize: "2.4rem",
        color: palette.textPrimary
      }
    }, String(val).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs uppercase tracking-[0.32em]",
      style: {
        color: palette.textMuted
      }
    }, label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-xs",
    style: {
      color: palette.textMuted
    }
  }, heroStatus === "live" ? "We’re live right now — open the Meet link from your inbox to join us." : "Reminder emails arrive 24 hours before we open the Google Meet room."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-3xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Lab playlist"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid sm:grid-cols-2 gap-3"
  }, heroTopics.slice(0, 4).map(function (topic) {
    return /*#__PURE__*/React.createElement("div", {
      key: topic.key,
      className: "rounded-2xl border p-3",
      style: {
        borderColor: "".concat(topic.color, "55"),
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, topic.key), /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, topic.headline));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mt-4 text-xs underline underline-offset-4",
    style: {
      color: palette.accentSecondary
    },
    onClick: function onClick() {
      return handleNavClick("#overview-tab", "overview");
    }
  }, "See the full session breakdown")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-3 items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, "Share this event:"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      var text = encodeURIComponent(shareWhatsAppText);
      var url = encodeURIComponent(window.location.href);
      window.open("https://wa.me/?text=".concat(text, "%20").concat(url), '_blank');
    },
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105",
    style: {
      background: '#25D366',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF1"), /*#__PURE__*/React.createElement("span", null, "WhatsApp")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      var subject = encodeURIComponent(shareEmailSubject);
      var body = encodeURIComponent("".concat(shareEmailBody, "\n\nRegister here: ").concat(window.location.href));
      window.location.href = "mailto:?subject=".concat(subject, "&body=").concat(body);
    },
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105",
    style: {
      background: "linear-gradient(135deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
      color: 'white',
      border: 'none',
      boxShadow: palette.buttonShadow
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2709\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Email"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-3 text-xs items-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    onClick: function onClick() {
      return openAlternativeForm("hero_button");
    }
  }, "Alternative registration form"), /*#__PURE__*/React.createElement("span", {
    className: "basis-full",
    style: {
      color: palette.textMuted
    }
  }, "Submit the registration form so we can email the invite and reminder.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center gap-2 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, TRUST_BADGES.map(function (badge) {
    return /*#__PURE__*/React.createElement("span", {
      key: badge.label,
      className: "inline-flex items-center gap-2 rounded-full border px-3 py-1",
      style: {
        borderColor: palette.border,
        background: palette.surfaceSoft
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, badge.icon), badge.label);
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleNavClick("#reviews");
    },
    className: "mt-3 text-xs underline underline-offset-4",
    style: {
      color: palette.accentSecondary
    }
  }, "Read attendee reviews")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PieBlock, {
    topics: heroTopics,
    prefersReducedMotion: prefersReducedMotion
  }))))), /*#__PURE__*/React.createElement(Section, {
    className: "pb-20",
    id: "overview-tab"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl md:text-3xl font-bold mb-2",
    style: {
      color: palette.textPrimary
    }
  }, "Explore the Starterclass"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Click below to learn more about what you'll discover")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 p-2 rounded-2xl w-fit mx-auto md:mx-0 shadow-lg",
    style: {
      border: "2px solid ".concat(palette.accentPrimary),
      background: "linear-gradient(135deg, ".concat(palette.surfaceSoft, ", ").concat(palette.surface, ")"),
      boxShadow: "0 8px 24px ".concat(isDark ? 'rgba(139,92,246,0.3)' : 'rgba(194,132,36,0.2)')
    }
  }, [{
    k: "overview",
    t: "Overview",
    icon: "📋"
  }, {
    k: "curriculum",
    t: "Curriculum",
    icon: "📚"
  }, {
    k: "faq",
    t: "FAQ",
    icon: "❓"
  }].map(function (_ref13) {
    var k = _ref13.k,
      t = _ref13.t,
      icon = _ref13.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        if (k === "curriculum") {
          revealPaidAndGoCurriculum("tab_switch");
        } else {
          setTab(k);
        }
      },
      className: "px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2",
      style: {
        background: tab === k ? "linear-gradient(135deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")") : "transparent",
        color: tab === k ? "white" : palette.textPrimary,
        border: tab === k ? "none" : "1px solid ".concat(palette.border),
        boxShadow: tab === k ? palette.buttonShadow : "none",
        fontSize: "1rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, icon), /*#__PURE__*/React.createElement("span", null, t));
  })), tab === "overview" && /*#__PURE__*/React.createElement("div", {
    className: "mt-8 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6"
  }, /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold"
  }, "What this Starterclass unlocks"), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-3 gap-3"
  }, OVERVIEW_WINS.map(function (win) {
    var isActive = overviewFocus === win.key;
    return /*#__PURE__*/React.createElement("button", {
      key: win.key,
      type: "button",
      onClick: function onClick() {
        return setOverviewFocus(win.key);
      },
      className: "rounded-2xl p-4 text-left transition",
      style: {
        border: "1px solid ".concat(isActive ? palette.accentPrimary : palette.border),
        background: isActive ? "linear-gradient(135deg, ".concat(palette.accentPrimary, "22, ").concat(palette.accentSecondary, "22)") : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs uppercase tracking-[0.28em]",
      style: {
        color: palette.textMuted
      }
    }, win.label), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm font-semibold"
    }, win.headline), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, win.detail));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Thinking ahead"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "The Starterclass counts toward the full lab sequence. When you\u2019re ready, add the monthly bundles to your calendar so you never miss a build.")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setNextLiveOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-between gap-3 text-left",
    "aria-expanded": nextLiveOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-semibold"
  }, "Next live times"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl",
    "aria-hidden": "true",
    style: {
      color: palette.textSecondary
    }
  }, nextLiveOpen ? "–" : "+")), nextLiveOpen ? upcomingSchedule.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-3"
  }, upcomingSchedule.map(function (s) {
    var isStarterclassSlot = s.track === "starterclass";
    var badgeLabel = isStarterclassSlot ? "Starterclass Lab" : "Future lab";
    var statusLabel = sessionStatusLabel(s.status, s.k);
    var statusColor = s.status === "live" ? palette.accentSecondary : s.status === "completed" ? palette.textMuted : palette.accentPrimary;
    var background = s.status === "completed" ? palette.surface : palette.surfaceSoft;
    var handleSlotClick = function handleSlotClick() {
      if (s.status === "completed") return;
      if (isStarterclassSlot) {
        triggerIntroForm("next_live_schedule");
      } else {
        revealPaidAndGoCurriculum("next_live_schedule");
      }
    };
    return /*#__PURE__*/React.createElement("button", {
      key: s.k,
      type: "button",
      onClick: handleSlotClick,
      className: "w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus:-translate-y-0.5 disabled:opacity-60",
      style: {
        borderColor: palette.border,
        background: background,
        color: palette.textPrimary
      },
      disabled: s.status === "completed"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-2 text-xs",
      style: {
        color: palette.textMuted
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-sm",
      style: {
        color: palette.textPrimary
      }
    }, s.date), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
      style: {
        border: "1px solid ".concat(palette.border),
        background: palette.surface,
        color: isStarterclassSlot ? palette.accentPrimary : palette.accentSecondary
      }
    }, badgeLabel), /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
      style: {
        border: "1px solid ".concat(palette.border),
        background: palette.surface,
        color: statusColor
      }
    }, statusLabel))), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs",
      style: {
        color: palette.textMuted
      }
    }, /*#__PURE__*/React.createElement("span", null, "UK: ", formatUKRange(s.start, s.end)), /*#__PURE__*/React.createElement("span", null, "Your: ", formatLocalRange(s.start, s.end))), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, s.title));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Ready for more after the Starterclass? Explore the curriculum tab to see how the future labs expand these builds.")) : /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "All sessions are archived. Join the waitlist from the hero to hear about future dates.") : /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Tap to view the Starterclass time, local conversions, and the next labs in the roadmap.")), showPaid && /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6",
    id: "value-calculator"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setValueCalcOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-between gap-3 text-left",
    "aria-expanded": valueCalcOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-semibold"
  }, "Lab Navigator"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl",
    "aria-hidden": "true",
    style: {
      color: palette.textSecondary
    }
  }, valueCalcOpen ? "–" : "+")), valueCalcOpen ? /*#__PURE__*/React.createElement(ClientValueCalculator, {
    onIntro: function onIntro() {
      return triggerIntroForm("cvc_intro");
    },
    onExplore: function onExplore() {
      return revealPaidAndGoCurriculum("cvc_explore");
    }
  }) : /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Preview whether you should stay inside the on-demand lab or book every upcoming live sprint.")))), /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6",
    id: "instructor"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setInstructorOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-between gap-3 text-left",
    "aria-expanded": instructorOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-semibold"
  }, "Meet your instructor"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl",
    "aria-hidden": "true",
    style: {
      color: palette.textSecondary
    }
  }, instructorOpen ? "–" : "+")), instructorOpen && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 grid md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: palette.textPrimary
    }
  }, "Mikael Gabriel"), " \u2014 AI nerd & consultant guiding teams into everyday AI since 2021."), /*#__PURE__*/React.createElement("p", null, "I live in the tools we\u2019ll use: ChatGPT Projects, Custom GPTs, Claude, Midjourney, Leonardo, and the quieter frontier models. My work spans automations, marketing ops, production pipelines, and the systems that keep them running."), /*#__PURE__*/React.createElement("p", null, "The Starterclass keeps things human. We build live, we document plainly, and we make sure you leave with assets you can actually use."), /*#__PURE__*/React.createElement("div", {
    className: "aspect-video overflow-hidden rounded-2xl border",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Meet the instructor",
    src: "https://www.youtube.com/embed/ke4bYVQjRBE",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: true,
    className: "h-full w-full"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Snapshot"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-2 space-y-2 list-disc pl-5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: palette.textPrimary
    }
  }, "50+ professionals onboarded"), " into daily AI use across strategy, media, and product teams."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: palette.textPrimary
    }
  }, "Global Executive MBA (AI specialisation)"), " in progress; certified in Microsoft Azure AI Fundamentals."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: palette.textPrimary
    }
  }, "Client wins:"), " media networks, independent studios, and consultancies delivering AI services."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: palette.textPrimary
    }
  }, "No-code systems builder"), " \u2014 this site, its automations, and support workflows are all AI-powered."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Philosophy"), /*#__PURE__*/React.createElement("ol", {
    className: "mt-2 space-y-2 list-decimal pl-5"
  }, /*#__PURE__*/React.createElement("li", null, "Keep humans in control \u2014 AI supports, it doesn\u2019t replace."), /*#__PURE__*/React.createElement("li", null, "Build visibly so teams can trust the workflows they inherit."), /*#__PURE__*/React.createElement("li", null, "Ship outcomes: working GPTs, automations, and prompt kits you can deploy immediately."))))))), tab === "curriculum" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10 space-y-8",
    id: "curriculum-anchor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold"
  }, "Lab roadmap by month"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Three monthly focuses: Starterclass foundations, agent systems, and automation labs.")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 space-y-6"
  }, monthBundles.map(function (bundle) {
    var filtered = sessionTimeline.all.filter(function (s) {
      return s.month === bundle.key && s.track !== "break";
    });
    var monthLabel = "".concat(bundle.label, " \xB7 Lab cycle");
    return /*#__PURE__*/React.createElement("div", {
      key: bundle.key,
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-semibold"
    }, monthLabel), /*#__PURE__*/React.createElement("div", {
      className: "text-xs",
      style: {
        color: palette.textMuted
      }
    }, "Weekly cadence \xB7 free live labs")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, filtered.map(function (module) {
      var open = activeModule === module.k;
      var statusText = sessionStatusLabel(module.status, module.k);
      var statusColor = module.status === "completed" ? palette.textMuted : module.status === "live" ? palette.accentSecondary : palette.accentPrimary;
      return /*#__PURE__*/React.createElement("div", {
        key: module.k,
        className: "rounded-3xl border",
        style: {
          borderColor: palette.border,
          background: palette.surface
        }
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "w-full px-5 py-4 flex items-start gap-4 text-left",
        onClick: function onClick() {
          return setActiveModule(function (prev) {
            return prev === module.k ? "" : module.k;
          });
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.28em]",
        style: {
          color: palette.textMuted
        }
      }, /*#__PURE__*/React.createElement("span", null, module.date), /*#__PURE__*/React.createElement("span", {
        style: {
          color: statusColor
        }
      }, statusText)), /*#__PURE__*/React.createElement("div", {
        className: "mt-1 font-semibold",
        style: {
          color: palette.textPrimary
        }
      }, module.title), /*#__PURE__*/React.createElement("div", {
        className: "mt-1 text-sm",
        style: {
          color: palette.textSecondary
        }
      }, module.desc), /*#__PURE__*/React.createElement("div", {
        className: "mt-2 flex flex-wrap gap-3 text-xs",
        style: {
          color: palette.textMuted
        }
      }, /*#__PURE__*/React.createElement("span", null, "UK: ", formatUKRange(module.start, module.end)), /*#__PURE__*/React.createElement("span", null, "Your: ", formatLocalRange(module.start, module.end)))), /*#__PURE__*/React.createElement("div", {
        className: "ml-auto text-xl",
        "aria-hidden": "true",
        style: {
          color: palette.textSecondary
        }
      }, open ? "–" : "+")), open && /*#__PURE__*/React.createElement("div", {
        className: "px-5 pb-5"
      }, /*#__PURE__*/React.createElement(ModuleOutlineChart, {
        segments: module.outline,
        prefersReducedMotion: prefersReducedMotion
      }), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 rounded-2xl border p-4",
        style: {
          borderColor: palette.border,
          background: palette.surfaceSoft
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-xs uppercase tracking-[0.28em]",
        style: {
          color: palette.textMuted
        }
      }, "What you accomplish"), /*#__PURE__*/React.createElement("div", {
        className: "mt-2 text-sm",
        style: {
          color: palette.textSecondary
        }
      }, module.outcome))));
    }), bundle.key === "dec" && /*#__PURE__*/React.createElement("div", {
      className: "rounded-3xl border p-5 text-sm",
      style: {
        borderColor: palette.border,
        color: palette.textSecondary,
        background: palette.surfaceSoft
      }
    }, "Holiday pause between 27 Dec and 10 Jan: refine assets, rest, and come back ready to automate.")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 space-y-6"
  }, /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold"
  }, "What each month unlocks"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, monthBundles.map(function (bundle) {
    return /*#__PURE__*/React.createElement("li", {
      key: bundle.key,
      className: "flex flex-col gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, bundle.label), /*#__PURE__*/React.createElement("span", {
      className: "text-xs",
      style: {
        color: palette.textMuted
      }
    }, sessionTimeline.all.filter(function (module) {
      return module.month === bundle.key && module.track !== "break";
    }).map(function (module) {
      return module.title;
    }).join(" · ")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Every lab remains free to attend. The roadmap simply keeps you organised."), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Sessions auto-mark as Archived after each live run so you always know what\u2019s next.")), /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold"
  }, "Lab status"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, scheduleCompleted ? "All labs are archived. Join the waitlist to be notified when the next cycle opens." : "Next unlock: ".concat((heroSession === null || heroSession === void 0 ? void 0 : heroSession.title) || "Starterclass", " on ").concat(heroSession ? formatSessionDateLabel(heroSession) : formatSessionDateLabel(SESSIONS[0]), ".")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 text-xs",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("span", null, "Countdown updates automatically after each live lab."), /*#__PURE__*/React.createElement("span", null, "Hero, pie chart, and tabs refresh at 12:30 UK time the day of the next session."))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8",
    id: "full-track-panel",
    ref: fullTrackSectionAnchorRef
  })), tab === "faq" && /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid md:grid-cols-2 gap-4",
    id: "faq"
  }, FAQ_ITEMS.map(function (item) {
    var expanded = openFaq === item.question;
    var panelId = "faq-panel-".concat(item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
    return /*#__PURE__*/React.createElement(GlowCard, {
      key: item.question,
      className: "p-0",
      "aria-expanded": expanded
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setOpenFaq(function (prev) {
          return prev === item.question ? "" : item.question;
        });
      },
      className: "flex w-full items-center justify-between gap-3 px-6 py-4 text-left",
      "aria-controls": panelId,
      "aria-expanded": expanded,
      style: {
        color: palette.textPrimary
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold"
    }, item.question), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      className: "text-xl",
      style: {
        color: palette.textSecondary
      }
    }, expanded ? "–" : "+")), expanded && /*#__PURE__*/React.createElement("div", {
      id: panelId,
      className: "px-6 pb-6 text-sm",
      style: {
        color: palette.textSecondary
      }
    }, item.answer));
  }))), /*#__PURE__*/React.createElement(Section, {
    className: "pb-16",
    id: "reviews"
  }, /*#__PURE__*/React.createElement(GlowCard, {
    className: "p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setReviewsOpen(function (prev) {
        return !prev;
      });
    },
    className: "flex w-full items-center justify-between gap-3 text-left",
    "aria-expanded": reviewsOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl",
    "aria-hidden": "true",
    style: {
      color: palette.textSecondary
    }
  }, reviewsOpen ? "–" : "+")), reviewsOpen && /*#__PURE__*/React.createElement("div", {
    className: "mt-6 grid lg:grid-cols-[2fr_1fr] gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "text-xl leading-relaxed",
    style: {
      color: palette.textPrimary
    },
    "aria-live": "polite"
  }, "\u201C", testimonial.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, testimonial.name, " \xB7 ", testimonial.role), /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.26em]",
    style: {
      color: palette.textMuted
    }
  }, testimonial.win), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2",
    role: "tablist",
    "aria-label": "Testimonials"
  }, testimonials.map(function (item, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.name,
      type: "button",
      onClick: function onClick() {
        return setActiveTestimonial(index);
      },
      className: "h-2.5 w-2.5 rounded-full",
      style: {
        background: index === activeTestimonial ? palette.accentPrimary : palette.border,
        border: "1px solid ".concat(palette.border)
      },
      "aria-label": "Show testimonial from ".concat(item.name),
      "aria-pressed": index === activeTestimonial
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Why people trust this"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("li", null, "Built for business leaders, consultants, and operators \u2014 no coding required."), /*#__PURE__*/React.createElement("li", null, "One Starterclass win plus a clear path through the six-session course."), /*#__PURE__*/React.createElement("li", null, "Every live session becomes an interactive lab you can revisit on this page.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      if (scheduleCompleted) {
        triggerFullTrackForm("reviews_cta", {
          intent: "waitlist"
        });
      } else {
        triggerIntroForm("reviews_cta");
      }
    },
    className: "text-xs underline underline-offset-4",
    style: {
      color: palette.accentSecondary
    }
  }, scheduleCompleted ? "Join the waitlist" : "Register free")))))), /*#__PURE__*/React.createElement(Section, {
    className: "pb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold"
  }, upcomingHeading), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      revealPaidAndGoCurriculum("track_preview");
      scrollToFullTrack();
    },
    className: "text-sm underline underline-offset-4",
    style: {
      color: palette.accentSecondary
    }
  }, "See the entire curriculum")), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-4"
  }, upcomingModules.map(function (module) {
    return /*#__PURE__*/React.createElement(GlowCard, {
      key: module.k,
      className: "p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs uppercase tracking-[0.28em]",
      style: {
        color: palette.textMuted
      }
    }, /*#__PURE__*/React.createElement("span", null, "Upcoming lab"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: module.status === "completed" ? palette.textMuted : module.status === "live" ? palette.accentSecondary : palette.accentPrimary
      }
    }, sessionStatusLabel(module.status, module.k))), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, module.title), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, module.outcome), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs",
      style: {
        color: palette.textMuted
      }
    }, module.date, " \xB7 ", formatUKRange(module.start, module.end)));
  })))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollControls, null), /*#__PURE__*/React.createElement(VeronicaChatbot, null), /*#__PURE__*/React.createElement(FooterMenu, {
    onShowTerms: function onShowTerms() {
      return setShowTerms(true);
    },
    onShowPrivacy: function onShowPrivacy() {
      return setShowPrivacy(true);
    },
    onShowContact: function onShowContact() {
      return setShowContact(true);
    }
  }), modalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 grid place-items-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 backdrop-blur",
    style: {
      background: activeTheme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)"
    },
    onClick: closeModal
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-3xl rounded-3xl overflow-hidden",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 md:px-6 py-4 flex items-center justify-between",
    style: {
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, "Register \u2014 ", (activeRegistrationSession === null || activeRegistrationSession === void 0 ? void 0 : activeRegistrationSession.title) || heroTitle), /*#__PURE__*/React.createElement("button", {
    onClick: closeModal,
    className: "text-2xl leading-none",
    style: {
      color: palette.textSecondary
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden border",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, formLoading && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
    style: {
      background: activeTheme === "dark" ? "rgba(11,11,26,0.88)" : "rgba(255,255,255,0.92)",
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-12 w-12 rounded-full border-2 border-current border-t-transparent animate-spin",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, "Preparing the registration form\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Sit tight \u2014 the Google Form loads in a moment.")), /*#__PURE__*/React.createElement("iframe", {
    src: GOOGLE_FORM_URL_EMBED,
    title: "Starterclass registration form",
    width: "100%",
    height: "680",
    frameBorder: "0",
    marginHeight: "0",
    marginWidth: "0",
    onLoad: function onLoad() {
      return setFormLoading(false);
    },
    style: {
      width: "100%",
      opacity: formLoading ? 0 : 1,
      transition: "opacity 240ms ease"
    },
    "aria-busy": formLoading ? "true" : "false"
  }, "Loading\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Submit the form above to reserve your seat. When you\u2019re done, add the session straight to your calendar."), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      track("form_submit_success", {
        location: "embedded_form"
      });
      openCalendarModal("registration_modal");
    },
    className: "px-6 py-3"
  }, "I\u2019ve submitted \u2014 open the calendar"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-sm underline underline-offset-4",
    style: {
      color: palette.textSecondary
    },
    onClick: closeModal
  }, "Close window"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Replays unlock automatically in the Lab. You\u2019ll receive confirmation and prep materials by email within a few minutes of submitting."))))), altFormOpen && /*#__PURE__*/React.createElement(AlternativeRegistrationModal, {
    onClose: function onClose() {
      return setAltFormOpen(false);
    },
    onCalendar: function onCalendar() {
      return openCalendarModal("alternative_form");
    }
  }), calendarOpen && /*#__PURE__*/React.createElement(CalendarModal, {
    onClose: function onClose() {
      return setCalendarOpen(false);
    },
    onAdd: function onAdd() {
      return handleCalendarClick("registration_modal");
    }
  }), showTerms && /*#__PURE__*/React.createElement(PolicyModal, {
    title: "Terms of Service",
    onClose: function onClose() {
      return setShowTerms(false);
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "These terms govern enrollment in the ICUNI Starterclass."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm space-y-2 mt-3",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Scope:"), " The Starterclass Session provides live instruction, templates, and materials for personal or business use. Redistribution or resale is not permitted without written consent."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Access:"), " Starterclass labs are free. Corporate workshops and private trainings use their own agreements."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Changes:"), " Not applicable for the free lab experience. Optional add-ons will publish their own policies if needed."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Recordings & materials:"), " Starterclass labs live on this page indefinitely alongside slide decks and prompt kits."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Conduct:"), " Be respectful in live sessions and forums. Disruptive behaviour may result in removal from the live lab."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "IP:"), " Your data remains yours. Course IP remains ICUNI\u2019s and is licensed for your use."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Changes:"), " We may adjust dates or contents for quality or operational reasons; you\u2019ll be notified by email."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Governing law:"), " England & Wales."))), showPrivacy && /*#__PURE__*/React.createElement(PolicyModal, {
    title: "Privacy Policy",
    onClose: function onClose() {
      return setShowPrivacy(false);
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "We collect the minimum necessary data to run the cohort and support you."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm space-y-2 mt-3",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Data collected:"), " Name, email, form responses, attendance, and homework links."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Use:"), " Enrollment, reminders, certification, and support. Optional marketing with explicit opt-in."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Processors:"), " Google (Forms/Sheets/Drive), our email provider (Postmark/SendGrid), and n8n automations for reminders."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Security:"), " Access is limited to ICUNI admins on a need-to-know basis. We use least-privilege accounts and audit access periodically."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Retention:"), " Enrollment records are retained for up to 24 months; you may request deletion anytime."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Your rights:"), " Access, correction, deletion. Email ", /*#__PURE__*/React.createElement("a", {
    className: "underline",
    href: "mailto:starterclass@icuni.org"
  }, "starterclass@icuni.org"), "."))), showContact && /*#__PURE__*/React.createElement(PolicyModal, {
    title: "Contact",
    onClose: function onClose() {
      return setShowContact(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm space-y-2",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("p", null, "We reply within 2 business days."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 space-y-1"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Enrollment & support:"), " ", /*#__PURE__*/React.createElement("a", {
    className: "underline",
    href: "mailto:starterclass@icuni.org"
  }, "starterclass@icuni.org")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Automation ops (N8N):"), " ", /*#__PURE__*/React.createElement("a", {
    className: "underline",
    href: "mailto:ai@icuni.org"
  }, "ai@icuni.org")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: palette.textMuted
    }
  }, "Receipts & reminders (no-reply):"), " no-reply@icuni.org")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Prefer not to email? Register via the on-page form; we\u2019ll follow up with materials and calendar invites.")))))));
}
window.StarterclassLuxuryV8 = StarterclassLuxuryV8;
function PieBlock(_ref14) {
  var _topics$activeIndex, _active$color;
  var _ref14$topics = _ref14.topics,
    topics = _ref14$topics === void 0 ? PIE_TOPICS : _ref14$topics,
    prefersReducedMotion = _ref14.prefersReducedMotion;
  var _useState83 = useState(0),
    _useState84 = _slicedToArray(_useState83, 2),
    activeIndex = _useState84[0],
    setActiveIndex = _useState84[1];
  var _useState85 = useState(false),
    _useState86 = _slicedToArray(_useState85, 2),
    paused = _useState86[0],
    setPaused = _useState86[1];
  var active = (_topics$activeIndex = topics[activeIndex]) !== null && _topics$activeIndex !== void 0 ? _topics$activeIndex : topics[0];
  var _useTheme11 = useTheme(),
    palette = _useTheme11.palette;
  useEffect(function () {
    if (paused || prefersReducedMotion) return undefined;
    var id = setInterval(function () {
      setActiveIndex(function (idx) {
        return (idx + 1) % topics.length;
      });
    }, 10000);
    return function () {
      return clearInterval(id);
    };
  }, [paused, prefersReducedMotion, topics.length]);
  var activeColor = (_active$color = active === null || active === void 0 ? void 0 : active.color) !== null && _active$color !== void 0 ? _active$color : "#C8A145";
  return /*#__PURE__*/React.createElement("div", {
    className: "relative",
    onMouseEnter: function onMouseEnter() {
      return !prefersReducedMotion && setPaused(true);
    },
    onMouseLeave: function onMouseLeave() {
      return !prefersReducedMotion && setPaused(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-6 -z-10 rounded-[2rem] blur-2xl",
    style: {
      background: "radial-gradient(circle at center, ".concat(activeColor, "26, transparent 65%)")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto w-full max-w-[540px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      animation: "pieRotate 120s linear infinite",
      animationPlayState: paused || prefersReducedMotion ? "paused" : "running"
    }
  }, /*#__PURE__*/React.createElement(Pie, {
    topics: topics,
    activeIndex: activeIndex,
    onSelect: setActiveIndex
  })), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-8",
    style: {
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, active === null || active === void 0 ? void 0 : active.key), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-lg font-semibold leading-snug"
  }, active === null || active === void 0 ? void 0 : active.headline), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-xs leading-relaxed max-w-[300px]",
    style: {
      color: palette.textSecondary
    }
  }, active === null || active === void 0 ? void 0 : active.desc), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-[0.65rem] uppercase tracking-[0.36em]",
    style: {
      color: palette.textMuted
    }
  }, Math.round(active === null || active === void 0 ? void 0 : active.value), "% of session focus"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-5 space-y-3",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surfaceSoft,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.32em]",
    style: {
      color: palette.textMuted
    }
  }, "Outcome"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, active === null || active === void 0 ? void 0 : active.outcome), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-3",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Toolkit highlight"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, active === null || active === void 0 ? void 0 : active.toolkit)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Focus detail: ", active === null || active === void 0 ? void 0 : active.desc))), /*#__PURE__*/React.createElement("style", null, "@keyframes pieRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"));
}
function ModuleOutlineChart(_ref15) {
  var _outline$focus;
  var _ref15$segments = _ref15.segments,
    segments = _ref15$segments === void 0 ? [] : _ref15$segments,
    prefersReducedMotion = _ref15.prefersReducedMotion;
  var fallback = useMemo(function () {
    return [{
      key: "Overview",
      value: 1,
      desc: "Module outline preview.",
      color: "#C8A145"
    }];
  }, []);
  var outline = segments && segments.length ? segments : fallback;
  var _useState87 = useState(0),
    _useState88 = _slicedToArray(_useState87, 2),
    focus = _useState88[0],
    setFocus = _useState88[1];
  var _useTheme12 = useTheme(),
    palette = _useTheme12.palette;
  useEffect(function () {
    if (!outline.length || prefersReducedMotion) return undefined;
    var id = setInterval(function () {
      setFocus(function (prev) {
        return (prev + 1) % outline.length;
      });
    }, 8000);
    return function () {
      return clearInterval(id);
    };
  }, [outline.length, prefersReducedMotion]);
  var active = (_outline$focus = outline[focus]) !== null && _outline$focus !== void 0 ? _outline$focus : outline[0];
  var total = outline.reduce(function (sum, seg) {
    return sum + (seg.value || 0);
  }, 0) || 1;
  var share = Math.round(((active === null || active === void 0 ? void 0 : active.value) || 0) / total * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-[240px] mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Pie, {
    topics: outline,
    activeIndex: focus,
    onSelect: setFocus
  })), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4",
    style: {
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, share, "%"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm font-semibold"
  }, active === null || active === void 0 ? void 0 : active.key))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, outline.map(function (seg, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: seg.key,
      type: "button",
      onMouseEnter: function onMouseEnter() {
        return setFocus(idx);
      },
      onFocus: function onFocus() {
        return setFocus(idx);
      },
      className: "w-full rounded-2xl p-3 text-left transition",
      style: {
        border: "1px solid ".concat(palette.border),
        background: idx === focus ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-2 w-2 rounded-full",
      style: {
        background: seg.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-sm"
    }, seg.key), /*#__PURE__*/React.createElement("div", {
      className: "ml-auto text-xs",
      style: {
        color: palette.textMuted
      }
    }, Math.round((seg.value || 0) / total * 100), "%")), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, seg.desc));
  })));
}
function AlternativeRegistrationModal(_ref16) {
  var onClose = _ref16.onClose,
    onCalendar = _ref16.onCalendar;
  var _useTheme13 = useTheme(),
    palette = _useTheme13.palette,
    theme = _useTheme13.theme;
  var isDark = theme === "dark";
  var _useState89 = useState(1),
    _useState90 = _slicedToArray(_useState89, 2),
    step = _useState90[0],
    setStep = _useState90[1];
  var _useState91 = useState({
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
      submitConsent: false
    }),
    _useState92 = _slicedToArray(_useState91, 2),
    form = _useState92[0],
    setForm = _useState92[1];
  var _useState93 = useState(""),
    _useState94 = _slicedToArray(_useState93, 2),
    stepError = _useState94[0],
    setStepError = _useState94[1];
  var _useState95 = useState(""),
    _useState96 = _slicedToArray(_useState95, 2),
    submitError = _useState96[0],
    setSubmitError = _useState96[1];
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    submitting = _useState98[0],
    setSubmitting = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    submitted = _useState100[0],
    setSubmitted = _useState100[1];
  var roleOptions = useMemo(function () {
    return [{
      value: "creative",
      label: "Creative"
    }, {
      value: "entrepreneur",
      label: "Entrepreneur / Founder"
    }, {
      value: "lead",
      label: "Head of Department / Team Lead"
    }, {
      value: "employee",
      label: "Employee / Individual Contributor"
    }, {
      value: "tech",
      label: "Tech Professional"
    }, {
      value: "other",
      label: "Other"
    }];
  }, []);
  var industryOptions = useMemo(function () {
    return [{
      value: "creative",
      label: "Creative (film/photo/design/music)"
    }, {
      value: "finance",
      label: "Finance / FinTech"
    }, {
      value: "education",
      label: "Education"
    }, {
      value: "tech",
      label: "Tech / IT / Software"
    }, {
      value: "marketing",
      label: "Marketing / Media / Agency"
    }, {
      value: "health",
      label: "Healthcare / Life Sciences"
    }, {
      value: "retail",
      label: "Retail / eCommerce"
    }, {
      value: "services",
      label: "Professional Services (Legal/Accounting/Consulting)"
    }, {
      value: "nonprofit",
      label: "Nonprofit / Public Sector"
    }, {
      value: "hospitality",
      label: "Hospitality / Travel"
    }, {
      value: "energy",
      label: "Oil & Gas"
    }, {
      value: "other",
      label: "Other"
    }];
  }, []);
  var ageRangeOptions = useMemo(function () {
    return [{
      value: "18-24",
      label: "18–24"
    }, {
      value: "25-34",
      label: "25–34"
    }, {
      value: "35-44",
      label: "35–44"
    }, {
      value: "45-54",
      label: "45–54"
    }, {
      value: "55+",
      label: "55+"
    }];
  }, []);
  var aiExperienceOptions = useMemo(function () {
    return [{
      value: "beginner",
      label: "Beginner — never used it / barely tried"
    }, {
      value: "casual",
      label: "Casual — I dabble, want to level up"
    }, {
      value: "regular",
      label: "Regular — I use it weekly"
    }, {
      value: "power",
      label: "Power user — I use it daily and build workflows"
    }];
  }, []);
  var goalOptions = useMemo(function () {
    return [{
      value: "getting_started",
      label: "How do I get started with AI?"
    }, {
      value: "automation",
      label: "Automation (how do I automate everything?)"
    }, {
      value: "research",
      label: "Deep Research (pulling sources, briefs)"
    }, {
      value: "projects",
      label: "Projects (multi-doc planning, long tasks)"
    }, {
      value: "canvas",
      label: "Canvas (docs, slides, wireframes)"
    }, {
      value: "custom_gpts",
      label: "Custom GPTs (private tools)"
    }, {
      value: "coding",
      label: "Coding (light scripts, automations)"
    }, {
      value: "prompt",
      label: "Prompt Engineering (frameworks that work)"
    }, {
      value: "jobs",
      label: "Will AI take my job? (what to do now)"
    }];
  }, []);
  var followUpOptions = useMemo(function () {
    return [{
      value: "review",
      label: "Give review after Starterclass",
      hint: "Send a short testimonial link"
    }, {
      value: "newsletter",
      label: "Subscribe to AI newsletter",
      hint: "Prompts, updates, upcoming events"
    }, {
      value: "community",
      label: "Join AI group chat",
      hint: "Invitation arrives once it's live"
    }];
  }, []);
  var interestOptions = useMemo(function () {
    return [{
      value: "starterclass",
      label: "FREE 90 minute AI Starterclass session"
    }, {
      value: "full_course",
      label: "Full 6 sessions Starterclass"
    }];
  }, []);
  var wantsFullCourse = form.interests.includes("full_course");
  var updateField = useCallback(function (key, value) {
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, value));
    });
  }, []);
  var toggleField = useCallback(function (key, value) {
    setForm(function (prev) {
      var list = Array.isArray(prev[key]) ? prev[key] : [];
      var exists = list.includes(value);
      var next = exists ? list.filter(function (item) {
        return item !== value;
      }) : [].concat(_toConsumableArray(list), [value]);
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, next));
    });
  }, []);
  var selectFullCourseIntent = useCallback(function (value) {
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        fullCourseIntent: value,
        agreeFullCourse: value === "yes" ? prev.agreeFullCourse : false
      });
    });
    setStepError("");
  }, []);
  function findLabel(options, value) {
    var _options$find;
    return ((_options$find = options.find(function (option) {
      return option.value === value;
    })) === null || _options$find === void 0 ? void 0 : _options$find.label) || value;
  }
  var summary = useMemo(function () {
    return {
      role: findLabel(roleOptions, form.role),
      industry: findLabel(industryOptions, form.industry),
      ageRange: findLabel(ageRangeOptions, form.ageRange),
      aiExperience: findLabel(aiExperienceOptions, form.aiExperience),
      goals: form.goals.map(function (value) {
        return findLabel(goalOptions, value);
      }),
      followUps: form.followUps.map(function (value) {
        return findLabel(followUpOptions, value);
      }),
      interests: form.interests.map(function (value) {
        return findLabel(interestOptions, value);
      })
    };
  }, [form, roleOptions, industryOptions, ageRangeOptions, aiExperienceOptions, goalOptions, followUpOptions, interestOptions]);
  var sectionLabel = "Section ".concat(Math.min(step, 3), " of 3");
  function handleBack() {
    setStepError("");
    setSubmitError("");
    if (step === 1) {
      onClose();
      return;
    }
    if (step === 2) {
      setStep(1);
      track("alt_form_progress", {
        from: 2,
        to: 1,
        action: "back"
      });
      return;
    }
    if (step === 3 && !submitted) {
      var destination = wantsFullCourse ? 2 : 1;
      setStep(destination);
      track("alt_form_progress", {
        from: 3,
        to: destination,
        action: "back"
      });
    }
  }
  function handleSectionOneNext() {
    var trimmedName = form.firstName.trim();
    var trimmedEmail = form.email.trim();
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
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        firstName: trimmedName,
        email: trimmedEmail
      });
    });
    setStepError("");
    var nextStep = wantsFullCourse ? 2 : 3;
    setStep(nextStep);
    track("alt_form_progress", {
      from: 1,
      to: nextStep,
      wantsFullCourse: wantsFullCourse
    });
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
    track("alt_form_progress", {
      from: 2,
      to: 3,
      fullCourseIntent: form.fullCourseIntent
    });
  }
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var wantsFullCourseRoute, payload, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(submitting || submitted)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (form.submitConsent) {
              _context2.n = 2;
              break;
            }
            setSubmitError("Please confirm you're ready to submit.");
            return _context2.a(2);
          case 2:
            setSubmitError("");
            setSubmitting(true);
            wantsFullCourseRoute = wantsFullCourse ? form.fullCourseIntent || "interest_only" : "starterclass_only";
            payload = {
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
              wantsFullCourse: wantsFullCourse,
              fullCourseIntent: form.fullCourseIntent || (wantsFullCourse ? "undecided" : "not_requested"),
              agreeFullCourse: form.agreeFullCourse,
              newsletterOptIn: form.followUps.includes("newsletter"),
              reviewOptIn: form.followUps.includes("review"),
              communityOptIn: form.followUps.includes("community"),
              route: wantsFullCourseRoute
            };
            _context2.p = 3;
            track("alt_form_submit_attempt", {
              wantsFullCourse: wantsFullCourse,
              fullCourseIntent: form.fullCourseIntent || null
            });
            _context2.n = 4;
            return fetch(ALTERNATIVE_FORM_ENDPOINT, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payload)
            });
          case 4:
            response = _context2.v;
            if (response.ok) {
              _context2.n = 5;
              break;
            }
            throw new Error("Request failed with status ".concat(response.status));
          case 5:
            setSubmitted(true);
            track("alt_form_submit_success", {
              route: wantsFullCourseRoute,
              wantsFullCourse: wantsFullCourse
            });
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            console.error(_t2);
            setSubmitError("We hit a snag sending your details. Please try again in a moment.");
            track("alt_form_submit_error", {
              message: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || String(_t2)
            });
          case 7:
            _context2.p = 7;
            setSubmitting(false);
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 6, 7, 8]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 grid place-items-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 backdrop-blur",
    style: {
      background: isDark ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)"
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-3xl rounded-3xl overflow-hidden",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 md:px-6 py-4 flex items-center justify-between",
    style: {
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.32em]",
    style: {
      color: palette.textMuted
    }
  }, sectionLabel), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-base md:text-lg"
  }, "AI Starterclass Session Registration")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-2xl leading-none",
    style: {
      color: palette.textSecondary
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[85vh] overflow-y-auto p-6 space-y-6",
    style: {
      color: palette.textSecondary
    }
  }, stepError && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.accentPrimary,
      background: isDark ? "rgba(200,161,69,0.08)" : "rgba(200,161,69,0.12)",
      color: palette.textPrimary
    }
  }, stepError), step === 1 && !submitted && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", null, "Welcome! We're excited you're joining us for the FREE AI Starterclass on Saturday, 15 November 2025 at 11AM on Google Meet."), /*#__PURE__*/React.createElement("p", null, "Read more on our website", ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://starterclass.icuni.org",
    target: "_blank",
    rel: "noreferrer",
    className: "underline underline-offset-4",
    style: {
      color: palette.accentSecondary
    }
  }, "starterclass.icuni.org"), "."), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 space-y-2 text-xs md:text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "What to expect"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-4 space-y-1"
  }, /*#__PURE__*/React.createElement("li", null, "90 minutes of practical, hands-on learning"), /*#__PURE__*/React.createElement("li", null, "Create your first custom AI project with knowledge packs"), /*#__PURE__*/React.createElement("li", null, "Build a working application using vibe coding basics"), /*#__PURE__*/React.createElement("li", null, "Leave with skills you can apply immediately")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "You'll need a ChatGPT account (Plus recommended), a willingness to experiment, and curiosity. No coding experience required."))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "First Name (only)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.firstName,
    onChange: function onChange(event) {
      return updateField('firstName', event.target.value);
    },
    placeholder: "Veronica",
    className: "mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    autoComplete: "given-name"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: function onChange(event) {
      return updateField('email', event.target.value);
    },
    placeholder: "you@example.com",
    className: "mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    autoComplete: "email"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Role"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex flex-wrap gap-2"
  }, roleOptions.map(function (option) {
    var active = form.role === option.value;
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return updateField('role', option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl px-4 py-2 text-sm font-medium transition",
      style: {
        border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, option.label);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Industry"), /*#__PURE__*/React.createElement("select", {
    value: form.industry,
    onChange: function onChange(event) {
      return updateField('industry', event.target.value);
    },
    className: "mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select your industry"), industryOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Age range"), /*#__PURE__*/React.createElement("select", {
    value: form.ageRange,
    onChange: function onChange(event) {
      return updateField('ageRange', event.target.value);
    },
    className: "mt-2 w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select your age range"), ageRangeOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Your AI experience"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex flex-wrap gap-2"
  }, aiExperienceOptions.map(function (option) {
    var active = form.aiExperience === option.value;
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return updateField('aiExperience', option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl px-4 py-2 text-sm font-medium transition text-left",
      style: {
        border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, option.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "What you want from the class"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex flex-wrap gap-2"
  }, goalOptions.map(function (option) {
    var active = form.goals.includes(option.value);
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return toggleField('goals', option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl px-4 py-2 text-sm font-medium transition text-left",
      style: {
        border: "1px solid ".concat(active ? palette.accentSecondary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, option.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Do you want to\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid gap-2 md:grid-cols-3"
  }, followUpOptions.map(function (option) {
    var active = form.followUps.includes(option.value);
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return toggleField('followUps', option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl border px-4 py-3 text-left text-sm transition",
      style: {
        border: "1px solid ".concat(active ? palette.accentSecondary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold"
    }, option.label), option.hint && /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, option.hint));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Interests"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex flex-wrap gap-2"
  }, interestOptions.map(function (option) {
    var active = form.interests.includes(option.value);
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return toggleField('interests', option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl border px-5 py-3 text-sm font-semibold transition",
      style: {
        border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, option.label);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleSectionOneNext,
    className: "px-6 py-3"
  }, "Continue"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-sm underline underline-offset-4",
    style: {
      color: palette.textSecondary
    },
    onClick: onClose
  }, "I'll finish this later"))), step === 2 && !submitted && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Full Starterclass course"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "The Starterclass is Session 1 of our nine-session programme running through January 2026. Every session is live, project-based, and paired with office hours."), /*#__PURE__*/React.createElement("ul", {
    className: "mt-3 list-disc space-y-1 pl-4 text-xs"
  }, /*#__PURE__*/React.createElement("li", null, "Deploy AI-powered websites and vibe-coded applications"), /*#__PURE__*/React.createElement("li", null, "Build autonomous agents and AI short-film pipelines"), /*#__PURE__*/React.createElement("li", null, "Master n8n for assistants, orchestration, and observability")), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Every session listed here is included for free. Use this summary to decide which labs to join live.")), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 text-xs",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("div", null, "Sat 29 Nov 2025 \u2014 Canvas Deep Dive & Vibe Coding"), /*#__PURE__*/React.createElement("div", null, "Sat 13 Dec 2025 \u2014 ChatGPT Agents 1: Prompts, Processes & Systems"), /*#__PURE__*/React.createElement("div", null, "Sat 27 Dec 2025 \u2014 ChatGPT Agents 2: AI Short-Film Production"), /*#__PURE__*/React.createElement("div", null, "Sat 10 Jan 2026 \u2014 N8N Deep Dive: Create Your First AI Assistant"), /*#__PURE__*/React.createElement("div", null, "Sat 24 Jan 2026 \u2014 N8N Mastery: Orchestrate the System"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Would you like updates about the full lab sequence?"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid gap-2 md:grid-cols-3"
  }, [{
    value: 'yes',
    label: 'Yes — remind me for every lab'
  }, {
    value: 'maybe',
    label: 'Maybe — send highlights'
  }, {
    value: 'no',
    label: 'Not this time'
  }].map(function (option) {
    var active = form.fullCourseIntent === option.value;
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return selectFullCourseIntent(option.value);
      },
      "aria-pressed": active,
      className: "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
      style: {
        border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
        background: active ? palette.surface : palette.surfaceSoft,
        color: palette.textPrimary
      }
    }, option.label);
  }))), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.agreeFullCourse,
    onChange: function onChange(event) {
      return updateField('agreeFullCourse', event.target.checked);
    },
    disabled: form.fullCourseIntent !== 'yes',
    className: "mt-1 h-4 w-4 rounded",
    style: {
      accentColor: palette.accentSecondary
    }
  }), /*#__PURE__*/React.createElement("span", null, "I agree to the Terms & Privacy and understand this lab is free; you\u2019ll send reminders before each live session.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleSectionTwoNext,
    className: "px-6 py-3"
  }, "Continue"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: handleBack,
    className: "px-6 py-3"
  }, "Back"))), step === 3 && !submitted && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 space-y-2",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Review & privacy"), /*#__PURE__*/React.createElement("p", null, "We collect the minimum necessary data to run the cohort and support you."), /*#__PURE__*/React.createElement("p", null, "Data collected: Name, email, form responses, attendance, and homework links."), /*#__PURE__*/React.createElement("p", null, "Security: Access is limited to ICUNI admins on a need-to-know basis. We use least-privilege accounts and audit access periodically."), /*#__PURE__*/React.createElement("p", null, "Retention: Enrollment records are retained for up to 24 months; you may request deletion anytime."), /*#__PURE__*/React.createElement("p", null, "Your rights: Access, correction, deletion. Email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:starterclass@icuni.org",
    className: "underline",
    style: {
      color: palette.accentSecondary
    }
  }, "starterclass@icuni.org"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-xs space-y-2",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Snapshot"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, form.firstName || 'First name', " \xB7 ", form.email || 'email pending'), /*#__PURE__*/React.createElement("div", null, "Role: ", summary.role || '—'), /*#__PURE__*/React.createElement("div", null, "Industry: ", summary.industry || '—'), /*#__PURE__*/React.createElement("div", null, "AI experience: ", summary.aiExperience || '—'), /*#__PURE__*/React.createElement("div", null, "Goals: ", summary.goals.length ? summary.goals.join(', ') : '—'), /*#__PURE__*/React.createElement("div", null, "Interests: ", summary.interests.length ? summary.interests.join(', ') : '—')), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.submitConsent,
    onChange: function onChange(event) {
      return updateField('submitConsent', event.target.checked);
    },
    className: "mt-1 h-4 w-4 rounded",
    style: {
      accentColor: palette.accentSecondary
    }
  }), /*#__PURE__*/React.createElement("span", null, "Yes \u2014 submit my registration.")), submitError && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.accentSecondary,
      background: isDark ? "rgba(123,61,240,0.12)" : "rgba(123,61,240,0.14)",
      color: palette.textPrimary
    }
  }, submitError), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleSubmit,
    className: "px-6 py-3",
    disabled: submitting
  }, submitting ? 'Sending…' : 'Submit registration'), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: handleBack,
    className: "px-6 py-3",
    disabled: submitting
  }, "Back"))), submitted && /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, "You're confirmed!"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "Thanks ", form.firstName || 'there', " \u2014 your details are on the way to our N8N workflow. Expect the Google Meet invite and prep pack in your inbox shortly.")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-xs",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, "We\u2019ll keep you posted with reminder emails 24 hours before the session and any lab-sequence follow-up you requested."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      track('alt_form_calendar', {
        source: 'success'
      });
      onClose();
      if (onCalendar) onCalendar();
    },
    className: "px-6 py-3"
  }, "Add to calendar"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: onClose,
    className: "px-6 py-3"
  }, "Close"))))));
}
function PolicyModal(_ref17) {
  var title = _ref17.title,
    onClose = _ref17.onClose,
    children = _ref17.children;
  var _useTheme14 = useTheme(),
    theme = _useTheme14.theme,
    palette = _useTheme14.palette;
  var isDark = theme === "dark";
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 grid place-items-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 backdrop-blur",
    style: {
      background: isDark ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)"
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-3xl rounded-3xl overflow-hidden",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 md:px-6 py-4 flex items-center justify-between",
    style: {
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-2xl leading-none",
    style: {
      color: palette.textSecondary
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-3",
    style: {
      color: palette.textSecondary
    }
  }, children)));
}
function CalendarModal(_ref18) {
  var onClose = _ref18.onClose,
    onAdd = _ref18.onAdd;
  var _useTheme15 = useTheme(),
    theme = _useTheme15.theme,
    palette = _useTheme15.palette;
  var isDark = theme === "dark";
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 grid place-items-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 backdrop-blur",
    style: {
      background: isDark ? "rgba(0,0,0,0.7)" : "rgba(20,16,40,0.25)"
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-md rounded-3xl overflow-hidden",
    style: {
      border: "1px solid ".concat(palette.border),
      background: palette.surface,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 flex items-center justify-between",
    style: {
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, "Add Starterclass Session"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-2xl leading-none",
    style: {
      color: palette.textSecondary
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Pop open your calendar now so the session is locked in."), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: onAdd,
    className: "w-full justify-center px-6 py-3 text-sm"
  }, "Add 15 Nov \xB7 11:00 AM to calendar"))));
}
var LAB_PERSONA_OPTIONS = [{
  value: "creative",
  label: "Creative / Marketing",
  heading: "Client Project Copilot – Creative",
  body: "You translate messy creative briefs into clear deliverables, campaign plans, and client-ready updates. Ask 3–5 clarifying questions, separate facts vs assumptions, and flag risks before presenting ideas."
}, {
  value: "consulting",
  label: "Consulting / Professional Services",
  heading: "Client Project Copilot – Consulting",
  body: "You specialise in structuring projects, defining scope, and aligning stakeholders. Surface unknowns early, propose phased approaches, and highlight legal or compliance considerations."
}, {
  value: "finance",
  label: "Finance / FinTech",
  heading: "Client Project Copilot – Finance",
  body: "You turn client requests into structured analyses, lightweight models, and investor-ready summaries. Always note assumptions, confidence levels, and regulatory implications."
}, {
  value: "healthcare",
  label: "Healthcare / Psych / Life Sciences",
  heading: "Client Project Copilot – Healthcare",
  body: "You emphasise ethics, privacy, and clear disclaimers. Capture context carefully, suggest verification steps, and keep recommendations grounded in evidence-based practice."
}, {
  value: "nonprofit",
  label: "Nonprofit / Public Sector",
  heading: "Client Project Copilot – Public Impact",
  body: "You turn policy goals into action plans, stakeholder updates, and grant-friendly reporting. Clarify impact metrics, constraints, and accountability requirements."
}, {
  value: "tech",
  label: "Tech / IT / Software",
  heading: "Client Project Copilot – Technology",
  body: "You break feature requests into user stories, technical tasks, risks, and comms packs. Highlight dependencies, integrations, and test plans before implementation."
}, {
  value: "other",
  label: "Other",
  heading: "Client Project Copilot – Universal",
  body: "You adapt to whatever project lands on your desk. Start by restating the goal, list key assumptions, then recommend the smartest starting command."
}];
var LAB_COMMANDS = [{
  command: "/scope",
  summary: "Scope the project",
  detail: "Summarise context, list unknowns, and present a phases table."
}, {
  command: "/brief",
  summary: "Draft a project brief",
  detail: "Turn raw inputs into a polished, client-facing overview."
}, {
  command: "/plan",
  summary: "Implementation plan",
  detail: "Lay out milestones, owners, and checklists."
}, {
  command: "/email",
  summary: "Client email",
  detail: "Draft ready-to-send updates or approvals."
}, {
  command: "/retro",
  summary: "Project retrospective",
  detail: "Capture lessons, wins, and fixes in a tight doc."
}];
var LAB_INPUT_OPTIONS = ["Industry / field", "Client type", "Project description", "Urgency", "Estimated effort", "Strategic value", "Your base day rate / internal cost", "Risks/constraints already known"];
var LAB_OUTPUT_TEMPLATES = [{
  value: "minimal",
  title: "Minimalist",
  bullets: ["Summary", "Price band", "3–5 tasks"],
  tip: "Choose Minimalist when speed matters and you just need a direction."
}, {
  value: "standard",
  title: "Standard",
  bullets: ["Summary", "Price band with explanation", "Phases & tasks", "Risks & questions", "Email skeleton"],
  tip: "Use Standard for most client-facing scoping conversations."
}, {
  value: "detailed",
  title: "Detailed",
  bullets: ["Everything in Standard", "Timeline", "Suggested deliverable formats"],
  tip: "Detailed is for high-stakes work when you need zero ambiguity."
}];
var LAB_RISKS = [{
  title: "Legal / Compliance",
  bullets: ["Don't treat outputs as legal advice.", "Flag when regulations may apply.", "Note when clients need professional review."]
}, {
  title: "Healthcare / Mental Health",
  bullets: ["Never offer diagnoses.", "Keep PHI out of prompts.", "Suggest human review before acting."]
}, {
  title: "Financial Advice",
  bullets: ["Provide ranges, not guarantees.", "Disclose assumptions.", "Remind clients to verify numbers."]
}, {
  title: "Confidential Data",
  bullets: ["Strip identifiers before sharing.", "Store sensitive notes outside chat.", "Mark unknowns vs facts."]
}];
var LAB_BADGES = [{
  min: 90,
  label: "AI Operator",
  description: "You run AI like infrastructure. Build full workflows next."
}, {
  min: 70,
  label: "Workflow Builder",
  description: "You're building systems. Upgrade tiny tools into team utilities."
}, {
  min: 40,
  label: "Prompt Explorer",
  description: "You know the tools exist. Commit one real workflow this week."
}, {
  min: 0,
  label: "Prompt Tourist",
  description: "You're still visiting. Re-run the lab with a live project."
}];
var PROMPT_ASSEMBLY_PARTS = [{
  key: "role",
  label: "Role",
  options: ["You are my project assistant.", "You are my client success lead.", "You are my strategic advisor."]
}, {
  key: "context",
  label: "Context",
  options: ["We are starting a 6-week branding project for a boutique e-commerce brand.", "We just wrapped discovery for a fintech workflow overhaul.", "We are pitching a content retainer for a healthcare startup."]
}, {
  key: "goal",
  label: "Goal",
  options: ["Confirm scope, timeline, and next steps.", "Turn messy notes into a concise update.", "Highlight decisions and ask for approval by Friday."]
}, {
  key: "format",
  label: "Format",
  options: ["Use sections: Greeting, Summary, Bullet list, CTA.", "Use sections: Situation, Actions, Next steps.", "Use sections: Recap, Timeline, Questions, CTA."]
}];
var LAB_SCENARIOS = [{
  id: "brand_sprint",
  title: "Brand sprint kickoff",
  detail: "Client sent a stream-of-consciousness email with hopes, fears, and random inspo links.",
  best: "scope"
}, {
  id: "email_rescue",
  title: "Email rescue",
  detail: "You need to send a clear plan back to a client who keeps changing requirements.",
  best: "brief"
}, {
  id: "implementation",
  title: "Implementation push",
  detail: "You already have a brief and just received the green light to execute.",
  best: "plan"
}];
var STRATEGY_GAMIFIED_CHOICES = {
  stop: ["Manual status emails", "Formatting research by hand", "Guessing project scope", "Rewriting the same prompt"],
  keep: ["Final client approval", "Budget sign-off", "Risk decisions", "Team coaching moments"],
  skill: ["Agent orchestration", "Automation design", "AI-native storytelling", "Data instrumentation"]
};
var CUSTOM_TWEAK_OPTIONS = ["Tone and personality", "Structure preferences", "Clarifying question rules", "How to handle uncertainty", "Default deliverable format", "Depth cues (quick vs deep)"];
var PROMPT_BLUEPRINT_TEXT = "Prompt Blueprint\n\nRole: \"You are my [X] assistant\u2026\"\nContext: \"Here is the situation\u2026\"\nGoal: \"Your job is to help me\u2026\"\nConstraints: \"Keep it under 200 words / use bullets\u2026\"\nOutput format: \"Use headings: A, B, C\u2026\"\nExample (optional): \"Here\u2019s what a good answer looks like\u2026\"";
var CUSTOM_INSTRUCTIONS_TEMPLATE = "Treat me as a busy knowledge worker.\n\nRespond like this by default:\n- Start with 1\u20132 bullet points of what you understood.\n- If my request is vague, ask up to 3 clarifying questions before answering.\n- Prefer headings, bullet points, and short paragraphs.\n- When there are multiple options, compare them in a small table then recommend one.\n- If you\u2019re uncertain or info might be outdated, say so directly and suggest how I can verify it.\n- For practical tasks (emails, briefs, plans), create outputs I can copy-paste with minimal edits.\nTone: clear, confident, no fake enthusiasm.";
var CUSTOM_INSTRUCTIONS_STYLE = "TONE: Professional but conversational. Like a smart colleague who gets things done.\n\nSTRUCTURE:\n- Lead with the answer or key insight\n- Then provide context if needed\n- End with next steps or implications when relevant\n\nFORMAT PREFERENCES:\n- Use headings and bold sparingly - only when it genuinely helps clarity\n- Write in paragraphs for explanations, analysis, and strategy\n- Use lists only when I ask for them, or when comparing distinct options\n- For deliverables (emails, scripts, copy), give me the final version first, then notes\n\nWHEN I ASK YOU TO CREATE SOMETHING:\nGive me the polished version immediately. Don\u2019t ask for clarification unless absolutely critical. Make smart assumptions based on context, then note what you assumed so I can correct if needed.\n\nWHEN I\u2019M EXPLORING IDEAS:\nPush back when something could be stronger. Suggest alternatives. Help me think, don\u2019t just transcribe my thoughts.\n\nSPECIAL INSTRUCTIONS:\n- If I upload a document, treat it as source material unless I specify otherwise\n- When I say \"build this\", create something I can actually use or deploy\n- Remember context within our conversation - don\u2019t make me repeat myself\n- If you notice I\u2019m approaching something inefficiently, flag it";
var PROJECT_PROMPT_TEMPLATE = "[RESEARCH] - Deep dive investigation\n\u2192 Find credible sources, pull key insights, identify trends, note contradictions\n\u2192 Output: Synthesized brief with source links\n\n[DRAFT] - Create usable content\n\u2192 Write emails, documents, scripts, copy, proposals ready to send/use\n\u2192 Output: Polished draft with one alternative approach\n\n[STRATEGY] - Think through approach\n\u2192 Analyze situations, map options, identify risks, recommend paths\n\u2192 Output: Recommendation with reasoning and trade-offs\n\n[BUILD] - Create a tool or system\n\u2192 Design workflows, templates, calculators, trackers\n\u2192 Output: Functional tool I can copy and use immediately\n\n[ANALYZE] - Break down what I give you\n\u2192 Review documents, data, feedback, trends\n\u2192 Output: Key findings, patterns, gaps, implications\n\n[REFINE] - Improve existing work\n\u2192 Edit, restructure, strengthen arguments, improve clarity\n\u2192 Output: Enhanced version with change notes\n\n[IDEATE] - Generate possibilities\n\u2192 Brainstorm options, explore angles, find creative solutions\n\u2192 Output: Diverse options with quick pros/cons\n\nWhen no code is present, default to [STRATEGY] mode and help me think through the goal.";
var CLIENT_TOOL_PROMPT = "You are my \u201CClient Project Planner & Value Calculator\u201D.\n\nUse the following inputs to scope and price a project:\n[Industry / Field]:\n[Client type]:\n[Project description]:\n[Urgency (Low/Medium/High)]:\n[Estimated effort (hours or S/M/L)]:\n[Strategic value to client (1\u20135)]:\n[My base day rate or internal cost]:\n[Known risks/constraints]:\n\nYour job:\n1) Write a 2\u20133 line project summary.\n2) Recommend a price range or effort band and explain your reasoning.\n3) Break the work into phases and tasks.\n4) List 3\u20135 key risks and questions I should discuss with the client.\n5) Draft a short client email or proposal outline I can copy-paste.\n\nFormat your answer with clear headings and bullet points.\nIf information is missing, clearly state your assumptions before giving recommendations.";
var ANALYZER_PROMPT = "Build a Content Quality Analyzer in Canvas.\n\nFeatures:\n1. Paste text on the left, analysis on the right\n2. Analyse clarity, structure, tone, strength, length, and gaps\n3. Output format:\n   - Quick Score (0\u201310 + one-line assessment)\n   - What\u2019s Working (2\u20133 strengths)\n   - What Needs Work (2\u20133 issues)\n   - Suggested Edits (concrete changes)\n   - Rewritten Version (show improvements)\n4. Include \u201CAnalyze\u201D and \u201CCopy Improved Version\u201D buttons\n5. Use green for strengths, amber for improvements\n6. Keep the interface clean and focus-friendly.";
var QUICK_START_ACTIONS = [{
  id: "custom_instructions",
  title: "Set up Custom Instructions",
  steps: ["Settings → Personalization → Custom Instructions.", "Paste the Universal AI Personality, then personalise tone, depth, and guardrails.", "Ask a fast question to confirm every reply now matches your style."],
  resource: {
    label: "Personalise now",
    href: "/tools-universal-ai-personality.html"
  },
  placeholder: "Note the lines you edited so you can reuse them everywhere."
}, {
  id: "custom_gpt",
  title: "Create Your First Custom GPT",
  steps: ["ChatGPT → Explore GPTs → Create.", "Use the Client Brief Architect instructions or remix them for your industry.", "Test with a real scenario and save the GPT so it’s ready for Monday."],
  resource: {
    label: "Open task codes",
    href: "/tools-task-codes.html"
  },
  placeholder: "What did you name it? Jot the use case so you keep iterating."
}, {
  id: "canvas_tool",
  title: "Build One Canvas Tool",
  steps: ["Start a new chat and request the Client Brief Generator or Content Quality Analyzer.", "Test it with a real client scenario.", "Save the chat (and the artifact) so you can reopen it instantly."],
  resource: {
    label: "Launch tools",
    href: "/tools.html"
  },
  placeholder: "Which tool did you ship? Capture the link or notes here."
}, {
  id: "project_setup",
  title: "Set Up a Project",
  steps: ["ChatGPT → Projects → New Project.", "Drop in the Task Codes prompt so every request stays organised.", "Run at least one [TASK CODE] request to confirm it sticks."],
  resource: {
    label: "Use Project prompt",
    href: "/tools-task-codes.html"
  },
  placeholder: "Which project did you create? Note the focus or client here."
}];
var QUICK_START_FOLLOWUPS = [{
  title: "Build another Custom GPT this week",
  detail: "Clone the workflow for a second workflow or client so the habit sticks."
}, {
  title: "Create one Canvas tool you’ll reuse",
  detail: "Turn a messy doc into a form, planner, or analyzer that lives in Canvas."
}, {
  title: "Share a win in the group chat",
  detail: "Once the cohort space opens, post a screenshot or lesson so others copy you."
}, {
  title: "Leave a fast review",
  detail: "Two sentences help us keep the Starterclass free and evolving."
}, {
  title: "Sign up for the newsletter",
  detail: "Get fresh prompts, tools, and automation drops every week."
}];
var CLIENT_BRIEF_INSTRUCTIONS = "You are the Client Brief Architect.\n\nPurpose: Turn messy inputs into structured briefs that prevent scope creep.\n\nHow you work:\n1. Information gathering \u2014 ask about problems, success, deliverables, timeline, scope, stakeholders, budget, constraints.\n2. Brief creation \u2014 always include: Executive Summary, Project Overview, Scope & Deliverables, Timeline & Milestones, Budget & Resources, Success Metrics, Stakeholders & Governance, Assumptions & Constraints, Risks & Mitigation, Next Steps.\n3. Style \u2014 ask targeted questions, fill reasonable assumptions, flag gaps, suggest improvements, format for sharing.\n4. Special features \u2014 extract info from messy notes, analyse existing briefs, adapt tone per industry, offer detailed + executive versions.\n5. Outputs \u2014 complete brief, key unanswered questions, one alternative framing.\n\nKick off with: \u201CWhat project are we briefing today?\u201D";
function StarterclassLabPage() {
  var _usePageTheme2 = usePageTheme(),
    activeTheme = _usePageTheme2.theme,
    palette = _usePageTheme2.palette,
    toggleTheme = _usePageTheme2.toggleTheme;
  var prefersReducedMotion = usePrefersReducedMotion();
  var _useState101 = useState({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }),
    _useState102 = _slicedToArray(_useState101, 2),
    levelScores = _useState102[0],
    setLevelScores = _useState102[1];
  var _useState103 = useState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }),
    _useState104 = _slicedToArray(_useState103, 2),
    levelCompletion = _useState104[0],
    setLevelCompletion = _useState104[1];
  var _useState105 = useState(""),
    _useState106 = _slicedToArray(_useState105, 2),
    copiedKey = _useState106[0],
    setCopiedKey = _useState106[1];
  var copyTimeoutRef = useRef(null);
  var labNow = useNow(60000, prefersReducedMotion);
  var labSessions = useMemo(function () {
    return SESSIONS.map(function (session) {
      var start = new Date(session.start).getTime();
      var end = new Date(session.end).getTime();
      var status = labNow > end ? "Archived" : labNow >= start ? "Live" : "Upcoming";
      var statusLabel = status === "Archived" ? LAB_LEVEL_LABELS[session.k] || "Level complete" : status;
      return _objectSpread(_objectSpread({}, session), {}, {
        status: status,
        statusLabel: statusLabel
      });
    });
  }, [labNow]);
  var upcomingLabs = useMemo(function () {
    return labSessions.filter(function (session) {
      return session.status !== "Archived";
    });
  }, [labSessions]);
  var _useState107 = useState(null),
    _useState108 = _slicedToArray(_useState107, 2),
    level1Card = _useState108[0],
    setLevel1Card = _useState108[1];
  var _useState109 = useState(""),
    _useState110 = _slicedToArray(_useState109, 2),
    level1Q1 = _useState110[0],
    setLevel1Q1 = _useState110[1];
  var _useState111 = useState(""),
    _useState112 = _slicedToArray(_useState111, 2),
    level1Q2 = _useState112[0],
    setLevel1Q2 = _useState112[1];
  var _useState113 = useState(function () {
      var base = {};
      PROMPT_ASSEMBLY_PARTS.forEach(function (part) {
        base[part.key] = null;
      });
      return base;
    }),
    _useState114 = _slicedToArray(_useState113, 2),
    promptAssembly = _useState114[0],
    setPromptAssembly = _useState114[1];
  var _useState115 = useState({
      clarify: true,
      structure: true,
      concise: false
    }),
    _useState116 = _slicedToArray(_useState115, 2),
    toggles = _useState116[0],
    setToggles = _useState116[1];
  var _useState117 = useState([]),
    _useState118 = _slicedToArray(_useState117, 2),
    tweakSelections = _useState118[0],
    setTweakSelections = _useState118[1];
  var _useState119 = useState(""),
    _useState120 = _slicedToArray(_useState119, 2),
    level2Q4 = _useState120[0],
    setLevel2Q4 = _useState120[1];
  var _useState121 = useState(""),
    _useState122 = _slicedToArray(_useState121, 2),
    level2Q5 = _useState122[0],
    setLevel2Q5 = _useState122[1];
  var _useState123 = useState(LAB_PERSONA_OPTIONS[0].value),
    _useState124 = _slicedToArray(_useState123, 2),
    personaChoice = _useState124[0],
    setPersonaChoice = _useState124[1];
  var _useState125 = useState(""),
    _useState126 = _slicedToArray(_useState125, 2),
    level3Command = _useState126[0],
    setLevel3Command = _useState126[1];
  var _useState127 = useState(null),
    _useState128 = _slicedToArray(_useState127, 2),
    level3ScenarioChoice = _useState128[0],
    setLevel3ScenarioChoice = _useState128[1];
  var _useState129 = useState(LAB_SCENARIOS[0]),
    _useState130 = _slicedToArray(_useState129, 2),
    activeScenario = _useState130[0],
    setActiveScenario = _useState130[1];
  var _useState131 = useState([]),
    _useState132 = _slicedToArray(_useState131, 2),
    selectedInputs = _useState132[0],
    setSelectedInputs = _useState132[1];
  var _useState133 = useState("standard"),
    _useState134 = _slicedToArray(_useState133, 2),
    outputTemplate = _useState134[0],
    setOutputTemplate = _useState134[1];
  var _useState135 = useState(0),
    _useState136 = _slicedToArray(_useState135, 2),
    level4SelfScore = _useState136[0],
    setLevel4SelfScore = _useState136[1];
  var _useState137 = useState(LAB_RISKS[0].title),
    _useState138 = _slicedToArray(_useState137, 2),
    activeRisk = _useState138[0],
    setActiveRisk = _useState138[1];
  var _useState139 = useState(""),
    _useState140 = _slicedToArray(_useState139, 2),
    level5Q7 = _useState140[0],
    setLevel5Q7 = _useState140[1];
  var _useState141 = useState(""),
    _useState142 = _slicedToArray(_useState141, 2),
    level5Q8 = _useState142[0],
    setLevel5Q8 = _useState142[1];
  var _useState143 = useState({
      stop: null,
      keep: null,
      skill: null
    }),
    _useState144 = _slicedToArray(_useState143, 2),
    strategyChoices = _useState144[0],
    setStrategyChoices = _useState144[1];
  var _useState145 = useState(0),
    _useState146 = _slicedToArray(_useState145, 2),
    announcementIndex = _useState146[0],
    setAnnouncementIndex = _useState146[1];
  var announcementMessages = useMemo(function () {
    return ["Resume Level ".concat(nextActiveLevel, " to keep your score climbing"), "Copy every template you unlock — zero typing required.", "Open the tools hub to practise each build on a real project."];
  }, [nextActiveLevel]);
  useEffect(function () {
    return function () {
      return clearTimeout(copyTimeoutRef.current);
    };
  }, []);
  var handleCopy = useCallback(function (key, text) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        clearTimeout(copyTimeoutRef.current);
        setCopiedKey(key);
        copyTimeoutRef.current = setTimeout(function () {
          return setCopiedKey("");
        }, 2000);
      });
    }
  }, []);
  var handleLevelComplete = useCallback(function (level, points) {
    setLevelScores(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, level, points));
    });
    setLevelCompletion(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, level, true));
    });
  }, []);
  var completedLevels = useMemo(function () {
    return Object.values(levelCompletion).filter(Boolean).length;
  }, [levelCompletion]);
  var totalPoints = useMemo(function () {
    return Object.values(levelScores).reduce(function (sum, pts) {
      return sum + pts;
    }, 0);
  }, [levelScores]);
  var cappedPoints = Math.min(totalPoints, 120);
  var scorePercent = Math.round(cappedPoints / 120 * 100);
  var progressPercent = Math.round(completedLevels / 5 * 100);
  var badge = useMemo(function () {
    return LAB_BADGES.find(function (entry) {
      return scorePercent >= entry.min;
    }) || LAB_BADGES[LAB_BADGES.length - 1];
  }, [scorePercent]);
  var showGlow = scorePercent >= 70;
  var level1AssemblyScore = useMemo(function () {
    var filled = Object.values(promptAssembly).filter(Boolean).length;
    if (filled === PROMPT_ASSEMBLY_PARTS.length) return 5;
    if (filled >= PROMPT_ASSEMBLY_PARTS.length - 1) return 3;
    return 0;
  }, [promptAssembly]);
  var assembledPrompt = useMemo(function () {
    return buildPromptFromSelection(promptAssembly);
  }, [promptAssembly]);
  var level2TweakScore = useMemo(function () {
    if (tweakSelections.length >= 4) return 10;
    if (tweakSelections.length >= 2) return 5;
    return 0;
  }, [tweakSelections.length]);
  var reflectionScore = useMemo(function () {
    var filled = Object.values(strategyChoices).filter(Boolean).length;
    if (filled === 3) return 5;
    if (filled === 2) return 3;
    return 0;
  }, [strategyChoices]);
  var nextActiveLevel = useMemo(function () {
    var orderedLevels = Object.keys(levelCompletion).map(function (level) {
      return Number(level);
    }).sort(function (a, b) {
      return a - b;
    });
    var pending = orderedLevels.find(function (level) {
      return !levelCompletion[level];
    });
    return pending || orderedLevels[0] || 1;
  }, [levelCompletion]);
  var allLevelsComplete = useMemo(function () {
    return Object.values(levelCompletion).every(Boolean);
  }, [levelCompletion]);
  var level1Points = useMemo(function () {
    var pts = 0;
    if (level1Q1 === "B") pts += 10;
    if (level1Q2 === "C") pts += 10;
    pts += level1AssemblyScore;
    return pts;
  }, [level1AssemblyScore, level1Q1, level1Q2]);
  var level2Points = useMemo(function () {
    var pts = 0;
    pts += level2TweakScore;
    if (level2Q4 === "B") pts += 10;
    if (level2Q5 === "C") pts += 10;
    return pts;
  }, [level2Q4, level2Q5, level2TweakScore]);
  var level3Points = useMemo(function () {
    var pts = 0;
    if (level3Command === "B") pts += 10;
    if (level3ScenarioChoice !== null && level3ScenarioChoice !== void 0 && level3ScenarioChoice.points) pts += level3ScenarioChoice.points;
    return pts;
  }, [level3Command, level3ScenarioChoice]);
  var level4Points = useMemo(function () {
    var pts = 0;
    if (selectedInputs.length >= 5) pts += 5;
    if (outputTemplate) pts += 5;
    pts += level4SelfScore;
    return pts;
  }, [selectedInputs.length, outputTemplate, level4SelfScore]);
  var level5Points = useMemo(function () {
    var pts = 0;
    if (level5Q7 === "C") pts += 10;
    if (level5Q8 === "C") pts += 10;
    pts += reflectionScore;
    return pts;
  }, [level5Q7, level5Q8, reflectionScore]);
  var persona = LAB_PERSONA_OPTIONS.find(function (option) {
    return option.value === personaChoice;
  }) || LAB_PERSONA_OPTIONS[0];
  var personaPrompt = useMemo(function () {
    return "".concat(persona.heading, "\n").concat(persona.body);
  }, [persona]);
  var toggleBehavior = function toggleBehavior(key) {
    setToggles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };
  var handleAssemblySelect = useCallback(function (partKey, option) {
    setPromptAssembly(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, partKey, option));
    });
  }, []);
  var handleTweakToggle = useCallback(function (label) {
    setTweakSelections(function (prev) {
      return prev.includes(label) ? prev.filter(function (entry) {
        return entry !== label;
      }) : [].concat(_toConsumableArray(prev), [label]);
    });
  }, []);
  var handleScenarioShuffle = useCallback(function () {
    setLevel3ScenarioChoice(null);
    setActiveScenario(function (prev) {
      var currentIndex = LAB_SCENARIOS.findIndex(function (scenario) {
        return scenario.id === prev.id;
      });
      var nextIndex = (currentIndex + 1) % LAB_SCENARIOS.length;
      return LAB_SCENARIOS[nextIndex];
    });
  }, []);
  var handleScenarioDecision = useCallback(function (command) {
    var best = activeScenario.best;
    var points = 0;
    var message = "";
    if (command === best) {
      points = 10;
      message = "Perfect — you picked the command that sets this scenario up for a win.";
    } else if (best === "scope" && command === "brief" || best === "brief" && command === "scope" || best === "plan" && command === "brief") {
      points = 5;
      message = "Close. You picked a command that can work, but there’s a stronger order to follow.";
    } else {
      points = 0;
      message = "That command skips a vital step. Revisit the order: scope → brief → plan.";
    }
    setLevel3ScenarioChoice({
      choice: command,
      points: points,
      message: message
    });
  }, [activeScenario]);
  var handleStrategySelect = useCallback(function (category, option) {
    setStrategyChoices(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, category, prev[category] === option ? null : option));
    });
  }, []);
  var sampleResponse = useMemo(function () {
    var parts = [];
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
  var handleInputToggle = function handleInputToggle(label) {
    setSelectedInputs(function (prev) {
      if (prev.includes(label)) {
        return prev.filter(function (item) {
          return item !== label;
        });
      }
      return [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var scrollToActiveLevel = useCallback(function () {
    var targetId = "level-".concat(nextActiveLevel);
    var target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  }, [nextActiveLevel, prefersReducedMotion]);
  var scrollToRoadmap = useCallback(function () {
    var target = document.getElementById("lab-roadmap");
    if (!target) return;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  }, [prefersReducedMotion]);
  var themeClass = activeTheme === "dark" ? "theme-dark" : "theme-light";
  var labBackground = activeTheme === "dark" ? "radial-gradient(circle at 18% 15%, rgba(123,61,240,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 70%), #030213" : "linear-gradient(115deg, #FCF4EA, #F2EEFF 45%, #E7F9FF)";
  useEffect(function () {
    if (announcementMessages.length <= 1 || prefersReducedMotion) return undefined;
    var id = setInterval(function () {
      setAnnouncementIndex(function (idx) {
        return (idx + 1) % announcementMessages.length;
      });
    }, 6000);
    return function () {
      return clearInterval(id);
    };
  }, [announcementMessages.length, prefersReducedMotion]);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: activeTheme,
    palette: palette
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(themeClass, " min-h-screen"),
    style: {
      background: labBackground,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 backdrop-blur",
    style: {
      background: palette.headerBg,
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.location.href = "/";
    },
    className: "inline-flex items-center gap-2 text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), "Back to Starterclass"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "AI Starterclass Lab"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleTheme,
    className: "rounded-full border p-2 text-xl",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    "aria-label": "Switch to ".concat(activeTheme === "dark" ? "light" : "dark", " mode")
  }, activeTheme === "dark" ? "🌞" : "🌙")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(GlobalNavRow, {
    activeKey: "lab"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(Sparkles, null), /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-10 space-y-16 lg:space-y-20"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative rounded-3xl border p-6 md:p-10 overflow-hidden",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 rounded-[2.5rem] opacity-80",
    style: {
      background: activeTheme === "dark" ? "linear-gradient(135deg, rgba(123,61,240,0.25), rgba(16,185,129,0.2))" : "linear-gradient(135deg, rgba(194,132,36,0.15), rgba(59,92,204,0.12))"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-6"
  }, /*#__PURE__*/React.createElement(Badge, null, "Estimated time: 45\u201360 mins"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl lg:text-4xl font-semibold"
  }, "AI Starterclass Lab \u2013 Learn by Clicking, Not Just Reading"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg",
    style: {
      color: palette.textSecondary
    }
  }, "Turn random prompts into a reusable AI assistant for your work. Click through the modules, answer the questions, build your own system, and score yourself as you go."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, upcomingLabs.length ? "".concat(upcomingLabs.length, " more labs unlock after this replay. Track them below and return when each session goes live.") : "This entire cycle is archived—scroll down to relive every level at your own pace."), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em]",
    style: {
      borderColor: palette.border,
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs",
    "aria-hidden": "true"
  }, "\u26A1"), announcementMessages[announcementIndex]), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: scrollToActiveLevel,
    className: "px-6 py-3"
  }, allLevelsComplete ? "Replay Level 1" : "Resume Level ".concat(nextActiveLevel)), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: scrollToRoadmap,
    className: "px-6 py-3"
  }, "View the lab roadmap"))), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-sm rounded-3xl border p-5 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-semibold"
  }, progressPercent, "%")), /*#__PURE__*/React.createElement("div", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, completedLevels, "/5 levels")), /*#__PURE__*/React.createElement("div", {
    className: "h-3 w-full rounded-full",
    style: {
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full transition-all",
    style: {
      width: "".concat(progressPercent, "%"),
      backgroundImage: "linear-gradient(90deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Score so far: ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, scorePercent, "/100")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: palette.textMuted
    }
  }, "Points lock when you mark each level complete."))), /*#__PURE__*/React.createElement("div", {
    id: "lab-roadmap",
    className: "mt-8 rounded-3xl border p-5 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, "Lab roadmap"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, upcomingLabs.length ? "".concat(upcomingLabs.length, " labs ahead") : "All labs archived")), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-3"
  }, labSessions.map(function (session) {
    var statusColor = session.status === "Live" ? palette.accentSecondary : session.status === "Upcoming" ? palette.accentPrimary : palette.textMuted;
    return /*#__PURE__*/React.createElement("div", {
      key: session.k,
      className: "rounded-2xl border p-4",
      style: {
        borderColor: palette.border,
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs uppercase tracking-[0.24em]",
      style: {
        color: palette.textMuted
      }
    }, /*#__PURE__*/React.createElement("span", null, (session.month || "lab").toUpperCase()), /*#__PURE__*/React.createElement("span", {
      style: {
        color: statusColor
      }
    }, session.statusLabel)), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-sm font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, session.title), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, formatSessionDateLabel(session)));
  }))))), /*#__PURE__*/React.createElement(LevelSection, {
    id: "level-1",
    title: "Level 1 \u2013 Talk to AI Like a Pro, Not a Tourist",
    subtitle: "Learn how to structure prompts so ChatGPT stops giving mid answers. Spot bad prompts, fix them, and get scored for it.",
    points: "Max 25 pts",
    level: 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, ["A", "B"].map(function (card) {
    return /*#__PURE__*/React.createElement("button", {
      key: card,
      type: "button",
      onClick: function onClick() {
        return setLevel1Card(card);
      },
      className: "relative rounded-2xl border p-4 text-left",
      style: {
        borderColor: palette.border,
        background: palette.surfaceSoft
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs uppercase tracking-[0.24em]",
      style: {
        color: palette.textMuted
      }
    }, "Prompt ", card), /*#__PURE__*/React.createElement("p", {
      className: "mt-2 text-sm",
      style: {
        color: palette.textSecondary
      }
    }, card === "A" ? "Write an email to a client about a project." : "You are my project assistant. Write a concise email confirming scope, timeline, and next steps."), level1Card === card && /*#__PURE__*/React.createElement("div", {
      className: "mt-4 rounded-2xl border px-3 py-2 text-xs",
      style: {
        borderColor: palette.accentPrimary,
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold",
      style: {
        color: palette.textPrimary
      }
    }, "AI\u2019s answer"), /*#__PURE__*/React.createElement("p", {
      className: "mt-1",
      style: {
        color: palette.textSecondary
      }
    }, card === "A" ? "Hey! Kicking off soon. Let me know what you think." : "Hi Sam — here’s the scoped outline, bulletproofed timeline, and CTA with a date.")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 1"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Which prompt is better, and what is the main reason?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "A is better – it gives AI freedom",
        B: "B is better – it gives role, context, tone, and structure",
        C: "They’re basically the same",
        D: "B is better – just because it’s longer"
      }[option],
      selected: level1Q1 === option,
      onSelect: function onSelect() {
        return setLevel1Q1(option);
      }
    });
  })), level1Q1 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level1Q1 === "B"
  }, level1Q1 === "B" ? "Nice. Length doesn’t matter. Structure does: role + context + goal + format + tone." : "Not quite. The win isn’t more words — it’s role + context + goal + format + tone packed into one prompt.")), /*#__PURE__*/React.createElement(EditablePromptPanel, {
    id: "blueprint",
    title: "Prompt Blueprint",
    description: "Use it to rewrite any prompt instantly.",
    initialValue: PROMPT_BLUEPRINT_TEXT,
    copiedKey: copiedKey,
    onCopy: function onCopy(key, value) {
      return handleCopy(key, value);
    },
    rows: 8
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 2"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "You want a research summary you can use in a pitch deck. Which part is missing in this prompt?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "Role",
        B: "Context",
        C: "Output format",
        D: "Tone"
      }[option],
      selected: level1Q2 === option,
      onSelect: function onSelect() {
        return setLevel1Q2(option);
      }
    });
  })), level1Q2 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level1Q2 === "C"
  }, level1Q2 === "C" ? "Right. Bullet points are not a real format. Create sections like Market size / Feature trends / Risks." : "Close. You still need a clear format for the deck — think sections, not just bullet points.")), /*#__PURE__*/React.createElement(PromptAssemblyGame, {
    selection: promptAssembly,
    onSelect: handleAssemblySelect,
    assembledPrompt: assembledPrompt,
    copied: copiedKey === "level1_builder",
    onCopy: function onCopy(text) {
      return handleCopy("level1_builder", text);
    }
  }), /*#__PURE__*/React.createElement(LevelCompleteRow, {
    completed: levelCompletion[1],
    lockedPoints: levelScores[1],
    onClick: function onClick() {
      return handleLevelComplete(1, level1Points);
    },
    label: "Mark Level 1 Complete",
    note: "25 pts max"
  })), /*#__PURE__*/React.createElement(LevelSection, {
    id: "level-2",
    title: "Level 2 \u2013 Make ChatGPT Feel Like It\u2019s Hired By You",
    subtitle: "Design how ChatGPT behaves by default: tone, structure, and how it handles confusion.",
    points: "Max 30 pts",
    level: 2
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Slide the toggles to see behaviour change."), [{
    key: "clarify",
    label: "Ask clarifying questions first"
  }, {
    key: "structure",
    label: "Use headings & bullets"
  }, {
    key: "concise",
    label: "Be brutally concise"
  }].map(function (toggle) {
    return /*#__PURE__*/React.createElement(ToggleSwitch, {
      key: toggle.key,
      label: toggle.label,
      value: toggles[toggle.key],
      onChange: function onChange() {
        return toggleBehavior(toggle.key);
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Sample response"), /*#__PURE__*/React.createElement("pre", {
    className: "mt-3 text-sm whitespace-pre-wrap",
    style: {
      color: palette.textSecondary
    }
  }, sampleResponse))), /*#__PURE__*/React.createElement(EditablePromptPanel, {
    id: "custom_instructions",
    title: "Custom Instructions template",
    description: "Paste into ChatGPT, then personalise before you copy.",
    initialValue: "".concat(CUSTOM_INSTRUCTIONS_TEMPLATE, "\n\n").concat(CUSTOM_INSTRUCTIONS_STYLE),
    copiedKey: copiedKey,
    onCopy: function onCopy(key, value) {
      return handleCopy(key, value);
    },
    rows: 10
  }), /*#__PURE__*/React.createElement(TweakChecklist, {
    selections: tweakSelections,
    onToggle: handleTweakToggle
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 4"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Which setting affects every chat?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mt-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "Tone picker",
        B: "Custom Instructions",
        C: "Your last message",
        D: "Theme"
      }[option],
      selected: level2Q4 === option,
      onSelect: function onSelect() {
        return setLevel2Q4(option);
      }
    });
  })), level2Q4 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level2Q4 === "B"
  }, level2Q4 === "B" ? "Exactly. Custom Instructions = global brain." : "Prompts change per chat. Custom Instructions control the default brain.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 5"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Why turn Memory off in sensitive fields?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mt-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "You dislike AI",
        B: "Reduce hallucinations",
        C: "Avoid persistent storage",
        D: "Faster responses"
      }[option],
      selected: level2Q5 === option,
      onSelect: function onSelect() {
        return setLevel2Q5(option);
      }
    });
  })), level2Q5 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level2Q5 === "C"
  }, level2Q5 === "C" ? "Yup. Kill Memory when you can’t store sensitive info long-term." : "Memory is about persistence, not speed. Turn it off to avoid storing sensitive details."))), /*#__PURE__*/React.createElement(LevelCompleteRow, {
    completed: levelCompletion[2],
    lockedPoints: levelScores[2],
    onClick: function onClick() {
      return handleLevelComplete(2, level2Points);
    },
    label: "Mark Level 2 Complete",
    note: "30 pts max"
  })), /*#__PURE__*/React.createElement(LevelSection, {
    id: "level-3",
    title: "Level 3 \u2013 Build a Client Project Copilot",
    subtitle: "Turn ChatGPT into a saved assistant that scopes projects, writes briefs, and drafts client messages.",
    points: "Max 20 pts",
    level: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold",
    htmlFor: "persona-select"
  }, "Choose your field"), /*#__PURE__*/React.createElement("select", {
    id: "persona-select",
    className: "w-full rounded-2xl border p-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surface
    },
    value: personaChoice,
    onChange: function onChange(event) {
      return setPersonaChoice(event.target.value);
    }
  }, LAB_PERSONA_OPTIONS.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })), /*#__PURE__*/React.createElement(EditablePromptPanel, {
    id: "persona",
    title: persona.heading,
    description: persona.body,
    initialValue: personaPrompt,
    copiedKey: copiedKey,
    onCopy: function onCopy(key, value) {
      return handleCopy(key, value);
    },
    rows: 5
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Command shortcuts"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid gap-3"
  }, LAB_COMMANDS.map(function (cmd) {
    return /*#__PURE__*/React.createElement("div", {
      key: cmd.command,
      className: "rounded-2xl border p-3",
      style: {
        borderColor: palette.border,
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-semibold",
      style: {
        color: palette.accentSecondary
      }
    }, cmd.command), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold"
    }, cmd.summary)), /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-xs",
      style: {
        color: palette.textSecondary
      }
    }, cmd.detail));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 6"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "You pasted a long client email and want a clean brief. Which command?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mt-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "/scope",
        B: "/brief",
        C: "/plan",
        D: "/retro"
      }[option],
      selected: level3Command === option,
      onSelect: function onSelect() {
        return setLevel3Command(option);
      }
    });
  })), level3Command && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level3Command === "B"
  }, level3Command === "B" ? "Correct. /scope organises, /brief drafts the client-facing version." : "Use /brief for the polished client doc. /scope is for organising inputs.")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Scenario practice"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Shuffle a scenario, then pick the first command you\u2019d run.")), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: handleScenarioShuffle,
    className: "px-4 py-2"
  }, "Shuffle scenario")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, activeScenario.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, activeScenario.detail)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, [{
    value: "scope",
    label: "Run /scope first"
  }, {
    value: "brief",
    label: "Run /brief first"
  }, {
    value: "plan",
    label: "Run /plan first"
  }].map(function (option) {
    return /*#__PURE__*/React.createElement(GlassButton, {
      key: option.value,
      variant: "secondary",
      onClick: function onClick() {
        return handleScenarioDecision(option.value);
      }
    }, option.label);
  })), level3ScenarioChoice && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level3ScenarioChoice.points === 10
  }, level3ScenarioChoice.message))), /*#__PURE__*/React.createElement(LevelCompleteRow, {
    completed: levelCompletion[3],
    lockedPoints: levelScores[3],
    onClick: function onClick() {
      return handleLevelComplete(3, level3Points);
    },
    label: "Mark Level 3 Complete",
    note: "20 pts max"
  })), /*#__PURE__*/React.createElement(LevelSection, {
    id: "level-4",
    title: "Level 4 \u2013 Tiny Tool Lab: Client Project Planner & Value Calculator",
    subtitle: "Move from chatting to tooling. Design a reusable prompt/template that scopes and prices work.",
    points: "Max 20 pts",
    level: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Input design"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Tick at least 5 inputs."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-64 overflow-y-auto pr-1"
  }, LAB_INPUT_OPTIONS.map(function (label) {
    return /*#__PURE__*/React.createElement("label", {
      key: label,
      className: "flex items-center gap-3 text-sm"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "h-4 w-4",
      checked: selectedInputs.includes(label),
      onChange: function onChange() {
        return handleInputToggle(label);
      }
    }), /*#__PURE__*/React.createElement("span", null, label));
  })), /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: selectedInputs.length >= 5
  }, selectedInputs.length >= 5 ? "Good. More structured inputs = more consistent outputs." : "This will work, but your tool will be blind in places. Capture at least 5 inputs.")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Output template"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3"
  }, LAB_OUTPUT_TEMPLATES.map(function (template) {
    return /*#__PURE__*/React.createElement("button", {
      key: template.value,
      type: "button",
      onClick: function onClick() {
        return setOutputTemplate(template.value);
      },
      className: "rounded-2xl border p-3 text-left ".concat(outputTemplate === template.value ? "ring-2" : ""),
      style: {
        borderColor: palette.border,
        background: outputTemplate === template.value ? palette.surfaceSoft : palette.surface
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold"
    }, template.title), outputTemplate === template.value && /*#__PURE__*/React.createElement("span", {
      className: "text-xs",
      style: {
        color: palette.accentSecondary
      }
    }, "Selected")), /*#__PURE__*/React.createElement("ul", {
      className: "mt-2 text-xs list-disc pl-5",
      style: {
        color: palette.textSecondary
      }
    }, template.bullets.map(function (item) {
      return /*#__PURE__*/React.createElement("li", {
        key: item
      }, item);
    })), /*#__PURE__*/React.createElement("p", {
      className: "mt-2 text-xs",
      style: {
        color: palette.textMuted
      }
    }, template.tip));
  })))), /*#__PURE__*/React.createElement(EditablePromptPanel, {
    id: "tool_prompt",
    title: "Final tool prompt",
    description: "Copy into ChatGPT or Canvas.",
    initialValue: CLIENT_TOOL_PROMPT,
    copiedKey: copiedKey,
    onCopy: function onCopy(key, value) {
      return handleCopy(key, value);
    },
    rows: 10
  }), /*#__PURE__*/React.createElement(SelfScoreButtons, {
    value: level4SelfScore,
    onChange: setLevel4SelfScore,
    max: 10
  }), /*#__PURE__*/React.createElement(LevelCompleteRow, {
    completed: levelCompletion[4],
    lockedPoints: levelScores[4],
    onClick: function onClick() {
      return handleLevelComplete(4, level4Points);
    },
    label: "Mark Level 4 Complete",
    note: "20 pts max"
  })), /*#__PURE__*/React.createElement(LevelSection, {
    id: "level-5",
    title: "Level 5 \u2013 Safety, Limits & Strategy",
    subtitle: "Understand when AI is helpful, when it\u2019s dangerous, and how to stay valuable.",
    points: "Max 25 pts",
    level: 5
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-4 gap-4"
  }, LAB_RISKS.map(function (risk) {
    return /*#__PURE__*/React.createElement("button", {
      key: risk.title,
      type: "button",
      onClick: function onClick() {
        return setActiveRisk(risk.title);
      },
      className: "rounded-2xl border p-4 text-left",
      style: {
        borderColor: palette.border,
        background: activeRisk === risk.title ? palette.surface : palette.surfaceSoft
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold"
    }, risk.title), activeRisk === risk.title && /*#__PURE__*/React.createElement("ul", {
      className: "mt-2 text-xs list-disc pl-4",
      style: {
        color: palette.textSecondary
      }
    }, risk.bullets.map(function (item) {
      return /*#__PURE__*/React.createElement("li", {
        key: item
      }, item);
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 7"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Which is the safest default rule?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mt-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "AI is always right if it sounds confident.",
        B: "If AI says it’s up to date, trust it.",
        C: "Treat AI as a drafting assistant; you own the final call.",
        D: "Never use AI for anything serious."
      }[option],
      selected: level5Q7 === option,
      onSelect: function onSelect() {
        return setLevel5Q7(option);
      }
    });
  })), level5Q7 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level5Q7 === "C"
  }, level5Q7 === "C" ? "Exactly. It’s a drafting tool — you own the judgment." : "Treat AI as a drafting assistant, not the final authority.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Question 8"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "When is AI most appropriate?"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 mt-2"
  }, ["A", "B", "C", "D"].map(function (option) {
    return /*#__PURE__*/React.createElement(QuizOption, {
      key: option,
      label: option,
      text: {
        A: "Choosing medication",
        B: "Writing a final legal argument",
        C: "Drafting a first version you’ll review",
        D: "Sending client advice without reading it"
      }[option],
      selected: level5Q8 === option,
      onSelect: function onSelect() {
        return setLevel5Q8(option);
      }
    });
  })), level5Q8 && /*#__PURE__*/React.createElement(FeedbackBlock, {
    success: level5Q8 === "C"
  }, level5Q8 === "C" ? "Yes. First drafts, summaries, and plans you review are the sweet spot." : "Use AI for first drafts that you double-check, not final high-risk decisions."))), /*#__PURE__*/React.createElement(StrategyReflectionBoard, {
    selections: strategyChoices,
    onSelect: handleStrategySelect
  }), /*#__PURE__*/React.createElement(LevelCompleteRow, {
    completed: levelCompletion[5],
    lockedPoints: levelScores[5],
    onClick: function onClick() {
      return handleLevelComplete(5, level5Points);
    },
    label: "Mark Level 5 Complete",
    note: "25 pts max"
  })), /*#__PURE__*/React.createElement("section", {
    className: "rounded-3xl border p-6 md:p-10",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.24em]",
    style: {
      color: palette.textMuted
    }
  }, "Final score"), /*#__PURE__*/React.createElement("div", {
    className: "text-5xl font-semibold"
  }, scorePercent), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Raw points: ", cappedPoints, " / 120"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-2 ".concat(showGlow ? "shadow-[0_0_40px_rgba(194,132,36,0.35)]" : ""),
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold"
  }, "Badge: ", badge.label), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, badge.description))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Level breakdown"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, [1, 2, 3, 4, 5].map(function (level) {
    return /*#__PURE__*/React.createElement("div", {
      key: level,
      className: "flex items-center justify-between rounded-2xl border px-4 py-2 text-sm",
      style: {
        borderColor: palette.border,
        background: palette.surfaceSoft
      }
    }, /*#__PURE__*/React.createElement("span", null, "Level ", level), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold"
    }, levelScores[level], " pts"));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "rounded-3xl border p-6 md:p-10",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "You\u2019ve Built the Copilot. Now Put It To Work."), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Don\u2019t stop at a clever prompt. Use your Copilot on the next real client, run the Planner & Value Calculator before quoting anyone, and revisit this lab monthly to see your score climb.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return window.open("https://starterclass.icuni.org/#resources", "_blank");
    }
  }, "Download Starter Prompts & Templates (PDF)"), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      return window.open("https://starterclass.icuni.org/", "_blank");
    }
  }, "Join the AI Starterclass Cohort"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return window.open("https://starterclass.icuni.org/#contact", "_blank");
    }
  }, "Book a Corporate Workshop")))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "More tools to add"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Copy these templates straight into Custom Instructions, Projects, or Canvas \u2014 then launch the full luxury tools page to keep building.")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement(LabResourceCard, {
    title: "Custom Instructions \u2013 Universal AI Personality",
    description: "Give ChatGPT the context, preferences, and boundaries it needs to act like a smart colleague.",
    text: "".concat(CUSTOM_INSTRUCTIONS_TEMPLATE, "\n\n").concat(CUSTOM_INSTRUCTIONS_STYLE),
    copied: copiedKey === "resource_custom",
    onCopy: function onCopy(value) {
      return handleCopy("resource_custom", value);
    },
    linkHref: "/tools-universal-ai-personality.html"
  }), /*#__PURE__*/React.createElement(LabResourceCard, {
    title: "Project Prompt \u2013 Task Codes",
    description: "Drop this into ChatGPT Projects so every conversation stays organised.",
    text: PROJECT_PROMPT_TEMPLATE,
    copied: copiedKey === "resource_project",
    onCopy: function onCopy(value) {
      return handleCopy("resource_project", value);
    },
    linkHref: "/tools-task-codes.html"
  }), /*#__PURE__*/React.createElement(LabResourceCard, {
    title: "Canvas Tool Prompt \u2014 Content Quality Analyzer",
    description: "Paste any content and get structured feedback plus rewrites.",
    text: ANALYZER_PROMPT,
    copied: copiedKey === "resource_analyzer",
    onCopy: function onCopy(value) {
      return handleCopy("resource_analyzer", value);
    },
    linkHref: "/tools-content-quality-analyzer.html"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-6",
    id: "client-brief-tool"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "Client Brief Generator"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "You asked for the real tool \u2014 here it is. Capture every section, auto-save it, and export before you leave the lab.")), /*#__PURE__*/React.createElement(ClientBriefGeneratorTool, {
    compact: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      return window.location.href = "/tools-client-brief-generator.html";
    }
  }, "Open full tool"))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(QuickStartWorkshop, null), /*#__PURE__*/React.createElement(LabResourceCard, {
    title: "Client Brief Generator \u2013 Custom GPT instructions",
    description: "Use this when you want ChatGPT to act like a proper brief architect.",
    text: CLIENT_BRIEF_INSTRUCTIONS,
    copied: copiedKey === "resource_brief",
    onCopy: function onCopy(value) {
      return handleCopy("resource_brief", value);
    },
    linkHref: "/tools-client-brief-generator.html"
  })))), /*#__PURE__*/React.createElement(FooterMenu, null), /*#__PURE__*/React.createElement(ScrollControls, null), /*#__PURE__*/React.createElement(FloatingLabProgress, {
    progress: progressPercent,
    score: scorePercent,
    completed: completedLevels
  })));
}
function LevelSection(_ref19) {
  var id = _ref19.id,
    title = _ref19.title,
    subtitle = _ref19.subtitle,
    points = _ref19.points,
    level = _ref19.level,
    children = _ref19.children;
  var _useTheme16 = useTheme(),
    palette = _useTheme16.palette;
  var accent = level ? LAB_LEVEL_ACCENTS[level] : null;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: (accent === null || accent === void 0 ? void 0 : accent.border) || palette.border,
      background: (accent === null || accent === void 0 ? void 0 : accent.background) || palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, title), points && /*#__PURE__*/React.createElement("span", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, points)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, subtitle)), children);
}
function QuizOption(_ref20) {
  var label = _ref20.label,
    text = _ref20.text,
    selected = _ref20.selected,
    onSelect = _ref20.onSelect;
  var _useTheme17 = useTheme(),
    palette = _useTheme17.palette;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSelect,
    className: "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left ".concat(selected ? "ring-2" : ""),
    style: {
      borderColor: selected ? palette.accentSecondary : palette.border,
      background: selected ? palette.surface : palette.surfaceSoft,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-8 w-8 rounded-full flex items-center justify-center font-semibold",
    style: {
      background: selected ? palette.accentSecondary : palette.surface,
      color: selected ? "#fff" : palette.textSecondary
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, text));
}
function FeedbackBlock(_ref21) {
  var children = _ref21.children,
    success = _ref21.success;
  var _useTheme18 = useTheme(),
    palette = _useTheme18.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: success ? palette.accentSecondary : palette.border,
      background: success ? "".concat(palette.accentSecondary, "11") : palette.surfaceSoft,
      color: palette.textSecondary
    }
  }, children);
}
function ToggleSwitch(_ref22) {
  var label = _ref22.label,
    value = _ref22.value,
    onChange = _ref22.onChange;
  var _useTheme19 = useTheme(),
    palette = _useTheme19.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onChange,
    className: "relative inline-flex h-6 w-12 rounded-full transition ".concat(value ? "justify-end" : "justify-start"),
    style: {
      background: value ? palette.accentSecondary : palette.surface
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5 rounded-full bg-white shadow"
  })));
}
function SelfScoreButtons(_ref23) {
  var value = _ref23.value,
    onChange = _ref23.onChange,
    max = _ref23.max;
  var _useTheme20 = useTheme(),
    palette = _useTheme20.palette;
  var options = [{
    label: "✅ I nailed it",
    val: max
  }, {
    label: "⚠ I’m close",
    val: Math.max(0, Math.min(max, Math.round(max / 2)))
  }, {
    label: "❌ I need to redo",
    val: 0
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("button", {
      key: option.label,
      type: "button",
      onClick: function onClick() {
        return onChange(option.val);
      },
      className: "rounded-2xl border px-4 py-2 text-sm ".concat(value === option.val ? "ring-2" : ""),
      style: {
        borderColor: palette.border,
        background: value === option.val ? palette.surface : palette.surfaceSoft
      }
    }, option.label, " \xB7 +", option.val, " pts");
  }));
}
function LevelCompleteRow(_ref24) {
  var completed = _ref24.completed,
    lockedPoints = _ref24.lockedPoints,
    onClick = _ref24.onClick,
    label = _ref24.label,
    note = _ref24.note;
  var _useTheme21 = useTheme(),
    palette = _useTheme21.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: onClick
  }, completed ? "Update level score" : label), /*#__PURE__*/React.createElement("div", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, completed ? "Locked at ".concat(lockedPoints, " pts (").concat(note, ")") : note));
}
function PromptAssemblyGame(_ref25) {
  var selection = _ref25.selection,
    onSelect = _ref25.onSelect,
    assembledPrompt = _ref25.assembledPrompt,
    onCopy = _ref25.onCopy,
    copied = _ref25.copied;
  var _useTheme22 = useTheme(),
    palette = _useTheme22.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-6 rounded-3xl border p-4 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Prompt Assembly"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Click through each part to build a reusable prompt without typing."))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, PROMPT_ASSEMBLY_PARTS.map(function (part) {
    return /*#__PURE__*/React.createElement("div", {
      key: part.key,
      className: "rounded-2xl border p-4 space-y-2",
      style: {
        borderColor: palette.border,
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold"
    }, part.label), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, part.options.map(function (option) {
      var active = selection[part.key] === option;
      return /*#__PURE__*/React.createElement("button", {
        key: option,
        type: "button",
        onClick: function onClick() {
          return onSelect(part.key, option);
        },
        className: "rounded-full px-3 py-1 text-xs font-semibold ".concat(active ? "shadow" : ""),
        style: {
          border: "1px solid ".concat(active ? palette.accentSecondary : palette.border),
          background: active ? "".concat(palette.accentSecondary, "15") : palette.surfaceSoft,
          color: active ? palette.accentSecondary : palette.textSecondary
        }
      }, option);
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-4",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Prompt preview"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return onCopy(assembledPrompt || PROMPT_BLUEPRINT_TEXT);
    }
  }, copied ? "Copied" : "Copy prompt")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, assembledPrompt || "Choose a role, context, goal, and format above to see the full prompt.")));
}
function EditablePromptPanel(_ref26) {
  var id = _ref26.id,
    title = _ref26.title,
    description = _ref26.description,
    initialValue = _ref26.initialValue,
    _ref26$rows = _ref26.rows,
    rows = _ref26$rows === void 0 ? 8 : _ref26$rows,
    copiedKey = _ref26.copiedKey,
    onCopy = _ref26.onCopy;
  var _useTheme23 = useTheme(),
    palette = _useTheme23.palette;
  var _useState147 = useState(initialValue),
    _useState148 = _slicedToArray(_useState147, 2),
    value = _useState148[0],
    setValue = _useState148[1];
  useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, description)), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return onCopy(id, value);
    }
  }, copiedKey === id ? "Copied" : "Copy")), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    rows: rows,
    className: "w-full rounded-2xl border p-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }));
}
function TweakChecklist(_ref27) {
  var selections = _ref27.selections,
    onToggle = _ref27.onToggle;
  var _useTheme24 = useTheme(),
    palette = _useTheme24.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Mark the custom tweaks you applied"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, CUSTOM_TWEAK_OPTIONS.map(function (option) {
    var active = selections.includes(option);
    return /*#__PURE__*/React.createElement("button", {
      key: option,
      type: "button",
      onClick: function onClick() {
        return onToggle(option);
      },
      className: "rounded-full px-3 py-1 text-xs font-semibold ".concat(active ? "shadow" : ""),
      style: {
        border: "1px solid ".concat(active ? palette.accentSecondary : palette.border),
        background: active ? "".concat(palette.accentSecondary, "15") : palette.surfaceSoft,
        color: active ? palette.accentSecondary : palette.textSecondary
      }
    }, active ? "✓ " : "", option);
  })));
}
function StrategyReflectionBoard(_ref28) {
  var selections = _ref28.selections,
    onSelect = _ref28.onSelect;
  var _useTheme25 = useTheme(),
    palette = _useTheme25.palette;
  var labels = {
    stop: "Stop doing manually",
    keep: "Keep human-only",
    skill: "Skill to invest in"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "Strategy reflection"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Tap one tile per row to lock in your choices.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, Object.entries(STRATEGY_GAMIFIED_CHOICES).map(function (_ref29) {
    var _ref30 = _slicedToArray(_ref29, 2),
      category = _ref30[0],
      options = _ref30[1];
    return /*#__PURE__*/React.createElement("div", {
      key: category,
      className: "space-y-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-[0.3em]",
      style: {
        color: palette.textMuted
      }
    }, labels[category]), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, options.map(function (option) {
      var active = selections[category] === option;
      return /*#__PURE__*/React.createElement("button", {
        key: option,
        type: "button",
        onClick: function onClick() {
          return onSelect(category, option);
        },
        className: "rounded-full px-3 py-1 text-xs font-semibold ".concat(active ? "shadow" : ""),
        style: {
          border: "1px solid ".concat(active ? palette.accentPrimary : palette.border),
          background: active ? "".concat(palette.accentPrimary, "20") : palette.surface,
          color: active ? palette.accentPrimary : palette.textSecondary
        }
      }, active ? "Selected · " : "", option);
    })));
  })));
}
function FloatingLabProgress(_ref31) {
  var progress = _ref31.progress,
    score = _ref31.score,
    completed = _ref31.completed;
  var _useTheme26 = useTheme(),
    palette = _useTheme26.palette;
  return /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none fixed left-4 right-4 bottom-28 sm:bottom-10 sm:left-6 sm:right-auto sm:w-72 rounded-3xl border px-4 py-3 shadow-lg backdrop-blur",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs uppercase tracking-[0.2em]",
    style: {
      color: palette.textMuted
    }
  }, /*#__PURE__*/React.createElement("span", null, "Lab progress"), /*#__PURE__*/React.createElement("span", null, completed, "/5")), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-semibold"
  }, progress, "%"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Score ", score, "%")), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 h-1.5 w-full rounded-full",
    style: {
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full",
    style: {
      width: "".concat(progress, "%"),
      background: "linear-gradient(90deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")")
    }
  })));
}
function LabResourceCard(_ref32) {
  var title = _ref32.title,
    description = _ref32.description,
    text = _ref32.text,
    copied = _ref32.copied,
    onCopy = _ref32.onCopy,
    linkHref = _ref32.linkHref,
    _ref32$linkLabel = _ref32.linkLabel,
    linkLabel = _ref32$linkLabel === void 0 ? "Launch tool" : _ref32$linkLabel,
    children = _ref32.children;
  var _useTheme27 = useTheme(),
    palette = _useTheme27.palette;
  var _useState149 = useState(text || ""),
    _useState150 = _slicedToArray(_useState149, 2),
    value = _useState150[0],
    setValue = _useState150[1];
  useEffect(function () {
    setValue(text || "");
  }, [text]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, onCopy && /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return onCopy(value);
    }
  }, copied ? "Copied" : "Copy"), linkHref && /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      return window.location.href = linkHref;
    }
  }, linkLabel))), text && /*#__PURE__*/React.createElement("textarea", {
    className: "w-full rounded-2xl border p-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: value,
    rows: 6,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }), children);
}
function buildPromptFromSelection(selection) {
  if (!selection) return "";
  var parts = [];
  if (selection.role) parts.push(selection.role);
  if (selection.context) parts.push("Context: ".concat(selection.context));
  if (selection.goal) parts.push("Goal: ".concat(selection.goal));
  if (selection.format) parts.push(selection.format);
  return parts.join("\n\n");
}
function QuickStartWorkshop() {
  var _useTheme28 = useTheme(),
    palette = _useTheme28.palette;
  var _useState151 = useState(function () {
      var initial = {};
      QUICK_START_ACTIONS.forEach(function (action) {
        initial[action.id] = {
          done: false,
          steps: action.steps.map(function () {
            return false;
          })
        };
      });
      return initial;
    }),
    _useState152 = _slicedToArray(_useState151, 2),
    entries = _useState152[0],
    setEntries = _useState152[1];
  var completed = Object.values(entries).filter(function (entry) {
    return entry.done;
  }).length;
  var progress = Math.round(completed / QUICK_START_ACTIONS.length * 100);
  var toggleDone = function toggleDone(id) {
    setEntries(function (prev) {
      var entry = prev[id];
      var nextDone = !entry.done;
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, {
        done: nextDone,
        steps: entry.steps.map(function () {
          return nextDone;
        })
      }));
    });
  };
  var toggleStep = function toggleStep(id, index) {
    setEntries(function (prev) {
      var entry = prev[id];
      var steps = _toConsumableArray(entry.steps);
      steps[index] = !steps[index];
      var done = steps.every(Boolean);
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, {
        done: done,
        steps: steps
      }));
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Participant quick-start workshop"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold"
  }, "Ship the four actions before you close the browser.")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Progress"), /*#__PURE__*/React.createElement("p", {
    className: "text-3xl font-semibold"
  }, progress, "%"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, completed, " of ", QUICK_START_ACTIONS.length, " locked in"))), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 rounded-full",
    style: {
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full",
    style: {
      width: "".concat(progress, "%"),
      background: palette.accentSecondary,
      transition: "width 300ms ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, QUICK_START_ACTIONS.map(function (action) {
    var entry = entries[action.id];
    var done = entry === null || entry === void 0 ? void 0 : entry.done;
    return /*#__PURE__*/React.createElement("div", {
      key: action.id,
      className: "rounded-3xl border p-5 space-y-4",
      style: {
        borderColor: done ? palette.accentSecondary : palette.border,
        background: done ? "".concat(palette.accentSecondary, "15") : palette.surfaceSoft
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm uppercase tracking-[0.2em]",
      style: {
        color: palette.textMuted
      }
    }, done ? "Completed" : "In progress"), /*#__PURE__*/React.createElement("h4", {
      className: "text-lg font-semibold"
    }, action.title)), /*#__PURE__*/React.createElement(GlassButton, {
      onClick: function onClick() {
        return toggleDone(action.id);
      }
    }, done ? "Undo" : "Mark complete")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, action.steps.map(function (step, stepIndex) {
      var _entry$steps;
      var stepDone = entry === null || entry === void 0 || (_entry$steps = entry.steps) === null || _entry$steps === void 0 ? void 0 : _entry$steps[stepIndex];
      return /*#__PURE__*/React.createElement("button", {
        key: step,
        type: "button",
        onClick: function onClick() {
          return toggleStep(action.id, stepIndex);
        },
        className: "flex w-full items-center gap-2 rounded-2xl border px-3 py-2 text-left",
        style: {
          borderColor: palette.border,
          background: stepDone ? "".concat(palette.accentSecondary, "15") : palette.surface,
          color: palette.textSecondary
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-lg",
        "aria-hidden": "true"
      }, stepDone ? "✓" : "○"), /*#__PURE__*/React.createElement("span", null, step));
    })), action.resource && /*#__PURE__*/React.createElement(GlassButton, {
      variant: "secondary",
      onClick: function onClick() {
        return window.location.href = action.resource.href;
      },
      className: "px-4 py-2"
    }, action.resource.label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold uppercase tracking-[0.2em]",
    style: {
      color: palette.textMuted
    }
  }, "After today"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid gap-3 md:grid-cols-2"
  }, QUICK_START_FOLLOWUPS.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.title,
      className: "rounded-2xl border p-4",
      style: {
        borderColor: palette.border
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold"
    }, item.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs mt-1",
      style: {
        color: palette.textSecondary
      }
    }, item.detail));
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Trouble? Ask for Canvas explicitly, tighten instructions, or say \u201CDebug this and fix errors\u201D and the assistant will rerun the tool.")));
}
function ClientBriefGeneratorTool(_ref33) {
  var _ref33$compact = _ref33.compact,
    compact = _ref33$compact === void 0 ? false : _ref33$compact;
  var _useTheme29 = useTheme(),
    palette = _useTheme29.palette;
  var storageKey = compact ? "client_brief_tool_lab" : "client_brief_tool_full";
  var initialState = {
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
    constraints: ""
  };
  var _useState153 = useState(function () {
      if (typeof window === "undefined") return initialState;
      try {
        var stored = localStorage.getItem(storageKey);
        if (stored) {
          return _objectSpread(_objectSpread({}, initialState), JSON.parse(stored));
        }
      } catch (_unused9) {}
      return initialState;
    }),
    _useState154 = _slicedToArray(_useState153, 2),
    form = _useState154[0],
    setForm = _useState154[1];
  var _useState155 = useState(""),
    _useState156 = _slicedToArray(_useState155, 2),
    message = _useState156[0],
    setMessage = _useState156[1];
  useEffect(function () {
    try {
      localStorage.setItem(storageKey, JSON.stringify(form));
    } catch (_unused0) {}
  }, [form, storageKey]);
  var handleChange = function handleChange(field, value) {
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var formattedBrief = useMemo(function () {
    var lines = ["Client & Project Overview", "Company: ".concat(form.company || ""), "Project: ".concat(form.projectName || ""), "Contact: ".concat(form.contact || ""), "Date: ".concat(form.date || ""), "", "Project Goals", form.goals, form.metrics ? "Success metrics: ".concat(form.metrics) : "", "", "Scope & Deliverables", form.scope, form.outOfScope ? "Out of scope: ".concat(form.outOfScope) : "", form.format ? "Delivery format: ".concat(form.format) : "", "", "Timeline & Milestones", form.timeline, "", "Budget & Resources", form.budget, form.payment ? "Payment terms: ".concat(form.payment) : "", form.resources ? "Resources needed: ".concat(form.resources) : "", "", "Stakeholders & Approvals", form.stakeholders, form.approvals ? "Approval process: ".concat(form.approvals) : "", form.communications ? "Communication preferences: ".concat(form.communications) : "", "", "Constraints & Considerations", form.constraints].filter(Boolean).join("\n");
    return lines;
  }, [form]);
  var requiredFields = ["company", "projectName", "goals", "scope", "timeline", "budget", "stakeholders"];
  var validate = function validate() {
    var missing = requiredFields.filter(function (field) {
      var _form$field;
      return !((_form$field = form[field]) !== null && _form$field !== void 0 && _form$field.trim());
    });
    if (missing.length) {
      setMessage("Add: ".concat(missing.map(function (field) {
        return field.replace(/([A-Z])/g, " $1");
      }).join(", ")));
      return false;
    }
    setMessage("Ready to export");
    return true;
  };
  var copyAll = function copyAll() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(formattedBrief);
      setMessage("Copied to clipboard");
    }
  };
  var downloadPDF = function downloadPDF() {
    if (!validate()) return;
    var safeHtml = formattedBrief.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
    var doc = window.open("", "_blank");
    if (!doc) return;
    doc.document.write("<html><head><title>Client Brief</title></head><body style=\"font-family: 'Inter', sans-serif; padding: 40px;\">".concat(safeHtml, "</body></html>"));
    doc.document.close();
    doc.focus();
    doc.print();
  };
  var inputClass = "w-full rounded-2xl border p-3 text-sm";
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border ".concat(compact ? "p-5" : "p-6 md:p-10", " space-y-6"),
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Client Brief Generator"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold"
  }, "Capture requirements, auto-save them, and export in seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: copyAll
  }, "Copy all content"), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: downloadPDF
  }, "Download as PDF"))), message && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.border,
      color: palette.textSecondary
    }
  }, message), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Client & Project Overview"), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Company name",
    value: form.company,
    onChange: function onChange(event) {
      return handleChange("company", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Project name",
    value: form.projectName,
    onChange: function onChange(event) {
      return handleChange("projectName", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Primary contact",
    value: form.contact,
    onChange: function onChange(event) {
      return handleChange("contact", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.date,
    onChange: function onChange(event) {
      return handleChange("date", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Project Goals"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "What does success look like?",
    value: form.goals,
    onChange: function onChange(event) {
      return handleChange("goals", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Key metrics or objectives",
    value: form.metrics,
    onChange: function onChange(event) {
      return handleChange("metrics", event.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Scope & Deliverables"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "What\u2019s included?",
    value: form.scope,
    onChange: function onChange(event) {
      return handleChange("scope", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "What\u2019s explicitly out?",
    value: form.outOfScope,
    onChange: function onChange(event) {
      return handleChange("outOfScope", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Delivery format (deck, doc, site, etc.)",
    value: form.format,
    onChange: function onChange(event) {
      return handleChange("format", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Timeline & Milestones"), /*#__PURE__*/React.createElement("textarea", {
    rows: 6,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Start date, checkpoints, final delivery",
    value: form.timeline,
    onChange: function onChange(event) {
      return handleChange("timeline", event.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Budget & Resources"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Budget range or investment band",
    value: form.budget,
    onChange: function onChange(event) {
      return handleChange("budget", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Payment terms",
    value: form.payment,
    onChange: function onChange(event) {
      return handleChange("payment", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Resources or tools required",
    value: form.resources,
    onChange: function onChange(event) {
      return handleChange("resources", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Stakeholders & Approvals"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Decision makers and responsibilities",
    value: form.stakeholders,
    onChange: function onChange(event) {
      return handleChange("stakeholders", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Approval process",
    value: form.approvals,
    onChange: function onChange(event) {
      return handleChange("approvals", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Communication preferences",
    value: form.communications,
    onChange: function onChange(event) {
      return handleChange("communications", event.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Constraints & Considerations"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: "".concat(inputClass, " mt-3"),
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Technical limits, brand rules, known risks",
    value: form.constraints,
    onChange: function onChange(event) {
      return handleChange("constraints", event.target.value);
    }
  })));
}
function ToolPageShell(_ref34) {
  var slug = _ref34.slug,
    title = _ref34.title,
    subtitle = _ref34.subtitle,
    accent = _ref34.accent,
    _ref34$heroBadge = _ref34.heroBadge,
    heroBadge = _ref34$heroBadge === void 0 ? "Starterclass Tools" : _ref34$heroBadge,
    actions = _ref34.actions,
    children = _ref34.children;
  var _usePageTheme3 = usePageTheme(),
    theme = _usePageTheme3.theme,
    palette = _usePageTheme3.palette,
    toggleTheme = _usePageTheme3.toggleTheme;
  var toolBackground = theme === "dark" ? "radial-gradient(circle at 15% 20%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 85% 0%, rgba(16,185,129,0.2), transparent 70%), #040312" : "linear-gradient(120deg, #FDF4E8, #F4F0FF 45%, #E7F8FF)";
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme,
    palette: palette
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      background: toolBackground,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 backdrop-blur",
    style: {
      background: palette.headerBg,
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.location.href = "/tools.html";
    },
    className: "inline-flex items-center gap-2 text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), "Back to tools"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.28em]",
    style: {
      color: palette.textMuted
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleTheme,
    className: "rounded-full border p-2 text-xl",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    "aria-label": "Switch to ".concat(theme === "dark" ? "light" : "dark", " mode")
  }, theme === "dark" ? "🌞" : "🌙")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(GlobalNavRow, {
    activeKey: "tools"
  })))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl mx-auto px-4 py-10 space-y-10"
  }, /*#__PURE__*/React.createElement("section", {
    className: "rounded-3xl border p-6 md:p-10 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement(Badge, null, heroBadge), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl md:text-4xl font-semibold"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm md:text-base",
    style: {
      color: palette.textSecondary
    }
  }, subtitle), actions), children), /*#__PURE__*/React.createElement(FooterMenu, null), /*#__PURE__*/React.createElement(ScrollControls, null)));
}
function ToolsGalleryPage() {
  var _usePageTheme4 = usePageTheme(),
    theme = _usePageTheme4.theme,
    palette = _usePageTheme4.palette,
    toggleTheme = _usePageTheme4.toggleTheme;
  var _useState157 = useState("az"),
    _useState158 = _slicedToArray(_useState157, 2),
    sortOrder = _useState158[0],
    setSortOrder = _useState158[1];
  var sortedTools = useMemo(function () {
    return sortByOrder(TOOL_DEFINITIONS, sortOrder, "title");
  }, [sortOrder]);
  var galleryBackground = theme === "dark" ? "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 65%), #03020f" : "linear-gradient(120deg, #FCF1E7, #F2EFFF 45%, #E6F9FF)";
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme,
    palette: palette
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      background: galleryBackground,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 backdrop-blur",
    style: {
      background: palette.headerBg,
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold",
    style: {
      color: palette.textPrimary
    }
  }, "Starterclass Tools Lab"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleTheme,
    className: "rounded-full border p-2 text-xl",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    "aria-label": "Switch to ".concat(theme === "dark" ? "light" : "dark", " mode")
  }, theme === "dark" ? "🌞" : "🌙")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(GlobalNavRow, {
    activeKey: "tools"
  })))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl mx-auto px-4 py-10 space-y-10"
  }, /*#__PURE__*/React.createElement("section", {
    className: "rounded-3xl border p-6 md:p-10",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement(Badge, null, "Interactive collection"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl md:text-4xl font-semibold"
  }, "Pick a luxury tool, make it yours, keep building."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Every tool mirrors the live Starterclass build \u2014 auto-save, responsive layouts, and Canvas-ready prompts included.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: function onClick() {
      return window.location.href = "/ai-starterclass-lab.html";
    }
  }, "Return to the lab"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return window.location.href = "/prompts.html";
    }
  }, "Browse prompts")))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold",
    style: {
      color: palette.textSecondary
    }
  }, "Tap a tool to launch the full-screen build."), /*#__PURE__*/React.createElement(SortControl, {
    value: sortOrder,
    onChange: setSortOrder
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 grid-cols-3 lg:grid-cols-4"
  }, sortedTools.map(function (tool) {
    return /*#__PURE__*/React.createElement("button", {
      key: tool.slug,
      type: "button",
      onClick: function onClick() {
        return window.location.href = "/tools-".concat(tool.slug, ".html");
      },
      className: "group rounded-[1.75rem] overflow-hidden border text-left relative",
      style: {
        borderColor: tool.accent,
        background: "linear-gradient(160deg, ".concat(tool.accent, "22, ").concat(palette.surface, ")"),
        boxShadow: "0 20px 45px ".concat(tool.accent, "22")
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative aspect-[5/6] overflow-hidden"
    }, /*#__PURE__*/React.createElement("img", {
      src: tool.image,
      alt: tool.title,
      className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-4 left-4 right-4 text-white space-y-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[0.65rem] uppercase tracking-[0.3em]"
    }, tool.title), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold md:text-lg"
    }, tool.tagline))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 flex items-center justify-between text-xs",
      style: {
        color: palette.textSecondary
      }
    }, /*#__PURE__*/React.createElement("span", null, "Tap to launch"), /*#__PURE__*/React.createElement("span", {
      className: "text-lg",
      "aria-hidden": "true"
    }, "\u2192")));
  })))), /*#__PURE__*/React.createElement(FooterMenu, null), /*#__PURE__*/React.createElement(ScrollControls, null)));
}
function UniversalAIPersonalityTool() {
  var _useTheme30 = useTheme(),
    palette = _useTheme30.palette;
  var initial = {
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
    special: "- If I upload a document, treat it as source material\n- When I say \"build this\", create something I can deploy\n- Remember context in our conversation\n- Flag inefficient approaches\n- Challenge weak ideas with alternatives"
  };
  var _useState159 = useState(initial),
    _useState160 = _slicedToArray(_useState159, 2),
    form = _useState160[0],
    setForm = _useState160[1];
  var _useState161 = useState(false),
    _useState162 = _slicedToArray(_useState161, 2),
    copied = _useState162[0],
    setCopied = _useState162[1];
  var instructions = useMemo(function () {
    return ["WHAT TO KNOW ABOUT ME:", form.about, "", "WORK CONTEXT:", form.workContext, "", "MY PREFERENCES:", form.preferences, "", "WHAT I DON'T WANT:", form.dontWant, "", "DEPTH LEVELS:", form.quick, form.deep, form.defaultMode, "", "HOW TO RESPOND:", "Tone: ".concat(form.tone), "Structure:\n".concat(form.structure), "Format:\n".concat(form.format), "", "SPECIAL INSTRUCTIONS:", form.special].filter(Boolean).join("\n");
  }, [form]);
  var handleChange = function handleChange(field, value) {
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var handleCopy = function handleCopy() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(instructions).then(function () {
        setCopied(true);
        setTimeout(function () {
          return setCopied(false);
        }, 2000);
      });
    }
  };
  var inputClass = "w-full rounded-2xl border p-3 text-sm";
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Personalise"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "Tell ChatGPT how to behave by default.")), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleCopy
  }, copied ? "Copied" : "Copy instructions")), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "About you"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.about,
    onChange: function onChange(event) {
      return handleChange("about", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Work context"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.workContext,
    onChange: function onChange(event) {
      return handleChange("workContext", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Preferences"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.preferences,
    onChange: function onChange(event) {
      return handleChange("preferences", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "What you don't want"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.dontWant,
    onChange: function onChange(event) {
      return handleChange("dontWant", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Depth cues"), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.quick,
    onChange: function onChange(event) {
      return handleChange("quick", event.target.value);
    },
    placeholder: "Quick version"
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.deep,
    onChange: function onChange(event) {
      return handleChange("deep", event.target.value);
    },
    placeholder: "Deep dive"
  }), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.defaultMode,
    onChange: function onChange(event) {
      return handleChange("defaultMode", event.target.value);
    },
    placeholder: "Default mode"
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Tone"), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.tone,
    onChange: function onChange(event) {
      return handleChange("tone", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Structure"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.structure,
    onChange: function onChange(event) {
      return handleChange("structure", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Format preferences"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.format,
    onChange: function onChange(event) {
      return handleChange("format", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Special instructions"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.special,
    onChange: function onChange(event) {
      return handleChange("special", event.target.value);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Generated instructions"), /*#__PURE__*/React.createElement("pre", {
    className: "mt-3 whitespace-pre-wrap text-sm",
    style: {
      color: palette.textSecondary
    }
  }, instructions)));
}
var TASK_CODE_DEFINITIONS = [{
  code: "[RESEARCH]",
  description: "Deep dive investigation",
  output: "Synthesis with credible sources, trends, contradictions"
}, {
  code: "[DRAFT]",
  description: "Create usable content",
  output: "Polished draft with one alternative approach"
}, {
  code: "[STRATEGY]",
  description: "Think through approach",
  output: "Recommendation with reasoning and trade-offs"
}, {
  code: "[BUILD]",
  description: "Create a tool or system",
  output: "Functional template, workflow, or calculator"
}, {
  code: "[ANALYZE]",
  description: "Break down what I provide",
  output: "Key findings, patterns, gaps, implications"
}, {
  code: "[REFINE]",
  description: "Improve existing work",
  output: "Enhanced version with change notes"
}, {
  code: "[IDEATE]",
  description: "Generate possibilities",
  output: "Options with quick pros/cons"
}];
function TaskCodesTool() {
  var _useTheme31 = useTheme(),
    palette = _useTheme31.palette;
  var _useState163 = useState(TASK_CODE_DEFINITIONS[0].code),
    _useState164 = _slicedToArray(_useState163, 2),
    selectedCode = _useState164[0],
    setSelectedCode = _useState164[1];
  var _useState165 = useState(""),
    _useState166 = _slicedToArray(_useState165, 2),
    taskDescription = _useState166[0],
    setTaskDescription = _useState166[1];
  var _useState167 = useState(""),
    _useState168 = _slicedToArray(_useState167, 2),
    context = _useState168[0],
    setContext = _useState168[1];
  var _useState169 = useState(""),
    _useState170 = _slicedToArray(_useState169, 2),
    constraints = _useState170[0],
    setConstraints = _useState170[1];
  var promptText = useMemo(function () {
    var detailLines = ["".concat(selectedCode, " ").concat(taskDescription || "Describe the task clearly"), context && "Context: ".concat(context), constraints && "Constraints: ".concat(constraints), "Remember: maintain project memory, reference previous deliverables, and call out assumptions before answering."].filter(Boolean).join("\n");
    return detailLines;
  }, [selectedCode, taskDescription, context, constraints]);
  var handleCopy = function handleCopy() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(promptText);
    }
  };
  var inputClass = "w-full rounded-2xl border p-3 text-sm";
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Project operating system"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "Pick a task code and generate the perfect ask.")), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleCopy
  }, "Copy prompt")), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 md:grid-cols-3"
  }, TASK_CODE_DEFINITIONS.map(function (entry) {
    return /*#__PURE__*/React.createElement("button", {
      key: entry.code,
      type: "button",
      onClick: function onClick() {
        return setSelectedCode(entry.code);
      },
      className: "rounded-2xl border p-4 text-left ".concat(selectedCode === entry.code ? "ring-2" : ""),
      style: {
        borderColor: selectedCode === entry.code ? palette.accentSecondary : palette.border
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold"
    }, entry.code), /*#__PURE__*/React.createElement("p", {
      className: "text-sm",
      style: {
        color: palette.textSecondary
      }
    }, entry.description), /*#__PURE__*/React.createElement("p", {
      className: "text-xs mt-2",
      style: {
        color: palette.textMuted
      }
    }, entry.output));
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Task"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "What do you need?",
    value: taskDescription,
    onChange: function onChange(event) {
      return setTaskDescription(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Context"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Links, goals, blockers",
    value: context,
    onChange: function onChange(event) {
      return setContext(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Constraints or extras"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Tone, length, format",
    value: constraints,
    onChange: function onChange(event) {
      return setConstraints(event.target.value);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Preview prompt"), /*#__PURE__*/React.createElement("pre", {
    className: "mt-3 whitespace-pre-wrap text-sm",
    style: {
      color: palette.textSecondary
    }
  }, promptText)));
}
function ContentQualityAnalyzerTool() {
  var _analysis$strengths, _analysis$needsWork, _analysis$suggestions;
  var _useTheme32 = useTheme(),
    palette = _useTheme32.palette;
  var _useState171 = useState(""),
    _useState172 = _slicedToArray(_useState171, 2),
    input = _useState172[0],
    setInput = _useState172[1];
  var _useState173 = useState(null),
    _useState174 = _slicedToArray(_useState173, 2),
    analysis = _useState174[0],
    setAnalysis = _useState174[1];
  var _useState175 = useState(false),
    _useState176 = _slicedToArray(_useState175, 2),
    copied = _useState176[0],
    setCopied = _useState176[1];
  var analyze = function analyze() {
    if (!input.trim()) {
      setAnalysis(null);
      return;
    }
    var sentences = input.trim().split(/(?<=[.!?])\s+/).filter(Boolean);
    var wordCount = input.trim().split(/\s+/).filter(Boolean).length;
    var paragraphCount = input.trim().split(/\n+/).filter(Boolean).length;
    var clarityScore = Math.max(3, 10 - Math.max(0, Math.round(wordCount / Math.max(1, sentences.length)) - 18));
    var structureScore = paragraphCount > 1 ? 8 : 5;
    var toneScore = /sorry|apolog/i.test(input) ? 5 : 8;
    var quickScore = Math.min(10, Math.round((clarityScore + structureScore + toneScore) / 3));
    var strengths = [];
    if (wordCount < 220) strengths.push("Tight length keeps readers moving.");
    if (/[0-9%]/.test(input)) strengths.push("Specific numbers build credibility.");
    if (paragraphCount > 1) strengths.push("Paragraph breaks improve scan-ability.");
    var needsWork = [];
    if (paragraphCount === 1) needsWork.push("Break the text into smaller paragraphs for easier reading.");
    if (!/[0-9%]/.test(input)) needsWork.push("Add concrete metrics or examples.");
    if (!/[A-Z]/.test(input.split("\n")[0] || "")) needsWork.push("Lead with a headline or hook that states the promise.");
    var suggestions = ["State the main outcome in the first sentence.", "Group related thoughts and use transitions between sections.", "End with a clear next step or CTA."];
    var rewrite = input.split(/\n+/).map(function (para) {
      return para.trim();
    }).filter(Boolean).map(function (para, idx) {
      if (idx === 0) {
        return "**Key takeaway:** ".concat(para);
      }
      if (!para.startsWith("-")) {
        return "- ".concat(para);
      }
      return para;
    }).join("\n\n");
    setAnalysis({
      quickScore: quickScore,
      strengths: strengths,
      needsWork: needsWork,
      suggestions: suggestions,
      rewrite: rewrite
    });
  };
  var handleCopy = function handleCopy() {
    if (!analysis) return;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(analysis.rewrite);
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 2000);
    }
  };
  var panelStyle = function panelStyle(color) {
    return {
      borderColor: palette.border,
      background: color
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Original content"), /*#__PURE__*/React.createElement("textarea", {
    rows: 16,
    className: "w-full rounded-2xl border p-4 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    placeholder: "Paste an email, proposal, article, or script.",
    value: input,
    onChange: function onChange(event) {
      return setInput(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: analyze,
    className: "w-full justify-center"
  }, "Analyze")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4",
    style: panelStyle("rgba(16,185,129,0.08)")
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Quick score"), /*#__PURE__*/React.createElement("p", {
    className: "text-4xl font-semibold"
  }, analysis ? "".concat(analysis.quickScore, "/10") : "—"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, analysis ? "Higher score = publish-ready." : "Paste content and run the analyzer.")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-2",
    style: panelStyle("rgba(16,185,129,0.08)")
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "What\u2019s working"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, analysis !== null && analysis !== void 0 && (_analysis$strengths = analysis.strengths) !== null && _analysis$strengths !== void 0 && _analysis$strengths.length ? analysis.strengths.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, item);
  }) : /*#__PURE__*/React.createElement("li", null, "Strengths will appear here."))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-2",
    style: panelStyle("rgba(249,115,22,0.12)")
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "What needs work"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, analysis !== null && analysis !== void 0 && (_analysis$needsWork = analysis.needsWork) !== null && _analysis$needsWork !== void 0 && _analysis$needsWork.length ? analysis.needsWork.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, item);
  }) : /*#__PURE__*/React.createElement("li", null, "Issues appear after analysis."))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 space-y-2",
    style: panelStyle(palette.surfaceSoft)
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Suggested edits"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, analysis !== null && analysis !== void 0 && (_analysis$suggestions = analysis.suggestions) !== null && _analysis$suggestions !== void 0 && _analysis$suggestions.length ? analysis.suggestions.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, item);
  }) : /*#__PURE__*/React.createElement("li", null, "Suggestions appear here."))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Rewritten version"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: handleCopy
  }, copied ? "Copied" : "Copy improved version")), /*#__PURE__*/React.createElement("pre", {
    className: "whitespace-pre-wrap text-sm",
    style: {
      color: palette.textSecondary
    }
  }, analysis ? analysis.rewrite : "Run the analyzer to get a rewritten version.")));
}
function ClientProjectPlannerTool() {
  var _useTheme33 = useTheme(),
    palette = _useTheme33.palette;
  var _useState177 = useState(LAB_INPUT_OPTIONS.slice(0, 5)),
    _useState178 = _slicedToArray(_useState177, 2),
    selectedInputs = _useState178[0],
    setSelectedInputs = _useState178[1];
  var _useState179 = useState({
      industry: "Creative",
      clientType: "Startup",
      description: "Brand refresh with lightweight automation",
      urgency: "Medium",
      effort: "M",
      value: 3,
      baseRate: 1800,
      risks: "Scope creep around content volume",
      timeline: "Discovery → Build → Launch"
    }),
    _useState180 = _slicedToArray(_useState179, 2),
    form = _useState180[0],
    setForm = _useState180[1];
  var _useState181 = useState(null),
    _useState182 = _slicedToArray(_useState181, 2),
    plan = _useState182[0],
    setPlan = _useState182[1];
  var _useState183 = useState(""),
    _useState184 = _slicedToArray(_useState183, 2),
    message = _useState184[0],
    setMessage = _useState184[1];
  var toggleInput = function toggleInput(label) {
    setSelectedInputs(function (prev) {
      if (prev.includes(label)) {
        return prev.filter(function (item) {
          return item !== label;
        });
      }
      return [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var handleChange = function handleChange(field, value) {
    setForm(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var formatCurrency = function formatCurrency(value) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0
    }).format(value);
  };
  var generatePlan = function generatePlan() {
    if (selectedInputs.length < 5) {
      setMessage("Select at least five inputs so the tool has context.");
      return;
    }
    var effortMap = {
      S: 1,
      M: 1.8,
      L: 2.6
    };
    var urgencyMap = {
      Low: 0.9,
      Medium: 1,
      High: 1.35
    };
    var base = Number(form.baseRate) || 1500;
    var priceLow = Math.round(base * (effortMap[form.effort] || 1.6) * (urgencyMap[form.urgency] || 1) * (1 + Number(form.value || 3) * 0.05));
    var priceHigh = Math.round(priceLow * 1.4);
    var phases = [{
      name: "Discovery & scope",
      detail: "Clarify goals, surface risks, lock success metrics."
    }, {
      name: "Build & iterate",
      detail: "Co-create assets, run checkpoints, log decisions."
    }, {
      name: "Launch & handover",
      detail: "QA deliverables, prepare comms, document next steps."
    }];
    var email = "Hi team,\n\nHere\u2019s how we\u2019ll approach ".concat(form.description || "the project", ":\n- ").concat(phases.map(function (phase) {
      return "".concat(phase.name, ": ").concat(phase.detail);
    }).join("\n- "), "\n\nRecommended investment: ").concat(formatCurrency(priceLow), " \u2013 ").concat(formatCurrency(priceHigh), " based on effort (").concat(form.effort, ") and urgency (").concat(form.urgency, "). Let me know if you want to adjust scope before we lock it in.");
    setPlan({
      summary: "You\u2019re helping a ".concat(form.clientType, " in ").concat(form.industry, " move from idea to delivery. The project description focuses on ").concat(form.description, "."),
      priceBand: "".concat(formatCurrency(priceLow), " \u2013 ").concat(formatCurrency(priceHigh)),
      phases: phases,
      risks: form.risks || "Capture approvals in writing and document every assumption.",
      email: email
    });
    setMessage("Planner updated — copy or share it immediately.");
  };
  var copyPlan = function copyPlan() {
    if (!plan) return;
    var text = ["CLIENT PROJECT PLANNER", plan.summary, "", "Recommended investment: ".concat(plan.priceBand), "", "Phases:"].concat(_toConsumableArray(plan.phases.map(function (phase) {
      return "- ".concat(phase.name, ": ").concat(phase.detail);
    })), ["", "Risks & watch-outs: ".concat(plan.risks), "", "Client email:", plan.email]).join("\n");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };
  var inputClass = "w-full rounded-2xl border p-3 text-sm";
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 md:p-10 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Inputs first"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold"
  }, "Select the data your tool collects.")), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: generatePlan
  }, "Generate plan")), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-2"
  }, LAB_INPUT_OPTIONS.map(function (label) {
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      type: "button",
      onClick: function onClick() {
        return toggleInput(label);
      },
      className: "rounded-2xl border px-4 py-3 text-left text-sm ".concat(selectedInputs.includes(label) ? "ring-2" : ""),
      style: {
        borderColor: selectedInputs.includes(label) ? palette.accentSecondary : palette.border
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Industry / Field"), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.industry,
    onChange: function onChange(event) {
      return handleChange("industry", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Client type"), /*#__PURE__*/React.createElement("input", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.clientType,
    onChange: function onChange(event) {
      return handleChange("clientType", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Project description"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.description,
    onChange: function onChange(event) {
      return handleChange("description", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Urgency"), /*#__PURE__*/React.createElement("select", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.urgency,
    onChange: function onChange(event) {
      return handleChange("urgency", event.target.value);
    }
  }, ['Low', 'Medium', 'High'].map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Estimated effort"), /*#__PURE__*/React.createElement("select", {
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.effort,
    onChange: function onChange(event) {
      return handleChange("effort", event.target.value);
    }
  }, ['S', 'M', 'L'].map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Strategic value (1-5)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "5",
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.value,
    onChange: function onChange(event) {
      return handleChange("value", event.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Base day rate"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.baseRate,
    onChange: function onChange(event) {
      return handleChange("baseRate", event.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Risks / constraints"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.risks,
    onChange: function onChange(event) {
      return handleChange("risks", event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-semibold"
  }, "Timeline notes"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    className: inputClass,
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: form.timeline,
    onChange: function onChange(event) {
      return handleChange("timeline", event.target.value);
    }
  }))), message && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.border,
      color: palette.textSecondary
    }
  }, message)), plan && /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Output"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-semibold"
  }, plan.priceBand), /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Investment band based on your inputs")), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: copyPlan
  }, "Copy planner")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, plan.summary), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-3"
  }, plan.phases.map(function (phase) {
    return /*#__PURE__*/React.createElement("div", {
      key: phase.name,
      className: "rounded-2xl border p-4",
      style: {
        borderColor: palette.border,
        background: palette.surface
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-sm"
    }, phase.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs mt-2",
      style: {
        color: palette.textSecondary
      }
    }, phase.detail));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-4",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Risks & watch-outs"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, plan.risks)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-2"
  }, "Client-ready email"), /*#__PURE__*/React.createElement("pre", {
    className: "whitespace-pre-wrap text-sm",
    style: {
      color: palette.textSecondary
    }
  }, plan.email))));
}
function YoutubeMp3Tool() {
  var _useTheme34 = useTheme(),
    palette = _useTheme34.palette;
  var _useState185 = useState(""),
    _useState186 = _slicedToArray(_useState185, 2),
    link = _useState186[0],
    setLink = _useState186[1];
  var _useState187 = useState("idle"),
    _useState188 = _slicedToArray(_useState187, 2),
    status = _useState188[0],
    setStatus = _useState188[1];
  var _useState189 = useState(0),
    _useState190 = _slicedToArray(_useState189, 2),
    progress = _useState190[0],
    setProgress = _useState190[1];
  var _useState191 = useState(""),
    _useState192 = _slicedToArray(_useState191, 2),
    error = _useState192[0],
    setError = _useState192[1];
  var _useState193 = useState(null),
    _useState194 = _slicedToArray(_useState193, 2),
    result = _useState194[0],
    setResult = _useState194[1];
  var _useState195 = useState(""),
    _useState196 = _slicedToArray(_useState195, 2),
    downloadUrl = _useState196[0],
    setDownloadUrl = _useState196[1];
  var _useState197 = useState([]),
    _useState198 = _slicedToArray(_useState197, 2),
    history = _useState198[0],
    setHistory = _useState198[1];
  var _useState199 = useState(false),
    _useState200 = _slicedToArray(_useState199, 2),
    busy = _useState200[0],
    setBusy = _useState200[1];
  useEffect(function () {
    return function () {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);
  var handleConvert = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var videoId, _manifest$channel, _manifest$thumbnailUr, _manifest$thumbnail, manifest, audioStream, meta, blob, safeName, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (!busy) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          setError("");
          videoId = extractYouTubeId(link);
          if (videoId) {
            _context3.n = 2;
            break;
          }
          setError("Enter a valid YouTube URL or video ID.");
          return _context3.a(2);
        case 2:
          setBusy(true);
          setStatus("fetching");
          setProgress(10);
          _context3.p = 3;
          _context3.n = 4;
          return fetchYoutubeManifest(videoId);
        case 4:
          manifest = _context3.v;
          audioStream = pickBestAudioStream(manifest.audioStreams || []);
          if (audioStream) {
            _context3.n = 5;
            break;
          }
          throw new Error("No downloadable audio stream was returned.");
        case 5:
          meta = {
            title: manifest.title || "Untitled video",
            channel: manifest.uploader || ((_manifest$channel = manifest.channel) === null || _manifest$channel === void 0 ? void 0 : _manifest$channel.name) || "Unknown creator",
            duration: manifest.duration,
            thumbnail: manifest.thumbnailUrl || ((_manifest$thumbnailUr = manifest.thumbnailUrlSet) === null || _manifest$thumbnailUr === void 0 || (_manifest$thumbnailUr = _manifest$thumbnailUr[0]) === null || _manifest$thumbnailUr === void 0 ? void 0 : _manifest$thumbnailUr.url) || ((_manifest$thumbnail = manifest.thumbnail) === null || _manifest$thumbnail === void 0 || (_manifest$thumbnail = _manifest$thumbnail[0]) === null || _manifest$thumbnail === void 0 ? void 0 : _manifest$thumbnail.url),
            id: videoId,
            originalFormat: audioStream.mimeType
          };
          setResult(_objectSpread({}, meta));
          setStatus("converting");
          setProgress(45);
          if (downloadUrl) {
            URL.revokeObjectURL(downloadUrl);
            setDownloadUrl("");
          }
          _context3.n = 6;
          return convertStreamToMp3(audioStream.url, function (value) {
            return setProgress(Math.min(95, value));
          });
        case 6:
          blob = _context3.v;
          safeName = "".concat(sanitizeFileName(meta.title), ".mp3");
          setResult(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              fileName: safeName,
              fileSize: blob.size
            });
          });
          setDownloadUrl(URL.createObjectURL(blob));
          setProgress(100);
          setStatus("ready");
          setHistory(function (prev) {
            return [{
              title: meta.title,
              channel: meta.channel,
              timestamp: new Date().toISOString(),
              size: blob.size
            }].concat(_toConsumableArray(prev)).slice(0, 4);
          });
          _context3.n = 8;
          break;
        case 7:
          _context3.p = 7;
          _t3 = _context3.v;
          console.error(_t3);
          setStatus("error");
          setError(_t3.message || "Unable to convert this link right now.");
        case 8:
          _context3.p = 8;
          setBusy(false);
          return _context3.f(8);
        case 9:
          return _context3.a(2);
      }
    }, _callee3, null, [[3, 7, 8, 9]]);
  })), [busy, downloadUrl, link]);
  var downloadFile = useCallback(function () {
    if (!downloadUrl || !(result !== null && result !== void 0 && result.fileName)) {
      return;
    }
    var anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = result.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }, [downloadUrl, result]);
  var statusMap = {
    idle: "Ready when you are.",
    fetching: "Fetching the cleanest stream…",
    converting: "Transcoding to 320 kbps MP3…",
    ready: "MP3 ready to download.",
    error: "Something went wrong."
  };
  var formatSeconds = function formatSeconds(value) {
    if (!value && value !== 0) {
      return "—";
    }
    var total = Number(value);
    var minutes = Math.floor(total / 60);
    var seconds = Math.round(total % 60).toString().padStart(2, "0");
    return "".concat(minutes, ":").concat(seconds);
  };
  var formatBytes = function formatBytes(bytes) {
    if (!bytes && bytes !== 0) {
      return "—";
    }
    var units = ["B", "KB", "MB", "GB"];
    var value = bytes;
    var unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex += 1;
    }
    return "".concat(value.toFixed(1), " ").concat(units[unitIndex]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-6 space-y-6",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      boxShadow: "0 40px 120px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.4em]",
    style: {
      color: palette.textSecondary
    }
  }, "Step 1 \xB7 Paste link"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-col gap-3 md:flex-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "https://www.youtube.com/watch?v=\u2026",
    className: "flex-1 rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surface
    },
    value: link,
    onChange: function onChange(event) {
      return setLink(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: handleConvert,
    disabled: busy
  }, busy ? "Processing" : "Convert"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.4em] mb-2",
    style: {
      color: palette.textSecondary
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    className: "h-3 rounded-full overflow-hidden",
    style: {
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full",
    style: {
      width: "".concat(progress, "%"),
      background: "linear-gradient(90deg, ".concat(palette.accentPrimary, ", ").concat(palette.accentSecondary, ")"),
      transition: "width 0.3s ease"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, statusMap[status])), error && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border px-4 py-3 text-sm",
    style: {
      borderColor: "#F87171",
      color: "#F87171"
    }
  }, error), result && /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 flex flex-col gap-4 md:flex-row",
    style: {
      borderColor: palette.border
    }
  }, result.thumbnail && /*#__PURE__*/React.createElement("img", {
    src: result.thumbnail,
    alt: "Video thumbnail",
    className: "w-full md:w-56 rounded-2xl object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.4em]",
    style: {
      color: palette.textSecondary
    }
  }, "Track info"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-semibold mt-1"
  }, result.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, result.channel, " \xB7 ", formatSeconds(result.duration))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 md:grid-cols-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-3",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Encoder"), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "LAME \xB7 320 kbps")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-3",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Size"), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, formatBytes(result.fileSize))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border p-3",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs",
    style: {
      color: palette.textSecondary
    }
  }, "Original stream"), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold truncate"
  }, result.originalFormat || "—"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    onClick: downloadFile,
    disabled: !downloadUrl
  }, "Download MP3"), /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: function onClick() {
      return navigator.clipboard.writeText(result.fileName || "".concat(result.id, ".mp3"));
    }
  }, "Copy filename"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.4em]",
    style: {
      color: palette.textSecondary
    }
  }, "Quality protocol"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-3 text-sm",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("li", null, "We request the Piped manifest to pick the highest bitrate audio stream."), /*#__PURE__*/React.createElement("li", null, "Audio is decoded locally so source links never leave your browser."), /*#__PURE__*/React.createElement("li", null, "LAME encoder runs at 320 kbps CBR for studio-grade MP3 output."))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-5",
    style: {
      borderColor: palette.border
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.4em]",
    style: {
      color: palette.textSecondary
    }
  }, "Recent renders"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-3"
  }, history.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Your conversions will show up here with timestamps and file sizes."), history.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.timestamp,
      className: "rounded-2xl border px-3 py-2",
      style: {
        borderColor: palette.border
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold"
    }, item.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs",
      style: {
        color: palette.textSecondary
      }
    }, item.channel, " \xB7 ", formatBytes(item.size), " \xB7", " ", new Date(item.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })));
  })))));
}
function ToolsUniversalAIPersonalityPage() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "universal-ai-personality",
    title: "Universal AI Personality",
    subtitle: "Design Custom Instructions that stick across every chat, GPT, and Project."
  }, /*#__PURE__*/React.createElement(UniversalAIPersonalityTool, null));
}
function ToolsTaskCodesPage() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "task-codes",
    title: "Task Codes Workspace",
    subtitle: "Keep every AI request organised with battle-tested project codes."
  }, /*#__PURE__*/React.createElement(TaskCodesTool, null));
}
function ToolsClientBriefGeneratorPage() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "client-brief-generator",
    title: "Client Brief Generator",
    subtitle: "Auto-save detailed briefs, validate required inputs, and export a PDF-ready report."
  }, /*#__PURE__*/React.createElement(ClientBriefGeneratorTool, null));
}
function ToolsContentQualityAnalyzerPage() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "content-quality-analyzer",
    title: "Content Quality Analyzer",
    subtitle: "Paste anything and get instant strengths, fixes, and a rewritten version."
  }, /*#__PURE__*/React.createElement(ContentQualityAnalyzerTool, null));
}
function ToolsClientProjectPlannerPage() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "client-project-planner",
    title: "Client Project Planner & Value Calculator",
    subtitle: "Scope projects, price them confidently, and send a client-ready email in minutes."
  }, /*#__PURE__*/React.createElement(ClientProjectPlannerTool, null));
}
function ToolsYoutubeMp3Page() {
  return /*#__PURE__*/React.createElement(ToolPageShell, {
    slug: "youtube-mp3",
    title: "YouTube to MP3 Studio",
    subtitle: "Paste a link, fetch the cleanest audio, and leave with a 320 kbps MP3 in minutes.",
    accent: "#EF4444",
    actions: /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-3"
    }, /*#__PURE__*/React.createElement(GlassButton, {
      variant: "secondary",
      onClick: function onClick() {
        return window.location.href = "/tools.html";
      }
    }, "Back to tools"), /*#__PURE__*/React.createElement(GlassButton, {
      onClick: function onClick() {
        return window.location.href = "/ai-starterclass-lab.html";
      }
    }, "Study the Starterclass Lab"))
  }, /*#__PURE__*/React.createElement(YoutubeMp3Tool, null));
}
function PromptsGalleryPage() {
  var _usePageTheme5 = usePageTheme(),
    theme = _usePageTheme5.theme,
    palette = _usePageTheme5.palette,
    toggleTheme = _usePageTheme5.toggleTheme;
  var _useState201 = useState(assignPromptImages(PROMPT_FALLBACKS)),
    _useState202 = _slicedToArray(_useState201, 2),
    prompts = _useState202[0],
    setPrompts = _useState202[1];
  var _useState203 = useState(true),
    _useState204 = _slicedToArray(_useState203, 2),
    loading = _useState204[0],
    setLoading = _useState204[1];
  var _useState205 = useState(""),
    _useState206 = _slicedToArray(_useState205, 2),
    error = _useState206[0],
    setError = _useState206[1];
  var _useState207 = useState(null),
    _useState208 = _slicedToArray(_useState207, 2),
    selectedPrompt = _useState208[0],
    setSelectedPrompt = _useState208[1];
  var _useState209 = useState(""),
    _useState210 = _slicedToArray(_useState209, 2),
    editablePrompt = _useState210[0],
    setEditablePrompt = _useState210[1];
  var _useState211 = useState(false),
    _useState212 = _slicedToArray(_useState211, 2),
    copied = _useState212[0],
    setCopied = _useState212[1];
  var _useState213 = useState("random"),
    _useState214 = _slicedToArray(_useState213, 2),
    sortOrder = _useState214[0],
    setSortOrder = _useState214[1];
  var displayPrompts = useMemo(function () {
    return sortByOrder(prompts, sortOrder, "action");
  }, [prompts, sortOrder]);
  useEffect(function () {
    var cancelled = false;
    var fetchPrompts = /*#__PURE__*/function () {
      var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, text, parsed, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return fetch(PROMPT_SHEET_CSV);
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return response.text();
            case 2:
              text = _context4.v;
              if (!cancelled) {
                _context4.n = 3;
                break;
              }
              return _context4.a(2);
            case 3:
              parsed = parsePromptCsv(text);
              setPrompts(assignPromptImages(parsed));
              setError("");
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              setError("Couldn’t load Google Sheet — showing starter prompts.");
              setPrompts(assignPromptImages(PROMPT_FALLBACKS));
            case 5:
              _context4.p = 5;
              if (!cancelled) setLoading(false);
              return _context4.f(5);
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 4, 5, 6]]);
      }));
      return function fetchPrompts() {
        return _ref36.apply(this, arguments);
      };
    }();
    fetchPrompts();
    return function () {
      cancelled = true;
    };
  }, []);
  var openPrompt = function openPrompt(prompt) {
    setSelectedPrompt(prompt);
    setEditablePrompt(prompt.prompt);
    setCopied(false);
  };
  var closePrompt = function closePrompt() {
    setSelectedPrompt(null);
    setCopied(false);
  };
  var copyPrompt = function copyPrompt() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(editablePrompt);
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 2000);
    }
  };
  var promptBackground = theme === "dark" ? "radial-gradient(circle at 20% 15%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.2), transparent 70%), #030212" : "linear-gradient(125deg, #FCF1E9, #F1EEFF 45%, #E5F8FF)";
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme,
    palette: palette
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      background: promptBackground,
      color: palette.textPrimary
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 backdrop-blur",
    style: {
      background: palette.headerBg,
      borderBottom: "1px solid ".concat(palette.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, "Starterclass Prompt Library"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleTheme,
    className: "rounded-full border p-2 text-xl",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft,
      color: palette.textPrimary
    },
    "aria-label": "Switch to ".concat(theme === "dark" ? "light" : "dark", " mode")
  }, theme === "dark" ? "🌞" : "🌙")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(GlobalNavRow, {
    activeKey: "prompts"
  })))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl mx-auto px-4 py-10 space-y-8"
  }, /*#__PURE__*/React.createElement("section", {
    className: "rounded-3xl border p-6 md:p-10 space-y-3",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Prompt grid"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-semibold"
  }, "Tap a card, edit the prompt, copy it instantly."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Data flows from the shared Google Sheet, so every refresh can reveal fresh angles."), /*#__PURE__*/React.createElement(SortControl, {
    value: sortOrder,
    onChange: setSortOrder
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border p-4 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    }
  }, error), loading ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: palette.textSecondary
    }
  }, "Loading prompts\u2026") : /*#__PURE__*/React.createElement("section", {
    className: "grid gap-3 grid-cols-3 lg:grid-cols-4"
  }, displayPrompts.map(function (prompt) {
    return /*#__PURE__*/React.createElement("button", {
      key: "".concat(prompt.action, "-").concat(prompt.image),
      type: "button",
      onClick: function onClick() {
        return openPrompt(prompt);
      },
      className: "relative aspect-square overflow-hidden rounded-3xl border text-left",
      style: {
        borderColor: palette.border
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: prompt.image,
      alt: prompt.action,
      className: "absolute inset-0 h-full w-full object-cover"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative h-full w-full p-4 flex flex-col justify-end text-white"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[0.55rem] uppercase tracking-[0.35em]"
    }, "Prompt"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold md:text-lg"
    }, prompt.action)));
  }))), /*#__PURE__*/React.createElement(FooterMenu, null), /*#__PURE__*/React.createElement(ScrollControls, null), selectedPrompt && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: "rgba(0,0,0,0.55)"
    },
    onClick: closePrompt
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-2xl rounded-3xl border p-6 space-y-4",
    style: {
      borderColor: palette.border,
      background: palette.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs uppercase tracking-[0.3em]",
    style: {
      color: palette.textMuted
    }
  }, "Prompt"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold"
  }, selectedPrompt.action)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: closePrompt,
    className: "text-2xl",
    style: {
      color: palette.textSecondary
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("textarea", {
    rows: 8,
    className: "w-full rounded-2xl border p-4 text-sm",
    style: {
      borderColor: palette.border,
      background: palette.surfaceSoft
    },
    value: editablePrompt,
    onChange: function onChange(event) {
      return setEditablePrompt(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 justify-end"
  }, /*#__PURE__*/React.createElement(GlassButton, {
    variant: "secondary",
    onClick: copyPrompt
  }, copied ? "Copied" : "Copy"), /*#__PURE__*/React.createElement(GlassButton, {
    onClick: closePrompt
  }, "Close"))))));
}
function parsePromptCsv(text) {
  var rows = text.trim().split(/\r?\n/);
  var _rows = _toArray(rows),
    header = _rows[0],
    data = _arrayLikeToArray(_rows).slice(1);
  var columns = header.split(",").map(function (col) {
    return col.trim().toLowerCase();
  });
  return data.map(function (line) {
    var values = [];
    var current = "";
    var inQuotes = false;
    var _iterator = _createForOfIteratorHelper(line),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _char = _step.value;
        if (_char === '"') {
          inQuotes = !inQuotes;
          continue;
        }
        if (_char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += _char;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    values.push(current.trim());
    var record = {};
    columns.forEach(function (col, idx) {
      record[col] = values[idx] || "";
    });
    return {
      action: record.action || "Untitled",
      prompt: record.prompt || ""
    };
  }).filter(function (row) {
    return row.prompt;
  });
}
function assignPromptImages(list) {
  var seed = Math.floor(Math.random() * PROMPT_IMAGE_POOL.length);
  return list.map(function (item, index) {
    return _objectSpread(_objectSpread({}, item), {}, {
      image: PROMPT_IMAGE_POOL[(seed + index) % PROMPT_IMAGE_POOL.length]
    });
  });
}
function SortControl(_ref37) {
  var value = _ref37.value,
    onChange = _ref37.onChange;
  var _useTheme35 = useTheme(),
    palette = _useTheme35.palette;
  var options = [{
    value: "az",
    label: "A → Z"
  }, {
    value: "za",
    label: "Z → A"
  }, {
    value: "random",
    label: "Shuffle"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs",
    style: {
      color: palette.textSecondary
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-[0.3em]"
  }, "Sort"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, options.map(function (option) {
    var active = value === option.value;
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      onClick: function onClick() {
        return onChange(option.value);
      },
      className: "rounded-full px-3 py-1 font-semibold ".concat(active ? "shadow" : ""),
      style: {
        border: "1px solid ".concat(active ? palette.accentSecondary : palette.border),
        background: active ? "".concat(palette.accentSecondary, "20") : palette.surface,
        color: active ? palette.accentSecondary : palette.textSecondary
      }
    }, option.label);
  })));
}
function sortByOrder(list, order) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "title";
  var arr = _toConsumableArray(list);
  if (order === "az") {
    return arr.sort(function (a, b) {
      return (a[key] || "").localeCompare(b[key] || "");
    });
  }
  if (order === "za") {
    return arr.sort(function (a, b) {
      return (b[key] || "").localeCompare(a[key] || "");
    });
  }
  if (order === "random") {
    return shuffleArray(arr);
  }
  return arr;
}
function shuffleArray(list) {
  var arr = _toConsumableArray(list);
  for (var i = arr.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref38 = [arr[j], arr[i]];
    arr[i] = _ref38[0];
    arr[j] = _ref38[1];
  }
  return arr;
}
function fetchYoutubeManifest(_x) {
  return _fetchYoutubeManifest.apply(this, arguments);
}
function _fetchYoutubeManifest() {
  _fetchYoutubeManifest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(videoId) {
    var _lastError;
    var pipedInstances, invidiousInstances, proxify, pipedEndpoints, invidiousEndpoints, endpoints, lastError, _i2, _endpoints, endpoint, _payload$audioStreams, payload, normalized, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          pipedInstances = ["https://piped.video", "https://piped.mha.fi", "https://piped.garudalinux.org", "https://piped.adminforge.de", "https://piped.projectsegfau.lt", "https://piped.lunar.icu", "https://watch.leptons.xyz", "https://piped.privacy.com.de"];
          invidiousInstances = ["https://yewtu.be", "https://inv.nadeko.net", "https://vid.puffyan.us"];
          proxify = function proxify(url) {
            return "https://r.jina.ai/http://".concat(url.replace(/^https?:\/\//, ""));
          };
          pipedEndpoints = pipedInstances.flatMap(function (instance) {
            var base = "".concat(instance, "/api/v1/streams/").concat(videoId);
            return ["".concat(base, "?hl=en"), "".concat(base, "?region=us"), "".concat(base, "?local=true"), proxify("".concat(base, "?hl=en")), proxify("".concat(base, "?region=us"))];
          });
          invidiousEndpoints = invidiousInstances.flatMap(function (instance) {
            var base = "".concat(instance, "/api/v1/videos/").concat(videoId);
            return [base, proxify(base)];
          });
          endpoints = Array.from(new Set([].concat(_toConsumableArray(pipedEndpoints), _toConsumableArray(invidiousEndpoints))));
          lastError = null;
          _i2 = 0, _endpoints = endpoints;
        case 1:
          if (!(_i2 < _endpoints.length)) {
            _context5.n = 10;
            break;
          }
          endpoint = _endpoints[_i2];
          _context5.p = 2;
          _context5.n = 3;
          return fetchJsonSafe(endpoint);
        case 3:
          payload = _context5.v;
          if (payload) {
            _context5.n = 4;
            break;
          }
          return _context5.a(3, 9);
        case 4:
          if (!endpoint.includes("/api/v1/videos/")) {
            _context5.n = 6;
            break;
          }
          normalized = normalizeInvidiousManifest(payload);
          if (!normalized) {
            _context5.n = 5;
            break;
          }
          return _context5.a(2, normalized);
        case 5:
          return _context5.a(3, 9);
        case 6:
          if (!((_payload$audioStreams = payload.audioStreams) !== null && _payload$audioStreams !== void 0 && _payload$audioStreams.length || payload.hls)) {
            _context5.n = 7;
            break;
          }
          return _context5.a(2, payload);
        case 7:
          _context5.n = 9;
          break;
        case 8:
          _context5.p = 8;
          _t5 = _context5.v;
          lastError = _t5;
        case 9:
          _i2++;
          _context5.n = 1;
          break;
        case 10:
          throw new Error(((_lastError = lastError) === null || _lastError === void 0 ? void 0 : _lastError.message) || "Unable to reach the audio manifest right now.");
        case 11:
          return _context5.a(2);
      }
    }, _callee5, null, [[2, 8]]);
  }));
  return _fetchYoutubeManifest.apply(this, arguments);
}
function fetchJsonSafe(_x2) {
  return _fetchJsonSafe.apply(this, arguments);
}
function _fetchJsonSafe() {
  _fetchJsonSafe = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(endpoint) {
    var response, text, trimmed, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.n = 1;
          return fetch(endpoint, {
            headers: {
              Accept: "application/json,text/plain;q=0.9"
            }
          });
        case 1:
          response = _context6.v;
          if (response.ok) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, null);
        case 2:
          _context6.n = 3;
          return response.text();
        case 3:
          text = _context6.v;
          trimmed = text.trim();
          if (!(!trimmed.startsWith("{") && !trimmed.startsWith("["))) {
            _context6.n = 4;
            break;
          }
          return _context6.a(2, null);
        case 4:
          _context6.p = 4;
          return _context6.a(2, JSON.parse(trimmed));
        case 5:
          _context6.p = 5;
          _t6 = _context6.v;
          return _context6.a(2, null);
      }
    }, _callee6, null, [[4, 5]]);
  }));
  return _fetchJsonSafe.apply(this, arguments);
}
function normalizeInvidiousManifest(data) {
  var _data$videoThumbnails;
  if (!data) return null;
  var candidateStreams = (data === null || data === void 0 ? void 0 : data.adaptiveFormats) || (data === null || data === void 0 ? void 0 : data.formatStreams) || [];
  var audioStreams = candidateStreams.filter(function (stream) {
    return /audio\//i.test(stream.type || "") && stream.url;
  }).map(function (stream) {
    return {
      url: stream.url,
      bitrate: stream.bitrate || stream.bitrate_value || stream.avgBitrate,
      mimeType: stream.type
    };
  });
  if (!audioStreams.length) {
    return null;
  }
  return {
    title: data.title,
    uploader: data.author,
    duration: Number(data.lengthSeconds || data.duration) || undefined,
    thumbnailUrl: (_data$videoThumbnails = data.videoThumbnails) === null || _data$videoThumbnails === void 0 || (_data$videoThumbnails = _data$videoThumbnails[0]) === null || _data$videoThumbnails === void 0 ? void 0 : _data$videoThumbnails.url,
    audioStreams: audioStreams
  };
}
function pickBestAudioStream(streams) {
  if (!Array.isArray(streams) || streams.length === 0) {
    return null;
  }
  var sorted = _toConsumableArray(streams).sort(function (a, b) {
    return (b.bitrate || 0) - (a.bitrate || 0);
  });
  return sorted.find(function (stream) {
    return /audio\/(mp4|mpeg|webm)/i.test(stream.mimeType || "");
  }) || sorted[0];
}
function convertStreamToMp3(_x3, _x4) {
  return _convertStreamToMp.apply(this, arguments);
}
function _convertStreamToMp() {
  _convertStreamToMp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(url, onProgress) {
    var _audioContext$close;
    var response, arrayBuffer, AudioContextClass, audioContext, audioBuffer, monoData, int16Data, mp3Blob;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          if (url) {
            _context7.n = 1;
            break;
          }
          throw new Error("Missing audio stream URL.");
        case 1:
          _context7.n = 2;
          return fetch(url);
        case 2:
          response = _context7.v;
          if (response.ok) {
            _context7.n = 3;
            break;
          }
          throw new Error("Unable to download the audio stream.");
        case 3:
          onProgress === null || onProgress === void 0 || onProgress(60);
          _context7.n = 4;
          return response.arrayBuffer();
        case 4:
          arrayBuffer = _context7.v;
          AudioContextClass = typeof window !== "undefined" ? window.AudioContext || window.webkitAudioContext : null;
          if (AudioContextClass) {
            _context7.n = 5;
            break;
          }
          throw new Error("Audio conversion is not supported in this browser.");
        case 5:
          audioContext = new AudioContextClass();
          _context7.n = 6;
          return audioContext.decodeAudioData(arrayBuffer.slice(0));
        case 6:
          audioBuffer = _context7.v;
          onProgress === null || onProgress === void 0 || onProgress(75);
          _context7.n = 7;
          return ensureLameEncoder();
        case 7:
          monoData = downmixToMono(audioBuffer);
          int16Data = floatTo16BitPCM(monoData);
          mp3Blob = encodeMp3(int16Data, audioBuffer.sampleRate, onProgress);
          (_audioContext$close = audioContext.close) === null || _audioContext$close === void 0 || _audioContext$close.call(audioContext);
          onProgress === null || onProgress === void 0 || onProgress(95);
          return _context7.a(2, mp3Blob);
      }
    }, _callee7);
  }));
  return _convertStreamToMp.apply(this, arguments);
}
var lameScriptPromise = null;
function ensureLameEncoder() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Encoder unavailable in this environment."));
  }
  if (window.lamejs) {
    return Promise.resolve(window.lamejs);
  }
  if (!lameScriptPromise) {
    lameScriptPromise = new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[data-lame="true"]');
      if (existing) {
        existing.addEventListener("load", function () {
          return resolve(window.lamejs);
        });
        existing.addEventListener("error", function () {
          return reject(new Error("Failed to load MP3 encoder."));
        });
        return;
      }
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js";
      script.async = true;
      script.dataset.lame = "true";
      script.onload = function () {
        return resolve(window.lamejs);
      };
      script.onerror = function () {
        return reject(new Error("Failed to load MP3 encoder."));
      };
      document.body.appendChild(script);
    });
  }
  return lameScriptPromise;
}
function downmixToMono(audioBuffer) {
  if (audioBuffer.numberOfChannels === 1) {
    return audioBuffer.getChannelData(0);
  }
  var length = audioBuffer.length;
  var mono = new Float32Array(length);
  for (var channel = 0; channel < audioBuffer.numberOfChannels; channel += 1) {
    var channelData = audioBuffer.getChannelData(channel);
    for (var i = 0; i < length; i += 1) {
      mono[i] += channelData[i] / audioBuffer.numberOfChannels;
    }
  }
  return mono;
}
function floatTo16BitPCM(float32Array) {
  var buffer = new Int16Array(float32Array.length);
  for (var i = 0; i < float32Array.length; i += 1) {
    var sample = Math.max(-1, Math.min(1, float32Array[i]));
    buffer[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return buffer;
}
function encodeMp3(int16Array, sampleRate, onProgress) {
  if (!window.lamejs) {
    throw new Error("MP3 encoder missing.");
  }
  var mp3Encoder = new window.lamejs.Mp3Encoder(1, sampleRate, 320);
  var chunkSize = 1152;
  var mp3Data = [];
  for (var i = 0; i < int16Array.length; i += chunkSize) {
    var chunk = int16Array.subarray(i, i + chunkSize);
    var mp3buf = mp3Encoder.encodeBuffer(chunk);
    if (mp3buf.length > 0) {
      mp3Data.push(mp3buf);
    }
    if (onProgress) {
      var percent = 80 + Math.round(i / int16Array.length * 15);
      onProgress(Math.min(95, percent));
    }
  }
  var flushed = mp3Encoder.flush();
  if (flushed.length > 0) {
    mp3Data.push(flushed);
  }
  return new Blob(mp3Data, {
    type: "audio/mpeg"
  });
}
function sanitizeFileName(text) {
  return (text || "starterclass-track").replace(/[\s]+/g, "-").replace(/[^a-z0-9-_]/gi, "").slice(0, 80) || "starterclass-track";
}
function extractYouTubeId(value) {
  if (!value) {
    return "";
  }
  var trimmed = value.trim();
  var direct = trimmed.match(/^[a-zA-Z0-9_-]{11}$/);
  if (direct) {
    return direct[0];
  }
  var patterns = [/v=([a-zA-Z0-9_-]{11})/,
  // watch?v=
  /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  // youtu.be/
  /shorts\/([a-zA-Z0-9_-]{11})/,
  // shorts
  /embed\/([a-zA-Z0-9_-]{11})/ // embed
  ];
  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var pattern = _patterns[_i];
    var match = trimmed.match(pattern);
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
