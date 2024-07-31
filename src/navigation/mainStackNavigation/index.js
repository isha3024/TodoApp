import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


import { SpalshScreen } from '../../screens/splashScreen';
import { AuthStackNavigation } from '../authStackNavigation';
import { TodoScreen } from '../../screens';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false)
    }, 2000)
  }, [])

  const userLoggedIn = useSelector((state) => state.auth.userLoggedIn);;
  console.log('userLoggedIn:: ', userLoggedIn)


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          showSplashScreen && (
            <Stack.Screen
              name='splashScreen'
              component={SpalshScreen}
              options={{
                headerShown: false
              }}
            />
          )
        }
        {
          userLoggedIn
            ? (
              <Stack.Screen
                name='todoScreen'
                component={TodoScreen}
                options={{
                  headerShown: false
                }}
              />
            ) : (
              <Stack.Screen
                name='authStackNavigation'
                component={AuthStackNavigation}
                options={{
                  headerShown: false
                }}
              />
            )
        }
        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}