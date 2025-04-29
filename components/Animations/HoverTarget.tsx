import { cn, getIsTouchDevice } from "@/lib/utils";
import { SpringValue, useSpring } from "@react-spring/web";
import React, { useRef, useState, useCallback, useEffect } from "react";

interface HoverTargetProps {
  enabled?: boolean | undefined;
  inline?: boolean | undefined;
  className?: string | undefined;
  children: (hover: SpringValue<number>) => React.ReactNode;
}

const HoverTarget = (props: HoverTargetProps) => {
  const { enabled, className, children } = props;
  const isTouchDevice = getIsTouchDevice();
  const targetRef = useRef(null);
  const [isHovering, setHover] = useState(false);
  const handleMouseEnter = useCallback(() => {
    if (enabled) {
      !isTouchDevice && setHover(true);
    }
  }, [enabled]);
  const handleMouseLeave = useCallback(() => {
    if (enabled) {
      !isTouchDevice && setHover(false);
    }
  }, [enabled]);
  useEffect(() => {
    if (!enabled) {
      setHover(false);
    }
  }, [enabled]);
  const handleTouchStart: React.TouchEventHandler = useCallback((evt) => {
    evt.stopPropagation(), setHover(true);
  }, []);
  const handleTouchEnd = useCallback(() => {
    return setHover(false);
  }, []);
  // FIXME: Move configs to constants
  const scaleSpring = useSpring({
    hover: isHovering ? 1 : 0,
    config: {
      tension: 800,
      friction: 80,
      clamp: !0,
    },
    immediate: !handleTouchEnd,
  });
  return (
    <span
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={targetRef}
      data-clickable={true}
    >
      {!!children && children(scaleSpring.hover)}
    </span>
  );
};
export default React.memo(HoverTarget);
