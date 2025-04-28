import { ActionReducerMap, IState, ActionReducer } from "./reducers";

export function actionReducerMatcher(
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
