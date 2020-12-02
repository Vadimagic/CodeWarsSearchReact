import { useContext } from "react"
import { Search } from "../../components/Search/Search"
import { CodewarsContext } from "../../context/codewars/codewarsContext"
import './Home.scss'

export const Home = () => {
	const { users } = useContext(CodewarsContext)
	
	return (
		<>
			<Search/>

			{/* {
				(users[0])
				&& 
				<div className="user-list">
					{users.map( user => (
						<div className="user" key={user.id}>
							<div className="user__content">
								<img src="https://html5css.ru/w3css/img_avatar3.png" alt="avatar" className="user__img"/>
								<div className="user__info">
									<div className="user__kata">3 kyu</div>
									<div className="user__kata">exp: {user.id}</div>
									<div className="user__kata">99</div>
									<button className="user__btn">Open</button>
								</div>
							</div>
						</div>
					))}
				</div>
			} */}
		</>
	)
}