import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, RegisterScreen } from '../../screens';


const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
      }}
    >
      <AuthStack.Screen
        name='registerScreen'
        component={RegisterScreen}
      />
      <AuthStack.Screen
        name='loginScreen'
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  )
}
