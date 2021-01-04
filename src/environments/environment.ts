// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyDADt7BdJrRk8yHJRDku-7zIXmjPcUCOKQ",
  authDomain: "cinema-e57c7.firebaseapp.com",
  databaseURL: "https://cinema-e57c7.firebaseio.com",
  projectId: "cinema-e57c7",
  storageBucket: "cinema-e57c7.appspot.com",
  messagingSenderId: "301820719784",
  appId: "1:301820719784:web:19227453907d9ef2cfc89d",
  measurementId: "G-RZ6D5JJSBF"
}
export const environment = {
  production: false,
  firebaseConfig: firebaseConfig
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
