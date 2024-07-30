import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import { AuthStackNavigation } from '../authStackNavigation';
import { TodoScreen } from '../../screens';
import { loadUser } from '../../redux/actions/AuthAction';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('isLoggedIn: ', isLoggedIn)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isLoggedIn 
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