import React from 'react'
import { TouchableOpacity, View, StatusBar, Text } from 'react-native'

import * as styles from './styles'

const statusBarHeight = StatusBar.currentHeight;

export const Header = ({title, headerTitle, headerTitleStyle, headerStyle, leftIcon, headerLeftIcon,leftIconPress, rightIcon,headerRightIcon, rightIconPress}) => {
  return (
    <View style={[styles.mainContainer(statusBarHeight), headerStyle]}>
      <TouchableOpacity onPress={leftIconPress} style={styles.leftView()}>
      {headerLeftIcon ? (
        leftIcon()
      ) : null}
      </TouchableOpacity>
    <View style={styles.centerView()}>{
      title ? (
      <Text style={[styles.headerTitle(), headerTitleStyle]}>{headerTitle}</Text>
      ) : null
    }</View>
      <TouchableOpacity onPress={rightIconPress} style={styles.rightView()}>
      {headerRightIcon ? (
        rightIcon()
      ) : null}
      </TouchableOpacity>
    </View>
  )
}
