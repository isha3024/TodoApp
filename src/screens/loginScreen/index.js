import React, { useRef, useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert, Animated, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as styles from './styles'
import { color, IcBackArrow, IcCheck, IcClose, IcEmail, IcEyeClose, IcEyeOpen, IcLock, size } from '../../theme'
import { Button, Header } from '../../components'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/AuthAction'

export const LoginScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
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
    const emailRegex = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;

    if(!inputFields.email){
      newErrors.email = 'Email is required'
      setIsEmailValid(false)
    }
    else if (!emailRegex.test(inputFields?.email)){
      newErrors.email = 'Invalid email. Your email should be example@gmail.com'
      setIsEmailValid(false)
    }
    else {
      setIsEmailValid(true)
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
    const userEmail = inputFields?.email;
    const userPassword = inputFields?.password;
    const user = { userEmail, userPassword};
    
    try {
      if(validateForm()){
        dispatch(login(user))
      }
    }
    catch (error) {
      console.log(error)
      ToastAndroid.show(
        'Error: ' + error.message,
        ToastAndroid.SHORT
      )
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
        />
      </View>
      <View style={styles.middleView()}>
        <View style={styles.formDataView()}>
          <Text style={styles.title()}>Login</Text>
          <View style={styles.inputBoxWrapper()}>
            <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
              <IcEmail width={size.moderateScale(20)} height={size.moderateScale(20)} />
              <TextInput
                style={styles.inputStyle()}
                placeholder='Email'
                placeholderTextColor={color.creamLight}
                value={inputFields?.email}
                onChangeText={(val) => handleChange(val, 'email')}
                autoCapitalize='none'
                keyboardType='email-address'
              />
              {
                errors.email && (<Text style={styles.errorText()}>{errors.email}</Text>)
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
            <TouchableOpacity style={styles.linkWrapper()} onPress={() => navigation.navigate('todoScreen', {user: inputFields} )}>
              <Text style={styles.linkText()}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper()}>
            <Button 
              title='LOGIN'
              btnStyle={styles.button()}
              onPress={handleLogin}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
