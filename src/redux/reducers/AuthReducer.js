import { LOGIN_SUCCESS, LOGOUT, REGISTER } from "../Types"

const initialState = {
	isLoggedIn: false,
	user: null,
	isRegistered: false
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isRegistered: true,
				user: action.payload
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				isRegistered: false,
				user: null
			}
		case REGISTER:
			return {
				...state,
				isLoggedIn: true,
				isRegistered: true,
				user: action.payload
			}
		default:
			return state
	}
}