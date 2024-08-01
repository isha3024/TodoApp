import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Types"

const initialState = {
  user: [],
	loading: false,
	error: '',
	userLoggedIn: false,
	quotes: ''
}

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				userLoggedIn: false
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
				userLoggedIn: true
			}
		case LOGIN_FAILURE:
			return {
				...state,
				user: '',
				loading: false,
				error: action.payload,
				userLoggedIn: false
			}
		case LOGOUT:
			return {
				...state,
				user: '',
				loading: false,
				userLoggedIn: false
			}
		case FETCH_QUOTES_REQUEST:
			return {
				...state,
				loading: true,
			}
		case FETCH_QUOTES_SUCCESS:
			return {
				...state,
				loading: false,
				quotes: action.payload
			}
		default:
			return state
	}
}