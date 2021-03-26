import { Credential } from '@core/entities';
import { CredentialRequest } from '@core/types/CredentialRequest';

export interface ISignInService {
  signIn: (credential: CredentialRequest) => Promise<any>;
}

export class AuthUseCase {
  constructor(private credentialService: ISignInService) {}

  async tryLogin(credential: Credential): Promise<any> {
    const device = credential.getDevice();

    if (!device) {
      throw new Error('CredentialDevice is not defined');
    }

    const data: CredentialRequest = {
      email: credential.getEmail(),
      senha: credential.getSenha(),
      cod_app: credential.getCodApp(),
      codigo: credential.getCodigo(),
      so: device.getSO(),
      app_versao: device.getAppVersao(),
      dispositivo: device.getDispositivo(),
      so_versao: device.getSoVersao(),
      device_id: device.getDeviceId(),
      firebase_device_token: device.getFirebaseDeviceToken(),
    };

    return await this.credentialService.signIn(data);
  }
}
