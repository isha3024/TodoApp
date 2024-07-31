import { thunk } from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import { todoReducer } from "./Reducer";
import { authReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
})


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
      thunk: true
    }).concat(thunk),
  serializableCheck: false,
})

export const persistor = persistStore(store);