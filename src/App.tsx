import React, { useContext } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { Store } from "./Store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import FavPage from "./FavPage";

const App = () => {
	const { state } = useContext(Store);

	return (
		<Router>
			<GlobalStyles />
			<StyledHeader>
				<Link to="/">
					<h1>Rick and Morty</h1>
				</Link>

				<div>
					<Link to="/">Home</Link>
					<Link to="/faves">Favourites: {state.favourites.length}</Link>
				</div>
			</StyledHeader>
			<Route exact path="/">
				<Homepage />
			</Route>
			<Route path="/Faves">
				<FavPage />
			</Route>
		</Router>
	);
};

const StyledHeader = styled.section`
	z-index: 10;
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
	a {
		text-decoration: none;
		color: black;
	}
	h1 {
		font-weight: bold;
		font-size: 20px;
	}
	div {
		display: flex;
		a {
			margin-left: 30px;
		}
	}
`;

export default App;
