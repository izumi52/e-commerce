import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDoFKoBEK5p_qmEaxjv-c6IhHyJCgt3xl0",
    authDomain: "e-commerce-db-47c38.firebaseapp.com",
    projectId: "e-commerce-db-47c38",
    storageBucket: "e-commerce-db-47c38.appspot.com",
    messagingSenderId: "972563529491",
    appId: "1:972563529491:web:61db312fc24bcd784fe4e6",
    measurementId: "G-7EBH5VZFZR"
  };
  

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error);
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

