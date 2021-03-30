import React, { useCallback, useContext, useMemo, useReducer } from 'react';
import { IAuthState, initialState, reducer, Actions } from './ducks/auth';

type IAuthContext = {
  state?: IAuthState;
  actions?: {
    handleSignIn: CallableFunction;
  };
};

const AuthContext = React.createContext<null | IAuthContext>(null);

const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionsWithDispatch = useMemo(() => new Actions(dispatch), [dispatch]);

  const handleSignIn = useCallback(
    async (email: string, senha: string) => {
      actionsWithDispatch.signIn(email, senha);
    },
    [actionsWithDispatch],
  );

  return (
    <AuthContext.Provider value={{ state, actions: { handleSignIn } }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Component isn`t inside AuthContext');
  }

  return context;
};

export default AuthContextProvider;
