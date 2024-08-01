import React from 'react'
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { QuotesScreen, TodoScreen } from '../../screens'
import { color, fonts, fontSize, IcQuotes, IcTodo, size } from '../../theme'

const Tab = createBottomTabNavigator();

export const BottomStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: color.red,
      tabBarInactiveTintColor: color.semiTransBlack,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: color.cream,
        borderTopLeftRadius: size.moderateScale(15),
        borderTopRightRadius: size.moderateScale(15),
        borderTopColor: color.cream,
        zIndex: 1,
        position: 'absolute',
        overflow: 'hidden',
        height: size.moderateScale(70),  // Set the height of the tab bar
        paddingVertical: size.moderateScale(10),
        backgroundColor: color.cream,
        paddingBottom: size.moderateScale(10),
      },
      tabBarLabelStyle: {
        fontSize: fontSize.small, // Increase font size
        fontFamily: fonts.poppinsMedium,  // Use the font family you prefer
      },
    }}>
      <Tab.Screen
        name='todoScreen'
        component={TodoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (<IcTodo fill={color} width={size.moderateScale(32)} height={size.moderateScale(32)} />)
          },
          tabBarLabel: 'Todo',
        }}
      />
      <Tab.Screen
        name='quotesScreen'
        component={QuotesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (<IcQuotes fill={color} width={size.moderateScale(30)} height={size.moderateScale(30)} />)
          },
          tabBarLabel: 'Quotes',
        }}
      />
    </Tab.Navigator>
  )
}
