import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 
    "AIzaSyBc9dofQsYXOJgzD0b15kXzwXykbr9wA3g",
    authDomain:
     "fb-clone-631a8.firebaseapp.com",
    databaseURL:
     "https://fb-clone-631a8.firebaseio.com",
    projectId:
     "fb-clone-631a8",
    storageBucket:
     "fb-clone-631a8.appspot.com",
    messagingSenderId:
     "386309764194",
    appId:
     "1:386309764194:web:e99a64d06f7ab55da5cd3b",
    measurementId: "G-D3HMMG4CSY"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;