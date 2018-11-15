interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'lmVobpE1KJDTC1I1ab7LEbAx75dVqMN6',
  domain: 'cisctutor.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
