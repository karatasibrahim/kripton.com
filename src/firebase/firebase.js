
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {getFirestore,doc,getDocs,collection, where,query } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBXfII_dBodw5XCd4LWmSp2UBhghLKR350",
    authDomain: "kripton-trade.firebaseapp.com",
    projectId: "kripton-trade",
    storageBucket: "kripton-trade.firebasestorage.app",
    messagingSenderId: "440523723174",
    appId: "1:440523723174:web:1160883061ce0c8d53ff67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth,db, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged, doc, getDocs,collection, where,  query  };
