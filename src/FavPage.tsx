import React, { useContext } from "react";
import { Store } from "./Store";
import Loader from "./components/Loader";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./Interfaces";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));
const FavPage = () => {
	const { state, dispatch } = useContext(Store);

	const props: IEpisodeProps = {
		episodes: state.favourites,
		store: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites,
	};
	return (
		<React.Suspense fallback={<Loader />}>
			<EpisodesList {...props} />
		</React.Suspense>
	);
};

export default FavPage;
