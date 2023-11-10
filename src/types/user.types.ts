import { ICharacter } from "./character.types";
import { IResource } from "./resource.types";

export interface IUserPreferences {
  experience: UserExperience;
  goal: UserGoal;
}

export interface IUserEntity extends IResource {
  name: string | null;
  role: UserTypes | null;
  authFlow: UserAuthFlow;
  email: string;
  address: string | null;
  phone: string | null;
  unsubscribed: boolean;
  characters: ICharacter[];
  wallet: IUserWallet;
  isPremiumAccount: boolean;
}

export interface IUserWallet {
  publicAddress: string;
  networkId: number;
}

export interface IUserToken {
  token: string;
}

export enum UserExperience {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export enum UserGoal {
  LearnMore = "LearnMore",
  TrackPortfolio = "TrackPortfolio",
  CompanyInsights = "CompanyInsights",
}

export enum UserTypes {
  Admin = "Admin",
  Regular = "Regular",
  Staff = "Staff",
}

export enum UserAuthFlow {
  Basic = "Basic",
  GoogleOAuth = "GoogleOAuth",
  FacebookOAuth = "FacebookOAuth",
  LinkedInOAuth = "LinkedInOAuth",
  AppleOAuth = "AppleOAuth",
}

export interface IUser extends IUserEntity {
  name: string | null;
  isLoggedIn: boolean;
  token: string | null;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  address?: string;
  phone?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IChangePasswords {
  currentPassword: string;
  newPassword: string;
}

export interface IUserAccessToken {
  accessToken: string;
}

export enum UserActionTypes {
  fetch = "fetch",
  login = "login",
  refreshInfo = "refreshInfo",
  clear = "clear",
  register = "register",
  updatePushNotificationToken = "updatePushNotificationToken",
}

// Dispatch actions

export interface IDispatchUpdatePushNotificationToken {
  type: UserActionTypes.updatePushNotificationToken;
  payload: string;
}

export interface IDispatchUserFetch {
  type: UserActionTypes.fetch;
  payload: IUser;
}

export interface IDispatchUserInfo {
  type: UserActionTypes.refreshInfo;
  payload: IUserEntity;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.login;
  payload: IUserAccessToken;
}

export interface IDispatchUserClear {
  type: UserActionTypes.clear;
}

export interface IDispatchUserRegister {
  type: UserActionTypes.register;
}

// this is used inside our reducer
export type UserAction =
  | IDispatchUserFetch
  | IDispatchUserLogin
  | IDispatchUserInfo
  | IDispatchUserClear
  | IDispatchUpdatePushNotificationToken;
