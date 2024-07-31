import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { SplashScreenLoader } from '../../components'
import { color } from '../../theme'
import * as styles from './styles'

export const SpalshScreen = () => {
  return (
    <View style={styles.mainView()}>
      <StatusBar backgroundColor={color.primary}/>
      <SplashScreenLoader />
    </View>
  )
}
