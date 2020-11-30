import { useContext } from "react"
import { Search } from "../../components/Search/Search"
import { CodewarsContext } from "../../context/codewars/codewarsContext"

export const Home = () => {
	const { users } = useContext(CodewarsContext)
console.log(users)
	return (
		<>
			<Search/>
			HOME

			{
				(users[0])
				&& 
				<div className="user-list">
					{users.map( user => (
						<div className="user" key={user.id}>
							Vadimmmmm
						</div>
					))}
				</div>
			}
		</>
	)
}