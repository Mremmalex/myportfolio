import style from "./About.module.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Card from "../../ui/card/Card";
import react from "../../../assests/reactjs.png";
import python from "../../../assests/python.png";
import next from "../../../assests/nextjs.png";
import typescript from "../../../assests/typescript.svg";
import mongodb from "../../../assests/mongodb.png";
import express from "../../../assests/express.svg";
import postgress from "../../../assests/postgress.png";

function AboutSection() {
	return (
		<section className={style.about_section}>
			<div className={style.container}>
				<div className={style.about_head}>
					<h1 className="">About Me</h1>
					<p>
						I'm a fullstack web and mobile developer, i work with alot of
						technologies to bring your ideas to life
					</p>
					<h4>tools i use includes the following:</h4>
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
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
