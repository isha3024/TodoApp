import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as styles from './styles'
import { color, IcBackArrow, IcEmail, IcEyeClose, IcEyeOpen, IcLock, size } from '../../theme'
import { Button, Header } from '../../components'

export const LoginScreen = () => {

  const navigation = useNavigation()
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

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
            <View style={styles.inputBox()}>
              <IcEmail width={size.moderateScale(20)} height={size.moderateScale(20)} />
              <TextInput
                style={styles.inputStyle()}
                placeholder='Email'
                placeholderTextColor={color.creamLight}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputBox()}>
              <IcLock width={size.moderateScale(20)} height={size.moderateScale(20)} />
              <TextInput
                style={styles.inputStyle()}
                placeholder='Password'
                placeholderTextColor={color.creamLight}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={togglePasswordVisibility}
              />
              <TouchableOpacity onPress={() => setTogglePasswordVisibility(!togglePasswordVisibility)}>
                {
                  togglePasswordVisibility
                    ? (<IcEyeOpen width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                    : (<IcEyeClose width={size.moderateScale(16)} height={size.moderateScale(16)} fill={color.cream} />)
                }
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.linkWrapper()} onPress={() => navigation.navigate('registerScreen')}>
              <Text style={styles.linkText()}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper()}>
            <Button 
              title='LOGIN'
              btnStyle={styles.button()}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
