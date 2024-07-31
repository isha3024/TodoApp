import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color } from '../../theme'

export const Button = ({activeOpacity, title, onPress, btnStyle, disabled}) => {
  
  return (
    <TouchableOpacity activeOpacity={activeOpacity} disabled={disabled} style={[styles.button(disabled), btnStyle]} onPress={!disabled && onPress}>
      {disabled && (<ActivityIndicator size='small' color={color.white} />)}
      <Text style={styles.btnTitle()}>{title}</Text>
    </TouchableOpacity>
  )
}