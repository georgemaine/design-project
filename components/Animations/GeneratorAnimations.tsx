import { cn } from "@/lib/utils";
import styles from "./animation.module.css";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

interface SpinnerProps {
  size?: "default" | "large";
}

export function ShimmerText(props: ShimmerTextProps) {
  const { children, className } = props;
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, var(--theme-color-gray2) 0%, var(--theme-color-gray2) 35%, var(--theme-color-gray1) 50%, var(--theme-color-gray2) 65%, var(--theme-color-gray2) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
      className={cn("flex items-center text-transparent w-fit", className)}
    >
      {children}
    </div>
  );
}
// FIXME: refactor from modules to tailwind
export const Spinner = (props: SpinnerProps) => {
  const { size } = props;
  return (
    <div
      className={cn(
        styles["spinner"],
        size === "large" ? styles["spinner-large"] : "",
      )}
    >
      <div className={styles["spinner-container"]}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              styles["spinner-nib"],
              styles[`spinner-nib-${index + 1}`],
            )}
          />
        ))}
      </div>
    </div>
  );
};
