import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../componenets/Navbar";

const PlayerPage = () => {
	const { name } = useParams();
	const [player, setPlayer] = useState(null);

	useEffect(() => {
		if (!name) {
			return;
		}
		axios.get(`/player/${name}`).then((response) => {
			setPlayer(response.data);
		});
	}, [name]);

	if (!player) return "";
	return (
		<div className="h-screen w-screen">
			<Navbar />
			<h1 className="text-3xl text-center font-bold mt-4"> {player.name}</h1>
			<div className="h-1/2 mt-10">
				<iframe
					className="mx-auto aspect-video rounded-2xl lg:w-1/3 lg:h-3/4 md:w-1/2 md:h-3/4 sm:w-1/2 sm: h-1/2 relative top-10"
					src={player.vodlinks[0]}
					allowFullScreen
				></iframe>
			</div>
			<div className="lg:w-1/3 md:w-1/2 sm: w-2/3 mx-auto text-left mb-6">
				<h2 className="text-2xl text-center font-bold mb-3 ">Neutral</h2>
				<ol className="list-outside list-disc">{player.neutral?.length > 0 && player.neutral.map((data, index) => <li key={index}>{data}</li>)}</ol>
			</div>
			<div className="lg:w-1/3 md:w-1/2 sm: w-2/3 mx-auto text-left mb-6">
				<h2 className="text-2xl text-center font-bold mb-3 ">Offense</h2>
				<ol className="list-outside list-disc">{player.neutral?.length > 0 && player.offense.map((data, index) => <li key={index}>{data}</li>)}</ol>
			</div>
			<div className="lg:w-1/3 md:w-1/2 sm: w-2/3 mx-auto text-left mb-6">
				<h2 className="text-2xl text-center font-bold mb-3 ">Defense</h2>
				<ol className="list-outside list-disc">{player.neutral?.length > 0 && player.defense.map((data, index) => <li key={index}>{data}</li>)}</ol>
			</div>
			<div className="lg:w-1/3 md:w-1/2 sm: w-2/3 mx-auto text-left mb-6 pb-10">
				<h2 className="text-2xl text-center font-bold mb-3 ">GRD</h2>
				<ol className="list-outside list-disc">{player.neutral?.length > 0 && player.grd.map((data, index) => <li key={index}>{data}</li>)}</ol>
			</div>
		</div>
	);
};

export default PlayerPage;
