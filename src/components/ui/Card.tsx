interface Props {
	image: string;
	skill: string;
}
function Card(props: Props) {
	return (
		<div className=" flex flex-row w-[12rem] md:w-[20rem] justify-evenly items-center h-[4rem] shadow-lg bg-white hover:scale-105">
			<img src={props.image} alt="skills image" className="w-[3rem] h-[3rem]" />

			<div>
				<h3 className="font-semibold text-[#000]">{props.skill}</h3>
			</div>
		</div>
	);
}

export default Card;
