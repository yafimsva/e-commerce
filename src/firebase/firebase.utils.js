import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBDNKyZvUbYYroQviHseMWY3bX2AyhLm10',
	authDomain: 'crwn-db-597b9.firebaseapp.com',
	databaseURL: 'https://crwn-db-597b9.firebaseio.com',
	projectId: 'crwn-db-597b9',
	storageBucket: 'crwn-db-597b9.appspot.com',
	messagingSenderId: '672859539160',
	appId: '1:672859539160:web:17cbabb9a762788c6e39ad',
	measurementId: 'G-LV0YHNFKY0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
