"use client";
import {
  ShimmerText,
  Spinner,
} from "@/components/Animations/PageGeneratorAnimations";
import NavigationBar from "@/components/NavigationBar";
import { GeneratorPreview } from "@/components/PageGenerator/GeneratorPreview";
import { CheckBoxSvgMemo, Checkmark } from "@/components/ui/svgs";
import { Data } from "@/lib/data";
import { useDashOffsetSpring } from "@/lib/hooks";
import { useEffect, useState } from "react";

interface GalleryPageContentProps {
  id: string;
}

interface Step {
  workflowStepName: string;
  duration: number;
}

const GalleryPageContent = (props: GalleryPageContentProps) => {
  return (
    <div className="w-full h-full absolute left-0 top-0 flex flex-col">
      <NavigationBar preview={true} />
      <main className="h-full overflow-hidden">
        <GeneratorPreview backgroundColor="#FAFAF7" />
        <div className="rounded-[13px] w-[270px] shadow-(--shadow-menu) flex absolute left-9 top-20 h-fit flex-col items-start p-2 bg-white">
          <h2 className="text-[21px] text-black p-2">{props.id}</h2>
          <WorkflowSteps steps={Data.companyContext().table.workflow} />
        </div>
      </main>
    </div>
  );
};

export default GalleryPageContent;

function WorkflowSteps({ steps }: { steps: Step[] }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    if (activeStepIndex >= steps.length) {
      const audio = new Audio("/sounds/879f5f16ac2dc88fd2f94fddfce50a4b.aac");
      audio.play().catch((err) => {
        console.warn("Audio play failed:", err);
      });
      return;
    }

    const timeout = setTimeout(() => {
      setActiveStepIndex((prev) => prev + 1);
    }, steps[activeStepIndex].duration);

    return () => clearTimeout(timeout);
  }, [activeStepIndex, steps]);
  const progress = useDashOffsetSpring(activeStepIndex < steps.length);
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex items-center gap-0 text-lg p-2 w-full">
        <CheckBoxSvgMemo progress={progress} />
        Company Research
      </div>
      {steps.map((step, index) => {
        return index <= activeStepIndex && activeStepIndex < steps.length ? (
          <ShimmerText
            key={index}
            className={`w-full text-sm p-2 gap-2 pl-4 ${index === activeStepIndex ? "animate-shimmerBackgroundPosition" : "text-(--theme-color-gray2)"}`}
          >
            {index === activeStepIndex ? <Spinner /> : <CheckCircle />}
            {step.workflowStepName}
          </ShimmerText>
        ) : null;
      })}
    </div>
  );
}

const CheckCircle = () => {
  return (
    <div className="w-4 h-4 bg-(--theme-color-appTint) flex items-center justify-center rounded-4xl">
      <Checkmark className="scale-[1.25] w-6 h-6" />
    </div>
  );
};
