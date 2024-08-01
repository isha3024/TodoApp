import React, { useRef, useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert, Animated, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions/AuthAction'
import { LOGIN_SUCCESS } from '../../redux/Types'

import { color, IcBackArrow, IcEyeClose, IcEyeOpen, IcLock, IcPerson, size } from '../../theme'
import { Button, Header } from '../../components'
import * as styles from './styles'

export const LoginScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [inputFields, setInputFields] = useState({
    username: '',
    password: ''
  });
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(true);
  const [errors, setErrors] = useState({});
  
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  }

  const handleChange = (value, field) => {
    setInputFields({
      ...inputFields,
      [field]: value
    });
  };

  const validateForm = () => {

    let newErrors = {};

    if(!inputFields.username){
      newErrors.username = 'Username is required'
      setIsUsernameValid(false)
    }
    else {
      setIsUsernameValid(true)
    }

    if(!inputFields.password){
      newErrors.password = 'Password is required'
      setIsPasswordValid(false)
    }
    else if (inputFields.password.length < 8){
      newErrors.password = 'Password must be at least 8 characters'
      setIsPasswordValid(false)
    }
    else {
      setIsPasswordValid(true)
    }

    setErrors(newErrors);
    if(Object.keys(newErrors).length !== 0) {
      shake()
    }
    return Object.keys(newErrors).length === 0
  } 


  const handleLogin = async () => {
    const user = {
      username: inputFields?.username,
      password: inputFields?.password
    }
    try {
      if(!validateForm()){
        return;
      }
      const result = await dispatch(userLogin(user));
      if(result.type === LOGIN_SUCCESS){
        Alert.alert(
          'Login Success',
          'You have successfully logged in',
          [{text: 'OK', onPress: () => navigation.navigate('todoScreen')}]
        )
      }
    }
    catch (error) {
      console.log(error)
      // ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.mainView()}>
      <View style={styles.topView()}>
        <StatusBar backgroundColor={color.primary} translucent={true} />
        <Header
          headerStyle={styles.header()}
          headerLeftIcon
          leftIcon={() => {
            return (
              <IcBackArrow />
            )
          }}
          leftIconPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.middleView()}>
        <View style={styles.formDataView()}>
          <Text style={styles.title()}>Login</Text>
          <View style={styles.inputBoxWrapper()}>
            <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
              <IcPerson width={size.moderateScale(20)} height={size.moderateScale(20)} />
              <TextInput
                style={styles.inputStyle()}
                placeholder='Username'
                placeholderTextColor={color.creamLight}
                value={inputFields?.username}
                onChangeText={(val) => handleChange(val, 'username')}
                autoCapitalize='none'
                keyboardType='default'
              />
              {
                errors.username && (<Text style={styles.errorText()}>{errors.username}</Text>)
              }
            </Animated.View>
            <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
              <IcLock width={size.moderateScale(20)} height={size.moderateScale(20)} />
              <TextInput
                style={styles.inputStyle()}
                placeholder='Password'
                placeholderTextColor={color.creamLight}
                value={inputFields.password}
                onChangeText={(val) => handleChange(val, 'password')}
                secureTextEntry={togglePasswordVisibility}
                autoCapitalize='none'
                keyboardType='default'
              />
              <TouchableOpacity onPress={() => setTogglePasswordVisibility(!togglePasswordVisibility)}>
                {
                  togglePasswordVisibility
                    ? (<IcEyeOpen width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                    : (<IcEyeClose width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                }
              </TouchableOpacity>
              {
                errors.password && (<Text style={styles.errorText()}>{errors.password}</Text>)
              }
            </Animated.View>
            <TouchableOpacity style={styles.linkWrapper()} onPress={() => navigation.navigate('registerScreen')}>
              <Text style={styles.linkText()}>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper()}>
            <Button 
              title='LOGIN'
              btnStyle={styles.button(loading)}
              disabled={loading}
              onPress={handleLogin}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
