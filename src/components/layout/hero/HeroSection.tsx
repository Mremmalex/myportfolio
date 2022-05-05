import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import heroimage from "../../../assests/heroimage2.svg";
import Container from "../../ui/container";
import style from "./Hero.module.scss";

function HeroSection(): JSX.Element {
	return (
		<section className={style.hero_section}>
			<Container>
				<div className={style.hero}>
					<div className={style.hero_left}>
						<h1 className={style.hero_heading}>Hey, I'm Ifeanyichukwu</h1>
						<p className={style.hero_subhead}>
							Let me make your{" "}
							<span className={style.bold_text}> website stand out</span>,and
							bring and end to your search for a{" "}
							<span className={style.bold_text}>
								professional fullstack web &amp; mobile developer
							</span>
						</p>

						<div className={style.hero_contact}>
							<a className={style.hero_cta}>Contact Me</a>
						</div>
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
			</Container>
		</section>
	);
}

export default HeroSection;
