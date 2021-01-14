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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // check if document already exists
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  console.log(snapshot);
  /* return { exists: Boolean, id, metadata (SnapshotMetadata), ref...}*/

  if (!snapshot.exists) {
    // create it
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (er) {
      console.error('Error creating user', er.message);
    }
  }

  return userRef;
};


export default firebase;

