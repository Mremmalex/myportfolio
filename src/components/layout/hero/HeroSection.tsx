import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import hero_image from "../../../assests/heroimage2.svg";
import Container from "../../ui/container";
import style from "./Hero.module.scss";

function HeroSection(): JSX.Element {
	return (
		<section className={style.hero_section} id="home">
			<Container>
				<div className={style.hero}>
					<div className={style.hero_left}>
						<h1 className={style.hero_heading}>Hey, I'm Ifeanyichukwu</h1>
						<p className={style.hero_subhead}>
							Let me make your{" "}
							<span className={style.bold_text}> website stand out</span>,and
							bring and end to your search for a{" "}
							<span className={style.bold_text}>
								professional fullstack web &amp; mobile developer.
							</span>
						</p>

						<div className={style.hero_contact}>
							<a className={style.hero_cta}>Contact Me</a>
						</div>
					</div>

					<img src={hero_image} className={style.hero_img} alt="hero image" />
				</div>
			</Container>
		</section>
	);
}

export default HeroSection;
