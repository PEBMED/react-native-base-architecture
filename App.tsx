import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from '@core/redux';
import Router from '@navigation/index';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router />
    </Provider>
  );
};

export default App;
