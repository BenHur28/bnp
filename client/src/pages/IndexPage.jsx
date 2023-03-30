import React from "react";
import Navbar from "../componenets/Navbar";

const IndexPage = () => {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center w-5/6 mx-auto">
				<h1 className="text-2xl font-bold my-4">You know the rules</h1>
				<p className="text-lg mb-4 text-center">IF YOU LOSE, YOU CANT COME HOME</p>
				<img className="rounded-2xl mb-4" src="https://media.discordapp.net/attachments/583753905620516866/1039966648125378651/the_voices.gif" alt="" />
				<p className="text-lg mb-4 text-center">NOW GO WIN YOU DIAMOND IN THE ROUGH</p>
				<img className="rounded-2xl" src="https://tenor.com/view/blue-lock-jinpachi-ego-ego-glasses-anime-glasses-gif-26886035.gif" alt="" />
			</div>
		</div>
	);
};

export default IndexPage;
