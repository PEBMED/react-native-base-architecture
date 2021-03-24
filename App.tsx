import React from 'react';

import { Provider } from 'react-redux';
import Home from '@modules/Home';
import configureStore from '@core/redux';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  );
};

export default App;
