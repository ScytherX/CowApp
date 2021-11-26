// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLHanO9yenVDUJRDhPwj_jKaHc7n_Wmo",
  authDomain: "fir-aerv.firebaseapp.com",
  projectId: "fir-aerv",
  storageBucket: "fir-aerv.appspot.com",
  messagingSenderId: "455368035471",
  appId: "1:455368035471:web:1e70849279547eb1d234fa"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else { 
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };