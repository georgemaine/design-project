import { Data } from "@/lib/data";
import {
  Domain,
  ReportContentItem,
  ReportContentJobToBeDone,
  ReportContentPersona,
  TopPage,
} from "@/lib/data/types";
import { cn, getFormattedValue } from "@/lib/utils";
import {
  Building2,
  GlobeIcon,
  InfoIcon,
  Link,
  ListChecks,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useAppSelector } from "@/lib/store";
import { shallowEqual } from "react-redux";
import { Skeleton } from "@radix-ui/themes";
import { useTypewriter } from "./useTypewriter";
import { useState, useEffect, useCallback } from "react";

interface ReportCardProps {
  children?: React.ReactNode;
  item: ReportContentItem;
  tall?: boolean;
}

interface ReportCardHeaderProps {
  type: string;
}

interface CompanyCardContentProps {
  companyInfo: string;
  headquarters: string;
  industry: string;
  website: string;
}

interface PersonaCardProps {
  personas: Array<ReportContentPersona>;
}

interface JobsToBeDoneCardContentProps {
  jobs: Array<ReportContentJobToBeDone>;
}

interface TopPagesCardContentProps {
  pages: Array<TopPage>;
}

interface DomainCardContentProps {
  domains: Array<Domain>;
}

const ReportCard = (props: ReportCardProps) => {
  const { item, tall } = props;
  return (
    <div
      className={cn(
        item.wide ? "w-[19.6875rem] l:w-[41.25rem]" : "w-[19.6875rem]",
        tall
          ? "top-[9.375rem] row-start-1 row-span-6 h-[34rem] min-[715px]:sticky"
          : "h-[16.0625rem]",
        "rounded-2xl bg-white mb-[30px] grid",
      )}
    >
      <ReportCardHeader type={item.type} />
      {item.type === "company" && (
        <CompanyCardContent
          companyInfo={item.companyInfo as string}
          website={item.website as string}
          headquarters={item.headquarters as string}
          industry={item.industry as string}
        />
      )}

      {item.type === "personas" && item.personas && (
        <PersonaCardContent personas={item.personas} />
      )}

      {item.type === "jobsToBeDone" && item.jobs && (
        <JobsToBeDoneCardContent jobs={item.jobs} />
      )}

      {item.type === "topPages" && (
        <TopPagesCardContent
          pages={
            Data.seoStrategyAudienceAndCompetitorsAnalysis().table.topPages
          }
        />
      )}
      {item.type === "domains" && (
        <DomainCardContent
          domains={
            Data.seoStrategyAudienceAndCompetitorsAnalysis().table.domains
          }
        />
      )}
    </div>
  );
};

const ReportCardHeader = (props: ReportCardHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-4 pt-4 h-fit">
      {props.type === "company" ? (
        <Building2 className="w-4 h-4 text-(--theme-color-gray1)" />
      ) : props.type === "personas" ? (
        <Users className="w-4 h-4 text-(--theme-color-gray1)" />
      ) : props.type === "jobsToBeDone" ? (
        <ListChecks className="w-4 h-4 text-(--theme-color-gray1)" />
      ) : props.type === "domains" ? (
        <GlobeIcon className="w-4 h-4 text-(--theme-color-gray1)" />
      ) : props.type === "topPages" ? (
        <Link className="w-4 h-4 text-(--theme-color-gray1)" />
      ) : null}

      <p className="text-sm text-(--theme-color-gray1)">
        {props.type === "company"
          ? "Company"
          : props.type === "personas"
            ? "Personas"
            : props.type === "jobsToBeDone"
              ? "Jobs to be done"
              : props.type === "domains"
                ? "Domains"
                : props.type === "topPages"
                  ? "Top Pages"
                  : ""}
      </p>
    </div>
  );
};

const CompanyCardContent = (props: CompanyCardContentProps) => {
  const { companyInfo, headquarters, industry, website } = props;
  const isHeaderGenerated = useAppSelector(
    (state) => state.header.isGenerated,
    shallowEqual,
  );
  const {
    element: animatedCompanyInfoText,
    isDone: isCompanyInfoAnimationDone,
  } = useTypewriter(companyInfo, { animate: isHeaderGenerated });

  const {
    element: animatedElevatorPitchText,
    isDone: isElevatorPitchAnimationDone,
  } = useTypewriter(Data.companyContext().table.elevatorPitch, {
    animate: isCompanyInfoAnimationDone,
  });

  const { element: animatedWebsiteText, isDone: isWebsiteAnimationDone } =
    useTypewriter(website, {
      animate: isElevatorPitchAnimationDone,
    });

  const {
    element: animatedHeadquartersText,
    isDone: isHeadquartersAnimationDone,
  } = useTypewriter(headquarters, {
    animate: isWebsiteAnimationDone,
  });

  const { element: animatedIndustryText, isDone: isIndustryAnimationDone } =
    useTypewriter(industry, {
      animate: isHeadquartersAnimationDone,
    });

  return (
    <ul className="p-4">
      <li className="pb-6">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          <Skeleton loading={!isHeaderGenerated}>About</Skeleton>
        </p>
        <p className="text-sm leading-4 mt-1 tracking-normal">
          {!isHeaderGenerated ? (
            <Skeleton loading={!isHeaderGenerated}>"placeholder"</Skeleton>
          ) : (
            animatedCompanyInfoText
          )}
        </p>
        <p className="text-sm leading-4 mt-4 tracking-normal">
          {isCompanyInfoAnimationDone && animatedElevatorPitchText}
        </p>
        <a
          href={website}
          rel="nofollow"
          target="_blank"
          className="text-xs text-(--theme-color-gray1) leading-[14px]"
        >
          {isCompanyInfoAnimationDone && animatedWebsiteText}
        </a>
      </li>
      <li className="pb-6">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          {!isWebsiteAnimationDone ? (
            <Skeleton loading={true}>"placeholder"</Skeleton>
          ) : (
            "Headquarters"
          )}
        </p>
        <p className="text-sm leading-4 my-1">
          {isWebsiteAnimationDone && animatedHeadquartersText}
        </p>
      </li>
      <li className="pb-6">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          {!isHeadquartersAnimationDone ? (
            <Skeleton loading={true}>"Industry"</Skeleton>
          ) : (
            "Industry"
          )}
        </p>
        <p className="text-sm leading-4 my-1">
          {isHeadquartersAnimationDone && animatedIndustryText}
        </p>
      </li>
    </ul>
  );
};

const PersonaCardContent = (props: PersonaCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ul className="p-4">
      {props.personas.map((persona, index) => {
        const shouldAnimate = index === activeIndex;
        const { element: animatedText, isDone } = useTypewriter(persona.type, {
          animate: shouldAnimate,
        });

        // When the animation finishes, advance to next
        useEffect(() => {
          if (
            isDone &&
            shouldAnimate &&
            activeIndex < props.personas.length - 1
          ) {
            setActiveIndex((i) => i + 1);
          }
        }, [isDone, shouldAnimate]);
        return (
          <li key={index} className="my-2 flex justify-between items-center">
            <div className="h-4 w-4 bg-black text-white rounded-2xl flex items-center justify-center text-xs">
              {index + 1}
            </div>
            <p className="text-sm leading-4 my-1 grow ml-2">{animatedText}</p>
            <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
              {persona.queries} queries
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const JobsToBeDoneCardContent = (props: JobsToBeDoneCardContentProps) => {
  // FIXME
  const { jobs } = props;
  const isCompanyContextWorkflowRunning = useAppSelector(
    (state) => state.generate.workflowIndex === 0,
    shallowEqual,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doneFlags, setDoneFlags] = useState(() =>
    Array(jobs.length).fill(false),
  );
  const handleDone = useCallback(
    (index: number) => {
      setDoneFlags((prev) => {
        if (prev[index]) return prev; // already marked
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    },
    [setDoneFlags],
  );

  useEffect(() => {
    if (
      doneFlags[currentIndex] &&
      !isCompanyContextWorkflowRunning &&
      currentIndex < jobs.length - 1
    ) {
      setCurrentIndex((i) => i + 1);
    }
  }, [doneFlags, currentIndex, isCompanyContextWorkflowRunning, jobs.length]);

  return (
    <ScrollArea className="px-2 pt-2 h-[221px]">
      <ul>
        {jobs.map((job, index) => {
          const shouldAnimate =
            index === currentIndex && !isCompanyContextWorkflowRunning;
          const { element: animatedText, isDone } = useTypewriter(job.text, {
            animate: shouldAnimate,
          });
          const { element: animatedPersonaText } = useTypewriter(job.persona, {
            animate: shouldAnimate,
          });

          // notify parent when animation finishes
          useEffect(() => {
            if (shouldAnimate && isDone) {
              handleDone(index);
            }
          }, [isDone, shouldAnimate, index, handleDone]);

          return (
            <li
              key={index}
              className="py-4 flex flex-col justify-between items-center text-center border-b mx-4"
            >
              <p className="text-sm leading-4 my-1 grow">
                <Skeleton
                  loading={isCompanyContextWorkflowRunning}
                  className="opacity-50"
                >
                  "{animatedText}"
                </Skeleton>
              </p>
              <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
                <Skeleton
                  loading={isCompanyContextWorkflowRunning}
                  className="opacity-50"
                >
                  {animatedPersonaText}
                </Skeleton>
              </p>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

const TopPagesCardContent = (props: TopPagesCardContentProps) => {
  const { pages } = props;
  const workflowIndex = useAppSelector(
    (state) => state.generate.workflowIndex,
    shallowEqual,
  );
  return (
    <ScrollArea className="px-2 pt-2 h-[221px]">
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            className="pb-2 flex items-center gap-[10px] hover:bg-[#F0EFEA] rounded-sm p-2 hover:cursor-pointer"
          >
            <Skeleton loading={workflowIndex !== 3} className="opacity-50">
              <div className="min-h-10 min-w-10 bg-gray-300 rounded-[.5rem] flex items-center justify-center">
                {/* Maybe show initials or icon here if no background */}
              </div>
            </Skeleton>
            <div className="flex flex-col grow gap-1">
              <p className="text-sm leading-4 font-medium">
                <Skeleton loading={workflowIndex !== 3} className="opacity-50">
                  {page.table.title}
                </Skeleton>
              </p>
              <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal line-clamp-1 max-w-44">
                <Skeleton loading={workflowIndex !== 3} className="opacity-50">
                  {page.table.url}
                </Skeleton>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

const DomainCardContent = (props: DomainCardContentProps) => {
  const { domains } = props;
  const isCompetitorResearchWorkflowRunning = useAppSelector(
    (state) => state.generate.workflowIndex < 2,
    shallowEqual,
  );
  return (
    <ScrollArea className="px-2 pt-2 h-[221px]">
      <ul>
        {domains.map((domain, index) => (
          <li
            key={index}
            className="flex items-center pb-2 hover:bg-[#F0EFEA] p-2 rounded-sm"
          >
            <div className="flex flex-col grow">
              <a
                className="text-sm leading-4 m-0 w-full font-medium"
                href={`https://${domain.table.domain}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Skeleton
                  loading={isCompetitorResearchWorkflowRunning}
                  className="opacity-50"
                >
                  {domain.table.domain}
                </Skeleton>
              </a>
              <ul className="flex text-xs leading-[14px] gap-1 text-(--theme-color-gray1)">
                <li>
                  <p>
                    <Skeleton
                      loading={isCompetitorResearchWorkflowRunning}
                      className="opacity-50"
                    >
                      {" "}
                      {getFormattedValue(domain.table.appearances)} appearances
                    </Skeleton>
                  </p>
                </li>
                {domain.table.seoMetrics && (
                  <li>
                    <p>
                      <Skeleton
                        loading={isCompetitorResearchWorkflowRunning}
                        className="opacity-50"
                      >
                        {getFormattedValue(
                          domain.table.seoMetrics.table.estimatedMonthlyTraffic,
                        )}{" "}
                        monthly traffic
                      </Skeleton>
                    </p>
                  </li>
                )}
                {domain.table.seoMetrics && (
                  <li>
                    <p>
                      <Skeleton
                        loading={isCompetitorResearchWorkflowRunning}
                        className="opacity-50"
                      >
                        {getFormattedValue(
                          domain.table.seoMetrics.table.serpCount,
                        )}{" "}
                        serp
                      </Skeleton>
                    </p>
                  </li>
                )}
              </ul>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="p-0 h-7 hover:cursor-pointer hover:bg-[#F0EFEA]"
            >
              <Skeleton
                loading={isCompetitorResearchWorkflowRunning}
                className="opacity-50"
              >
                <InfoIcon />
              </Skeleton>
            </Button>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ReportCard;
