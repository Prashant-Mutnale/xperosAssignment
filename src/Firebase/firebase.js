import * as Firebase from "firebase";

var config = {
  apiKey: "AIzaSyCfYjQJyl_E1TjVlR4j8_o8djm_FAsRJ9E",
  authDomain: "xcelprosassignment-cc707.firebaseapp.com",
  databaseURL: "https://xcelprosassignment-cc707.firebaseio.com",
  projectId: "xcelprosassignment-cc707",
  storageBucket: "xcelprosassignment-cc707.appspot.com",
  messagingSenderId: "973190370983"
};

export const firebaseRef = Firebase.initializeApp(config);
