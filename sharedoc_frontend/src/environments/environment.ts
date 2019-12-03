import {KeycloakConfig} from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8180/auth',
  realm: 'sharedoc-app',
  clientId: 'sharedoc-app-frontend',
  credentials: {
    secret: 'e0e9d6e8-a1cf-45e6-bf19-52a3852c46fa'
  }
};

export const environment = {
  production: false,
  keycloak: keycloakConfig
};

