import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBzimM23u9UD5wla0k4KaVyzgSd0jLEG8s",
    authDomain: "urban-couture-34071.firebaseapp.com",
    databaseURL: "https://urban-couture-34071-default-rtdb.firebaseio.com",
    projectId: "urban-couture-34071",
    storageBucket: "urban-couture-34071.appspot.com",
    messagingSenderId: "939417831835",
    appId: "1:939417831835:web:a674584f130fba3d97f93e",
    measurementId: "G-BPFT110SGQ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;