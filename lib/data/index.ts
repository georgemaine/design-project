import {
  CompanyContext,
  CompetitorResearch,
  SEOStrategyAudienceAndCompetitorsAnalysis,
} from "./types";
import companyContextGeneratorOutput from "./companyContextGeneratorOutput.json";
import competitorResearchWorkflowOutput from "./competitorResearchWorkflowOutput.json";
import seoStrategyAudienceAndCompetitorsAnalysisWorkflowOutput from "./seoStrategyAudienceAndCompetitorAnalysis.json";

export namespace Data {
  const data = {
    companyContext: companyContextGeneratorOutput,
    competitorResearch: competitorResearchWorkflowOutput,
    audienceAndCompetitorsAnalysis:
      seoStrategyAudienceAndCompetitorsAnalysisWorkflowOutput,
  };
  export function companyContext(): CompanyContext {
    return data.companyContext;
  }

  export function competitorResearch(): CompetitorResearch {
    return data.competitorResearch;
  }

  export function seoStrategyAudienceAndCompetitorsAnalysis(): SEOStrategyAudienceAndCompetitorsAnalysis {
    return data.audienceAndCompetitorsAnalysis;
  }
}
