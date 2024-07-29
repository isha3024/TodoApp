import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import { AuthStackNavigation } from '../authStackNavigation';
import { TodoScreen } from '../../screens';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='authStackNavigation'
          component={AuthStackNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='todoScreen'
          component={TodoScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}