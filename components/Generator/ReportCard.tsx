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
  return (
    <ul className="p-4">
      <li className="pb-2">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          About
        </p>
        <p className="text-sm leading-4 mt-1 tracking-normal">{companyInfo}</p>
        <a
          href={website}
          rel="nofollow"
          target="_blank"
          className="text-xs text-(--theme-color-gray1) leading-[14px]"
        >
          {website}
        </a>
      </li>
      <li className="pb-2">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          Headquarters
        </p>
        <p className="text-sm leading-4 my-1">{headquarters}</p>
      </li>
      <li className="pb-2">
        <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
          Industry
        </p>
        <p className="text-sm leading-4 my-1">{industry}</p>
      </li>
    </ul>
  );
};

const PersonaCardContent = (props: PersonaCardProps) => {
  return (
    <ul className="p-4">
      {props.personas.map((persona, index) => (
        <li key={index} className="my-2 flex justify-between items-center">
          <div className="h-4 w-4 bg-black text-white rounded-2xl flex items-center justify-center text-xs">
            {index + 1}
          </div>
          <p className="text-sm leading-4 my-1 grow ml-2">{persona.type}</p>
          <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
            {persona.queries} queries
          </p>
        </li>
      ))}
    </ul>
  );
};

const JobsToBeDoneCardContent = (props: JobsToBeDoneCardContentProps) => {
  const { jobs } = props;
  return (
    <div className="overflow-auto ">
      <ul className="p-4">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="pb-2 flex flex-col justify-between items-center text-center"
          >
            <p className="text-sm leading-4 my-1 grow">"{job.text}"</p>
            <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal">
              {job.persona}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopPagesCardContent = (props: TopPagesCardContentProps) => {
  const { pages } = props;
  console.log({ pages, length: pages.length });
  return (
    <div className="overflow-y-auto">
      <ul className="p-4">
        {pages.map((page, index) => (
          <li key={index} className="pb-2 flex items-center gap-[10px]">
            <div className="h-10 w-10 bg-gray-300 rounded-[.5rem] flex items-center justify-center">
              {/* Maybe show initials or icon here if no background */}
            </div>
            <div className="grow">
              <p className="text-sm leading-4 my-1 w-full font-medium">
                {page.table.title}
              </p>
              <p className="text-xs text-(--theme-color-gray1) leading-[14px] tracking-normal line-clamp-1 w-80">
                {page.table.url}
              </p>
            </div>
            <div className="h-4 w-4 bg-black text-white rounded-2xl flex items-center justify-center text-xs">
              {page.table.relevanceScore}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DomainCardContent = (props: DomainCardContentProps) => {
  const { domains } = props;
  console.log({ domains });
  return (
    <div className="overflow-y-auto">
      <ul className="p-4">
        {domains.map((domain, index) => (
          <li key={index} className="flex items-center pb-2">
            <div className="flex flex-col grow">
              <p className="text-sm leading-4 m-0 w-full">
                {domain.table.domain}{" "}
              </p>
              <ul className="flex text-xs leading-[14px] gap-1 text-(--theme-color-gray1)">
                <li>
                  <p>
                    {getFormattedValue(domain.table.appearances)} appearances
                  </p>
                </li>
                {domain.table.seoMetrics && (
                  <li>
                    <p>
                      {getFormattedValue(
                        domain.table.seoMetrics.table.estimatedMonthlyTraffic,
                      )}{" "}
                      monthly traffic
                    </p>
                  </li>
                )}
                {domain.table.seoMetrics && (
                  <li>
                    <p>
                      {getFormattedValue(
                        domain.table.seoMetrics.table.serpCount,
                      )}{" "}
                      serp
                    </p>
                  </li>
                )}
              </ul>
            </div>
            <Button variant="ghost" className="p-0 h-7">
              <InfoIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportCard;
