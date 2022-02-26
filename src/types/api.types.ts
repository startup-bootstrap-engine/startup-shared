export interface IAPIError {
  statusCode: number;
  message: string[] | string;
  error: string;
}

export enum HttpStatus {
  OK = 200,
  Created = 201,
  PermanentRedirect = 301,
  TemporaryRedirect = 302,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,
  UnprocessableEntity = 422,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}
