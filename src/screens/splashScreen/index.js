import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import * as styles from './styles'
import { SplashScreenLoader } from '../../components/splashScreenLoader'
import { color } from '../../theme'

export const SpalshScreen = () => {
  return (
    <View style={styles.mainView()}>
      <StatusBar backgroundColor={color.primary}/>
      <SplashScreenLoader />
    </View>
  )
}
