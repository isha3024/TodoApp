import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import { LoginScreen, RegisterScreen } from '../../screens';


const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name='loginScreen'
          component={LoginScreen}
          options = {{
            headerShown: false
          }}
        />
        <AuthStack.Screen 
          name='registerScreen'
          component={RegisterScreen}
          options = {{
            headerShown: false
          }}
        />
      </AuthStack.Navigator>
  )
}
