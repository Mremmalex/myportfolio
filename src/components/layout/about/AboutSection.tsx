import style from "./About.module.scss";
import Card from "../../ui/card/SkillCard";
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
		<section className={style.about_section} id="about">
			<Container>
				<div className={style.about_head}>
					<h1 className="">About Me</h1>
					<p>
						I'm a Fullstack Web and Mobile Developer. I have a wide variety of
						coding niches to bring your ideas to life.
					</p>
					<h4> Skills/Tools i use include the following:</h4>
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

				<div className={style.choose_me}>
					<h1>Why you Should choose me .</h1>
					<ol>
						<li>I am a time Management Master (fast &amp; secure)</li>
						<li>100% Client Satisfaction</li>
						<li>I Pay Attention to Every Detail Of Your Work</li>
						<li>I'm a clear communicator</li>
						<li>I Provide Professional Functionalities</li>
						<li>100% money-back guarantee if you are not satisfied </li>
					</ol>
				</div>
			</Container>
		</section>
	);
}

export default AboutSection;
