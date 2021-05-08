const firebaseConfig = {
    apiKey: "AIzaSyAdU3AciSv59_w9iSfgK0W2S0uhUo-RL68",
    authDomain: "disney-plus-clone-c00df.firebaseapp.com",
    projectId: "disney-plus-clone-c00df",
    storageBucket: "disney-plus-clone-c00df.appspot.com",
    messagingSenderId: "261141755022",
    appId: "1:261141755022:web:c539562f74bca4a243c5df",
    measurementId: "G-CLRGWHR6BN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;