import { isMobileOnly as detectIsMobileOnly, isMobile as detectIsMobileOrTablet } from "mobile-device-detect";

const isSmallerThanBreakpoint = (breakpoint: string): boolean => {
  const mql = window.matchMedia(
    `(max-width: ${breakpoint}) and (orientation: portrait), (max-height: ${breakpoint}) and (orientation: landscape)`
  );

  return mql.matches;
};

export const isMobileOrTablet = (): boolean => {
  return detectIsMobileOrTablet ?? (isSmallerThanBreakpoint("767px") && !isSmallerThanBreakpoint("479px"));
};

export const isMobile = (): boolean => {
  return detectIsMobileOnly ?? isSmallerThanBreakpoint("479px");
};
