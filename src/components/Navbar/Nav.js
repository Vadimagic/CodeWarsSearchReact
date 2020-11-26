import { NavLink } from "react-router-dom";

export const Nav = () => (
	<ul className="navbar__nav nav">
		<li className="nav__item">
			<NavLink to="/" exact className="nav__link">Главная</NavLink>
		</li>
		<li className="nav__item">
			<NavLink to="/user" exact className="nav__link">Пользователь</NavLink>
		</li>
		<li className="nav__item">
			<NavLink to="/kata" exact className="nav__link">Ката</NavLink>
		</li>
		<li className="nav__item">
			<NavLink to="/info" exact className="nav__link">Информация</NavLink>
		</li>
	</ul>
)