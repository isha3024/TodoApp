import './gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux';
import { TodoScreen } from './src/screens';
import { PersistGate } from 'redux-persist/integration/react';
import { MainStackNavigation } from './src/navigation';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <MainStackNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;