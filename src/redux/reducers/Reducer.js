import { ADD_TODO, MARK_ALL_COMPLETE, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "../Types"

const initialState = {
  todos: [],
  searchTerm: ''
}

export const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { 
        todos: [...state.todos, {text: action.payload.text, completed: false}],
        searchTerm: state.searchTerm
      }
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) => index === action.payload.id ? {...todo, completed: !todo.completed} : todo),
        searchTerm: state.searchTerm
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        searchTerm: state.searchTerm
      }
    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo, index) => index === action.payload.id ? {...todo, completed: true} : todo),
        searchTerm: state.searchTerm  
      }
    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) => index === action.payload.id ? {...todo, completed: false} : todo),
        searchTerm: state.searchTerm  
      }
    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        searchTerm: action.payload.searchTerm 
      }
    case MARK_ALL_COMPLETE:
      return {
        todos: state.todos.map((todo) => ({...todo, completed: true})),
        searchTerm: action.payload.searchTerm 
      }
    default:
      return state
  }
}