
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB_qIlkF1i67EKWUaiielRd7eWpjTz04bc",
    authDomain: "chat-web-app-76ff6.firebaseapp.com",
    databaseURL: "https://chat-web-app-76ff6-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-76ff6",
    storageBucket: "chat-web-app-76ff6.appspot.com",
    messagingSenderId: "541256101004",
    appId: "1:541256101004:web:5c5ca0836e098953b4dfa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
