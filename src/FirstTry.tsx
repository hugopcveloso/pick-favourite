import React, { useContext, useEffect } from "react";
import { Store } from "./Store";
import styled from "styled-components";
import { IEpisode, IAction } from "./Interfaces";

const EpisodeList = () => {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchDataAction();
	}, []);

	const fetchDataAction = async () => {
		const URL = "https://api.tvmaze.com/shows/216/episodes";
		const data = await fetch(URL);
		const dataJSON = await data.json();
		return dispatch({
			type: "FETCH_DATA",
			payload: dataJSON,
		});
	};

	const toggleFavAction = (episode: IEpisode): IAction => {
		const episodeInFav = state.favourites.includes(episode);
		let dispatchObj = {
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

	return (
		<StyledList>
			{state.episodes.map((episode: IEpisode) => {
				<StyledItem key={episode.id}>
					<img
						src={episode.image.medium}
						alt={`Rick and Morty ${episode.name}`}
					/>
					<div className="card__content">
						<div>
							Season: {episode.season} Number: {episode.number}
						</div>
						<StyledButton
							isFavourite={state.favourites.includes(episode)}
							type="button"
							onClick={() => toggleFavAction(episode)}
						>
							{!state.favourites.includes(episode) ? "Fav" : "Unfav"}
						</StyledButton>
					</div>
				</StyledItem>;
			})}
		</StyledList>
	);
};

/**
 * Styles
 */

const StyledList = styled.section`
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	width: 80vw;
	margin: 0 auto;
`;
const StyledItem = styled.section`
	padding: 7px;
	.card__content {
		display: flex;
		justify-content: space-between;
	}
`;

const StyledButton = styled.button`
	background-color: ${(props: ButtonType) =>
		!props.isFavourite ? "white" : "lightgreen"};
`;

/**
 * Interfaces
 */
interface ButtonType {
	isFavourite: boolean;
}
export default EpisodeList;
