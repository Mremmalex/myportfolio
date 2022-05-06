import Container from "../../ui/container";
import style from "./Contact.module.scss";

function ContactSection() {
	return (
		<section className={style.contact_section}>
			<Container>
				<div className={style.contact}>
					<div className={style.contact_left}>
						<h1>Let's Talk!</h1>
						<p>
							bringing your brand to life is not that hard, let me help you
							build your product and scale
						</p>

						<div className={style.links}></div>
						<p>Or write to me</p>
						<p>mremmalex2@gmail.com</p>
					</div>

					<div className={style.contact_right}>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8651985793103!2d7.3570424144561395!3d5.1254113392563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429966f24c317f%3A0xca084cdf8a33f168!2s10%20Calabar%20Street%2C%20Aba%20450211%2C%20Aba!5e0!3m2!1sen!2sng!4v1651444467912!5m2!1sen!2sng"></iframe>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ContactSection;
