import { configure } from '@testing-library/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDl1n28pmV3kW0XB5UaEHldnAtjlytwODk",
    authDomain: "project-e24cd.firebaseapp.com",
    projectId: "project-e24cd",
    storageBucket: "project-e24cd.appspot.com",
    messagingSenderId: "1046275312543",
    appId: "1:1046275312543:web:8190e253f9edb3d60e0baa"
  };

const app =  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
export const db = getFirestore(app);

