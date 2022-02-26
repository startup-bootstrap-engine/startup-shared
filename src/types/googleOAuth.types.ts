export interface IGoogleConfig {
  clientID: string;
  clientSecret: string;
  redirectURI: string;
}

export interface IGoogleOAuthUrlResponse {
  googleOAuthUrl: string;
}

export interface IGoogleOAuthTokenPayload {
  access_token: string;
  id_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
}

export interface IGoogleOAuthUserInfoResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export interface IGoogleCapacitorOAuthResponse {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  imageUrl: string;
  name: string;
  authentication: IAuthentication;
  serverAuthCode: string;
}

export interface IAuthentication {
  accessToken: string;
  idToken: string;
}

export interface IGoogleOAuthIdTokenResponse extends IGoogleOAuthUserInfoResponse {
  iss: string;
  sub: string;
  azp: string;
  aud: string;
  iat: string;
  exp: string;
}
