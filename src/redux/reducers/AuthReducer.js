import { LOGIN_SUCCESS, LOGOUT, REGISTER } from "../Types"

const initialState = {
	isLoggedIn: false,
	user: null
}

export const authReducer = (state = initialState, action) => {
	console.log('user in loginSuccess function: ', state)
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null
			}
		case REGISTER:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload
			}
		default:
			return state
	}
}