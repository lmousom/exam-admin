import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAB_4MwB070SOSSa6dCbHe4P8w12WG3uKk",
  authDomain: "surfxm-2020.firebaseapp.com",
  databaseURL: "https://surfxm-2020.firebaseio.com",
  projectId: "surfxm-2020",
  storageBucket: "surfxm-2020.appspot.com",
  messagingSenderId: "1051957710307",
  appId: "1:1051957710307:web:56d7494609faf4bc4c24d6"
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()

export default fire;