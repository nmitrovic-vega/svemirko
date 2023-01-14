import React from "react";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { useSWRConfig } from "swr";
import RocketLoader from "../RocketLoader/RocketLoader";
import Planet from "../Planet/Planet";
import * as S from "./PlanetList.style";

const PlanetList = () => {
	const { cache } = useSWRConfig();
	const planets = cache.get("planets");

	if (!planets?.length) {
		return <RocketLoader />;
	}

	return (
		<Grid container spacing={2} style={{ padding: "50px", textAlign: "center" }}>
			{planets.slice(0, 100).map((planet: any, index: number) => (
				<Grid key={planet.pl_name} xs={4} item>
					<S.PlanetCard>
						<Card
							variant="outlined"
							style={{
								border: "2px solid #4370f6",
								borderRadius: "10px",
								display: "flex",
								flexDirection: "column",
								backgroundColor: "transparent",
								minHeight: "340px",
							}}
						>
							<CardContent>
								<S.PlanetName>
									<span>Planet name:</span> <p>{planet.pl_name}</p>
								</S.PlanetName>
								<Planet planetId={index % 17} />
								<S.PlanetInfo>
									<p>
										Year of discovery: <span>{planet.disc_year}</span>
									</p>
									<p>
										Light years away: <span>{Math.round(planet.pl_eqt) || 100}</span>
									</p>
								</S.PlanetInfo>
								<Button
									variant="contained"
									color="secondary"
									style={{ margin: "auto", color: "white", textDecoration: "none" }}
								>
									BUY
								</Button>
							</CardContent>
						</Card>
					</S.PlanetCard>
				</Grid>
			))}
		</Grid>
	);
};

export default PlanetList;
