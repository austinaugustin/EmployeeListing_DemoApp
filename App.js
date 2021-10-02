import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './src/screens/router';
import { store, persistor } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
