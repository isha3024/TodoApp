import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_SUCCESS, LOGOUT } from "../Types";


export const loginSuccess = (user) => {
	console.log('user in loginSuccess function: ', user)
	return {
		type: LOGIN_SUCCESS,
		payload: user
	}
}

export const logout = () => ({
	type: LOGOUT,
});


//async action creaters
export const login = (user) => async (dispatch) => {
	console.log('user in async login function: ', user)
	try {
		await AsyncStorage.setItem('user', JSON.stringify(user))
		dispatch(loginSuccess(user))
	}
	catch(error) {
		console.log(error)
	}
}

export const loadUser = () => async (dispatch) => {
	try {
		const user = await AsyncStorage.getItem('user');
		if(user) {
			dispatch(loginSuccess(JSON.parse(user)))
		}
	}
	catch (error) {
		console.log(error)
	}
}
