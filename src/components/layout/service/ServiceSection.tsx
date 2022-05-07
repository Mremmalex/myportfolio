import style from "./Service.module.scss";
import web_svg from "../../../assests/coding-web.svg";
import mobile_app from "../../../assests/mobile-app.svg";
import product from "../../../assests/new-product.svg";
import Container from "../../ui/container";

export default function ServiceSection() {
	return (
		<section className={style.service_section}>
			<Container>
				<div className={style.service}>
					<div className={style.service_heading}>
						<h1 className="">This are awesome services I offer.</h1>
						<p>
							get in touch lets build top notch softwares <span>for your </span>
							businesses.
						</p>
					</div>
					<ul>
						<li>
							<img src={web_svg} className="" alt="web development" />
							<h1 className="">Web Development</h1>

							<p className="">
								I help develop and build website for your ideas or product using
								top notch technologies and infrastructures, that suite your
								budget.
							</p>
							<div className={style.lets_build}>
								<button>Lets Build</button>
							</div>
						</li>
						<li className="">
							<img src={mobile_app} className=" " alt="web development" />
							<h1 className="">Mobile App Development</h1>
							<p className="">
								I assist in the building and development of mobile application
								for your ideas and product.
							</p>
							<div className={style.lets_build}>
								<button>Lets Build</button>
							</div>
						</li>
						<li className="">
							<img src={product} className=" " alt="web development" />
							<h1 className="">Product Management</h1>
							<p className="">
								I help manage all aspect of the product life cycle, Including
								go-to-market strategies and product performance measurements.
							</p>
							<div className={style.lets_build}>
								<button>Lets Build</button>
							</div>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}
