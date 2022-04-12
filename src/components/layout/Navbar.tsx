import React, { useEffect, useState } from "react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/solid";
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
					<div className="mobile-nav flex flex-col justify-center items-center pt-[6rem]">
						<a href="" className="font-bold">
							Home
						</a>
						<a href="" className="font-bold pt-5">
							About
						</a>
						<a href="" className="font-bold pt-5 ">
							Service
						</a>
						<Button title="Get In Touch" style="py-2 mt-4 px-8 " />
					</div>
				</div>
			</div>
		</header>
	);
}
