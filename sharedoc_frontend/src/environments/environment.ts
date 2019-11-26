import {KeycloakConfig} from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8180/auth',
  realm: 'sharedoc-app',
  clientId: 'sharedoc-app-frontend',
  credentials: {
    secret: '8d84a660-1bbe-4fc8-88f9-5cfab0b2d6a2'
  }
};

export const environment = {
  production: false,
  keycloak: keycloakConfig
};

