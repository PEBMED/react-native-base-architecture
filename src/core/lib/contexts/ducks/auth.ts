import { device } from '@config/device';
import { CredentialDeviceEntity, CredentialEntity } from '@core/entities';
import { UserEntity } from '@core/entities/User';
import { AuthService } from '@core/services/AuthService';
import { AuthUseCase } from '@core/useCases';

import { APP_CODE } from '@env';
import React from 'react';

export const Types = {
  SIGNIN_LOADING: '@core/auth/SIGNIN_LOADING',
  SIGNIN_SUCCESS: '@core/auth/SIGNIN_SUCCESS',
  SIGNIN_ERROR: '@core/auth/SIGNIN_ERROR',
};

export interface IAuthState {
  user?: UserEntity;
  signInErrors?: any;
  signInLoading?: any;
  signInSuccess?: boolean;
}

export interface IAuthAction {
  type: string;
  payload: any;
}

export const initialState: IAuthState = {
  user: undefined,
  signInErrors: undefined,
  signInSuccess: undefined,
  signInLoading: false,
};

export const reducer = (
  state: IAuthState = initialState,
  action: IAuthAction,
) => {
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
        user: undefined,
      };
    case Types.SIGNIN_LOADING:
      return { ...state, signInLoading: action.payload.loading };
    default:
      return state;
  }
};

export class Actions {
  constructor(private _dispatch: React.Dispatch<IAuthAction>) {}

  setSignLoading = (loading: boolean): void => {
    this._dispatch({
      type: Types.SIGNIN_LOADING,
      payload: { loading },
    });
  };

  signIn = async (email: string, senha: string): Promise<void> => {
    const service = new AuthService();
    const useCase = new AuthUseCase(service);
    const deviceInfo = CredentialDeviceEntity.hydrate(
      device,
    ) as CredentialDeviceEntity;
    const credential = new CredentialEntity(APP_CODE, email, senha, deviceInfo);

    this.setSignLoading(true);
    try {
      const user = await useCase.tryLogin(credential);
      this._dispatch({ type: Types.SIGNIN_SUCCESS, payload: { user } });
    } catch (err) {
      this._dispatch({
        type: Types.SIGNIN_ERROR,
        payload: { errors: err.message },
      });
    }
    this.setSignLoading(false);
  };
}
