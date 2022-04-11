import React from "react";

interface Props {
	title: string;
	style?: string;
}

function Button({ title, style }: Props) {
	const styleClass: string =
		" bg-accent rounded-xl text-white font-bold hover:scale-125 " + style;
	return <button className={styleClass}>{title}</button>;
}

export default Button;
