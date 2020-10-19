// import { firebase } from 'firebase/app';
// import 'firebase/firestore';

const firebase = require("firebase");
require("firebase/firestore");

console.log("Firebase : " + firebase)

var firebaseConfig = {
    apiKey: "AIzaSyBEKb41IdCFcdu3iWJEwGQsG-UhPMCC0pE",
    authDomain: "logirity.firebaseapp.com",
    databaseURL: "https://logirity.firebaseio.com",
    projectId: "logirity",
    storageBucket: "logirity.appspot.com",
    messagingSenderId: "754308597404",
    appId: "1:754308597404:web:aa1512cb0afbe3d2410f59",
    measurementId: "G-C91NKDJMZK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


const list = document.querySelector('#alocados');

db.collection("Agendamento").get().then((snapshot)=>{
    console.log(snapshot.docs);
})
    