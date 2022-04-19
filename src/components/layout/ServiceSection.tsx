import websvg from "../../assests/coding-web.svg";
import mobileapp from "../../assests/mobile-app.svg";
import product from "../../assests/new-product.svg";
export default function ServiceSection() {
	return (
		<section className="font-sens">
			<div className="flex flex-col justify-center items-center">
				<div className="pt-[2rem] flex flex-col items-center justify-center">
					<h1 className="text-xl md:text-4xl font-bold">
						This are awesome services i offer
					</h1>
					<p>
						get in touch lets build top notch softwares <br /> for your
						businesses
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3 pt-[3rem] ">
					<div className="flex flex-col items-center w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
						<div className="flex flex-col justify-center items-center">
							<img
								src={websvg}
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] "
								alt="web development"
							/>
							<h1 className="text-xl md:text-2xl font-bold">Web Development</h1>
						</div>
						<p className="p-3 pt-4">
							I help develop and build website for your ideas or product using
							top notch technologies and infastructures, that suites your budget
						</p>
					</div>
					<div className="flex flex-col items-center w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
						<div className="flex flex-col justify-center items-center">
							<img
								src={mobileapp}
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] "
								alt="web development"
							/>
							<h1 className="text-xl md:text-2xl font-bold">
								Mobile App Development
							</h1>
						</div>
						<p className="p-3 pt-4">
							I help develop and build mobile applcation for your ideas or
							product using top notch technologies and infastructures, that
							suites your budget
						</p>
					</div>
					<div className="flex flex-col items-center w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
						<div className="flex flex-col justify-center items-center">
							<img
								src={product}
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] "
								alt="web development"
							/>
							<h1 className="text-xl md:text-2xl font-bold">
								Product Management
							</h1>
						</div>
						<p className="p-3 pt-4">
							I help develop and build yout product for your using top notch
							skil, technologies and infastructures, that suites your budget
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
