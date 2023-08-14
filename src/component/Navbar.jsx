import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="max-w-screen-lg mx-auto font-bold text-xl p-5 flex justify-between">
				<Link to='/' >TodoList</Link>
				<ul>
					<li>
						<Link to='/' >Home</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
