export interface GenerateStart {
  type: "Generate.Start";
  isGenerating: boolean;
}

export interface GenerateOnWorkflowEnd {
  type: "Generate.OnWorkflowEnd";
  index: number;
}

export interface HeaderOnGenerateEnd {
  type: "Header.OnGenerateEnd";
}
