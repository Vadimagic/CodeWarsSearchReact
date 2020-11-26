import './Search.scss'

export const Search = () => {
	return (
		<div className="search">
			<input 
				className="search__control"
				type="text"
				placeholder="Введите ник пользователя..."
			/>
		</div>
	)
}