import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
	return <div></div>;
};

export default PlayerPage;
