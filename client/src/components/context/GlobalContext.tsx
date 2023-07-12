import { createContext, useReducer } from "react";
import {
	GlobalContextProviderProps,
	GlobalState,
	GlobalStateContextType,
} from "./types";
import { reducer } from "./reducer";

const initialState: GlobalState = {
	userId: "",
	user: "",
	isAuthenticated: false,
	sessionToken: "",
	errors: [],
};

export const GlobalContext = createContext<GlobalStateContextType>(
	{} as GlobalStateContextType
);

export const GlobalContextProvider = ({
	children,
}: GlobalContextProviderProps) => {
	const [_, dispatch] = useReducer(reducer, initialState);
	return (
		<GlobalContext.Provider value={{ dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
