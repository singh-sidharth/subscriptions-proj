export type ActionTypes = {
	type: "LOGIN_ACTION" | "REGISTER_ACTION" | "LOGOUT_ACTION" | "RECOVER_ACTION";
	payload: any;
};

export type GlobalState = {
	userId: string;
	user: string;
	isAuthenticated: boolean;
	sessionToken: string;
	errors: string[];
};

export type GlobalContextProviderProps = {
	children: React.ReactNode;
};

export type GlobalStateContextType = {
	state?: GlobalState;
	dispatch: React.Dispatch<ActionTypes>;
};
