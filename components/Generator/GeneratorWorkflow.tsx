import { Data } from "@/lib/data";
import { useDashOffsetSpring } from "@/lib/hooks";
import { useState, useEffect } from "react";
import { ShimmerText, Spinner } from "../Animations/GeneratorAnimations";
import { CheckBoxSvgMemo, CheckCircle } from "../ui/svgs";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { shallowEqual } from "react-redux";

interface GeneratorWorkflowProps {
  id: string;
}

interface GeneratorWorkflowStepProps {
  index: number;
  steps: Array<{
    workflowStepName: string;
    duration: number;
  }>;
  workflowName: string;
}

const GeneratorWorkflow = (props: GeneratorWorkflowProps) => {
  const generatorWorkflowIndex = useAppSelector(
    (state) => state.generate.workflowIndex,
    shallowEqual,
  );
  return (
    <div className="rounded-[13px] w-[270px] shadow-(--shadow-menu) flex absolute left-9 top-20 h-fit flex-col items-start p-2 bg-white">
      <h2 className="text-[21px] text-black p-2">{props.id}</h2>
      {generatorWorkflowIndex >= 0 && (
        <GeneratorWorkflowStep
          index={1}
          workflowName={Data.companyContext().table.workflowName}
          steps={Data.companyContext().table.workflow}
        />
      )}
      {generatorWorkflowIndex >= 1 && (
        <GeneratorWorkflowStep
          index={2}
          steps={Data.competitorResearch().table.workflow}
          workflowName={Data.competitorResearch().table.workflowName}
        />
      )}
      {generatorWorkflowIndex >= 2 && (
        <GeneratorWorkflowStep
          index={3}
          steps={
            Data.seoStrategyAudienceAndCompetitorsAnalysis().table.workflow
          }
          workflowName={
            Data.seoStrategyAudienceAndCompetitorsAnalysis().table.workflowName
          }
        />
      )}
    </div>
  );
};

const GeneratorWorkflowStep = (props: GeneratorWorkflowStepProps) => {
  const { steps, index, workflowName } = props;
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (activeStepIndex >= steps.length) {
      const audio = new Audio("/sounds/879f5f16ac2dc88fd2f94fddfce50a4b.aac");
      audio.play().catch((err) => {
        console.warn("Audio play failed:", err);
      });
      dispatch({
        type: "Generate.OnWorkflowEnd",
        index: index,
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
        {workflowName}
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
};

export { GeneratorWorkflow };
