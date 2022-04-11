import React from "react";

interface Props {
	title: string;
	style?: string;
}

function Button({ title, style }: Props) {
	const styleClass: string =
		style + " bg-accent rounded-xl text-white font-bold hover:scale-125";
	return <button className={styleClass}>{title}</button>;
}

export default Button;
