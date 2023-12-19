// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// import * as firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBi5LHi5ghATQf3yNdTqsWFqhGvHEZpb0Q",
    authDomain: "facebook-clone-77f3b.firebaseapp.com",
    projectId: "facebook-clone-77f3b",
    storageBucket: "facebook-clone-77f3b.appspot.com",
    messagingSenderId: "912720885318",
    appId: "1:912720885318:web:428c6f139083f509dc7c47",
    measurementId: "G-4VH0RYLK35"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // console.log(firebaseApp)
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCmjd2wW4ObKn07m31gg-7h9qqkbH-ePOA",
//   authDomain: "facebook-clone-43d6c.firebaseapp.com",
//   projectId: "facebook-clone-43d6c",
//   storageBucket: "facebook-clone-43d6c.appspot.com",
//   messagingSenderId: "586245572434",
//   appId: "1:586245572434:web:34948797873f96a9c71c8b",
//   measurementId: "G-RSNT6K5PCV",
// };

// //To initialize the firebase app
// const firebaseapp = firebase.initializeApp(firebaseConfig);
// // For connecting to the database
// const db = firebaseapp.firestore();

// //Authentication
// const auth = firebase.auth();
// //Telling the provider that we want Google login service
// const provider = new firebase.auth.GoogleAuthProvider();

// //Explicit export
// export { auth, provider };
// //Default export
// export default db;