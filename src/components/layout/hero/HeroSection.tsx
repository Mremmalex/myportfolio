import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import heroimage from "../../../assests/heroimage2.svg";
import style from "./Hero.module.scss";

function HeroSection(): JSX.Element {
	return (
		<section className={style.hero_section}>
			<div className={style.container}>
				<div className={style.hero_left}>
					<h1 className={style.hero_heading}>Hey, I'm Ifeanyichukwu</h1>
					<p className={style.hero_subhead}>
						i create web and mobile applications for companies.
					</p>
					<p className={style.hero_semihead}>Innovation is my passion</p>

					<a className={style.hero_cta}>Contact Me</a>
				</div>

				<img src={heroimage} className={style.hero_img} alt="hero image" />

				{/* <div className="hero">
					<div className="flex flex-row justify-center md:flex-col gap-[3rem] px-[1.5rem]">
						<a
							href="src/components/layout/hero/HeroSection"
							className="hover:scale-110">
							<FaGithub className="w-6 text-accent" size={25} />
						</a>
						<a
							href="src/components/layout/hero/HeroSection"
							className="hover:scale-110">
							<FaInstagram className="w-6 text-accent" size={25} />
						</a>
						<a
							href="src/components/layout/hero/HeroSection"
							className="hover:scale-110">
							<FaLinkedin className="w-6 text-accent" size={25} />
						</a>
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default HeroSection;
