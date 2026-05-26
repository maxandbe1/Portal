// Minimal animation utilities for Portal OS
// Smooth fades, slides, and presence transitions.

import { useEffect, useState } from "react";

export function FadeIn({ children, duration = 200, delay = 0, style = {} }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SlideUp({
  children,
  duration = 240,
  offset = 12,
  delay = 0,
  style = {},
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        transform: ready ? "translateY(0px)" : `translateY(${offset}px)`,
        opacity: ready ? 1 : 0,
        transition: `all ${duration}ms ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Presence({ show, children, duration = 180 }) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const t = setTimeout(() => setRender(false), duration);
      return () => clearTimeout(t);
    }
  }, [show, duration]);

  if (!render) return null;

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
      }}
    >
      {children}
    </div>
  );
}
