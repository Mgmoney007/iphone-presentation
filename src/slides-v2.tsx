// src/slides-v2.tsx

import { DeviceSilhouette } from "./presentation/DeviceSilhouette";
import { TextReveal } from "./presentation/TextReveal";
import { ParallaxLayer } from "./presentation/ParallaxLayer";
import { LightSweep } from "./presentation/LightSweep";

export type SlideDef = {
  id: string;
  notesTitle?: string;
  notes?: string[];
  render: () => JSX.Element;
};

export const slidesV2: SlideDef[] = [
  {
  id: "opening",
  notesTitle: "Opening",
  notes: [
    "Pause after the first headline block.",
    "Let the device sit visually before speaking the supporting line.",
    "This slide should feel expensive, not busy.",
  ],
  render: () => (
    <div className="slide hero-slide hero-slide-premium">
      <ParallaxLayer speed={0.22} className="hero-ambient hero-ambient-left" />
      <ParallaxLayer speed={0.32} className="hero-ambient hero-ambient-right" />
      <ParallaxLayer speed={0.18} className="hero-grid-glow" />

      <div className="hero-copy premium-copy">
        <TextReveal className="hero-kicker" delay={0.08}>
          A visual history of the iPhone
        </TextReveal>

        <TextReveal className="hero-title-premium" delay={0.24}>
          The iPhone didn’t just
          <br />
          change technology.
        </TextReveal>

        <TextReveal
          className="hero-title-premium hero-title-secondary"
          delay={0.82}
        >
          It changed what people
          <br />
          expect from reality.
        </TextReveal>

        <TextReveal className="hero-support" delay={1.18}>
          From a single multi-touch breakthrough to the device that reshaped
          communication, photography, software, identity, and everyday life.
        </TextReveal>
      </div>

      <div className="hero-visual-premium">
        <div className="hero-light-source" />
        <div className="hero-device-stage">
          <div className="hero-device-halo" />
          <div className="hero-device-reflection" />

          <ParallaxLayer speed={0.28} className="hero-device-floating">
            <div className="hero-device-wrap premium-device-wrap">
              <img
                src="/iphone-hero.png"
                className="hero-device-real"
                alt="Enhanced iPhone hero render"
              />
              <LightSweep delay={0.95} />
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </div>
  ),
},

  {
    id: "2007-origin",
    notesTitle: "2007 Origin",
    notes: [
      "Frame this as a behavioral reset, not a phone launch.",
      "Pause after 'Before this...'",
    ],
    render: () => (
      <div className="slide split-slide">
        <div className="visual-panel center-stack">
          <ParallaxLayer speed={0.45}>
            <DeviceSilhouette era="original" />
          </ParallaxLayer>
        </div>

        <div className="text-panel">
          <TextReveal className="eyebrow" delay={0.1}>
            2007 • The Original iPhone
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            Before this,
            <br />
            we adapted to technology.
          </TextReveal>

          <TextReveal className="subcopy" delay={0.7}>
            The original iPhone unified phone, iPod, and internet into a
            touchscreen device that made direct manipulation feel natural.
          </TextReveal>
        </div>
      </div>
    ),
  },

  {
    id: "milestone-app-store",
    notesTitle: "App Store",
    notes: [
      "This is where the iPhone becomes a platform.",
      "Emphasize behavior, not software distribution.",
    ],
    render: () => (
      <div className="slide milestone-slide">
        <div className="milestone-left">
          <TextReveal className="eyebrow" delay={0.1}>
            2008 • App Store
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            The phone stopped being
            <br />
            a device.
          </TextReveal>

          <TextReveal className="headline dimmed" delay={0.95}>
            It became an ecosystem.
          </TextReveal>

          <TextReveal className="subcopy" delay={1.25}>
            Software moved from utility to everyday behavior. Navigation,
            communication, entertainment, banking, work, and media all began to
            collapse into one object.
          </TextReveal>
        </div>

        <div className="milestone-right floating-card-grid">
          <TextReveal className="app-card" delay={0.5}>Maps</TextReveal>
          <TextReveal className="app-card" delay={0.62}>Camera</TextReveal>
          <TextReveal className="app-card" delay={0.74}>Music</TextReveal>
          <TextReveal className="app-card" delay={0.86}>Messages</TextReveal>
          <TextReveal className="app-card" delay={0.98}>Banking</TextReveal>
          <TextReveal className="app-card" delay={1.1}>Work</TextReveal>
        </div>
      </div>
    ),
  },

  {
    id: "retina",
    notesTitle: "Retina Display",
    notes: [
      "This is a perception slide.",
      "Say: 'screens stopped feeling digital and started feeling physical.'",
    ],
    render: () => (
      <div className="slide split-slide">
        <div className="visual-panel center-stack">
          <ParallaxLayer speed={0.5}>
            <DeviceSilhouette era="iphone4" />
          </ParallaxLayer>
        </div>

        <div className="text-panel">
          <TextReveal className="eyebrow" delay={0.1}>
            2010 • Retina Display
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            Screens stopped feeling
            <br />
            digital.
          </TextReveal>

          <TextReveal className="headline dimmed" delay={0.95}>
            They started feeling real.
          </TextReveal>

          <TextReveal className="subcopy" delay={1.2}>
            This was not just higher resolution. It changed how people trusted
            the screen as a place for reading, photos, apps, and everyday life.
          </TextReveal>
        </div>
      </div>
    ),
  },

  {
    id: "large-screen",
    notesTitle: "Large Screen Era",
    notes: [
      "Frame it as an expansion of utility.",
      "This is the moment the phone becomes a primary screen.",
    ],
    render: () => (
      <div className="slide split-slide">
        <div className="visual-panel center-stack">
          <ParallaxLayer speed={0.5}>
            <DeviceSilhouette era="iphone6" />
          </ParallaxLayer>
        </div>

        <div className="text-panel">
          <TextReveal className="eyebrow" delay={0.1}>
            2014 • Larger Displays
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            The iPhone became
            <br />
            your primary screen.
          </TextReveal>

          <TextReveal className="subcopy" delay={0.8}>
            Bigger displays made the device more central to media, work,
            commerce, and everyday attention. It was no longer a companion.
            It was the center of gravity.
          </TextReveal>
        </div>
      </div>
    ),
  },

  {
    id: "iphonex",
    notesTitle: "iPhone X",
    notes: [
      "Make this a reveal moment.",
      "Pause after 'The button disappeared.'",
    ],
    render: () => (
      <div className="slide split-slide">
        <div className="visual-panel center-stack">
          <ParallaxLayer speed={0.5}>
            <DeviceSilhouette era="iphonex" />
          </ParallaxLayer>
        </div>

        <div className="text-panel">
          <TextReveal className="eyebrow" delay={0.1}>
            2017 • iPhone X
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            The button disappeared.
          </TextReveal>

          <TextReveal className="headline dimmed" delay={0.95}>
            So did the friction.
          </TextReveal>

          <TextReveal className="subcopy" delay={1.2}>
            Gesture navigation and Face ID made interaction feel more direct,
            more fluid, and more invisible. The interface receded. The behavior
            remained.
          </TextReveal>
        </div>
      </div>
    ),
  },

  {
    id: "modern-era",
    notesTitle: "Modern Era",
    notes: [
      "Focus on computational photography, silicon, identity, AI.",
      "Use a calmer tone here. It should feel mature, not flashy.",
    ],
    render: () => (
      <div className="slide impact-slide">
        <div className="content-wrap">
          <TextReveal className="eyebrow" delay={0.1}>
            2020+ • Computational Era
          </TextReveal>

          <TextReveal className="headline" delay={0.3}>
            The hardware kept improving.
          </TextReveal>

          <TextReveal className="headline dimmed" delay={0.95}>
            The intelligence took over.
          </TextReveal>

          <div className="impact-list">
            {[
              "Photography became computational",
              "Silicon made mobile performance feel desktop-class",
              "Identity became ambient",
              "The device became context-aware",
            ].map((item, i) => (
              <TextReveal
                key={item}
                className="impact-item"
                delay={1.2 + i * 0.12}
              >
                {item}
              </TextReveal>
            ))}
          </div>
        </div>

        <div className="modern-device-cluster">
          <ParallaxLayer speed={0.35}>
            <DeviceSilhouette era="modern" />
          </ParallaxLayer>
        </div>
      </div>
    ),
  },

  {
    id: "timeline",
    notesTitle: "Timeline",
    notes: [
      "Use this as the compression slide.",
      "Speak less here. Let the audience scan.",
    ],
    render: () => (
      <div className="slide timeline-slide">
        <TextReveal className="eyebrow center" delay={0.1}>
          Evolution Timeline
        </TextReveal>

        <TextReveal className="headline center" delay={0.3}>
          Every generation removed friction.
        </TextReveal>

        <div className="timeline-row-v2">
          {[
            { year: "2007", era: "original" },
            { year: "2010", era: "iphone4" },
            { year: "2014", era: "iphone6" },
            { year: "2017", era: "iphonex" },
            { year: "Today", era: "modern" },
          ].map((item, i) => (
            <TextReveal key={item.year} className="timeline-node-v2" delay={0.45 + i * 0.12}>
              <DeviceSilhouette era={item.era as any} className="timeline-mini" />
              <div className="timeline-year">{item.year}</div>
            </TextReveal>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "close",
    notesTitle: "Closing",
    notes: [
      "Hard cut to this slide if possible.",
      "Deliver the last line slowly.",
    ],
    render: () => (
      <div className="slide outro-slide">
        <TextReveal className="headline center" delay={0.3}>
          The iPhone didn’t just
          <br />
          change what we do.
        </TextReveal>

        <TextReveal className="headline center dimmed" delay={1.2}>
          It changed what we tolerate.
        </TextReveal>
      </div>
    ),
  },
];