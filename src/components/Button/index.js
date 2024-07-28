import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const Button = ({activeOpacity, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button()} onPress={onPress} activeOpacity={activeOpacity ?? 0.7}>
      <Text style={styles.btnTitle()}>{title}</Text>
    </TouchableOpacity>
  )
}