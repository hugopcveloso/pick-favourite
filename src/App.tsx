import React, { useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import EpisodeList from "./EpisodeList";
import styled from "styled-components";
import { Store } from "./Store";
const App = () => {
	const { state, dispatch } = useContext(Store);

	return (
		<React.Fragment>
			<GlobalStyles />
			<StyledHeader>
				<h1>Rick and Morty</h1>
				<div>
					<span>Pick your favourite episode: </span>
					<span>{state.favourites.length}</span>
				</div>
			</StyledHeader>
			<EpisodeList />
		</React.Fragment>
	);
};

const StyledHeader = styled.section`
	display: flex;
	width: 70vw;
	margin: 0 auto;
	justify-content: space-between;
	background-color: white;
	border-bottom: 1px solid black;
	margin-bottom: 20px;
	padding: 30px;
	position: sticky;
	top: 0;
	h1 {
		font-weight: bold;
		font-size: 20px;
	}
`;

export default App;
