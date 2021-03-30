import { httpClient } from '@config/http';
import { UserEntity } from '@core/entities/User';
import { UserAddressEntity } from '@core/entities/UserAddress';
import { CredentialRequest } from '@core/types/CredentialRequest';
import { ISignInService } from '@core/useCases';

export class AuthService implements ISignInService {
  async signIn(credentials: CredentialRequest): Promise<UserEntity> {
    const { data } = await httpClient('auth').post('/login', credentials);

    const user = UserEntity.hydrate(data?.usuario) as UserEntity;

    user.address = UserAddressEntity.hydrate(
      data?.usuario?.endereco,
    ) as UserAddressEntity;

    return user;
  }
}
