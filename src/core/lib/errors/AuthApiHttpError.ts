interface IApiHttpExceptionResponse {
  codigo: string | number;
  mensagem: string;
  logMessage: string;
}

interface IApiHttpException {
  response: { data: IApiHttpExceptionResponse };
}

export class AuthApiHttpError extends Error {
  code: string | number;
  logMessage: string;

  constructor(err: IApiHttpException) {
    super(err.response.data.mensagem);

    this.code = err.response.data.codigo;
    this.logMessage = err.response.data.logMessage;
  }
}
