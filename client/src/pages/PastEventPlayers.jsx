import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const PastEventPlayers = () => {
	const { event } = useParams();
	console.log(event);
	const [listOfPlayers, setListOfPlayers] = useState([]);

	useEffect(() => {
		axios.get(`/event/${event}`).then(({ data }) => {
			setListOfPlayers(data);
		});
	}, [event]);

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

export default PastEventPlayers;
