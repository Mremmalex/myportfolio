import Button from "../../ui/Button";
import style from "src/components/layout/contact/Contact.module.css.scss";

function ContactSection() {
	return (
		<section className="font-sens">
			<div className="flex flex-col md:flex-row justify-between md:px-[4rem]">
				<div>
					<h1>get in touch</h1>
				</div>
				<div className="shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
					<form action="src/components/layout/contact/ContactSection" className="">
						<div className="flex flex-col mb-3">
							<label htmlFor="name">Your Name</label>
							<input
								className="border py-2 px-3 text-[#444444] rounded-xl"
								type="text"
								id="name"
							/>
						</div>
						<div className="flex flex-col mb-3">
							<label htmlFor="email">Your Email</label>
							<input
								className="border py-2 px-3 text-[#444444] rounded-xl"
								type="text"
								id="email"
							/>
						</div>
						<div className="flex flex-col mb-6">
							<label htmlFor="content">Message</label>
							<textarea
								className="border py-2 px-3 text-[#444444] rounded-xl"
								name="content"
								id="content"
								cols={30}
								rows={10}></textarea>
						</div>
						<div>
							<Button title="Lets Build" style="px-10 py-2" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
