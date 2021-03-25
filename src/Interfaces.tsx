export interface IEpisode {
	airdate: string;
	airstamp: string;
	airtime: string;
	id: number;
	image: {
		medium: string;
		original: string;
	};
	name: string;
	number: number;
	runtime: number;
	season: number;
	summary: string;
	type: string;
	url: string;
}
export interface IAction {
	type: string;
	payload: any;
}

export interface IState {
	episodes: IEpisode[];
	favourites: IEpisode[];
}

export type IDispatch = React.Dispatch<IAction>;

export interface IEpisodeProps {
	episodes: IEpisode[];
	store: { state: IState; dispatch: IDispatch };
	toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
	favourites: IEpisode[];
}
