import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const CurrentEventPage = () => {
	const event = "dreamhack";
	const [listOfPlayers, setListOfPlayers] = useState([]);

	useEffect(() => {
		axios.get(`/event/${event}`, event).then(({ data }) => {
			setListOfPlayers(data);
		});
	}, []);

	return (
		<div>
			<Navbar />
			<div className="mt-4 text-center flex flex-col gap-2">
				<h1 className="text-center text-2xl mb-4">List of Players:</h1>
				{listOfPlayers?.length > 0 &&
					listOfPlayers.map((player, index) => (
						<Link to={`/player/${player.name}`} className="text-lg underline" key={index}>
							{player.name}
						</Link>
					))}
			</div>
		</div>
	);
};

export default CurrentEventPage;
