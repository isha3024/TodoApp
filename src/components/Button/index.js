import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const Button = ({activeOpacity, title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity style={[styles.button(), btnStyle]} onPress={onPress} activeOpacity={activeOpacity ?? 0.7}>
      <Text style={styles.btnTitle()}>{title}</Text>
    </TouchableOpacity>
  )
}