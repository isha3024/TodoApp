import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
	FETCH_QUOTES_REQUEST, 
	FETCH_QUOTES_SUCCESS, 
	LOGIN_FAILURE, 
	LOGIN_REQUEST, 
	LOGIN_SUCCESS, 
	LOGOUT, 
	REGISTER_FAILURE, 
	REGISTER_REQUEST, 
	REGISTER_SUCCESS 
} from "../Types";
import axios from "axios";
import { ToastAndroid } from "react-native";




//user login post request
export const userLogin = (user) => async (dispatch) => {
	dispatch({type: LOGIN_REQUEST})
	try {
		const response = await axios({
			url: 'https://dummyjson.com/user/login',
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			data: user
		})
		if (response.status === 200) {
			const user = response.data;
			await AsyncStorage.setItem('user', JSON.stringify(user));
			dispatch({ type: LOGIN_SUCCESS, payload: user });
		}
		return {type: LOGIN_SUCCESS, payload: response.data}
	}
	catch(error) {
		// console.error('Error details:', error.response.data.message);
		ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
		dispatch({ type: LOGIN_FAILURE, payload: error });

		return {type: LOGIN_FAILURE, payload: error}
	}
}

//user register post request
export const userRegister = (user) => async (dispatch) => {
	dispatch({type: REGISTER_REQUEST})
	try {
		const response = await axios({
			url: 'https://dummyjson.com/users/add',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: user
		})
		if(response.status === 200) {
			const user = response.data;
			await AsyncStorage.setItem('user', JSON.stringify(user));
			dispatch({ type: REGISTER_SUCCESS, payload: user });
		}
		return {type: REGISTER_SUCCESS, payload: response.data}
	}
	catch (error) {
		// console.error('Error details:', error.response.data.message);
		ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
		dispatch({ type: REGISTER_FAILURE, payload: error });

		return {type: REGISTER_FAILURE, payload: error}
	}
}

//user logout
export const logoutUser = () => {
	return { 
		type: LOGOUT 
	};
}


//fetching quotes from API
export const fetchQuotes = () => async (dispatch) => {
	dispatch({
		type: FETCH_QUOTES_REQUEST
	})
	try {
		const response = await axios({
			url: 'https://type.fit/api/quotes',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		if (response.status === 200) {
			const quotes = response.data;
			console.log('quotes response in getQuotes: ', quotes)
			await AsyncStorage.setItem('quotes', JSON.stringify(quotes));
			dispatch({ type: FETCH_QUOTES_SUCCESS, payload: quotes });
		}
	}
	catch (error) {
		// console.error('Error details:', error.response.data.message);
		ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
	}
}