import React from "react";
import Navbar from "../componenets/Navbar";
import { Link } from "react-router-dom";

const PastEventPage = () => {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-2xl underline font-bold">Past Events</h1>
				{/* <Link className="text-lg underline mx-auto" to={"/past/dreamhack"}>
					Dreamhack 2023
				</Link>
				<Link className="text-lg underline mx-auto" to={"/past/crossover"}>
					Crossover Arc 2023
				</Link>
				<Link className="text-lg underline mx-auto" to={"/past/slashback"}>
					Slashback 2023
				</Link>
				<Link className="text-lg underline mx-auto" to={"/past/frosty"}>
					Frosty Fausting 2023
				</Link> */}
			</div>
		</div>
	);
};

export default PastEventPage;
