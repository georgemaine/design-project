import { cn, sharePage } from "@/lib/utils";
import { Button } from "../ui/button";
import ReportGridCard from "./ReportGridCard";
import { ReportContentItem } from "@/lib/data/types";

const ReportToolBar = () => {
  return (
    <header className="top-0 mb-6 z-[1] sticky flex  justify-center">
      <div className="max-w-[1005px] ml-5 mr-5 pb-6 pt-6 w-full grid grid-cols-1 grid-rows-1 gap-0 [grid-auto-flow:row] items-center">
        <div className="w-full gap-x-[10px] gap-y-[0.625rem] flex items-center flex-row">
          <div className="grow shrink-0" />
          <Button
            className="min-w-[5.625rem] h-8 rounded-4xl"
            onClick={sharePage}
          >
            Share
          </Button>
        </div>
      </div>
    </header>
  );
};

interface ReportGridProps {
  items: Array<ReportContentItem>;
}

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
          <ReportGridCard item={item} key={index} tall={index === 0} />
        ))}
      </div>
    </div>
  );
};

interface ReportCompanyLogoProps {
  children?: React.ReactNode;
}
const ReportCompanyLogo = (props: ReportCompanyLogoProps) => {
  const { children } = props;
  return (
    <div className="rounded-[.5rem] border border-solid border-[rgba(0,0,0,0.1)] h-12 w-12 mb-3">
      {children}
    </div>
  );
};

interface ReportHeaderProps {
  companyName: string;
  companyCoreValueProp: string;
}

const ReportHeader = (props: ReportHeaderProps) => {
  const { companyName, companyCoreValueProp } = props;
  return (
    <div className="max-w-[1005px] w-[calc(100%-40px)] mb-5 mx-auto">
      <ReportCompanyLogo />
      <h2 className="text-[1.75rem] font-bold mb-1">
        SEO audience & competitor analysis: {companyName}
      </h2>
      <p className="text-lg leading-[25px] max-w-[660px] w-full tracking-tight">
        {companyCoreValueProp}
      </p>
    </div>
  );
};

export { ReportToolBar, ReportGrid, ReportHeader, ReportGridCard };
