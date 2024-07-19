
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import {getAuth, onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
    signOut,  getRedirectResult,  signInWithPopup, signInWithRedirect,updateProfile  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  import { getDatabase ,ref, set, onValue,update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBOo8ucWkMXY9mcuLuFUOIgmbHzL_eXzWU",
    authDomain: "skillsync-2326a.firebaseapp.com",
    databaseURL: "https://skillsync-2326a-default-rtdb.firebaseio.com",
    projectId: "skillsync-2326a",
    storageBucket: "skillsync-2326a.appspot.com",
    messagingSenderId: "725756538527",
    appId: "1:725756538527:web:b45fc458b982fbc3e13caa"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase();
  console.log("__firebase____")

// Export Firebase app and auth for use in other files
export { app, auth, getDatabase,ref, set,onValue , update,updateProfile };
//   const form = document.getElementById('login');

// form.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email = document.getElementById('txt-input').value;
//     const password = document.getElementById('pwd').value;
//     console.log("Form Sign up")
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     alert("_in function_");
//     console.log("Sign up")
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error is : ", errorCode, errorMessage)
//     // ..
//   });
// })

// onAuthStateChanged(auth, (user) => {
//       if (user) {
//         location.replace("welcom.html")
//       }
//     });
