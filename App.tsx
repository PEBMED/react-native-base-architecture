import React from 'react';

import { Provider } from 'react-redux';
// import Home from '@modules/Home';
import PageTest from '@modules/PageTest';
import configureStore from '@core/redux';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <PageTest />
    </Provider>
  );
};

export default App;
