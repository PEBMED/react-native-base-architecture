import { CredentialDeviceEntity } from './CredentialDevice';

export class CredentialEntity {
  constructor(
    private _codApp: String,
    private _email: String,
    private _senha: String,
    private _device?: CredentialDeviceEntity,
    private _codigo?: String,
  ) {}

  get codApp() {
    return this._codApp;
  }

  get email() {
    return this._email;
  }

  get senha() {
    return this._senha;
  }

  get device() {
    return this._device;
  }

  set device(val: CredentialDeviceEntity | undefined) {
    this._device = val;
  }

  get codigo() {
    return this._codigo;
  }
}
