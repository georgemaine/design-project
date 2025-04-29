import { Data } from "@/lib/data";
import { ReportToolBar, ReportGrid, ReportHeader } from "./Report";

interface GeneratorPreviewProps {
  children?: React.ReactNode;
  backgroundColor: string;
}

const GeneratorPreview = (props: GeneratorPreviewProps) => {
  const { children, backgroundColor } = props;
  return (
    <div className="w-full h-full p-5">
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
        <div
          className="w-full h-full overflow-y-auto"
          style={{ backgroundColor }}
        >
          <ReportToolBar />
          <ReportHeader
            companyName="Anthropic"
            companyCoreValueProp="Anthropic is at the forefront of AI safety and alignment, focusing on pioneering research that ensures AI systems adhere to human values and ethical standards. Their work emphasizes transparency, robustness, and the ethical deployment of AI, making Anthropic a key resource for stakeholders concerned with understanding AI models' behavior and mitigating associated risks."
          />
          <ReportGrid
            items={
              Data.seoStrategyAudienceAndCompetitorsAnalysis().table
                .reportContent
            }
          />
        </div>
      </div>
    </div>
  );
};

export { GeneratorPreview };
