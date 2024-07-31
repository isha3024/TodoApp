import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

import * as styles from './styles'
import { lottieIcons } from '../../theme'

export const SplashScreenLoader = () => {
  return (
    <View style={styles.mainView()}>
      <LottieView 
        source={lottieIcons.todoAnimation}
        autoPlay
        loop
        style={styles.lottieImage()}
      />
    </View>
  )
}
