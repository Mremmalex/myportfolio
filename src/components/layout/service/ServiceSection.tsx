import style from "./Service.module.scss";
import websvg from "../../../assests/coding-web.svg";
import mobileapp from "../../../assests/mobile-app.svg";
import product from "../../../assests/new-product.svg";

export default function ServiceSection() {
	return (
		<section className={style.service_section}>
			<div className={style.container}>
				<div className={style.service_heading}>
					<h1 className="">This are awesome services i offer</h1>
					<p>
						get in touch lets build top notch softwares <span>for your</span>
						businesses
					</p>
				</div>
				<ul>
					<li>
						<img src={websvg} className="" alt="web development" />
						<h1 className="">Web Development</h1>

						<p className="">
							I help develop and build website for your ideas or product using
							top notch technologies and infastructures, that suites your budget
						</p>
						<button>Lets Build</button>
					</li>
					<li className="">
						<img src={mobileapp} className=" " alt="web development" />
						<h1 className="">Mobile App Development</h1>
						<p className="">
							I help develop and build mobile applcation for your ideas or
							product using top notch technologies and infastructures, that
							suites your budget
						</p>
						<button>Lets Build</button>
					</li>
					<li className="">
						<img src={product} className=" " alt="web development" />
						<h1 className="">Product Management</h1>
						<p className="">
							I help develop and build yout product for your using top notch
							skil, technologies and infastructures, that suites your budget
						</p>
						<button>Lets Build</button>
					</li>
				</ul>
			</div>
		</section>
	);
}
