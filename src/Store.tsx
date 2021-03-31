import React, { useReducer } from "react";
import { IAction, IState } from "./Interfaces";

const initialState: IState = {
	episodes: [],
	favourites: [],
};
export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case "FETCH_DATA":
			return { ...state, episodes: action.payload };
		case "ADD_FAV":
			//Just a reminder that we need to use rest parameters,
			//so that we don't mutate the original object
			return { ...state, favourites: [...state.favourites, action.payload] };
		case "REMOVE_FAV":
			return { ...state, favourites: [...action.payload] };
		default:
			return state;
	}
}

export function StoreProvider(props: any): JSX.Element {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Store.Provider value={{ state, dispatch }}>
			{props.children}
		</Store.Provider>
	);
}
