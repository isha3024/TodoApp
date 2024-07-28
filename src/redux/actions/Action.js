import { ADD_TODO, MARK_ALL_COMPLETE, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "../Types"

export const addTodo = (text) => {
  console.log('text', text)
  return {
    type: ADD_TODO,
    payload: {text}
  }
}

export const toggleTodo = (id) => {
  console.log('id::: ', id)
  return {
    type: TOGGLE_TODO,
    payload: {id}
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

export const markTodoIncomplete = (id) => {
  return {
    type: MARK_INCOMPLETE,
    payload: {id}
  }
}

export const markAllComplete = () => {
  return {
    type: MARK_ALL_COMPLETE
  }
}

export const updateSearchTerm = (searchTerm) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm}
  }
}


