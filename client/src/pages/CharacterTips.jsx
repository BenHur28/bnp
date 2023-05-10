import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterTips = () => {
	const [listOfChars, setListOfChars] = useState([]);

	useEffect(() => {
		axios.get("/characters").then((response) => {
			setListOfChars(response.data);
		});
	}, []);

	return (
		<div>
			<Navbar />
			<div className="mt-4 text-center flex flex-col gap-2">
				<h1 className="text-2xl underline font-bold">List of Characters:</h1>
				{listOfChars?.length > 0 &&
					listOfChars.map((chars, index) => (
						<Link to={`/character/${chars.name}`} key={index} className="text-lg underline mx-auto">
							{chars.name}
						</Link>
					))}
			</div>
		</div>
	);
};

export default CharacterTips;
