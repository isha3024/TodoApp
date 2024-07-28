import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { TodoScreen } from './src/screens';


const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}

export default App;