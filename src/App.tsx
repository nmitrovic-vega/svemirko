import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, Typography, Button } from "@material-ui/core";
import { mutate } from "swr";
import { theme } from "./theme/theme";
import PlanetList from "./components/PlanetList/PlanetList";
import astronaut from "./assets/images/astronaut.png";
import RocketLogo from "./components/RocketLogo/RocketLogo";
import "./App.css";

function App() {
	const handlePrefetch = async () => {
		await mutate(
			"planets",
			fetch(
				"https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars+where+disc_facility+like+%27%25TESS%25%27+order+by+pl_orbper+desc&format=json"
			).then((res) => res.json())
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div className="section">
								<RocketLogo />
								<Typography variant="h1" className="title" style={{ color: "white", marginTop: "250px" }}>
									Svemirko.rs
								</Typography>
								<Link
									to="rocket"
									onMouseEnter={handlePrefetch}
									style={{
										display: "block",
										margin: "140px auto",
										textAlign: "center",
										textDecoration: "none",
									}}
								>
									<Button
										variant="contained"
										color="secondary"
										style={{
											margin: "auto",
											color: "white",
											textDecoration: "none",
											borderRadius: "10px",
											padding: "15px 20px",
										}}
									>
										RESERVE A FLIGHT
									</Button>
								</Link>
								<img src={astronaut} className="astronaut" alt="astronaut" />
							</div>
						}
					/>
					<Route path="/rocket" element={<PlanetList />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
