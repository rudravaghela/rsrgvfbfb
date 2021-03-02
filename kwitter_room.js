
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAevIa4-QDFuuIa0qOwQu1sZurer1zIzAo",
      authDomain: "kwitter-8cc73.firebaseapp.com",
      databaseURL: "https://kwitter-8cc73-default-rtdb.firebaseio.com",
      projectId: "kwitter-8cc73",
      storageBucket: "kwitter-8cc73.appspot.com",
      messagingSenderId: "646103554819",
      appId: "1:646103554819:web:34dc5bb9c7ad80bdf46736"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name; 
function addRoom()
{
room_name = document.getElementById("room_name").value ;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name " , room_name);

window.location = "kwitter_page.html";

}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name:" +Room_names);
      row = "<div class='room_name' id= " +Room_names+" onclick = 'redirectToRoomName(this.id)' > # "+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index2.html";
}
