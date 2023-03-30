import React, { useState, useEffect } from "react";
import Navbar from "../componenets/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCharPage = () => {
	const { name } = useParams();
	const [char, setChar] = useState(null);

	useEffect(() => {
		if (!name) {
			return;
		}
		axios.get(`/characters/${name}`).then((response) => {
			setChar(response.data);
		});
	}, [name]);

	return (
		<div>
			<Navbar />
			<h1 className="text-3xl text-center font-bold mt-4"> {char?.name}</h1>
			<div className="">
				{char?.video.length > 0 &&
					char.video.map((video, index) => (
						<div className="h-1/2 mt-10" key={index}>
							<h2 className="text-3xl text-center font-bold my-4">{video.title}</h2>
							<iframe
								className="mx-auto aspect-video rounded-2xl lg:w-1/3 lg:h-3/4 md:w-1/2 md:h-3/4 sm:w-1/2 sm:h-1/2 max-sm:w-3/4"
								src={video.link}
								allowFullScreen
							></iframe>
							<div className="lg:w-1/3 md:w-1/2 sm: w-2/3 mx-auto text-left mt-4">
								<h2 className="text-xl text-center font-bold mb-3 ">Description</h2>
								<ol className="list-outside list-disc mb-6">
									<li>{video.description}</li>
								</ol>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default SingleCharPage;
