import React, { useEffect, useState } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


import { SpalshScreen } from '../../screens/splashScreen';
import { AuthStackNavigation } from '../authStackNavigation';
import { TodoScreen } from '../../screens';
import { BottomStackNavigation } from '../bottomStackNavigation';
import { color } from '../../theme';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false)
    }, 2000)
  }, [])

  const userLoggedIn = useSelector((state) => state.auth.userLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
        }}      
      >
        {
          showSplashScreen && (
            <Stack.Screen
              name='splashScreen'
              component={SpalshScreen}
            />
          )
        }
        {!userLoggedIn
          ? (
            <Stack.Screen
              name='authStackNavigation'
              component={AuthStackNavigation}
            />
          ) : (
            <Stack.Screen
              name='bottomStackNavigation'
              component={BottomStackNavigation}
            />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}