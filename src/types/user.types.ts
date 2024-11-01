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
