import './Info.scss'
import { Link } from "react-router-dom"

export const Info = () => {
	return (
		<div className="jumbotron">
			<h1 className="jumbotron__title">CodewarSSearch</h1>
			<p className="jumbotron__text">
				SPA приложение, написанное на React + React Hooks.
				Представляет из себя поиск информации с ресурса: Codewars (решение задач по программированию)
			</p>
			<div className="jumbotron__link-list">
				<div className="jumbotron__link">
					<img className="jumbotron__img" src="./assets/img/codewars.png" alt="Codewars" />
					<Link className="jumbotron__href" to="/users/Vadimagic">Мой Codewars</Link>
				</div>
				<div className="jumbotron__link">
					<img className="jumbotron__img" src="./assets/img/github.svg" alt="Codewars" />
					<a className="jumbotron__href" href="https://www.codewars.com/users/Vadimagic" target="_blank" rel="noreferrer">Мой GitHub</a>
				</div>
			</div>
		</div>
	)
}