import { Nav } from './Nav'
import './Navbar.scss'

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="navbar__brand">
				Codewars Search
			</div>
			<Nav/>
		</nav>
	)
}