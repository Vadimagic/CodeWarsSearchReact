import {useReducer} from 'react'
import axios from 'axios'
import { SEARCH_USERS } from '../types'
import { CodewarsContext } from './codewarsContext'
import { codewarsReducer } from './codewarsReducer'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
console.log(CLIENT_ID)
const withCreds = url => {
	return `${url}?access_key=${CLIENT_ID}`
}

export const CodewarsState = ({children}) => {
	const initialState = {
		search: '',
		user: {},
		users: [
			{id : 1},
			{id : 2},
			{id : 3},
			{id : 4},
			{id : 5},
		]
	}

	const [state, dispatch] = useReducer(codewarsReducer, initialState)

	const searchName = async value => {
		const response = await axios.get(
			withCreds(`https://www.codewars.com/api/v1/users/${value}`)
		)

		console.log(response)

		dispatch({
			type: SEARCH_USERS,
			payload: response.data.items,
			search: value
		})
	}

	const { search, user, users } = state

	return (
		<CodewarsContext.Provider value={{
			searchName,
			search, user, users
		}}>
			{children}
		</CodewarsContext.Provider>
	)
}