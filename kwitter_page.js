//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAR2sMVucbcfvA_QAz5qcnp_DB-gSkAz0o",
    authDomain: "kwitter-c208a.firebaseapp.com",
    databaseURL: "https://kwitter-c208a-default-rtdb.firebaseio.com",
    projectId: "kwitter-c208a",
    storageBucket: "kwitter-c208a.appspot.com",
    messagingSenderId: "669285521371",
    appId: "1:669285521371:web:e3a1000641620db91939fe"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}