import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, RegisterScreen } from '../../screens';
import { useSelector } from 'react-redux';


const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {


  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log('isLoggedIn in registerScreen: ', isLoggedIn)

  const isRegistered = useSelector(state => state.auth.isRegistered);
  console.log('isRegistered:: ', isRegistered)

  return (
    <AuthStack.Navigator>
      {
        isRegistered
          ? (
            <AuthStack.Screen
              name='loginScreen'
              component={LoginScreen}
              options={{
                headerShown: false
              }}
            />

          )
          : (
            <AuthStack.Screen
              name='registerScreen'
              component={RegisterScreen}
              options={{
                headerShown: false
              }}
            />
          )
      }
    </AuthStack.Navigator>
  )
}
