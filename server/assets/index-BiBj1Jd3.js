import { H as jsxRuntimeExports } from "./server-CAbZ4wgZ.js";
import { L as Link } from "./router-D_kSJ9Xj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const STATS = [{
  label: "Test Anxiety",
  value: "40–60%",
  caption: "of Ontario students are negatively affected by test anxiety"
}, {
  label: "Performance Gap",
  value: "12–15",
  caption: "points lower scored on average by high-anxiety students"
}, {
  label: "Academic Stress",
  value: "45%",
  caption: "of Canadian students report above-average academic stress"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-7xl font-bold leading-[1.05] max-w-4xl", children: [
        "The Effect of Standardized Testing on ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Ontario Students" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg text-muted-foreground", children: "EQAO, the OSSLT, and Grade 11–12 finals carry enormous social weight in Ontario — shaping how students see themselves long after the test ends. Here's what the research says, what students and teachers report, and what should change." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/issue", className: "rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition", children: "Read the issue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/solution", className: "rounded-md border border-border px-5 py-3 font-semibold hover:bg-secondary transition", children: "See what should change" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-4", children: "Watch · Intro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-6 max-w-3xl", children: "A quick look at why this matters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-glow rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("video", { controls: true, playsInline: true, preload: "metadata", className: "w-full h-auto block bg-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/intro-video.mp4", type: "video/mp4" }),
        "Your browser does not support the video tag."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-2xl", children: "A short introduction to the topic before you dig into the research below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid sm:grid-cols-3 gap-6", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-number text-5xl mt-4", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: s.caption })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card-glow rounded-2xl p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "The Argument" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold max-w-3xl", children: "Our thesis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl", children: [
        "Although standardized testing in Ontario aims to improve accountability and measure achievement,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-highlight font-semibold", children: " societal beliefs that test scores define intelligence and success" }),
        " contribute to increased anxiety, lower self-esteem, and performance pressure among students — potentially undermining both mental health and authentic learning."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid md:grid-cols-3 gap-6", children: [{
      to: "/issue",
      title: "What is the issue?",
      body: "EQAO, OSSLT, and 30%-weighted finals — and the societal beliefs that turn a score into a verdict on a student."
    }, {
      to: "/solution",
      title: "What should change",
      body: "Multiple forms of assessment, real coping support, equity for ELL and lower-income students, and a new story around scores."
    }, {
      to: "/perspectives",
      title: "Voices from inside",
      body: "An OSSLC teacher and a student describe what high-stakes testing actually feels like — in their own words."
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "card-glow rounded-xl p-8 group hover:border-primary transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: c.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform", children: "Learn more →" })
    ] }, c.to)) })
  ] });
}
export {
  Home as component
};
