import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector, Provider } from "react-redux";
import { reducer } from "./utils";

interface StoreProviderProps {
    children: React.ReactNode;
}

const appStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = (selector, equalityFn) =>
    useSelector(selector, equalityFn);

const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;
    return <Provider store={appStore}>{children}</Provider>;
};

export { appStore, StoreProvider };

export type AppStore = typeof appStore;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];
