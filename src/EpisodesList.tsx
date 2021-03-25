import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { IEpisode, IAction } from "./Interfaces";
import { Store } from "./Store";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			type: "tween",
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

function EpisodesList({ store, episodes, toggleFavAction, favourites }: any) {
	const { state, dispatch } = store;
	return (
		<StyledList
			as={motion.section}
			variants={container as any}
			initial="hidden"
			animate="show"
		>
			{episodes.map((episode: IEpisode) => {
				return (
					<StyledItem
						as={motion.section}
						variants={item as any}
						key={episode.id}
					>
						<img
							src={episode.image.medium}
							alt={`Rick and Morty ${episode.name}`}
						/>
						<div className="card__content">
							<div>
								Season: {episode.season} Number: {episode.number}
							</div>
							<StyledButton
								isFavourite={favourites.includes(episode)}
								type="button"
								onClick={() => toggleFavAction(state, dispatch, episode)}
							>
								{!favourites.includes(episode) ? "Fav" : "Unfav"}
							</StyledButton>
						</div>
					</StyledItem>
				);
			})}
		</StyledList>
	);
}

export default EpisodesList;

/**
 * Styled Components
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
 * Local interfaces
 */
interface ButtonType {
	isFavourite: boolean;
}

/**
 * Animations
 */
