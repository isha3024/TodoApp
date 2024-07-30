
import { ADD_TODO, MARK_COMPLETE, REMOVE_TODO } from "../Types"

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {id}
  }
}

export const markTodoComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: {id}
  }
}