import React from "react";
import { ReactComponent as RocketTrail } from "../../assets/images/rocket-trail.svg";
import { ReactComponent as Rocket } from "../../assets/images/rocket.svg";
import * as S from "./RocketLogo.styled";

const RocketLogo = () => {
	return (
		<S.RocketLogo>
			<RocketTrail className="rocket-trail" />
			<Rocket className="rocket" />
		</S.RocketLogo>
	);
};

export default RocketLogo;
