import { useState, useCallback } from "react";

export const useModal = <T extends string>(keys: T[]) => {
  const initial = Object.fromEntries(keys.map((k) => [k, false])) as Record<
    T,
    boolean
  >;
  const [state, setState] = useState(initial);

  const open = useCallback((key: T) => {
    setState((prev) => ({ ...prev, [key]: true }));
  }, []);

  const close = useCallback((key: T) => {
    setState((prev) => ({ ...prev, [key]: false }));
  }, []);

  const toggle = useCallback((key: T) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const isOpen = useCallback((key: T) => state[key], [state]);

  return { open, close, toggle, isOpen, state };
};
