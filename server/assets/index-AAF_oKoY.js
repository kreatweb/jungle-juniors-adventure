import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
const LEAVES = ["🍃", "🌿", "🍃", "🌱", "🍃", "🦋", "🌿", "🍂"];
function FallingLeaves() {
  const leaves = Array.from({ length: 28 }, (_, i) => {
    const left = i * 4.7 % 100;
    const duration = 9 + i * 2.3 % 12;
    const delay = i * 0.9 % 14;
    const size = 1.1 + i * 0.4 % 1.6;
    const emoji = LEAVES[i % LEAVES.length];
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: "leaf",
        style: {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          fontSize: `${size}rem`
        },
        children: emoji
      },
      i
    );
  });
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[1]", children: leaves });
}
function Fireflies({ count = 18 }) {
  const flies = Array.from({ length: count }, (_, i) => {
    const top = i * 13 % 100;
    const left = i * 17 % 100;
    const duration = 6 + i * 2 % 8;
    const delay = i * 0.7 % 6;
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: "firefly",
        style: {
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`
        }
      },
      i
    );
  });
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: flies });
}
function VineDivider() {
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "relative flex items-center justify-center py-10", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 600 40", className: "w-full max-w-3xl h-10 text-[color:var(--gold)]", fill: "none", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 20 Q 75 0 150 20 T 300 20 T 450 20 T 600 20",
        stroke: "currentColor",
        strokeWidth: "1.5",
        opacity: "0.6"
      }
    ),
    /* @__PURE__ */ jsxs("g", { fill: "currentColor", opacity: "0.85", children: [
      /* @__PURE__ */ jsx("path", { d: "M150 20 q -6 -10 -16 -8 q 4 8 16 8 z" }),
      /* @__PURE__ */ jsx("path", { d: "M300 20 q 6 -12 18 -8 q -4 10 -18 8 z" }),
      /* @__PURE__ */ jsx("path", { d: "M450 20 q -6 -10 -16 -8 q 4 8 16 8 z" }),
      /* @__PURE__ */ jsx("circle", { cx: "75", cy: "14", r: "2" }),
      /* @__PURE__ */ jsx("circle", { cx: "525", cy: "26", r: "2" })
    ] })
  ] }) });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://wa.me/919741698468",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110",
      children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7", fill: "currentColor" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" })
      ]
    }
  );
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const HERO_IMG = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80";
function Index() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(FallingLeaves, {}),
    /* @__PURE__ */ jsx(WhatsAppFloat, {}),
    /* @__PURE__ */ jsx(Hero, { scrollY }),
    /* @__PURE__ */ jsx(VineDivider, {}),
    /* @__PURE__ */ jsx(WhatSection, {}),
    /* @__PURE__ */ jsx(VineDivider, {}),
    /* @__PURE__ */ jsx(ActivitiesSection, {}),
    /* @__PURE__ */ jsx(VineDivider, {}),
    /* @__PURE__ */ jsx(WhoSection, {}),
    /* @__PURE__ */ jsx(VineDivider, {}),
    /* @__PURE__ */ jsx(RegisterSection, {}),
    /* @__PURE__ */ jsx(WhatsAppStrip, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Hero({
  scrollY
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-cover bg-center", style: {
      backgroundImage: `url(${HERO_IMG})`,
      transform: `translateY(${scrollY * 0.4}px) scale(1.1)`
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", style: {
      background: "var(--gradient-overlay)"
    } }),
    /* @__PURE__ */ jsx(Fireflies, { count: 22 }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "sun-glow absolute right-[-80px] top-[-60px] h-72 w-72 rounded-full", style: {
      background: "radial-gradient(circle, oklch(0.85 0.18 75 / 0.7), oklch(0.7 0.2 50 / 0.2) 50%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-6 top-24 text-3xl opacity-30", children: "🦋" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute right-10 bottom-32 text-4xl opacity-25", children: "🦌" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/3 bottom-16 text-2xl opacity-30", children: "🐦" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-3xl px-6 text-center", style: {
      transform: `translateY(${scrollY * -0.15}px)`
    }, children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]", children: "Jungle Juniors • Est. Wild" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl leading-[1.05] text-foreground md:text-7xl", children: [
        "Where Kids",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-ember italic", children: "Go Wild" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg", children: "A nature-immersive camp experience unlike anything else." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx("a", { href: "#register", className: "cta-pulse inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105", children: "Register Now" }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/919741698468", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/60 bg-background/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-background/40", children: "Chat on WhatsApp" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60", children: "Scroll ↓" })
  ] });
}
const WHAT = [{
  icon: "🌿",
  title: "Pure Nature",
  line: "Forests, rivers, open sky."
}, {
  icon: "⚔️",
  title: "Real Adventures",
  line: "Built for grit and grins."
}, {
  icon: "🔥",
  title: "Lifelong Memories",
  line: "Stories they'll never outgrow."
}];
function WhatSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsx("header", { className: "reveal mx-auto mb-14 max-w-2xl text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl", children: "What is Jungle Juniors?" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: WHAT.map((w) => /* @__PURE__ */ jsxs("div", { className: "reveal lift glass rounded-2xl p-8 text-center shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 text-5xl", children: w.icon }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl text-[color:var(--gold)]", children: w.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: w.line })
    ] }, w.title)) })
  ] });
}
const ACTIVITIES = [{
  icon: "🏕️",
  title: "Wild Camping",
  desc: "Sleep under starlit skies."
}, {
  icon: "🧗",
  title: "Rock Climbing",
  desc: "Scale boulders, conquer fears."
}, {
  icon: "🏹",
  title: "Archery",
  desc: "Aim true, breathe deep."
}, {
  icon: "🌊",
  title: "River Rafting",
  desc: "Ride the rushing rapids."
}, {
  icon: "🔥",
  title: "Campfire Tales",
  desc: "Stories, songs, sticky marshmallows."
}, {
  icon: "📜",
  title: "Read Full Itinerary",
  desc: "Every wild day, mapped out.",
  href: "/itinerary.pdf"
}];
function ActivitiesSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsxs("header", { className: "reveal mx-auto mb-14 max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl", children: "What They'll Do" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Six days of doing. Zero days of scrolling." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6", children: ACTIVITIES.map((a) => {
      const Tag = a.href ? "a" : "div";
      return /* @__PURE__ */ jsxs(Tag, { ...a.href ? {
        href: a.href,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {}, className: "reveal lift glass relative block overflow-hidden rounded-2xl p-6 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 text-4xl", children: a.icon }),
        /* @__PURE__ */ jsx("h3", { className: "mb-1 text-lg text-foreground", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: a.desc }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20", style: {
          background: "var(--gradient-ember)"
        } })
      ] }, a.title);
    }) })
  ] });
}
function WhoSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-4xl px-6 py-20 text-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "reveal text-3xl leading-tight md:text-5xl", children: [
      "Ages 7–15.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-ember", children: "No screens. No parents. No limits." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "reveal mt-12 flex flex-wrap items-center justify-center gap-4", children: [{
      icon: "📅",
      label: "3 Days"
    }, {
      icon: "👦",
      label: "30 Kids Max"
    }, {
      icon: "🌿",
      label: "100% Outdoors"
    }].map((s) => /* @__PURE__ */ jsxs("div", { className: "glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xl", children: s.icon }),
      /* @__PURE__ */ jsx("span", { children: s.label })
    ] }, s.label)) })
  ] });
}
function RegisterSection() {
  return /* @__PURE__ */ jsxs("section", { id: "register", className: "relative mx-auto max-w-3xl px-6 py-24 text-center", children: [
    /* @__PURE__ */ jsx(Fireflies, { count: 10 }),
    /* @__PURE__ */ jsx("p", { className: "reveal text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]", children: "Limited Spots" }),
    /* @__PURE__ */ jsx("h2", { className: "reveal mt-4 text-4xl md:text-5xl", children: "Spots fill fast." }),
    /* @__PURE__ */ jsx("p", { className: "reveal mt-2 text-lg text-muted-foreground", children: "Secure yours today." }),
    /* @__PURE__ */ jsx("a", { href: "#register", className: "reveal cta-pulse mt-10 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-10 py-5 text-base font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105", children: "Reserve a Spot →" })
  ] });
}
function WhatsAppStrip() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden px-6 py-16 text-center", style: {
    background: "var(--gradient-ember)"
  }, children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl text-[color:var(--ember-foreground)] md:text-4xl", children: "Got questions? We're one message away." }),
    /* @__PURE__ */ jsx("a", { href: "https://wa.me/919741698468", target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-transform hover:scale-105", children: "Message on WhatsApp" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative px-6 py-12 text-center", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl text-[color:var(--gold)]", children: "Jungle Juniors" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Where kids go wild." }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
      "WhatsApp:",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/919741698468", className: "underline-offset-4 hover:underline", target: "_blank", rel: "noopener noreferrer", children: "+91 97416 98468" })
    ] })
  ] });
}
export {
  Index as component
};
