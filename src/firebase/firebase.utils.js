import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDN1qLuHM91gGw1ZmcpAI6JWRJNVmE5eDo",
  authDomain: "crown-db-678b6.firebaseapp.com",
  projectId: "crown-db-678b6",
  storageBucket: "crown-db-678b6.appspot.com",
  messagingSenderId: "639963579737",
  appId: "1:639963579737:web:28752b06be21533a02b848",
  measurementId: "G-Q59CXR2TZK"
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth
  .signInWithPopup(provider)
  .then((res) => console.log(res))
  .catch(e => ({/*do nothing*/}))

export default firebase;

