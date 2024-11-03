import { useCallback } from "react";

interface IUseText {
  capitalizeFirstLetter: (string: string) => string;
  toLowerCase: (string: string) => string;
  toUpperCase: (string: string) => string;
  reverseString: (string: string) => string;
}

const useText = (): IUseText => {
  const capitalizeFirstLetter = useCallback((string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }, []);

  const toLowerCase = useCallback((string: string): string => {
    return string.toLowerCase();
  }, []);

  const toUpperCase = useCallback((string: string): string => {
    return string.toUpperCase();
  }, []);

  const reverseString = useCallback((string: string): string => {
    return string.split("").reverse().join("");
  }, []);

  return {
    capitalizeFirstLetter,
    toLowerCase,
    toUpperCase,
    reverseString,
  };
};

export default useText;
