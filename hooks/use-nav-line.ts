"use client";

import { useEffect, useRef, type MouseEvent } from "react";

const BASE_WIDTH = 56;

type Side = "left" | "right";

function lineSelector(side: Side) {
  return side === "left" ? ".nav-line-left" : ".nav-line-right";
}

function opacityVar(side: Side) {
  return side === "left" ? "--navLineOpacity" : "--navLineRightOpacity";
}

export function useNavLine(pinnedLeft: boolean) {
  const headerRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLButtonElement>(null);

  const show = (side: Side, el: HTMLElement) => {
    const header = headerRef.current;
    if (!header) return;

    const headerBox = header.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const offset = `${box.left - headerBox.left}px`;
    const scaleX = String(box.width / BASE_WIDTH);
    const hidden = header.style.getPropertyValue(opacityVar(side)) !== "1";
    const line = header.querySelector(lineSelector(side));

    if (side === "left") {
      header.style.setProperty("--NavElOffset", offset);
      header.style.setProperty("--NavElScaleX", scaleX);
    } else {
      header.style.setProperty("--NavElRightOffset", offset);
      header.style.setProperty("--NavElRightScaleX", scaleX);
    }

    if (hidden && line instanceof HTMLElement) {
      line.classList.add("nav-line-snap");
      void line.offsetWidth;
      header.style.setProperty(opacityVar(side), "1");
      requestAnimationFrame(() => line.classList.remove("nav-line-snap"));
      return;
    }

    header.style.setProperty(opacityVar(side), "1");
  };

  const hide = (side: Side) => {
    const header = headerRef.current;
    if (!header) return;

    if (side === "left" && pinnedLeft && pinnedRef.current) {
      show("left", pinnedRef.current);
      return;
    }

    header.style.setProperty(opacityVar(side), "0");
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (pinnedLeft && pinnedRef.current) {
      show("left", pinnedRef.current);
      return;
    }

    header.style.setProperty("--navLineOpacity", "0");
  }, [pinnedLeft]);

  const bind = (side: Side) => ({
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      show(side, event.currentTarget);
    },
    onMouseLeave: () => hide(side),
  });

  return { headerRef, pinnedRef, bind };
}
