const isSmallerThanBreakpoint = (breakpoint: string): boolean => {
  return window.matchMedia(`(max-width: ${breakpoint})`).matches;
};

export const isMobileOrTablet = (): boolean => {
  return isSmallerThanBreakpoint("767px");
};

export const isMobile = (): boolean => {
  return isSmallerThanBreakpoint("479px");
};
