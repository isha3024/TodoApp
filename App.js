import './gesture-handler'
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store, persistor } from './src/redux';
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