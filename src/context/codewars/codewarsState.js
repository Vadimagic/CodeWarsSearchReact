import {useReducer} from 'react'
import axios from 'axios'
import { SEARCH_USERS } from '../types'
import { CodewarsContext } from './codewarsContext'
import { codewarsReducer } from './codewarsReducer'

const ACCESS_KEY = process.env.SOME_API_KEY

const withCreds = url => {
	return `${url}access_key=${ACCESS_KEY}`
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
		]
	}

	const [state, dispatch] = useReducer(codewarsReducer, initialState)

	const searchName = async value => {
		const response = await axios.get(
			withCreds(`https://www.codewars.com/users`)
		)

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