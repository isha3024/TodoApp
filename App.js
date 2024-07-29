import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux';
import { TodoScreen } from './src/screens';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;