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
  const leftBarRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLButtonElement>(null);

  const hostFor = (side: Side) =>
    side === "left" ? (leftBarRef.current ?? headerRef.current) : headerRef.current;

  const show = (side: Side, el: HTMLElement) => {
    const host = hostFor(side);
    if (!host) return;

    const origin = host.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const offset = `${box.left - origin.left}px`;
    const scaleX = String(box.width / BASE_WIDTH);
    const hidden = host.style.getPropertyValue(opacityVar(side)) !== "1";
    const line = host.querySelector(lineSelector(side));

    if (side === "left") {
      host.style.setProperty("--NavElOffset", offset);
      host.style.setProperty("--NavElScaleX", scaleX);
    } else {
      host.style.setProperty("--NavElRightOffset", offset);
      host.style.setProperty("--NavElRightScaleX", scaleX);
    }

    if (hidden && line instanceof HTMLElement) {
      line.classList.add("nav-line-snap");
      void line.offsetWidth;
      host.style.setProperty(opacityVar(side), "1");
      requestAnimationFrame(() => line.classList.remove("nav-line-snap"));
      return;
    }

    host.style.setProperty(opacityVar(side), "1");
  };

  const hide = (side: Side) => {
    const host = hostFor(side);
    if (!host) return;

    if (side === "left" && pinnedLeft && pinnedRef.current) {
      show("left", pinnedRef.current);
      return;
    }

    host.style.setProperty(opacityVar(side), "0");
  };

  useEffect(() => {
    const header = headerRef.current;
    const leftHost = leftBarRef.current ?? header;
    if (!header || !leftHost) return;

    if (pinnedLeft && pinnedRef.current) {
      header.style.setProperty("--navLineRightOpacity", "0");
      show("left", pinnedRef.current);
      return;
    }

    leftHost.style.setProperty("--navLineOpacity", "0");
  }, [pinnedLeft]);

  const bind = (side: Side) => {
    if (pinnedLeft) return {};

    return {
      onMouseEnter: (event: MouseEvent<HTMLElement>) => {
        show(side, event.currentTarget);
      },
      onMouseLeave: () => hide(side),
    };
  };

  return { headerRef, leftBarRef, pinnedRef, bind };
}
