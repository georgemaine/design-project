import { GenerateOnWorkflowEnd, GenerateStart } from "./storeTypes";

export const initialState = {
  generate: { website: "", isGenerating: false, workflowIndex: 0 },
};
export type IState = typeof initialState;
export const actionReducerMap = {
  "Generate.Start": function (state: IState, action: GenerateStart) {
    console.log("Generate.Start:", action);
    return {
      ...state,
      generate: { ...state.generate, isGenerating: true },
    };
  },
  "Generate.OnWorkflowEnd": function (
    state: IState,
    action: GenerateOnWorkflowEnd,
  ) {
    console.log("Generate.OnWorkflowEnd:", action.index);
    return {
      ...state,
      generate: { ...state.generate, workflowIndex: action.index },
    };
  },
};

export type ActionReducerMap = typeof actionReducerMap;

export type ActionReducer = GenerateStart;
