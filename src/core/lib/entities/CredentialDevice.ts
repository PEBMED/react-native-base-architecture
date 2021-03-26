export class CredentialDevice {
  constructor(
    private so: String,
    private dispositivo: String,
    private soVersao: String,
    private deviceId: String,
    private appVersao: String,
    private firebaseDeviceToken?: String,
  ) {}

  public getSO() {
    return this.so;
  }

  public getDispositivo() {
    return this.dispositivo;
  }

  public getSoVersao() {
    return this.soVersao;
  }

  public getDeviceId() {
    return this.deviceId;
  }

  public getAppVersao() {
    return this.appVersao;
  }

  public setFirebaseDeviceToken(token: String) {
    this.firebaseDeviceToken = token;
  }

  public getFirebaseDeviceToken() {
    return this.firebaseDeviceToken;
  }
}
