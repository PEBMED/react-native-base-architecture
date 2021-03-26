import { CredentialDevice } from './CredentialDevice';

export class Credential {
  constructor(
    private _codApp: String,
    private _email: String,
    private _senha: String,
    private _device?: CredentialDevice,
    private _codigo?: String,
  ) {}

  setDevice(device: CredentialDevice) {
    this._device = device;
  }

  getDevice(): CredentialDevice | null {
    return this._device || null;
  }

  getCodApp() {
    return this._codApp;
  }

  getEmail() {
    return this._email;
  }

  getSenha() {
    return this._senha;
  }

  getCodigo() {
    return this._codigo;
  }
}
