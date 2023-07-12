import { ActionTypes, GlobalState } from "./types";

export function reducer(state: GlobalState, { type }: ActionTypes) {
	switch (type) {
		case "LOGIN_ACTION":
			console.log("logged in");
			return {
				...state,
				isAuthenticated: true,
			};

		case "REGISTER_ACTION":
			console.log("logged in");
			return {
				...state,
				isAuthenticated: true,
			};

		case "LOGOUT_ACTION":
			console.log("logged in");
			return {
				...state,
				isAuthenticated: true,
			};

		case "RECOVER_ACTION":
			console.log("logged in");
			return {
				...state,
				isAuthenticated: true,
			};

		default:
			console.log(state);
			return state;
	}
}
