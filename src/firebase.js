import firebase from 'firebase';


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
    authDomain: "e-bike-5090f.firebaseapp.com",
    projectId: "e-bike-5090f",
    storageBucket: "e-bike-5090f.appspot.com",
    messagingSenderId: "22674606133",
    appId: "1:22674606133:web:c32631fb989d44505bc97c"
  };

export const firebaseapp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseapp.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

