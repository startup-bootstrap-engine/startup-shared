import mobile from "is-mobile";

const isSmallerThanBreakpoint = (breakpoint: string): boolean => {
  const mql = window.matchMedia(
    `(max-width: ${breakpoint}) and (orientation: portrait), (max-height: ${breakpoint}) and (orientation: landscape)`
  );
  return mql.matches;
};

export const isMobileOrTablet = (): boolean => {
  return mobile({ tablet: true }) ?? isSmallerThanBreakpoint("767px");
};

export const isMobile = (): boolean => {
  return mobile() ?? isSmallerThanBreakpoint("479px");
};
