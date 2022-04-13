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
		<section className="font-sens bg-accent text-white h-screen pt-[5rem]">
			<div className="items-center justify-center w-[20rem] md:w-[30rem] md:h-[6rem] text-center rounded-xl">
				<h1 className="text-5xl font-bold pt-3">Tools I Use</h1>
				<p>This are tools i use to bring your ideas to life.</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md-[1rem] md:p-[2rem] pt-[10rem]">
				<Card image={react} skill="Reactjs" />
				<Card image={react} skill="React Native" />
				<Card image={python} skill="Python" />
				<Card image={next} skill="Nextjs" />
				<Card image={typescript} skill="Typescript" />
				<Card image={postgress} skill="Postgress" />
				<Card image={mongodb} skill="Mongo Database" />
				<Card image={express} skill="Express Js" />
			</div>
		</section>
	);
}

export default SkillSection;
