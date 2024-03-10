/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BACKEND_URL: string;
    REACT_APP_PARTICLE_PROJECT_ID: string;
    REACT_APP_PARTICLE_CLIENT_KEY: string;
    REACT_APP_PARTICLE_APP_ID: string;
  }
}
