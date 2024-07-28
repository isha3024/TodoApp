import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { IcCheck, IcTrash } from '../../theme'

export const TodoItem = ({item, index}) => {
  return (
    <View style={styles.todoItemView()}>
      <Text style={styles.num()}>{index + 1}.</Text>
      <Text style={styles.todoItemText()}>{item.text}</Text>
      <TouchableOpacity onPress={() => console.log('item: ', item)} style={styles.trashIcons()}>
        <IcTrash />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkIcons()}>
        <IcCheck />
      </TouchableOpacity>
    </View>
  )
}
