const firebaseConfig = {
  apiKey: "AIzaSyBOo8ucWkMXY9mcuLuFUOIgmbHzL_eXzWU",
  authDomain: "skillsync-2326a.firebaseapp.com",
  databaseURL: "https://skillsync-2326a-default-rtdb.firebaseio.com",
  projectId: "skillsync-2326a",
  storageBucket: "skillsync-2326a.appspot.com",
  messagingSenderId: "725756538527",
  appId: "1:725756538527:web:b45fc458b982fbc3e13caa"
};
import { onAuthStateChanged , updateProfile ,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {  getDatabase,ref, set,onValue , update, } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
//import { getValue } from "firebase/remote-config";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

const formSubmit=document.getElementById("formSubmit")
//const courseName = localStorage.getItem('courseName');

// function openForm(courseName) {
//   document.getElementById("courseName").innerText = courseName;
//   document.getElementById("popupForm").style.display = "block";
//  var courseName =courseName;
//   //localStorage.setItem('courseName', courseName);       
// }
var courseId = document.querySelector(".courseId")
   
courseId.addEventListener('click', (event)=>{
  event.preventDefault();
  var courseName = courseId.innerText;
  console.log(courseName);
  document.getElementById("courseName").innerText = courseName;
  document.getElementById("popupForm").style.display = "block";
   
  const user = auth.currentUser
    const uid = user.uid;
    const name=user.displayName;

    console.log(name + " _____name____")

    formSubmit.addEventListener('click',(event)=>{
      event.preventDefault();
      console.log("Profile updating.. " + courseName)
      
      update(ref(db,'students/'+ name +'/'+ 'COURSES/' ),{
       [courseName]:true
      }).then(() => {
            alert("Profile updated!" + name + " : " + courseName)
            location.replace("../skillsync_dashboard.html");
          }).catch((error) => {
            console.log("An error occurred")
          });
      })
  }
   
)







const categoriesContainer = document.getElementById('categoriesContainer');

    const categoriesRef = ref(db, 'categories');
    onValue(categoriesRef, (snapshot) => {
      const categories = snapshot.val();
      categoriesContainer.innerHTML = ''; // Clear any existing content

      for (const categoryName in categories) {
        const category = categories[categoryName];
        const categoryDiv = document.createElement('div');
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryName;
        categoryDiv.appendChild(categoryTitle);

        const courseList = document.createElement('ul');
        for (const courseName in category) {
          const course = category[courseName];
          const courseItem = document.createElement('li');
          const courseLink = document.createElement('a');
          courseLink.href = `courseDetail.html?category=${categoryName}&course=${courseName}`;
          courseLink.textContent = courseName;
          courseItem.appendChild(courseLink);
          courseList.appendChild(courseItem);
        }
        categoryDiv.appendChild(courseList);
        categoriesContainer.appendChild(categoryDiv);
      }
    });
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const user = auth.currentUser
//     const uid = user.uid;
//     const name=user.displayName;

//     console.log(name + " _____name____")

//     formSubmit.addEventListener('click',(event)=>{
//       event.preventDefault();
//       console.log("Profile updating.. " + courseName)
      
//       update(ref(db,'students/'+ name +'/'+ 'COURSES/' ),{
//        [courseName]:true
//       }).then(() => {
//             alert("Profile updated!" + name + " : " + courseName)
//             location.replace("../skillsync_dashboard.html");
//           }).catch((error) => {
//             console.log("An error occurred")
//           });
//       })
//   } else {
//     console.log("User is signed out")
//   }
// });




 





// formSubmit.addEventListener('click',(event)=>{
//   event.preventDefault();
//   console.log("Profile updated!")
//   updateProfile(auth.currentUser, {
//             course:courseName
//           }).then(() => {
//             // Profile updated!
//             console.log("Profile updated!")
//             location.replace("../skillsync_dashboard.html");
//           }).catch((error) => {
//             // An error occurred
//             // ...
//           });
// })
// formSubmit.addEventListner('click',(event) => {
//   event.preventDefault();
//     // updateProfile(auth.currentUser, {
//     //     course:courseName
//     //   }).then(() => {
//     //     // Profile updated!
//     //     console.log("Profile updated!")
//     //     location.replace("../skillsync_dashboard.html");
//     //   }).catch((error) => {
//     //     // An error occurred
//     //     // ...
//     //   });
// })
