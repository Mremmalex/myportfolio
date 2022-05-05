import style from "./About.module.scss";

import Card from "../../ui/card/Card";
import react from "../../../assests/reactjs.png";
import python from "../../../assests/python.png";
import next from "../../../assests/nextjs.png";
import typescript from "../../../assests/typescript.svg";
import mongodb from "../../../assests/mongodb.png";
import express from "../../../assests/express.svg";
import postgress from "../../../assests/postgress.png";
import Container from "../../ui/container";

function AboutSection() {
	return (
		<section className={style.about_section}>
			<Container>
				<div className={style.about_head}>
					<h1 className="">About Me</h1>
					<p>
						I'm a Fullstack Web and Mobile Developer. I have a wide variety of
						coding niches to bring your ideas to life
					</p>
					<h4> Skills/Tools i use includes the following:</h4>
				</div>

				<div className={style.skill}>
					<Card image={react} skill="Reactjs" />
					<Card image={react} skill="React Native" />
					<Card image={next} skill="Nextjs" />
					<Card image={typescript} skill="Typescript" />
					<Card image={express} skill="Express Js" />
					<Card image={python} skill="Python" />
					<Card image={postgress} skill="Postgress" />
					<Card image={mongodb} skill="Mongo Database" />
				</div>
			</Container>
		</section>
	);
}

export default AboutSection;
