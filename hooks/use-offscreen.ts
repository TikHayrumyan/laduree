"use client";

import { useEffect, useRef, useState } from "react";

export function useOffscreen() {
  const ref = useRef<HTMLDivElement>(null);
  const [offscreen, setOffscreen] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setOffscreen(!entry.isIntersecting);
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return [ref, offscreen] as const;
}
