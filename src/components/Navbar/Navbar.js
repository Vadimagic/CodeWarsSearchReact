import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="navbar__brand">
				Codewars Search
			</div>
			<ul className="navbar__nav nav">
				<li className="nav__item">
					<NavLink to="/" exact className="nav__link">Главная</NavLink>
				</li>
			</ul>
		</nav>
	)
}