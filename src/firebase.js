import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBA7fkz3TsBuMK8tOb31r6Tz9VS-9kHiUo",
    authDomain: "amzn-1-294eb.firebaseapp.com",
    projectId: "amzn-1-294eb",
    storageBucket: "amzn-1-294eb.appspot.com",
    messagingSenderId: "372880694186",
    appId: "1:372880694186:web:84de5abb75f454826769d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        return err.code;
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;

        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        return err.code;
    }
};


export {db, auth, registerWithEmailAndPassword, signInWithEmailAndPassword};
