"use client";

/**
 * Signature Bullion Gold Trading L.L.C. — letter-by-letter screensaver
 *
 * Usage (idle mode: appears after 60s of inactivity, any input dismisses it):
 *   import Screensaver from "./screensaver";
 *   <Screensaver />                       // put once in your root layout / App
 *
 * Other options:
 *   <Screensaver idleMs={30000} />        // custom idle time
 *   <Screensaver active={show} onClose={() => setShow(false)} />   // manual control / preview
 *   <Screensaver logoSrc="/images/logo.png" />
 *
 * Put logo.png in your /public folder (or pass logoSrc).
 * The wordmark is rendered as live text so every letter can animate on its own.
 */

import { useCallback, useEffect, useMemo, useState } from "react";

type ScreensaverProps = {
  /** Idle time before the screensaver starts (ms). Ignored when `active` is set. */
  idleMs?: number;
  /** Control visibility yourself. Leave undefined for automatic idle mode. */
  active?: boolean;
  /** Called when the visitor dismisses the screensaver. */
  onClose?: () => void;
  /** Path to the logo mark image. */
  logoSrc?: string;
};

const ARABIC = "سجنيتشر بوليون لتجارة الذهب ذ.م.م";
const LINE_1 = "SIGNATURE";
const LINE_2 = "BULLION GOLD TRADING L.L.C.";

// Timing (ms)
const T = {
  logoIn: 1400,
  arabicStep: 80,
  gap: 220,
  sigStep: 130,
  subGap: 160,
  subStep: 55,
  hold: 6500,
  eraseSubStep: 20,
  eraseSigStep: 45,
  eraseArabicStep: 22,
  logoOut: 900,
  rest: 700,
};

const FONT_LINK_ID = "signature-screensaver-fonts";

function buildTimeline(a: number, s: number, b: number) {
  const arabicStart = T.logoIn;
  const arabicEnd = arabicStart + a * T.arabicStep;
  const sigStart = arabicEnd + T.gap;
  const sigEnd = sigStart + s * T.sigStep;
  const subStart = sigEnd + T.subGap;
  const subEnd = subStart + b * T.subStep;
  const holdEnd = subEnd + T.hold;
  const eraseSubEnd = holdEnd + b * T.eraseSubStep;
  const eraseSigEnd = eraseSubEnd + s * T.eraseSigStep;
  const eraseArabicEnd = eraseSigEnd + a * T.eraseArabicStep;
  const total = eraseArabicEnd + T.logoOut + T.rest;
  return {
    arabicStart, arabicEnd, sigStart, sigEnd, subStart, subEnd,
    holdEnd, eraseSubEnd, eraseSigEnd, eraseArabicEnd, total,
  };
}

/** Count of revealed letters at time t: types in, holds, then erases from the end. */
function revealCount(
  t: number, n: number, start: number, step: number,
  eraseStart: number, eraseStep: number,
) {
  if (t < start) return 0;
  if (t < eraseStart) return Math.min(n, Math.floor((t - start) / step) + 1);
  return Math.max(0, n - Math.ceil((t - eraseStart) / eraseStep));
}

const randomOffset = () => ({
  x: Math.round((Math.random() * 2 - 1) * 14),
  y: Math.round((Math.random() * 2 - 1) * 12),
});

export default function Screensaver({
  idleMs = 60_000,
  active,
  onClose,
  logoSrc = "/logo.png",
}: ScreensaverProps) {
  const controlled = active !== undefined;
  const [idle, setIdle] = useState(false);
  const visible = controlled ? !!active : idle;

  const arabicChars = useMemo(() => Array.from(ARABIC), []);
  const sigChars = useMemo(() => Array.from(LINE_1), []);
  const subChars = useMemo(() => Array.from(LINE_2), []);
  const timeline = useMemo(
    () => buildTimeline(arabicChars.length, sigChars.length, subChars.length),
    [arabicChars, sigChars, subChars],
  );

  const [logoOn, setLogoOn] = useState(false);
  const [arabicN, setArabicN] = useState(0);
  const [sigN, setSigN] = useState(0);
  const [subN, setSubN] = useState(0);
  const [glint, setGlint] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Load fonts once.
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&family=Noto+Kufi+Arabic:wght@700&display=swap";
    document.head.appendChild(link);
  }, []);

  const dismiss = useCallback(() => {
    if (!controlled) setIdle(false);
    onClose?.();
  }, [controlled, onClose]);

  // Idle detection (automatic mode only).
  useEffect(() => {
    if (controlled || visible) return;
    let timer: ReturnType<typeof setTimeout>;
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), idleMs);
    };
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "wheel", "scroll"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();
    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [controlled, visible, idleMs]);

  // Dismiss on any input while visible.
  useEffect(() => {
    if (!visible) return;
    const openedAt = Date.now();
    let last: { x: number; y: number } | null = null;

    const handler = (e: Event) => {
      if (Date.now() - openedAt < 800) return; // grace period
      if (e.type === "mousemove") {
        const m = e as MouseEvent;
        if (!last) {
          last = { x: m.clientX, y: m.clientY };
          return;
        }
        if (Math.abs(m.clientX - last.x) + Math.abs(m.clientY - last.y) < 8) return;
      }
      dismiss();
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "wheel"];
    events.forEach((e) => window.addEventListener(e, handler, { passive: true }));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      events.forEach((e) => window.removeEventListener(e, handler));
      document.body.style.overflow = prevOverflow;
    };
  }, [visible, dismiss]);

  // Animation loop.
  useEffect(() => {
    if (!visible) {
      setLogoOn(false);
      setArabicN(0);
      setSigN(0);
      setSubN(0);
      setGlint(false);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLogoOn(true);
      setArabicN(arabicChars.length);
      setSigN(sigChars.length);
      setSubN(subChars.length);
      setGlint(false);
      return;
    }

    const tl = timeline;
    let raf = 0;
    let start = performance.now();

    const loop = (now: number) => {
      let t = now - start;
      if (t >= tl.total) {
        start = now;
        t = 0;
        setOffset(randomOffset()); // drift to a new spot each cycle (prevents burn-in)
      }
      setLogoOn(t < tl.eraseArabicEnd);
      setArabicN(
        revealCount(t, arabicChars.length, tl.arabicStart, T.arabicStep, tl.eraseSigEnd, T.eraseArabicStep),
      );
      setSigN(
        revealCount(t, sigChars.length, tl.sigStart, T.sigStep, tl.eraseSubEnd, T.eraseSigStep),
      );
      setSubN(
        revealCount(t, subChars.length, tl.subStart, T.subStep, tl.holdEnd, T.eraseSubStep),
      );
      setGlint(t >= tl.subEnd + 300 && t < tl.holdEnd);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [visible, timeline, arabicChars, sigChars, subChars]);

  if (!visible) return null;

  const arabicLeftInset = (1 - arabicN / arabicChars.length) * 100;

  const renderLetters = (chars: string[], count: number, glintBase: number) =>
    chars.map((ch, i) =>
      ch === " " ? (
        <span key={i} className="ss-space" aria-hidden="true" />
      ) : (
        <span
          key={i}
          aria-hidden="true"
          className={`ss-letter${i < count ? " on" : ""}${glint ? " glint" : ""}`}
          style={glint ? { animationDelay: `${(glintBase + i) * 45}ms` } : undefined}
        >
          {ch}
        </span>
      ),
    );

  return (
    <div
      className="ss-root"
      role="dialog"
      aria-label="Signature Bullion Gold Trading L.L.C. screensaver. Press any key to close."
    >
      <style>{CSS}</style>

      <div
        className="ss-stage"
        style={{ transform: `translate(${offset.x}vw, ${offset.y}vh)` }}
      >
        <div className="ss-lockup" aria-label="Signature Bullion Gold Trading L.L.C.">
          <img
            src={logoSrc}
            alt=""
            className={`ss-logo${logoOn ? " on" : ""}`}
            draggable={false}
          />

          <div className="ss-arabic-wrap" lang="ar" dir="rtl" aria-hidden="true">
            <span
              className={`ss-arabic${glint ? " glint" : ""}`}
              style={{ clipPath: `inset(-10% 0 -10% ${arabicLeftInset}%)` }}
            >
              {ARABIC}
            </span>
          </div>

          <div className="ss-line ss-line-1">{renderLetters(sigChars, sigN, 0)}</div>
          <div className="ss-line ss-line-2">
            {renderLetters(subChars, subN, sigChars.length)}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
.ss-root {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  overflow: hidden;
  cursor: none;
  background: radial-gradient(ellipse at 50% 42%, #2b1d0d 0%, #150e07 52%, #0a0703 100%);
  display: grid;
  place-items: center;
}

.ss-stage {
  will-change: transform;
}

.ss-lockup {
  --gold: linear-gradient(180deg, #f8ec9c 0%, #dcb65c 42%, #a97a2a 72%, #7d4f17 100%);
  font-size: clamp(2.1rem, 8.5vw, 7rem);
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  font-family: "Archivo", "Helvetica Neue", Arial, sans-serif;
  line-height: 1;
  user-select: none;
}

.ss-logo {
  align-self: center;
  height: 2.1em;
  width: auto;
  margin-bottom: 0.32em;
  opacity: 0;
  transform: scale(0.86);
  filter: blur(8px) drop-shadow(0 0 0 rgba(236, 200, 100, 0));
  transition: opacity 900ms ease, transform 1200ms cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 1200ms ease;
}
.ss-logo.on {
  opacity: 1;
  transform: scale(1);
  filter: blur(0) drop-shadow(0 0 0.35em rgba(236, 200, 100, 0.28));
}

.ss-arabic-wrap {
  text-align: center;
  margin-bottom: 0.18em;
  min-height: 0.8em;
}
.ss-arabic {
  display: inline-block;
  font-family: "Noto Kufi Arabic", "Segoe UI", Tahoma, sans-serif;
  font-weight: 700;
  font-size: 0.52em;
  line-height: 1.5;
  padding: 0 0.1em;
  background: var(--gold);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: clip-path 160ms linear;
}

.ss-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  white-space: nowrap;
}
.ss-line-1 {
  font-weight: 800;
  font-size: 1em;
  letter-spacing: 0.01em;
}
.ss-line-2 {
  font-weight: 400;
  font-size: 0.4em;
  margin-top: 0.3em;
  letter-spacing: 0.02em;
}

.ss-space {
  display: inline-block;
  flex: 0 0 0.45em;
}

.ss-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.32em) scale(0.9);
  filter: blur(6px);
  background: var(--gold);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  padding: 0.04em 0;
  transition: opacity 420ms ease,
    transform 560ms cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 420ms ease;
}
.ss-letter.on {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* A brief wave of light travels letter by letter once the wordmark is complete. */
.ss-letter.glint,
.ss-arabic.glint {
  animation: ss-glint 1.5s ease-in-out 1 both;
}
.ss-arabic.glint {
  animation-duration: 2s;
}
@keyframes ss-glint {
  0%   { filter: brightness(1) drop-shadow(0 0 0 rgba(255, 226, 140, 0)); }
  40%  { filter: brightness(1.7) drop-shadow(0 0 0.14em rgba(255, 226, 140, 0.75)); }
  100% { filter: brightness(1) drop-shadow(0 0 0 rgba(255, 226, 140, 0)); }
}

@media (prefers-reduced-motion: reduce) {
  .ss-logo, .ss-letter, .ss-arabic { transition: none; }
  .ss-letter.glint, .ss-arabic.glint { animation: none; }
}
`;
