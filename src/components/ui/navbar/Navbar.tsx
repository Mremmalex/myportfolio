import React, { useEffect, useState } from "react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import Button from "../Button";
import style from "./Navbar.module.scss";

export default function Navbar() {
	const [IsNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		setIsNavOpen(false);
	}, []);

	return (
		<header className={style.header}>
			<div className={style.container}>
				<a className={style.logo}>Emmalex.</a>

				<svg
					onClick={() => setIsNavOpen(!IsNavOpen)}
					className={style.menu_open}
					width="24"
					height="20"
					viewBox="0 0 24 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M24 20H0V16.6667H24V20ZM24 11.6667H0V8.33333H24V11.6667ZM24 3.33333H12V0H24V3.33333Z"
						fill="black"
					/>
				</svg>

				<nav className={`${style.navbar_left} ${style.desktop_navbar}`}>
					<ul className="">
						<li>
							<a href="src/components/ui/navbar/Navbar" className="">
								Home
							</a>
						</li>
						<li>
							<a href="src/components/ui/navbar/Navbar" className="">
								About
							</a>
						</li>
						<li>
							<a href="src/components/ui/navbar/Navbar" className=" ">
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<a href="#" className={style.navbar_cta}>
					Get In Touch
				</a>
			</div>

			<div className={style.container}>
				<nav className={IsNavOpen ? style.mobile_navbar : style.hidden}>
					<svg
						onClick={() => setIsNavOpen(!IsNavOpen)}
						className={style.menu_close}
						width="25"
						height="26"
						viewBox="0 0 25 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.4066 12.7344L24.6605 0.511719C24.8323 0.308594 24.6878 0 24.4222 0H21.305C21.1214 0 20.9456 0.0820311 20.8245 0.222656L12.3675 10.3047L3.91047 0.222656C3.79328 0.0820311 3.6175 0 3.43 0H0.312813C0.0471881 0 -0.0973434 0.308594 0.0745316 0.511719L10.3284 12.7344L0.0745316 24.957C0.0360301 25.0023 0.0113298 25.0577 0.00336251 25.1166C-0.00460481 25.1755 0.00449543 25.2354 0.0295838 25.2893C0.0546721 25.3432 0.0946948 25.3887 0.144899 25.4205C0.195103 25.4523 0.253381 25.4691 0.312813 25.4688H3.43C3.61359 25.4688 3.78938 25.3867 3.91047 25.2461L12.3675 15.1641L20.8245 25.2461C20.9417 25.3867 21.1175 25.4688 21.305 25.4688H24.4222C24.6878 25.4688 24.8323 25.1602 24.6605 24.957L14.4066 12.7344Z"
							fill="white"
						/>
					</svg>

					<ul className="">
						<li>
							<a href="src/components/ui/navbar/Navbar" className="">
								Home
							</a>
						</li>
						<li>
							<a href="src/components/ui/navbar/Navbar" className="">
								About
							</a>
						</li>
						<li>
							<a href="src/components/ui/navbar/Navbar" className=" ">
								Contact
							</a>
						</li>
					</ul>

					<a href="#" className={style.navbar_mobile_cta}>
						Get In Touch
					</a>
				</nav>
			</div>
		</header>
	);
}
