export interface CompanyContext {
  table: {
    companyName: string;
    website: string;
    elevatorPitch: string;
    executiveSummary: string;
    overview: string;
    products: string;
    personas: string;
    jobsToBeDone: string;
    competitors: string;
    aiContext: string;
    searchQueries: {
      table: {
        personaQueries: Array<{
          table: {
            context: string;
            queries: Array<string>;
          };
        }>;
        jtbdQueries: Array<{
          table: {
            context: string;
            queries: Array<string>;
          };
        }>;
      };
    };
    markdown: string;
    workflow: Array<{
      workflowStepName: string;
      duration: number;
    }>;
  };
}

export interface CompetitorResearch {
  table: {
    competitors: Array<{
      table: {
        name: string;
        url: string;
      };
    }>;
  };
}

export interface ReportContentItem {
  wide: boolean;
  type: string;
  companyInfo?: string;
  companyName?: string;
  website?: string;
  headquarters?: string;
  industry?: string;
  personas?: Array<ReportContentPersona>;
  jobs?: Array<ReportContentJobToBeDone>;
}

export interface ReportContentPersona {
  type: string;
  queries: number;
}

export interface ReportContentJobToBeDone {
  text: string;
  queries: number;
  persona: string;
}

export interface Domain {
  table: {
    domain: string;
    appearances: number;
    uniqueContexts: number;
    averageRelevanceScore: number;
    seoMetrics?: {
      table: {
        serpCount: number;
        estimatedMonthlyTraffic: number;
        rankingDistribution: {
          table: {
            top3: number;
            top10: number;
            top20: number;
            top50: number;
            top100: number;
          };
        };
      };
    };
  };
}

export interface SEOStrategyAudienceAndCompetitorsAnalysis {
  table: {
    domains: Array<Domain>;
    contextResults: Array<{
      table: {
        context: string;
        query: string;
        relevantResults: Array<{
          table: {
            url: string;
            title: string;
            relevanceScore: number;
            reasoning: string;
          };
        }>;
      };
    }>;
    topPages: Array<TopPage>;
    topPagesAPICosts: {
      table: {
        totalCost: number;
        successfulCalls: number;
        failedCalls: number;
      };
    };
    strategicInsights: string;
    reportContent: Array<ReportContentItem>;
  };
}

export interface TopPage {
  table: {
    url: string;
    title: string;
    relevanceScore: number;
    reasoning: string;
    context: string;
    query: string;
    domain: string;
    metrics: {
      table: {
        rankingKeywords: number;
        estimatedTraffic: number;
        keywordInsights: {
          table: {
            totalKeywords: number;
            topKeywords: Array<{
              table: {
                keyword: string;
                searchVolume: number;
                position: number;
                difficulty: number;
                monthlyTrend: {
                  table: {
                    percentage: number;
                    direction: string;
                  };
                };
              };
            }>;
            rankingDistribution: {
              table: {
                top3: number;
                top10: number;
                top20: number;
                top50: number;
                top100: number;
              };
            };
          };
        };
        keywordSuggestions: Array<{
          table: {
            keyword: string;
            searchVolume: number;
            difficulty: number;
            relevanceScore: number;
            reasoning: string;
          };
        }>;
      };
    };
  };
}
