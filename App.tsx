import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from '@core/redux';
import Router from '@navigation/index';

import AuthContextProvider from '@core/contexts/AuthContextProvider';

const App = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};

export default App;
