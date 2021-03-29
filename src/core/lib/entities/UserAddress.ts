import { BaseEntity } from './BaseEntity';

export class UserAddressEntity extends BaseEntity {
  constructor(
    private _id: String,
    private _cep: String,
    private _logradouro: String,
    private _numero: String,
    private _comp: String,
    private _bairro: String,
    private _cidade: String,
    private _uf: String,
    private _idPais: String,
  ) {
    super();
  }

  get id() {
    return this._id;
  }

  get cep() {
    return this._cep;
  }

  get logradouro() {
    return this._logradouro;
  }

  get numero() {
    return this._numero;
  }

  get comp() {
    return this._comp;
  }

  get bairro() {
    return this._bairro;
  }

  get cidade() {
    return this._cidade;
  }

  get uf() {
    return this._uf;
  }

  get idPais() {
    return this._idPais;
  }
}
