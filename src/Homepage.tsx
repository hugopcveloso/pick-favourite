import React, { useContext, useEffect } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./Interfaces";
import { toggleFavAction, fetchDataAction } from "./Actions";
import Loader from "./components/Loader";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

function Homepage() {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	});

	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites,
	};
	return (
		<>
			<React.Suspense fallback={<Loader />}>
				<EpisodesList {...props} />
			</React.Suspense>
		</>
	);
}

export default Homepage;
