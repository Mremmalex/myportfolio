import { ReactNode } from "react";
import style from "./SkillCard.module.scss";

interface Props {
	image: string;
	skill: string;
	children?: ReactNode;
}
function Card({ image, skill }: Props): JSX.Element {
	return (
		<div className={style.card}>
			<img src={image} alt="skills image" className="" />

			<div>
				<h3>{skill}</h3>
			</div>
		</div>
	);
}

export default Card;
