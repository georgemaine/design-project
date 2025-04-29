import { useSpring } from "@react-spring/web";
import { useState, useEffect, useRef } from "react";
import { computeDashOffset } from "./utils";

export function useHasMounted(ms = 10) {
  const [hasMounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, ms);
    return () => clearTimeout(timer);
  }, [ms]);
  return hasMounted;
}

export function usePreviousProp<T>(prop: T) {
  const propRef = useRef(prop);
  useEffect(() => {
    propRef.current = prop;
  }, [prop]);
  return propRef.current;
}

export function useDashOffsetSpring(enabled: boolean) {
  const reverse = useRef(!0);
  const xRef = useRef(1);
  const intervalRef = useRef<NodeJS.Timeout>();
  const [props, api] = useSpring(() => ({
      x: 1,
      from: {
        x: 1,
      },
    })),
    previousEnabled = usePreviousProp(enabled);
  useEffect(() => {
    if (enabled) {
      intervalRef.current = setInterval(() => {
        reverse.current = !reverse.current;
        xRef.current = 1 - xRef.current;
        api({
          x: xRef.current,
        });
      }, 1000);
      return () => {
        clearInterval(intervalRef.current);
      };
    }
    if (previousEnabled) {
      clearInterval(intervalRef.current);
      reverse.current = !0;
      xRef.current = 1;
      api({
        x: xRef.current,
      });
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [enabled, api, previousEnabled]);
  return props.x.to((v) => computeDashOffset(v, reverse.current));
}

export function useTimeoutEffect<T>(value: T, ms = 100) {
  const [state, set] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      return set(value);
    }, ms);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, ms]);
  return state;
}
