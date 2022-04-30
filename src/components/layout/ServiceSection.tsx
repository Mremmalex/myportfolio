import websvg from "../../assests/coding-web.svg";
import mobileapp from "../../assests/mobile-app.svg";
import product from "../../assests/new-product.svg";
export default function ServiceSection() {
	return (
		<section className="font-sens">
			<div className="flex flex-col justify-center items-center">
<<<<<<< HEAD
<<<<<<< HEAD
				<div className="pt-[2rem] px-6 py-6 flex flex-col items-center justify-center">
=======
				<div className="pt-[2rem] flex flex-col items-center justify-center">
>>>>>>> 0f17060 (resolve rebase issues)
=======
				<div className="pt-[2rem] px-6 py-6 flex flex-col items-center justify-center">
>>>>>>> 783d884 (resolve rebase issues)
					<h1 className="text-xl md:text-4xl font-bold">
						This are awesome services i offer
					</h1>
					<p>
<<<<<<< HEAD
<<<<<<< HEAD
						I indulge you to get in touch with me so that together we will build
						<span className=""> top notch softwares for your businesses. </span>
=======
						get in touch lets build top notch softwares{" "}
						<span className="sm:break-words"> for your businesses </span>
>>>>>>> 0f17060 (resolve rebase issues)
=======
						I indulge you to get in touch with me so that together we will build
						<span className=""> top notch softwares for your businesses. </span>
>>>>>>> 783d884 (resolve rebase issues)
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
<<<<<<< HEAD
<<<<<<< HEAD
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] text-accent"
=======
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] "
>>>>>>> 0f17060 (resolve rebase issues)
=======
								className="w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] text-accent"
>>>>>>> 783d884 (resolve rebase issues)
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
