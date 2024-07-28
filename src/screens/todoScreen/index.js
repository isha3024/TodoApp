import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import * as data from '../../json'
import { color, IcCheck, IcClose, IcTrash } from '../../theme'
import { addTodo, toggleTodo } from '../../redux'
import * as styles from './styles'

const todoList = data.todoList;

export const TodoScreen = () => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todoReducer);
  console.log(todos)
  const [inputValue, setInputValue] = useState('');
  
  const handleAddToDo = (text) => {
    console.log(text);
    dispatch(addTodo(text))
  }

  const handleAddToDoOnClick = () => {
    if(inputValue.trim() !== '') {
      handleAddToDo(inputValue);
      setInputValue('');
      Keyboard.dismiss()
    }
  }

  const clearInputValue = () => {
    setInputValue('')
  }

  return (
    <View style={styles.mainView()}>
      <StatusBar backgroundColor={color.primary} translucent={false} />
      <View style={styles.topView()}>
        <Text style={styles.title()}>TODO APP</Text>
        <View style={styles.inputView()}>
          <TextInput
            style={styles.input()}
            placeholder="Enter your todo here"
            placeholderTextColor={color.cream}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <TouchableOpacity onPress={handleAddToDoOnClick} activeOpacity={0.7} style={styles.closeIcon()}>
            <IcClose color={color.cream} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middleView()}>
          <Text style={styles.todoListTitle()}>All your Todos....</Text>
          {
            todoList.map((todo, index) => {
              return (
                <View style={styles.todoItemView()} key={index+1}>
                  <Text style={styles.todoItemText(todo.completed)}>{index + 1}. {todo.text}</Text>
                  <TouchableOpacity onPress={() => dispatch(toggleTodo(index))} style={styles.trashIcons()}>
                    <IcTrash />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.checkIcons()}>
                    <IcCheck />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
    </View>
  )
}