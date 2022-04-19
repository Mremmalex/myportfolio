import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Card from "../ui/Card";
import react from "../../assests/reactjs.png";
import python from "../../assests/python.png";
import next from "../../assests/nextjs.png";
import typescript from "../../assests/typescript.svg";
import mongodb from "../../assests/mongodb.png";
import express from "../../assests/express.svg";
import postgress from "../../assests/postgress.png";

function SkillSection() {
	return (
		<section className="font-sens items-center justify-center bg-accent text-white h-screen">
			<div className="md:hidden items-center h-8 pt-[1rem] md:pt-0">
				<div className="flex flex-row justify-center gap-[3rem] px-[1.5rem]">
					<a href="" className="hover:scale-110">
						<FaGithub className="w-6 text-white" size={25} />
					</a>
					<a href="" className="hover:scale-110">
						<FaInstagram className="w-6 text-white" size={25} />
					</a>
					<a href="" className="hover:scale-110">
						<FaLinkedin className="w-6 text-white" size={25} />
					</a>
				</div>
			</div>
			<div className="items-center justify-center mt-4 pt-[2rem] md:h-[6rem] text-center rounded-xl">
				<h1 className="text-5xl font-bold md:pt-2">About Me</h1>
				<p>
					I'm a fullstack web and mobile developer, i work with alot of
					technologies to bring your ideas to life
				</p>
				<h3>tools use include the following:</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 md:mt-[4rem] gap-6 md-[1rem] p-[0.5rem] md:p-[2rem] pt-[2rem] md:pt-[8rem]">
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
		</section>
	);
}

export default SkillSection;
