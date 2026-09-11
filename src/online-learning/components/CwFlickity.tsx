"use client";

/**
 * Minimal drop-in replacement for `react-flickity-component`.
 *
 * The upstream package (v5) declares a hard React 19 peer dependency, which
 * conflicts with this app's React 18. Flickity itself is framework-agnostic,
 * so we drive it directly. The rendered DOM and the Flickity options are
 * identical to what `react-flickity-component` produced, so the CareerWise
 * styles (`.carousel`, `.carousel-cell`, `.flickity-*`) apply unchanged.
 */

import React, { useEffect, useRef } from "react";

interface CwFlickityProps {
  children: React.ReactNode;
  className?: string;
  elementType?: React.ElementType;
  options?: Record<string, unknown>;
  /** Accepted for API parity with react-flickity-component; not used. */
  disableImagesLoaded?: boolean;
  reloadOnUpdate?: boolean;
  static?: boolean;
}

const CwFlickity: React.FC<CwFlickityProps> = ({
  children,
  className,
  elementType = "div",
  options,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const instanceRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    // Flickity touches `window` at import time, so it is loaded client-side only.
    import("flickity").then(({ default: Flickity }) => {
      if (cancelled || !containerRef.current) return;
      instanceRef.current = new Flickity(containerRef.current, options ?? {});
    });

    return () => {
      cancelled = true;
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
    // `options` is a module-level constant at the call site, so this runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dynamic intrinsic element: typed loosely so this compiles against both
  // @types/react 18 and 19 (the global JSX namespace moved in v19).
  const Element = elementType as React.ElementType;

  return (
    <Element className={className} ref={containerRef}>
      {children}
    </Element>
  );
};

export default CwFlickity;
