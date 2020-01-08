import {KeycloakConfig} from 'keycloak-angular';


//secret not using right now but using public
const keycloakConfig: KeycloakConfig = {
  url: 'http://141.22.30.102/auth',
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

