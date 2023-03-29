import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import IndexPage from "./pages/IndexPage";
import CurrentEventPage from "./pages/CurrentEventPage";
import PastEventPage from "./pages/PastEventPage";
import CharacterTips from "./pages/CharacterTips";
import PlayerPage from "./pages/PlayerPage";
import PastEventPlayers from "./pages/PastEventPlayers";
import SingleCharPage from "./pages/SingleCharPage";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "/current",
		element: <CurrentEventPage />,
	},
	{
		path: "/past",
		element: <PastEventPage />,
	},
	{
		path: "/past/:event",
		element: <PastEventPlayers />,
	},
	{
		path: "/character",
		element: <CharacterTips />,
	},
	{
		path: "/character/:name",
		element: <SingleCharPage />,
	},
	{
		path: "/player/:name",
		element: <PlayerPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
