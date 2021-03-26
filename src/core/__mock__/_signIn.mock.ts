import { UserEntity } from '@core/entities/User';
import { UserAddressEntity } from '@core/entities/UserAddress';
import { ISignInService } from '@core/useCases';
import userMock from './_user.mock';

export const mockSignInSuccess: ISignInService = {
  signIn: () => {
    const user = UserEntity.hydrate(userMock.usuario) as UserEntity;
    const address = UserAddressEntity.hydrate(
      userMock.usuario.endereco,
    ) as UserAddressEntity;
    user.address = address;
    return Promise.resolve<UserEntity>(user);
  },
};

export const mockSignIn: ISignInService = {
  signIn: () => {
    return Promise.resolve<any>({});
  },
};

export const mockSignInInvalidCredentials: ISignInService = {
  signIn: () => {
    return Promise.reject({
      response: {
        data: {
          codigo: '010',
          mensagem:
            'Senha incorreta. Caso necessário, vá em ESQUECI MINHA SENHA para redefinir',
          logMessage: 'Senha incorreta',
        },
      },
    });
  },
};
