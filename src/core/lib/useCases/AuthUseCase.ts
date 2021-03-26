import { CredentialEntity } from '@core/entities';
import { UserEntity } from '@core/entities/User';
import { CredentialRequest } from '@core/types/CredentialRequest';
import { AuthApiHttpError } from '@core/errors/AuthApiHttpError';

export interface ISignInService {
  signIn: (credential: CredentialRequest) => Promise<UserEntity>;
}

export class AuthUseCase {
  constructor(private credentialService: ISignInService) {}

  async tryLogin(credential: CredentialEntity): Promise<UserEntity> {
    const device = credential.device;

    if (!device) {
      throw new Error('CredentialDeviceEntity is not defined');
    }

    const data: CredentialRequest = {
      email: credential.email,
      senha: credential.senha,
      cod_app: credential.codApp,
      codigo: credential.codigo,
      so: device.so,
      app_versao: device.appVersao,
      dispositivo: device.dispositivo,
      so_versao: device.soVersao,
      device_id: device.deviceId,
      firebase_device_token: device.firebaseDeviceToken,
    };

    try {
      return await this.credentialService.signIn(data);
    } catch (err) {
      if (err.hasOwnProperty('response')) {
        throw new AuthApiHttpError(err);
      }
      throw err;
    }
  }
}
