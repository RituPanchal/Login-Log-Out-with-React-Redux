import * as firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyCMPmLT9L2Qkt5MWomDPxP5cKPlPTsuEGY",
  authDomain: "fir-1-4c78e.firebaseapp.com",
  databaseURL: "https://fir-1-4c78e.firebaseio.com",
  projectId: "fir-1-4c78e",
  storageBucket: "fir-1-4c78e.appspot.com",
  messagingSenderId: "403375635517",
  appId: "1:403375635517:web:1b1b07c1064a16d803fe54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const databas = firebase.database().ref("/inputr");
export const auth = firebase.auth();
export const googleauth = new firebase.auth.GoogleAuthProvider();