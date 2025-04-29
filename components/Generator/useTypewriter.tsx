import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
export function useTypewriter(
  text: string,
  options?: {
    minDelay?: number;
    maxDelay?: number;
    animate?: boolean;
    startDelay?: number;
  },
) {
  const {
    minDelay = 12,
    maxDelay = 48,
    startDelay = 0,
    animate = true,
  } = options || {};

  const [visibleCount, setVisibleCount] = useState(0);
  const [isDone, setDone] = useState(false); // << new

  const [spring, api] = useSpring(() => ({
    progress: 0,
    config: { tension: 400, friction: 30, clamp: true },
  }));

  useEffect(() => {
    if (!text) return;

    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      if (visibleCount < text.length && animate) {
        const nextDelay = randomBetween(minDelay, maxDelay);

        timeout = setTimeout(() => {
          setVisibleCount((v) => v + 1);
        }, nextDelay);
      }
    };

    startTyping();

    return () => clearTimeout(timeout);
  }, [visibleCount, text, minDelay, maxDelay, animate]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setVisibleCount(0);
      setDone(false); // reset done
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, startDelay]);

  useEffect(() => {
    api.start({ progress: visibleCount });

    if (visibleCount >= text.length) {
      setDone(true);
    }
  }, [visibleCount, api, text.length]);

  return {
    element: (
      <animated.span>
        {spring.progress.to((p) => {
          const visible = Math.floor(p);
          return text.slice(0, visible);
        })}
      </animated.span>
    ),
    isDone,
  };
}
