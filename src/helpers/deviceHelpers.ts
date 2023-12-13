// Helper function to check if the device is a touch screen
const isTouchScreen = (): boolean => "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Helper function to check the user agent against a set of mobile/tablet identifiers
const checkUserAgent = (regex: RegExp): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return regex.test(userAgent);
};

// Check for device motion and orientation capabilities
const hasMotionAndOrientation = (): boolean => {
  return "DeviceMotionEvent" in window && "DeviceOrientationEvent" in window;
};

// Estimate device performance capability
const estimatePerformance = (): boolean => {
  const isHighPerformance = window.matchMedia("(min-resolution: 2dppx)").matches;
  return isHighPerformance;
};

export const isMobile = (): boolean => {
  const mobileRegex = /iPhone|Android.+Mobile/i;
  return checkUserAgent(mobileRegex) && isTouchScreen() && !estimatePerformance();
};

export const isTablet = (): boolean => {
  const tabletRegex = /iPad|Android/i;
  return checkUserAgent(tabletRegex) && isTouchScreen() && hasMotionAndOrientation();
};

export const isMobileOrTablet = (): boolean => {
  return isMobile() || isTablet();
};

export const isDesktop = (): boolean => {
  return !isMobileOrTablet() && !isTouchScreen();
};
