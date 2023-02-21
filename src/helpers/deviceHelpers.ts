import { isMobile as detectMobile, isTablet as detectTablet } from "react-device-detect";

const isSmallerThanBreakpoint = (breakpoint: string): boolean => {
  const mql = window.matchMedia(
    `(max-width: ${breakpoint}) and (orientation: portrait), (max-height: ${breakpoint}) and (orientation: landscape)`
  );

  return mql.matches;
};

// here we use a lib for initial detection, then we fallback for screen size if something happens.

export const isMobileOrTablet = (): boolean => {
  return detectMobile ?? detectTablet ?? isSmallerThanBreakpoint("767px");
};

export const isMobile = (): boolean => {
  return detectMobile ?? isSmallerThanBreakpoint("479px");
};
