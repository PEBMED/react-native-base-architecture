import { UserEntity } from '@core/entities/User';

export const Types = {
  ASYNC_SIGNIN: '@core/auth/ASYNC_SIGNIN',
  SIGNIN_LOADING: '@core/auth/SIGNIN_LOADING',
  SIGNIN_SUCCESS: '@core/auth/SIGNIN_SUCCESS',
  SIGNIN_ERROR: '@core/auth/SIGNIN_ERROR',
};

interface IState {
  user?: UserEntity;
  signInErrors?: any;
  signInLoading?: any;
  signInSuccess?: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  user: undefined,
  signInErrors: undefined,
  signInSuccess: undefined,
  signInLoading: false,
};

export default (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        signInSuccess: true,
        user: action.payload.user as UserEntity,
      };
    case Types.SIGNIN_ERROR:
      return {
        ...state,
        signInSuccess: false,
        signInErrors: action.payload.errors,
      };
    case Types.SIGNIN_LOADING:
      return { ...state, signInLoading: action.payload.loading };
    default:
      return state;
  }
};
