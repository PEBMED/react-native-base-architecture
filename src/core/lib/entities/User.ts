import { BaseEntity } from './BaseEntity';

import { UserAddressEntity } from './UserAddress';

export class UserEntity extends BaseEntity {
  constructor(
    private _id: number,
    private _nome: String,
    private _sobrenome: String,
    private _nomeCompleto: String,
    private _email: String,
    private _emailStatus: number | string,
    private _nascimento: Date | string,
    private _cpf: String,
    private _grauFormacao: String,
    private _perfilUsuario: number,
    private _perfisUsuario: any[],
    private _idTipoUsuario: string | number,

    private _idAreaAtuacao: number,
    private _areaAtuacao: string,
    private _telefone: string,
    private _idPaisCacionalidade: number,
    private _appCodigo: string,

    private _crmVerificado: boolean,
    private _ativo: boolean,
    private _ultimoProdutoUtilizado: string,
    private _solicitarAtualizacao: number,
    private _address?: UserAddressEntity,
  ) {
    super();
  }

  get id() {
    return this._id;
  }

  get nome() {
    return this._nome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  get nomeCompleto() {
    return this._nomeCompleto;
  }

  get email() {
    return this._email;
  }

  get emailStatus() {
    return this._emailStatus;
  }

  get nascimento() {
    return this._nascimento;
  }

  get cpf() {
    return this._cpf;
  }

  get grauFormacao() {
    return this._grauFormacao;
  }

  get perfilUsuario() {
    return this._perfilUsuario;
  }

  get perfisUsuario() {
    return this._perfisUsuario;
  }

  get idTipoUsuario() {
    return this._idTipoUsuario;
  }

  get idAreaAtuacao() {
    return this._idAreaAtuacao;
  }

  get areaAtuacao() {
    return this._areaAtuacao;
  }

  get telefone() {
    return this._telefone;
  }

  get idPaisCacionalidade() {
    return this._idPaisCacionalidade;
  }

  get appCodigo() {
    return this._appCodigo;
  }

  get crmVerificado() {
    return this._crmVerificado;
  }

  get ativo() {
    return this._ativo;
  }

  get ultimoProdutoUtilizado() {
    return this._ultimoProdutoUtilizado;
  }

  get solicitarAtualizacao() {
    return this._solicitarAtualizacao;
  }

  get address() {
    return this._address;
  }

  set address(val: UserAddressEntity | undefined) {
    this._address = val;
  }
}
/**
   *     "graduacao": null,
    "id_universidade": null,
    "id_especialidade": null,
    "especialidade": null,
    "num_conselho_profis": null,
    "id_formacao_medica": null,
    "id_formacao": null,
    "data_cadastro": "2021-03-16T17:12:15.000Z",
    "id_facebook": null,
    "data_verificacao_crm": null,
    "lastActivityReason": null,
    "codigo_aprovacao": null,
   */
