import { httpClient } from '@config/http';
import { CredentialRequest } from '@core/types/CredentialRequest';
import { ISignInService } from '@core/useCases';

export class AuthService implements ISignInService {
  async signIn(credentials: CredentialRequest): Promise<any> {
    return await httpClient('auth').post('/login', credentials);
  }
}
