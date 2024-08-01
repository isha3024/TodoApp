import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Types"

const initialState = {
	loading: false,
	userLoggedIn: false,
  user: [],
	error: '',
	quotes: ''
}

export const authReducer = (state = initialState, action) => {
	console.log('action dispatch: ', action)
	switch(action.type) {
		case 'persist/REHYDRATE':
		return {
			...state,
			loading: false, // or some logic to determine the correct loading state
		};
		case REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			}
		case REGISTER_FAILURE: 
			return {
				...state,
				loading: false,
				error: action.payload,
				user: ''
			}
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				userLoggedIn: false
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				userLoggedIn: true,
				user: action.payload,
			}
		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				userLoggedIn: false,
				error: action.payload,
				user: '',
			}
		case LOGOUT:
			return {
				...state,
				loading: false,
				userLoggedIn: false,
				user: '',
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