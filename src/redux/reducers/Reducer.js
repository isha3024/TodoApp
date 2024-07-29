import { ADD_TODO, MARK_COMPLETE, REMOVE_TODO } from "../Types"

const initialState = {
  todos: [],
}

export const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { 
        todos: [...state.todos, {text: action.payload, completed: false}],
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),     
      }
    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo, index) => index === action.payload.id ? {...todo, completed: true} : todo),       
      }
    default:
      return state
  }
}