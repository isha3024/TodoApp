import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { color, IcAvatar, IcCheck, IcClose, IcTrash } from '../../theme'
import { addTodo, markTodoComplete, removeTodo } from '../../redux'
import * as styles from './styles'
import { logoutUser } from '../../redux/actions/AuthAction'

export const TodoScreen = () => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const userData = useSelector((state) => state.auth.user);
  const statusbarHeight = StatusBar.currentHeight;

  const [todo, setTodo] = useState('');

  const handleAddToDo = (text) => {
    dispatch(addTodo(text))
  }

  const deleteTodo = (index) => {
    Alert.alert(
      'Delete Todo', 'Are you sure you want to delete this todo?',
      [
        { text: 'Ok', onPress: () => {
          dispatch(removeTodo(index))
          ToastAndroid.show('Todo removed', ToastAndroid.SHORT);
        }},
        { text: 'Cancel', onPress: () => null }
      ]
    )
  }

  const handleAddToDoOnClick = () => {
    if(todo.length === 0 || todo.length === null) {
      Alert.alert(
        'Todo', 'Please input your Todo',
        [{ text: 'Ok', onPress: () => null}]
      )
    }else {
      if (todo.trim() !== '') {
        Keyboard.dismiss()
        handleAddToDo(todo);
        setTodo('');
      }
      ToastAndroid.show('Todo added', ToastAndroid.SHORT);
    }
  }

  const handleLogout = () => {
    Alert.alert(
      'Logout', 'Are you sure you want to logout?',
      [
        {text: 'Cancel', onPress: () => null},
        {text: 'Ok', onPress: () => dispatch(logoutUser())}
      ]
    )
  }

  return (
    <View style={styles.mainView()}>
      <StatusBar backgroundColor={color.primary} translucent={false} />
      <View style={styles.topView(statusbarHeight)}>
        <View style={styles.userProfileView()}>
          <Text style={styles.userNameText()}>Hello, {userData.firstName}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <IcAvatar />
          </TouchableOpacity>
        </View>
        <Text style={styles.title()}>TODO</Text>
        <View style={styles.inputView()}>
          <TextInput
            style={styles.input()}
            placeholder="Enter your todo here"
            placeholderTextColor={color.cream}
            value={todo}
            onChangeText={(text) => setTodo(text)}
          />
          <TouchableOpacity onPress={handleAddToDoOnClick} activeOpacity={0.7} style={styles.closeIcon()}>
            <IcClose color={color.cream} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middleView()}>
        <View style={styles.todoWrapper()}>
          <Text style={styles.todoListTitle()}>All your todos...</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer()}
          >
            {
              todos.length !== 0
              ? (
                todos.map((todo, index) => {
                  return (
                    <View style={styles.todoItemView()} key={index}>
                      <Text style={styles.todoItemText(todo.completed)}>{index + 1}. {todo.text}</Text>
                      <TouchableOpacity onPress={() => deleteTodo(index)} style={styles.trashIcons()}>
                        <IcTrash />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => dispatch(markTodoComplete(index))} style={styles.checkIcons()}>
                        <IcCheck />
                      </TouchableOpacity>
                    </View>
                  )
                })
              )
              : (
                <View style={styles.emptyTodoList()}>
                  <Text style={styles.emptyTodoListText()}>No todos yet!</Text>
                </View>
              )
            }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}