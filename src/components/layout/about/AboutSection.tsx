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
				<div className={style.icon}>
					<a href="#" className="">
						<svg
							width="20"
							height="20"
							viewBox="0 0 72 71"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M36 0C16.119 0 0 16.119 0 36C0 52.869 11.616 66.984 27.276 70.89C27.108 70.404 27 69.84 27 69.141V62.988C25.539 62.988 23.091 62.988 22.476 62.988C20.013 62.988 17.823 61.929 16.761 59.961C15.582 57.774 15.378 54.429 12.456 52.383C11.589 51.702 12.249 50.925 13.248 51.03C15.093 51.552 16.623 52.818 18.063 54.696C19.497 56.577 20.172 57.003 22.851 57.003C24.15 57.003 26.094 56.928 27.924 56.64C28.908 54.141 30.609 51.84 32.688 50.754C20.7 49.521 14.979 43.557 14.979 35.46C14.979 31.974 16.464 28.602 18.987 25.761C18.159 22.941 17.118 17.19 19.305 15C24.699 15 27.96 18.498 28.743 19.443C31.431 18.522 34.383 18 37.485 18C40.593 18 43.557 18.522 46.251 19.449C47.025 18.51 50.289 15 55.695 15C57.891 17.193 56.838 22.968 56.001 25.782C58.509 28.617 59.985 31.98 59.985 35.46C59.985 43.551 54.273 49.512 42.303 50.751C45.597 52.47 48 57.3 48 60.939V69.141C48 69.453 47.931 69.678 47.895 69.945C61.923 65.028 72 51.708 72 36C72 16.119 55.881 0 36 0Z"
								fill="black"
							/>
						</svg>
					</a>
					<a href="#" className="">
						<svg
							width="20"
							height="20"
							viewBox="0 0 72 72"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z"
								fill="black"
							/>
						</svg>
					</a>
					<a href="#" className="">
						<svg
							width="20"
							height="20"
							viewBox="0 0 66 66"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M60 0H6C2.685 0 0 2.685 0 6V60C0 63.315 2.685 66 6 66H60C63.315 66 66 63.315 66 60V6C66 2.685 63.315 0 60 0ZM20.862 54H12.012V25.524H20.862V54ZM16.347 21.453C13.494 21.453 11.187 19.14 11.187 16.293C11.187 13.446 13.497 11.136 16.347 11.136C19.191 11.136 21.504 13.449 21.504 16.293C21.504 19.14 19.191 21.453 16.347 21.453ZM54.012 54H45.168V40.152C45.168 36.849 45.108 32.601 40.569 32.601C35.964 32.601 35.256 36.198 35.256 39.912V54H26.412V25.524H34.902V29.415H35.022C36.204 27.177 39.09 24.816 43.395 24.816C52.356 24.816 54.012 30.714 54.012 38.382V54V54Z"
								fill="black"
							/>
						</svg>
					</a>
				</div>
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
