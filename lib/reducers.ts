import { CompanySubmit } from "./storeTypes";

export const initialState = {
    company: {
        website: "",
    },
};
export type IState = typeof initialState;
export const actionReducerMap = {
    "Company.Submit": function (state: IState, action: CompanySubmit) {
        console.log("Company.Submit:", action);
        return {
            ...state,
            company: {
                ...state.company,
                website: action.website,
            },
        };
    },
};

export type ActionReducerMap = typeof actionReducerMap;

export type ActionReducer = CompanySubmit;
