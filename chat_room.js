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
  //ADD YOUR FIREBASE LINKS HERE
     user_name = localStorage.getItem("user_name")
     document.getElementById("user_name").innerHTML = "Welcome " +user_name+" !";
     function add_room(){
        room_name = document.getElementById("room_name").value;
        localStorage.setItem("room_name", room_name)
        firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
        });
        localStorage.setItem("room_name",room_name)
        window.location="chat_page.html"
      }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
         console.log("Room Name -"+Room_names);
         row="<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
         document.getElementById("output").innerHTML+= row;      //End code
        });});}
  getData();
    function logout()
    {
        localStorage.removeItem("user_name")
        localStorage.removeItem("room_name")
        window.location = "index.html"
    }
  
    function redirectToRoomName(name)
   {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";
   }
  