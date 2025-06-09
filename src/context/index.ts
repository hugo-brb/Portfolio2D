import { useContext, createContext } from "react";
import type { AppState, DispatchType } from "./reducer";

interface AppContextType {
    state: AppState;
    dispatch: DispatchType;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
