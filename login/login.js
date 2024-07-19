import { onAuthStateChanged ,reauthenticateWithCredential, EmailAuthProvider , createUserWithEmailAndPassword, signInWithEmailAndPassword,  sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Initialize Firebase app and auth
import { app, auth, getDatabase,ref, set,onValue , update,updateProfile} from "./firebase.js";
const db = getDatabase();
const msg = document.getElementById('msg');
const logIn = document.getElementById('login');
const signUp = document.getElementById('signUp');
const refr=ref(db,"/users")
onValue(refr,(snapshot)=>{
  const data= snapshot.val();
  console.log("data from db: " + data.email)
 })

function display(){
  const user = auth.currentUser
  
if (user){
  alert("Name  : " + user.displayName + " Eamil  : " + user.email)
}
else{
  console.log("user.displayName is not Here")
}
}

signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('pswd').value;
    const userName = document.getElementById('uname').value;
    console.log("Form Sign up")
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
        const uid = user.uid;
        
    alert("_in function_");
    updateProfile(user, {
      displayName: userName
  })
   // console.log("Sign up " + userCredential.user)
  //  const dataUser={
  //     name:userName,
  //     email:email
  //   }
 // update(ref(db,'students/'+userName+'/' ),{
  const credential = EmailAuthProvider.credential(email, password);
   return reauthenticateWithCredential(user, credential);
 
  }).then(()=>{
    //alert("Inside Name  : " + user.displayName + " Eamil  : " + user.email)
    update(ref(db,'students/' + userName),{
      // userName:dataUser
      name:userName,
      email:email
    })
  })
  .then(() => {
    console.log('User signed up and data saved!');
    display();
   // localStorage.setItem('userName', userName);
    location.replace("../skillsync_dashboard.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error is : ", errorCode, errorMessage)
    // document.getElementById("msg").innerHTML= "hiii";
  });
})

logIn.addEventListener('click', (event)=>{
    event.preventDefault();
     
    const email = document.getElementById('txt-input').value;
    const password = document.getElementById('pwd').value;
    console.log("Form Sign In " + email + password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userName = document.getElementById('uname').value;
      const user = userCredential.user;
      console.log(user.displayName)
      return userName
    }).then((userName)=>{

      localStorage.setItem('userName', userName);
     location.replace("../skillsync_dashboard.html");
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error in signup is : ", errorCode, errorMessage)
    // document.getElementById("msg").innerHTML= errorMessage;
    // ..
  });
})

document.getElementById("forgot").addEventListener('click',(event)=>{
    const email = document.getElementById('txt-input').value;

    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    console.log("Password reset email sent!");
  })
})

//Set up onAuthStateChanged listener
onAuthStateChanged(auth, (user) => {
    if (user!== null) {
      const uid = user.displayName;
      //console.log(uid + " _____name____")
     // alert(uid + " _____name____")
    }
});
//export{userName}

// const formSubmit=document.getElementById("formSubmit")

// formSubmit.addEventListener('click',(event)=>{
//   event.preventDefault();
//   console.log("Profile updated!")
//   // updateProfile(auth.currentUser, {
//   //           course:courseName
//   //         }).then(() => {
//   //           // Profile updated!
//   //           console.log("Profile updated!")
//   //           location.replace("../skillsync_dashboard.html");
//   //         }).catch((error) => {
//   //           // An error occurred
//   //           // ...
//   //         });
// })