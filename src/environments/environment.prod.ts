import { MY_FIRESTORE_KEY } from './myKeyFiles';


export const environment = {
  production: true,
  url: 'https://us-central1-firestore-graph-goty.cloudfunctions.net',
  firebase: MY_FIRESTORE_KEY // This key is not upload, for the configuration see: https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
};
