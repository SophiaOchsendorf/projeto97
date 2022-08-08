//ADICIONE SEUS LINKS FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj2oa_wWa7FGwUQyEMBEuHIxpPVo1nWds",
  authDomain: "vamosconversar-c60ee.firebaseapp.com",
  databaseURL: "https://vamosconversar-c60ee-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-c60ee",
  storageBucket: "vamosconversar-c60ee.appspot.com",
  messagingSenderId: "746989659554",
  appId: "1:746989659554:web:dc5f57f9860143ac587efb"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser(){
    userName=document.getElementById("userName").value;
    virebase.database().ref("/").child(userName).update({ purpose : "adding user" });

}