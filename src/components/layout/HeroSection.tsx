import heroimage from "../../assests/Designer-Life.svg";
import Button from "../ui/Button";
function HeroSection() {
	return (
		<section className="font-sens z-10">
			<div className="flex flex-col md:flex-row flex-evenly md:items-center">
				<div className="w-[50rem] p-[4rem] md:p-[5rem]">
					<h1 className="text-2xl md:text-5xl font-bold">
						Hey, I'm Ifeanyichukwu
					</h1>
					<p className="text-md md:text-xl">
						i create web and mobile applications for companies.
					</p>
					<p className="texl-md md:text-xl">Innovation is my passion</p>
					<Button
						title="Contact Me"
						style="text-2xl py-2 md:py-4 mt-4 px-[5rem]"
					/>
				</div>
				<div>
					<img src={heroimage} className="w-50 h-50" alt="hero image" />
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
