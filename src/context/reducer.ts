import type React from "react";
import type IFormation from "../interfaces/formation.interface";
import type IExperience from "../interfaces/experience.interface";

// --- State ---
export interface AppState {
    formations: IFormation[];
    experiences: IExperience[];
}

export const initialState: AppState = {
    formations: [],
    experiences: [],
};

// --- Actions ---
export type AppAction =
    | { type: "UPDATE_FORMATION"; payload: IFormation }
    | { type: "UPDATE_EXPERIENCE"; payload: IExperience };

// --- Dispatch Type ---
export type DispatchType = React.Dispatch<AppAction>;

// --- Reducer ---
export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "UPDATE_FORMATION":
            return {
                ...state,
                formations: action.payload as unknown as IFormation[],
            };
        case "UPDATE_EXPERIENCE":
            return {
                ...state,
                experiences: action.payload as unknown as IExperience[],
            };
        default:
            return state;
    }
};
