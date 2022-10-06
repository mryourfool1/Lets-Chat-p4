
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCcYZr_JJHzYdAjMMLJPXqUY6uv-Ka7nbY",
      authDomain: "the-gold-cods.firebaseapp.com",
      projectId: "the-gold-cods",
      storageBucket: "the-gold-cods.appspot.com",
      messagingSenderId: "800861088704",
      appId: "1:800861088704:web:2d55bcf2edc6a93006f625",
      measurementId: "G-JWGYB4MNT9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach
(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}