import {
  GenerateOnWorkflowEnd,
  GenerateStart,
  HeaderOnGenerateEnd,
} from "./storeTypes";

export const initialState = {
  generate: { website: "", isGenerating: false, workflowIndex: 0 },
  header: {
    isGenerated: false,
  },
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
  "Header.OnGenerateEnd": function (
    state: IState,
    action: HeaderOnGenerateEnd,
  ) {
    return {
      ...state,
      header: { isGenerated: true },
    };
  },
};

export type ActionReducerMap = typeof actionReducerMap;

export type ActionReducer = GenerateStart;

function actionReducerMatcher(
  actionReducerMap: ActionReducerMap,
  state: IState,
  actionReducer: ActionReducer,
) {
  const reducer = actionReducerMap[actionReducer.type] as ActionHandler;
  return reducer ? reducer(state, actionReducer) : state;
}

export interface ActionHandler {
  (state: IState, action: ActionReducer): IState;
}

export function createReducer(
  callback: () => IState,
  reducers: ActionReducerMap,
) {
  return function (state = callback(), reducer: ActionReducer) {
    return actionReducerMatcher(reducers, state, reducer);
  };
}

export const appReducer = createReducer(() => initialState, actionReducerMap);
