import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import IndexPage from "./pages/IndexPage";
import CurrentEventPage from "./pages/CurrentEventPage";
import PastEventPage from "./pages/PastEventPage";
import CharacterTips from "./pages/CharacterTips";
import PlayerPage from "./pages/PlayerPage";

axios.defaults.baseURL = "http://127.0.0.1:3000";
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
		path: "/character",
		element: <CharacterTips />,
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
