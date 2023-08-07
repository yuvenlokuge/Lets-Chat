// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAh-G0v4Mvm8RtuDiwDVhqDnsOfr0NaUjE",
    authDomain: "project93-94-95-96.firebaseapp.com",
    databaseURL: "https://project93-94-95-96-default-rtdb.firebaseio.com",
    projectId: "project93-94-95-96",
    storageBucket: "project93-94-95-96.appspot.com",
    messagingSenderId: "943429008207",
    appId: "1:943429008207:web:bd28b8b717888f6a7e233a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



