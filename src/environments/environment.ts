// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDuvP8hkRjKZnUfcFMubNONSzliA4Ub7eU",
    authDomain: "firechat-ed27a.firebaseapp.com",
    databaseURL: "https://firechat-ed27a.firebaseio.com",
    projectId: "firechat-ed27a",
    storageBucket: "firechat-ed27a.appspot.com",
    messagingSenderId: "609092030875"
  }
};
