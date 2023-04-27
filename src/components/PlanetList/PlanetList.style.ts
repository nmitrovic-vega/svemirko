import styled from "@emotion/styled";
import cardBackground from "../../assets/images/White_Shapes.png";
import planetListBackground from "../../assets/images/space-background.jpg";

export const PlanetListWrapper = styled.div`
	background-image: url(${planetListBackground});
	min-height: 100vh;
`;

export const PlanetCard = styled.div`
	position: relative;
	color: red;
	background: url(${cardBackground}) no-repeat;
	background-size: cover;
	background-position: 50% 50%;
	border-radius: 10px;
`;

export const PlanetName = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 35px;

	span {
		color: #2a356f;
		font-weight: bold;
	}

	p {
		color: #d9316b;
		font-weight: bold;
		margin-top: 5px;
	}
`;

export const PlanetInfo = styled.div`
	margin: 50px 0 15px 0;

	span {
		color: #d9316b;
		font-weight: bold;
	}

	p {
		color: #2a356f;
		font-weight: bold;
		margin: 5px 0;
	}
`;
