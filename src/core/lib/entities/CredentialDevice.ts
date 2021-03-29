import { BaseEntity } from './BaseEntity';

export class CredentialDeviceEntity extends BaseEntity {
  constructor(
    private _so: String,
    private _dispositivo: String,
    private _soVersao: String,
    private _deviceId: String,
    private _appVersao: String,
    private _firebaseDeviceToken?: String,
  ) {
    super();
  }

  get so() {
    return this._so;
  }

  get dispositivo() {
    return this._dispositivo;
  }

  get soVersao() {
    return this._soVersao;
  }

  get deviceId() {
    return this._deviceId;
  }

  get appVersao() {
    return this._appVersao;
  }

  get firebaseDeviceToken() {
    return this._firebaseDeviceToken;
  }

  set firebaseDeviceToken(val: String | undefined) {
    this._firebaseDeviceToken = val;
  }
}
