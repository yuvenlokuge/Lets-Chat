
const firebaseConfig = {
    apiKey: "AIzaSyAh-G0v4Mvm8RtuDiwDVhqDnsOfr0NaUjE",
    authDomain: "project93-94-95-96.firebaseapp.com",
    databaseURL: "https://project93-94-95-96-default-rtdb.firebaseio.com",
    projectId: "project93-94-95-96",
    storageBucket: "project93-94-95-96.appspot.com",
    messagingSenderId: "943429008207",
    appId: "1:943429008207:web:bd28b8b717888f6a7e233a"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
  
  function sent()
  {
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag ="<h4 class='message_h4'> "+message+ "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> ";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function updateLike(message_id)
{
console.log("clicked on like botton -" + message_id)
button_id = message_id;
likes = document.getElementById(button_id).value;
updateed_likes = Number(likes) +1;
console.log(updateed_likes);

firebase.database().ref(room_name).child(message_id).update({
  like:updateed_likes
});
}
function logout()
{
    window.location="index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
}