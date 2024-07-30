import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_SUCCESS, LOGOUT, REGISTER } from "../Types";


export const loginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user
	}
}

export const registerSuccess = (user) => {
	console.log('user in registerSuccess function: ', user)
	return {
		type: REGISTER,
		payload: user
	}
}

export const logout = () => ({
	type: LOGOUT,
});


//async action creaters
export const login = (user) => async (dispatch) => {
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

export const register = (user) => async (dispatch) => {
	try {
		await AsyncStorage.setItem('user', JSON.stringify(user));
		dispatch(registerSuccess(user))
	}
	catch(error) {
		console.log(error)
	}
}
