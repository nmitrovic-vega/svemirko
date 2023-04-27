import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, Typography, Button } from "@material-ui/core";
import { mutate } from "swr";
import { theme } from "./theme/theme";
import PlanetList from "./components/PlanetList/PlanetList";
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
								<Typography variant="h1" className="title" style={{ position: "relative", color: "white" }}>
									Svemirko.rs
								</Typography>
								<Link
									to="rocket"
									style={{
										display: "block",
										margin: "20px 0 50px 0",
										textAlign: "center",
										textDecoration: "none",
										fontWeight: "bold",
									}}
								>
									<Button
										variant="contained"
										onMouseEnter={handlePrefetch}
										color="secondary"
										style={{
											margin: "auto",
											color: "white",
											textDecoration: "none",
											borderRadius: "10rem",
											padding: "15px 20px",
										}}
									>
										EXPLORE
									</Button>
								</Link>
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
