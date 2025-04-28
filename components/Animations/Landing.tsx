import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./animation.module.css";
import clsx from "clsx";
import { getIsTouchDevice } from "@/lib/utils";
import { useSpring } from "@react-spring/web";
import { useHasMounted } from "@/lib/hooks";

const LandingBackgroundAnimation = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 223,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div className={clsx(styles.line, styles.line0)} />
      <div className={clsx(styles.line, styles.line1)} />
      <div className={clsx(styles.line, styles.line2)} />
      <div className={clsx(styles.line, styles.line3)} />
      <div className={clsx(styles.line, styles.line4)} />
      <div className={clsx(styles.line, styles.line5)} />
      <div className={clsx(styles.line, styles.line6)} />
      <div className={clsx(styles.line, styles.line7)} />
      <div className={clsx(styles.line, styles.line8)} />
      <div className={clsx(styles.line, styles.line9)} />
    </div>
  );
};

export const LandingBackgroundAnimationMemo = React.memo(
  LandingBackgroundAnimation,
);

const InputShimmerAnimation = () => {
  return (
    <div
      style={{
        flex: "none",
        inset: "-284px -20px -283px -580px",
        overflow: "hidden",
        position: "absolute",
      }}
      className="shimmerAnimation"
    >
      <div
        style={{
          flex: "none",
          inset: 0,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <div
          style={{
            borderRadius: 0,
            inset: 0,
            position: "absolute",
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            color: "#85F",
            background:
              "conic-gradient(from 180deg at 50% 50%, rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgba(68, 0, 255, 0.5),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255))",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export const InputShimmerAnimationMemo = React.memo(InputShimmerAnimation);
