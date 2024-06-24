import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { NavBar } from "./component/navBar.jsx";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { SingleCharacter } from "./views/singleCharacter.jsx";
import { SinglePlanet } from "./views/singlePlanet.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Routes>

						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<SingleCharacter />} />
						<Route path="/planet/:id" element={<SinglePlanet />} />
						<Route path="*" element={<h1>Not found!</h1>} />

					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
