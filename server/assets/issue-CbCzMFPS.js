import { H as jsxRuntimeExports } from "./server-CAbZ4wgZ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const TESTS = [{
  name: "EQAO",
  detail: "Province-wide assessments in Grades 3, 6, and 9 covering math and literacy. Results are published and used to compare schools across Ontario.",
  featured: true
}, {
  name: "OSSLT",
  detail: "The Grade 10 Ontario Secondary School Literacy Test. Students must pass it to earn the OSSD diploma — a single test standing between them and graduation."
}, {
  name: "FINALS",
  detail: "Grade 11 and 12 final exams are worth 30% of the course mark. One bad morning can move a final grade by a full letter."
}];
const SYMPTOMS = ["Elevated cortisol (the body's main stress hormone)", "Disrupted sleep in the weeks before testing", "Panic symptoms during the test itself", "Lower concentration and impaired memory recall", "Persistent fear of failure", "Lower self-esteem long after the test ends"];
const BELIEFS = ["Good students get high scores. The quiet message that achievement equals worth turns every test into a referendum on the student themselves.", "High scores mean intelligence. Society treats a single number as a measure of a mind — so students stop learning for curiosity and start performing for survival.", "Schools with better EQAO scores are better schools. Published rankings turn individual students into proxies for their whole community.", "Students who fail are behind. Parents, teachers, and governments can reinforce this unintentionally, especially for ELL students and students from lower-income households."];
const CYCLE = ["Belief: a score reflects who you are.", "Dread builds for weeks — sleep, appetite, and focus all suffer.", "Cortisol spikes on test day and physically impairs memory.", "The student underperforms relative to what they actually know.", "The lower score reinforces the belief — and the cycle tightens."];
const CLASSROOM_GAINS = ["More practice tests", "Repeated literacy and math drills", "Narrower, test-aligned curriculum"];
const CLASSROOM_LOSSES = ["Creative projects", "Inquiry-based learning", "Critical thinking and debate", "Arts, discussion, and exploration"];
const UNEQUAL = ["English language learners", "Students with learning disabilities", "Neurodivergent students", "Students from lower socioeconomic backgrounds", "Students already facing mental-health challenges", "Racialized students whose experiences research has repeatedly flagged"];
const BENEFITS = ["Identifies learning gaps across the province", "Tracks long-term literacy and numeracy trends", "Helps governments allocate resources", "Creates a layer of accountability for schools"];
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-4", children: "The Issue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-6xl font-bold leading-tight max-w-3xl", children: "What Is The Issue?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "The three key tests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6", children: TESTS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl p-8 card-glow ${t.featured ? "ring-2 ring-primary" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-number text-3xl", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: t.detail })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground max-w-3xl", children: "Ontario emphasizes accountability through testing. Frequency is lower than many U.S. systems, but the stakes attached to each individual test are higher." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "Mental-health effects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-muted-foreground mb-8", children: "One of the strongest criticisms of standardized testing is test anxiety. Research on adolescents consistently shows it produces:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: SYMPTOMS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-5 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s })
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-3xl text-muted-foreground leading-relaxed", children: [
        "Ontario-specific experiences show students often associate literacy testing with feeling unintelligent. A student who repeatedly struggles with EQAO may stop thinking",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: ' "I did poorly on a test" ' }),
        "and start thinking",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-highlight font-semibold", children: ` "I'm bad at school." ` }),
        "That shift is linked with lower motivation and poorer mental health."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "Societal beliefs driving the pressure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: BELIEFS.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-number text-2xl", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: b })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "The anxiety cycle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-6", children: CYCLE.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "card-glow rounded-xl p-6 flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-number text-3xl shrink-0 w-10", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: a })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-3xl text-muted-foreground italic", children: "Stress → worse performance → lower confidence → more anxiety → worse performance. Students may know the material and still underperform during testing." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "Teaching to the test" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-muted-foreground mb-8", children: "Research on Ontario EQAO found schools sometimes orient instruction around improving test outcomes rather than broader learning. What students gain in test prep, they often lose in everything else." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "More of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: CLASSROOM_GAINS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✓" }),
            g
          ] }, g)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Less of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: CLASSROOM_LOSSES.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✗" }),
            g
          ] }, g)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "Identity and self-esteem" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-muted-foreground leading-relaxed", children: 'Repeated testing affects identity formation in adolescents. Students begin to categorize themselves — "smart," "average," "bad at school" — and those labels can persist for years. Research on Ontario literacy support courses describes students entering already feeling defeated, which suggests standardized testing shapes how students see themselves, not just their transcripts.' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "Unequal effects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-muted-foreground mb-8", children: "Standardized testing does not affect every student equally. Some groups carry consistently more pressure and risk:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: UNEQUAL.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-5 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: u })
      ] }, u)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-muted-foreground", children: "Testing may measure more than knowledge — it can reflect access to support, resources, and accommodations." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8", children: "What supporters say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-muted-foreground mb-8", children: "Balanced research has to include the case for EQAO. Supporters argue standardized testing:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: BENEFITS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-xl p-5 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: "+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: b })
      ] }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-muted-foreground italic", children: "The real debate: do the benefits outweigh the mental-health costs?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card-glow rounded-2xl p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Bigger Picture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold", children: "A wider mental-health context" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-3xl", children: "School Mental Health Ontario reports rising concern about student mental health overall. Testing is unlikely to be the sole cause, but it stacks on top of social media, university competition, extracurricular expectations, grades, and future-employment worries. Between 40 and 60% of Ontario students are negatively affected by test anxiety, high-anxiety students score 12–15 points lower on average, and 45% of Canadian students report above-average academic stress." })
    ] })
  ] });
}
export {
  Page as component
};
