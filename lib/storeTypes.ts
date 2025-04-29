export interface GenerateStart {
  type: "Generate.Start";
  isGenerating: boolean;
}

export interface GenerateOnWorkflowEnd {
  type: "Generate.OnWorkflowEnd";
  index: number;
}
