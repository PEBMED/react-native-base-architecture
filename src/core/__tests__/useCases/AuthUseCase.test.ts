import { CredentialEntity, CredentialDeviceEntity } from '@core/entities';
import { AuthUseCase } from '@core/useCases';
import { APP_CODE } from '@env';
import { UserEntity } from '@core/entities/User';

import {
  mockSignIn,
  mockSignInInvalidCredentials,
  mockSignInSuccess,
} from '../../__mock__/_signIn.mock';
import deviceMock from '../../__mock__/_device.mock';

describe('Tests AuthUseCase', () => {
  it('should execute tryLogin successfully', async () => {
    const useCase = new AuthUseCase(mockSignInSuccess);

    const device = CredentialDeviceEntity.hydrate(
      deviceMock,
    ) as CredentialDeviceEntity;

    const credential = new CredentialEntity(
      APP_CODE,
      'test@pebmed.com.br',
      '123456',
      device,
    );

    const user = await useCase.tryLogin(credential);

    expect(user).toBeInstanceOf(UserEntity);
  });

  it('should execute tryLogin without setted CredentialDevice in Credential', async () => {
    const useCase = new AuthUseCase(mockSignIn);
    const credential = new CredentialEntity(
      APP_CODE,
      'test@pebmed.com.br',
      '123456',
    );

    try {
      await useCase.tryLogin(credential);
    } catch (err) {
      expect(err.message).toBe('CredentialDeviceEntity is not defined');
    }
  });

  it('should execute tryLogin with incorrect password', async () => {
    const useCase = new AuthUseCase(mockSignInInvalidCredentials);

    const device = CredentialDeviceEntity.hydrate(
      deviceMock,
    ) as CredentialDeviceEntity;

    const credential = new CredentialEntity(
      APP_CODE,
      'test@pebmed.com.br',
      '123456',
      device,
    );

    try {
      await useCase.tryLogin(credential);
    } catch (err) {
      expect(err.code).toEqual('010');
      expect(err.logMessage).toEqual('Senha incorreta');
    }
  });
});
