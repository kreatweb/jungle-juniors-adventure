import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FallingLeaves } from "@/components/FallingLeaves";
import { Fireflies } from "@/components/Fireflies";
import { VineDivider } from "@/components/VineDivider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jungle Juniors — Where Kids Go Wild" },
      {
        name: "description",
        content:
          "A nature-immersive summer camp for ages 7–15. 3 days, 30 kids, 100% outdoors. No screens. No parents. No limits.",
      },
      { property: "og:title", content: "Jungle Juniors — Where Kids Go Wild" },
      {
        property: "og:description",
        content: "A nature-immersive camp experience unlike anything else.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80";

function Index() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FallingLeaves />
      <WhatsAppFloat />

      <Hero scrollY={scrollY} />
      <VineDivider />
      <WhatSection />
      <VineDivider />
      <ActivitiesSection />
      <VineDivider />
      <WhoSection />
      <VineDivider />
      <RegisterSection />
      <WhatsAppStrip />
      <Footer />
    </main>
  );
}

function Hero({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-overlay)" }}
      />
      <Fireflies count={22} />

      {/* Sun glow */}
      <div
        aria-hidden
        className="sun-glow absolute right-[-80px] top-[-60px] h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 75 / 0.7), oklch(0.7 0.2 50 / 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Animal silhouettes */}
      <span aria-hidden className="absolute left-6 top-24 text-3xl opacity-30">🦋</span>
      <span aria-hidden className="absolute right-10 bottom-32 text-4xl opacity-25">🦌</span>
      <span aria-hidden className="absolute left-1/3 bottom-16 text-2xl opacity-30">🐦</span>

      <div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">
          Jungle Juniors • Est. Wild
        </p>
        <h1 className="text-5xl leading-[1.05] text-foreground md:text-7xl">
          Where Kids{" "}
          <span className="text-gradient-ember italic">Go Wild</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          A nature-immersive camp experience unlike anything else.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="https://wa.me/919741698468"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/60 bg-background/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-background/40"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        Scroll ↓
      </div>
    </section>
  );
}

const WHAT = [
  { icon: "🌿", title: "Pure Nature", line: "Forests, rivers, open sky." },
  { icon: "⚔️", title: "Real Adventures", line: "Built for grit and grins." },
  { icon: "🔥", title: "Lifelong Memories", line: "Stories they'll never outgrow." },
];

function WhatSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="reveal mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl">What is Jungle Juniors?</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {WHAT.map((w) => (
          <div
            key={w.title}
            className="reveal lift glass rounded-2xl p-8 text-center shadow-card"
          >
            <div className="mb-4 text-5xl">{w.icon}</div>
            <h3 className="mb-2 text-2xl text-[color:var(--gold)]">{w.title}</h3>
            <p className="text-sm text-muted-foreground">{w.line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Activity = { icon: string; title: string; desc: string; href?: string };
const ACTIVITIES: Activity[] = [
  { icon: "🏕️", title: "Wild Camping", desc: "Sleep under starlit skies." },
  { icon: "🧗", title: "Rock Climbing", desc: "Scale boulders, conquer fears." },
  { icon: "🏹", title: "Archery", desc: "Aim true, breathe deep." },
  { icon: "🌊", title: "River Rafting", desc: "Ride the rushing rapids." },
  { icon: "🔥", title: "Campfire Tales", desc: "Stories, songs, sticky marshmallows." },
  { icon: "📜", title: "Read Full Itinerary", desc: "Every wild day, mapped out.", href: "/itinerary.pdf" },
];

function ActivitiesSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="reveal mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl">What They'll Do</h2>
        <p className="mt-3 text-sm text-muted-foreground">Six days of doing. Zero days of scrolling.</p>
      </header>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {ACTIVITIES.map((a) => {
          const Tag = (a.href ? "a" : "div") as "a" | "div";
          return (
            <Tag
              key={a.title}
              {...(a.href ? { href: a.href, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="reveal lift glass relative block overflow-hidden rounded-2xl p-6 shadow-card"
            >
              <div className="mb-3 text-4xl">{a.icon}</div>
              <h3 className="mb-1 text-lg text-foreground">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20"
                style={{ background: "var(--gradient-ember)" }}
              />
            </Tag>
          );
        })}
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 className="reveal text-3xl leading-tight md:text-5xl">
        Ages 7–15.{" "}
        <span className="text-gradient-ember">No screens. No parents. No limits.</span>
      </h2>
      <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
        {[
          { icon: "📅", label: "3 Days" },
          { icon: "👦", label: "30 Kids Max" },
          { icon: "🌿", label: "100% Outdoors" },
        ].map((s) => (
          <div
            key={s.label}
            className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <span className="text-xl">{s.icon}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RegisterSection() {
  return (
    <section id="register" className="relative mx-auto max-w-3xl px-6 py-24 text-center">
      <Fireflies count={10} />
      <p className="reveal text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">
        Limited Spots
      </p>
      <h2 className="reveal mt-4 text-4xl md:text-5xl">Spots fill fast.</h2>
      <p className="reveal mt-2 text-lg text-muted-foreground">Secure yours today.</p>
      <a
        href="#register"
        className="reveal cta-pulse mt-10 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-10 py-5 text-base font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105"
      >
        Reserve a Spot →
      </a>
    </section>
  );
}

function WhatsAppStrip() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 text-center"
      style={{ background: "var(--gradient-ember)" }}
    >
      <h2 className="text-3xl text-[color:var(--ember-foreground)] md:text-4xl">
        Got questions? We're one message away.
      </h2>
      <a
        href="https://wa.me/919741698468"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-transform hover:scale-105"
      >
        Message on WhatsApp
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 py-12 text-center">
      <h3 className="text-2xl text-[color:var(--gold)]">Jungle Juniors</h3>
      <p className="mt-2 text-sm text-muted-foreground">Where kids go wild.</p>
      <p className="mt-4 text-xs text-muted-foreground">
        WhatsApp:{" "}
        <a
          href="https://wa.me/919741698468"
          className="underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 97416 98468
        </a>
      </p>
    </footer>
  );
}
