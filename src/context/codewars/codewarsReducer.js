import { SEARCH_USERS } from '../types'

const handlers = {
	[SEARCH_USERS]: (state, {payload}) => ({...state, users: payload}),
	DEFAULT: state => state
}

export const codewarsReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action)
}