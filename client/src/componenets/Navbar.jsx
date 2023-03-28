import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [menu_class, setMenuClass] = useState("navbar-menu relative z-50 hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const updateMenu = () => {
		if (!isMenuClicked) {
			setMenuClass("navbar-menu w-max relative z-50");
		} else {
			setMenuClass("navbar-menu relative z-50 hidden");
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<>
			<nav className="relative py-5 flex justify-between items-center bg-white">
				<Link to={"/"} className="text-3xl font-bold leading-none pl-10 max-sm:mx-auto">
					BNP
				</Link>
				<div className="lg:hidden">
					<button onClick={updateMenu} className="navbar-burger flex items-center text-blue-600 p-3">
						<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<li>
						<Link to={"/current"} className="text-lg text-gray-400 hover:text-gray-500">
							Current Event
						</Link>
					</li>
					<li>
						<Link to={"/past"} className="text-lg text-gray-400 hover:text-gray-500">
							Past Events
						</Link>
					</li>
					<li>
						<Link to={"/character"} className="text-lg text-gray-400 hover:text-gray-500">
							Character Tips
						</Link>
					</li>
				</ul>
			</nav>
			<div className={menu_class}>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-6 bg-white border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<Link to={"/"} className="pl-3 mr-auto text-3xl font-bold leading-none">
							BNP
						</Link>
						<button onClick={updateMenu} className="navbar-close">
							<svg
								className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
							<li className="mb-1">
								<Link to={"/"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
									Home
								</Link>
							</li>
							<li className="mb-1">
								<Link to={"/current"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
									Current Event
								</Link>
							</li>
							<li className="mb-1">
								<Link to={"/past"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
									Past Events
								</Link>
							</li>
							<li className="mb-1">
								<Link to={"/character"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
									Character Tips
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
