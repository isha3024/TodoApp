import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput, Animated, Platform, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

import { Button, Header } from '../../components'
import { color, IcBackArrow, IcEmail, IcEyeClose, IcEyeOpen, IcLock, IcPerson, IcUserAdd, size } from '../../theme'
import * as styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { resetLoading, userRegister } from '../../redux/actions/AuthAction'
import { ScrollView } from 'react-native-gesture-handler'
import { REGISTER_SUCCESS } from '../../redux/Types'

export const RegisterScreen = () => {


  const navigation = useNavigation()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading);
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(true);
  const [togglePasswordVisibilityTwo, setTogglePasswordVisibilityTwo] = useState(true);
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [inputFields, setInputFields] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  }

  const handledTextChange = (field, val) => {
    setInputFields((prev) => (
      {
        ...prev,
        [field]: val
      }
    ));
  }

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
    const nameRegex = /^[a-zA-z]/gm;
    const usernameRegex = /^[a-z]{2,6}$/

    if (!inputFields?.name) {
      newErrors.name = 'Name is required';
      setIsFirstNameValid(false)
    }
    else if (inputFields?.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      setIsFirstNameValid(false)
    }
    else if (!nameRegex.test(inputFields?.name)) {
      newErrors.name = 'Name should not contain special characters and should not start with any digit'
      setIsFirstNameValid(false)
    }

    if(!inputFields?.username){
      newErrors.username = 'Username is required',
      setIsUserNameValid(false)
    }
    else if(inputFields?.username.length <= 2){
      newErrors.username = 'Username must be at least 3 characters long',
      setIsUserNameValid(false)
    }
    else if(inputFields.username.length > 6) {
      newErrors.username = 'Username must be not more than 6 characters long',
      setIsUserNameValid(false)
    }
    else if(!usernameRegex.test(inputFields.username)){
      newErrors.username = 'Username should only contain lowercase letters',
      setIsUserNameValid(false)
    }
    else {
      setIsUserNameValid(true)
    }

    if (!inputFields?.email) {
      newErrors.email = 'Email is required'
      setIsEmailValid(false)
    }
    else if (!emailRegex.test(inputFields?.email)) {
      newErrors.email = 'Invalid email. Your email should be example@gmail.com'
      setIsEmailValid(false)
    }
    else {
      setIsEmailValid(true)
    }

    if (!inputFields?.password) {
      newErrors.password = 'Password is required'
      setIsPasswordValid(false)
    }
    else if (inputFields?.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
      setIsPasswordValid(false)
    }
    else {
      setIsPasswordValid(true)
    }

    if (inputFields?.password !== inputFields?.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
      setIsConfirmPasswordValid(false)
    }
    else if (!inputFields?.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required'
      setIsConfirmPasswordValid(false)
    }

    setErrors(newErrors);
    if(Object.keys(newErrors).length !== 0) {
      shake()
    }
    return Object.keys(newErrors).length === 0
  }

  const handleRegister = async () => {
    const name = inputFields?.name;
    const userName = inputFields?.username
    const userEmail = inputFields?.email;
    const userPassword = inputFields?.password;
    const userConfirmPassword = inputFields?.confirmPassword;
    const user = { name, userName, userEmail, userPassword, userConfirmPassword};
    
    try {
      if(!validateForm()){
        return
      }
      const result = await dispatch(userRegister(user));
      if(result.type === REGISTER_SUCCESS){
        Alert.alert(
          'Registration Success',
          'You have successfully registered',
          [{text: 'OK', onPress: () => navigation.navigate('loginScreen')}]
        )
      }
    }
    catch (error) {
      Alert.alert(
        'Error',
        'Error while registring',
        [{text: 'OK', onPress: () => navigation.navigate('todoScreen')}]
      )
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(resetLoading())
  }, [])
  

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.keyboardAwareStyle()}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView()}>
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
            <Text style={styles.title()}>Register</Text>
            <View style={styles.inputBoxWrapper()}>
              <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
                <IcPerson width={size.moderateScale(20)} height={size.moderateScale(20)} />
                <TextInput
                  style={styles.inputStyle()}
                  placeholder='Name'
                  placeholderTextColor={color.creamLight}
                  value={inputFields?.name}
                  onChangeText={(text) => handledTextChange('name', text)}
                />
                {
                  errors.name && (<Text style={styles.errorText()}>{errors.name}</Text>)
                }
              </Animated.View>
              <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
                <IcUserAdd width={size.moderateScale(20)} height={size.moderateScale(20)} />
                <TextInput
                  style={styles.inputStyle()}
                  placeholder='Username'
                  placeholderTextColor={color.creamLight}
                  autoCapitalize='none'
                  value={inputFields?.username}
                  onChangeText={(text) => handledTextChange('username', text)}
                />
                {
                  errors.username && (<Text style={styles.errorText()}>{errors.username}</Text>)
                }
              </Animated.View>
              <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
                <IcEmail width={size.moderateScale(20)} height={size.moderateScale(20)} />
                <TextInput
                  style={styles.inputStyle()}
                  placeholder='Email'
                  placeholderTextColor={color.creamLight}
                  autoCapitalize='none'
                  keyboardType='email-address'
                  value={inputFields?.email}
                  onChangeText={(text) => handledTextChange('email', text)}
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
                  value={inputFields?.password}
                  onChangeText={(text) => handledTextChange('password', text)}
                  secureTextEntry={togglePasswordVisibility}
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
              <Animated.View style={[styles.inputBox(), { transform: [{ translateX: shakeAnim }] }]}>
                <IcLock width={size.moderateScale(20)} height={size.moderateScale(20)} />
                <TextInput
                  style={styles.inputStyle()}
                  placeholder='Confirm Password'
                  placeholderTextColor={color.creamLight}
                  value={inputFields?.confirmPassword}
                  onChangeText={(text) => handledTextChange('confirmPassword', text)}
                  secureTextEntry={togglePasswordVisibilityTwo}
                />
                <TouchableOpacity onPress={() => setTogglePasswordVisibilityTwo(!togglePasswordVisibilityTwo)}>
                  {
                    togglePasswordVisibilityTwo
                      ? (<IcEyeOpen width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                      : (<IcEyeClose width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                  }
                </TouchableOpacity>
                {
                  errors.confirmPassword && (<Text style={styles.errorText()}>{errors.confirmPassword}</Text>)
                }
              </Animated.View>
              <TouchableOpacity style={styles.linkWrapper()} onPress={() => navigation.navigate('loginScreen')}>
                <Text style={styles.linkText()}>Already have an account?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper()}>
              <Button
                title='REGISTER'
                btnStyle={styles.button(loading)}
              disabled={loading}
                onPress={handleRegister}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}
