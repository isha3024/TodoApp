import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { todoReducer } from "./Reducer";

const rootReducer = combineReducers({
  todo: todoReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: todoReducer,
      },
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);