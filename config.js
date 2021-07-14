import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDpkTbqzW3dszHyLIMDyi0Tn1lhN5JJ4Xw",
    authDomain: "booksanta-eac06.firebaseapp.com",
    projectId: "booksanta-eac06",
    storageBucket: "booksanta-eac06.appspot.com",
    messagingSenderId: "182393860404",
    appId: "1:182393860404:web:9342e81cd288adacbf3561"
}
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
