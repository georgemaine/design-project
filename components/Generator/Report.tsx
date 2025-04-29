import ReportCard from "./ReportCard";
import { ReportContentItem } from "@/lib/data/types";
import { AnthropicCompanyLogo } from "../ui/svgs";
import { useTypewriter } from "./useTypewriter";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store";

interface ReportGridProps {
  items: Array<ReportContentItem>;
}
interface ReportCompanyLogoProps {
  children?: React.ReactNode;
}
interface ReportHeaderProps {
  companyName: string;
  companyCoreValueProp: string;
}

const ReportToolBar = () => {
  return (
    <header className="top-0 z-[1] sticky flex justify-center">
      <div className="max-w-[1005px] ml-5 mr-5 pb-6 pt-6 w-full grid grid-cols-1 grid-rows-1 gap-0 [grid-auto-flow:row] items-center">
        <div className="w-full gap-x-[10px] gap-y-[0.625rem] flex items-center flex-row">
          <div className="grow shrink-0" />
        </div>
      </div>
    </header>
  );
};

const ReportGrid = (props: ReportGridProps) => {
  const { items } = props;
  return (
    <div className="max-w-[1005px] w-[calc(100%-40px)] pb-12 mx-0 min-w-full m-auto px-5">
      <div
        className="grid justify-center grid-cols-[repeat(auto-fill,_19.6875rem)] min-w-full l:grid-cols-[repeat(3,_19.6875rem)]"
        style={{
          columnGap: "1.875rem",
          boxSizing: "initial",
        }}
      >
        {items.map((item, index) => (
          <ReportCard item={item} key={index} tall={index === 0} />
        ))}
      </div>
    </div>
  );
};

const ReportCompanyLogo = (props: ReportCompanyLogoProps) => {
  const { children } = props;
  return (
    <div className="rounded-[.5rem] border border-solid border-[rgba(0,0,0,0.1)] h-12 w-12 mb-3 flex items-center justify-center">
      <AnthropicCompanyLogo />
      {children}
    </div>
  );
};

const ReportHeader = (props: ReportHeaderProps) => {
  const { companyName } = props;
  const dispatch = useAppDispatch();
  const { element, isDone } = useTypewriter(
    `SEO audience & competitor analysis: ${companyName}`,
  );

  useEffect(() => {
    if (isDone) {
      console.log("Header.OnGenerateEnd");
      dispatch({
        type: "Header.OnGenerateEnd",
      });
    }
  }, [isDone]);
  return (
    <div className="max-w-[1005px] w-[calc(100%-40px)] mb-5 mx-auto">
      <ReportCompanyLogo />
      <h2 className="text-[1.75rem] font-bold mb-1 min-h-9">{element}</h2>
    </div>
  );
};

export { ReportToolBar, ReportGrid, ReportHeader, ReportCard };
