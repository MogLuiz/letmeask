
import firebase from 'firebase/compat/app'

import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAZdUMy4zRfw8yV_WdzqJRMlF378z9NuIk",
    authDomain: "letmeask-58cf9.firebaseapp.com",
    databaseURL: "https://letmeask-58cf9-default-rtdb.firebaseio.com",
    projectId: "letmeask-58cf9",
    storageBucket: "letmeask-58cf9.appspot.com",
    messagingSenderId: "1078290028823",
    appId: "1:1078290028823:web:222983cae0cc5852cfff52"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const database = firebase.database()