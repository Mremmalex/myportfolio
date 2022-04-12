import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import heroimage from "../../assests/Designer-Life.svg";
import Button from "../ui/Button";
function HeroSection() {
	return (
		<section className="font-sens">
			<div className="flex flex-col md:flex-row flex-evenly md:items-center">
				<div className=" w-[30rem] p-[1.5rem] md:w-[50rem] pt-[3rem] md:p-[4rem] md:justify-self-center">
					<h1 className="text-2xl md:text-5xl font-bold">
						Hey, I'm Ifeanyichukwu
					</h1>
					<p className="text-md md:text-xl">
						i create web and mobile applications for companies.
					</p>
					<p className="texl-md md:text-xl">Innovation is my passion</p>
					<div className="flex w-full">
						<Button
							title="Contact Me"
							style="text-2xl py-2 md:py-4 mt-4 px-[3rem] md:px-[5rem] pl-[2rem]"
						/>
					</div>
				</div>
				<div className="pt-6">
					<img src={heroimage} className="w-50 h-50" alt="hero image" />
				</div>
				<div className="bottom-5 items-center h-8 pt-4 md:pt-0">
					<div className="flex flex-row justify-center md:flex-col gap-[3rem] px-[1.5rem]">
						<a href="" className="hover:scale-110">
							<FaGithub className="w-6 text-accent" size={25} />
						</a>
						<a href="" className="hover:scale-110">
							<FaInstagram className="w-6 text-accent" size={25} />
						</a>
						<a href="" className="hover:scale-110">
							<FaLinkedin className="w-6 text-accent" size={25} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
