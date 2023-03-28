import React from "react";
import Navbar from "../componenets/Navbar";
import { Link } from "react-router-dom";

const CurrentEventPage = () => {
	return (
		<div>
			<Navbar />
			<div className="mt-4">
				<h1 className="text-center text-xl">List of Players:</h1>
				<Link to={"/player/bigblack"}>Bigblack</Link>
			</div>
		</div>
	);
};

export default CurrentEventPage;
