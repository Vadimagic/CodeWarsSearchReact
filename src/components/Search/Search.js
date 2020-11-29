import { useContext, useState } from "react"
import { CodewarsContext } from "../../context/codewars/codewarsContext"
import './Search.scss'

export const Search = () => {
	const [value, setValue] = useState('')
	const codewars = useContext(CodewarsContext)

	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return
		}

		codewars.searchName(value.trim())
	}

	return (
		<div className="search">
			<input 
				className="search__control"
				type="text"
				placeholder="Введите ник пользователя..."
				onChange={event => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
		</div>
	)
}