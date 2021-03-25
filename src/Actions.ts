import { IEpisode, IAction, IState } from "./Interfaces";

export const fetchDataAction = async (dispatch: any) => {
	const URL = "https://api.tvmaze.com/shows/216/episodes";
	const data = await fetch(URL);
	const dataJSON = await data.json();
	return dispatch({
		type: "FETCH_DATA",
		payload: dataJSON,
	});
};

export const toggleFavAction = (
	state: IState,
	dispatch: any,
	episode: IEpisode
): IAction => {
	const episodeInFav = state.favourites.includes(episode);

	let dispatchObj: any = {
		type: "ADD_FAV",
		payload: episode,
	};
	if (episodeInFav) {
		const favWithoutEpisode = state.favourites.filter(
			(fav: IEpisode) => fav.id !== episode.id
		);
		dispatchObj = {
			type: "REMOVE_FAV",
			payload: favWithoutEpisode,
		};
	}
	return dispatch(dispatchObj);
};
