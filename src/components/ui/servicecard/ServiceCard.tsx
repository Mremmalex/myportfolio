import React from "react";

function ServiceCard(): JSX.Element {
	return (
		<div className="container">
			<div>
				<h1>This are awesome services i offer</h1>
				<p>get in touch lets build top notch softwares for your businesses</p>
			</div>
			<div className="grid gap-2 md:grid-cols-3 ">
				<div className="w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
					<h1 className="text-xl md:text-2xl font-bold">Web Development</h1>
					<p>
						I help develop and build website for your ideas or product using top
						ntch technologies and infastructures, that suites your budget
					</p>
				</div>
				<div className="w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
					<h1 className="text-xl md:text-2xl font-bold">
						Mobile App Development
					</h1>
					<p>
						I help develop and build mobile applcation for your ideas or product
						using top ntch technologies and infastructures, that suites your
						budget
					</p>
				</div>
				<div className="w-[20rem] md:w-[27rem] h-[20rem] shadow-lg">
					<h1 className="text-xl md:text-2xl font-bold">Product Management</h1>
					<p>
						I help develop and build yout product for your using top notch skil,
						technologies and infastructures, that suites your budget
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
