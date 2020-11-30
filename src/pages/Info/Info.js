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
				<Link className="jumbotron__link" to="/users/Vadimagic">
					<img className="jumbotron__img" src="./assets/img/codewars.png" alt="Codewars" />
					<span className="jumbotron__href">Мой Codewars</span>
				</Link>
				<a className="jumbotron__link"  href="https://github.com/Vadimagic" target="_blank" rel="noreferrer">
					<img className="jumbotron__img" src="./assets/img/github.svg" alt="Codewars" />
					<span className="jumbotron__href">Мой GitHub</span>
				</a>
			</div>
		</div>
	)
}