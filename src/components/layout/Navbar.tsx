import React, { useEffect, useState } from "react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";
export default function Navbar() {
	const [IsNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		setIsNavOpen(false);
	}, []);

	return (
		<header className="font-sens">
			<nav className="flex flex-row items-center justify-between p-4">
				<div className="">
					<h1 className="text-2xl font-bold">Emmalex.</h1>
				</div>
				<div className="hidden md:flex">
					<a href="" className="font-bold pr-4">
						Home
					</a>
					<a href="" className="font-bold pr-4">
						About
					</a>
					<a href="" className="font-bold ">
						Service
					</a>
				</div>

				{/* <button className="hidden md:flex py-2 mt-1 px-3 bg-accent text-white rounded-xl font-bold hover:scale-125">
					Get In Touch
				</button> */}
				<Button title="Get In Touch" style="hidden md:flex py-2 mt-1 px-3" />
				<div
					className={IsNavOpen ? "hidden" : "md:hidden"}
					onClick={() => setIsNavOpen(!IsNavOpen)}>
					<MenuAlt1Icon className="w-8 " />
				</div>
			</nav>

			<div
				className={
					!IsNavOpen
						? "hidden"
						: "fixed md:hidden flex flex-col bg-white bottom-0 top-0 right-0 w-[15rem] h-screen shadow-xl"
				}>
				<div
					className="fixed left-[-10] right-0 "
					onClick={() => setIsNavOpen(!IsNavOpen)}>
					<XIcon className="w-8" />
				</div>
				<div className="flex flex-col items-center justify-center max-w-full">
					<div className="mobile-nav flex flex-col justify-center items-center pt-[4rem]">
						<a href="" className="font-bold">
							Home
						</a>
						<a href="" className="font-bold pt-5">
							About
						</a>
						<a href="" className="font-bold pt-5 ">
							Service
						</a>
						{/* <button className="py-2 mt-4 px-8 bg-accent rounded-xl text-white font-bold hover:scale-125">
							Get In Touch
						</button> */}
						<Button title="Get In Touch" style="py-2 mt-4 px-8 " />
					</div>
				</div>

				<div className="absolute bottom-1 items-center max-w-full h-8">
					<div className="flex flex-row justify-evenly w-full gap-[4.5rem] px-[4rem]">
						<a href="">
							<FaGithub className="w-6 text-accent" size={25} />
						</a>
						<a href="">
							<FaInstagram className="w-6 text-accent" size={25} />
						</a>
						<a href="">
							<FaLinkedin className="w-6 text-accent" size={25} />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
