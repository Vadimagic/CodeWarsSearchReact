import {useReducer} from 'react'
import axios from 'axios'
import {} from '../types'
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
		users: []
	}

	const [state, dispatch] = useReducer(codewarsReducer)

	return (
		<CodewarsContext.Provider value={}>
			{children}
		</CodewarsContext.Provider>
	)
}