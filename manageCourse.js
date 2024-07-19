
  import { onAuthStateChanged, updateProfile, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getDatabase, ref, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
  
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
  const db = getDatabase(app);
  const auth = getAuth(app);

  document.addEventListener('DOMContentLoaded', () => {
    const courseName = localStorage.getItem('selectedCourse');
    const category = localStorage.getItem('category');
    
    console.log("hi " + courseName + " " + category);
    document.getElementById('courseName').innerHTML = courseName;
    document.getElementById('nameofCourse').innerHTML = courseName;
    document.getElementById('courseHead').innerHTML = courseName;

    const courseRef = ref(db, `categories/${category}/${courseName}`);
    get(courseRef).then((snapshot) => {
      if (snapshot.exists()) {
        const courseData = snapshot.val();
        document.getElementById('courseName').textContent = courseName;
        document.getElementById('instructorName').textContent = courseData.instructor;

        // Create table rows for each topic
        const courseTopicsTable = document.getElementById('courseTopicsTable');
        const courseTopicsBody = document.getElementById('courseTopicsBody');
        courseTopicsBody.innerHTML = ''; // Clear any existing rows

        courseData.topics.forEach((topic, index) => {
          const topicRow = document.createElement('tr');
          const topicCell = document.createElement('td');
          topicCell.textContent = `Topic ${index + 1}: ${topic}`;
          topicRow.appendChild(topicCell);
          courseTopicsBody.appendChild(topicRow);
        });

      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  });





// const firebaseConfig = {
//     apiKey: "AIzaSyBOo8ucWkMXY9mcuLuFUOIgmbHzL_eXzWU",
//     authDomain: "skillsync-2326a.firebaseapp.com",
//     databaseURL: "https://skillsync-2326a-default-rtdb.firebaseio.com",
//     projectId: "skillsync-2326a",
//     storageBucket: "skillsync-2326a.appspot.com",
//     messagingSenderId: "725756538527",
//     appId: "1:725756538527:web:b45fc458b982fbc3e13caa"
//   };
//   import { onAuthStateChanged , updateProfile ,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   import {  getDatabase,ref, set,onValue , update,get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
//   //import { getValue } from "firebase/remote-config";
//   const app = initializeApp(firebaseConfig);
//   const db = getDatabase();
//   const auth = getAuth(app);

// console.log("hi")
// document.addEventListener('DOMContentLoaded', () => {
//     const courseName = localStorage.getItem('selectedCourse');
//     const category = localStorage.getItem('category');
//     console.log("hi" + courseName + category)
//     document.getElementById('courseName').innerHTML = courseName;
//     document.getElementById('nameofCourse').innerHTML = courseName;
//     document.getElementById('courseHead').innerHTML = courseName;

//     const courseRef = ref(db, `categories/${category}/${courseName}`);
//       get(courseRef).then((snapshot) => {
//         if (snapshot.exists()) {
//           const courseData = snapshot.val();
//           document.getElementById('courseName').textContent = courseName;
//           document.getElementById('instructorName').textContent = courseData.instructor;
//           document.getElementById('courseTopics').textContent = courseData.topics.join(', ');
//         } else {
//           console.log('No data available');
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
   
     

       
//    //document.getElementsByClassName('courseName').innerHTML=courseName;
// });


    