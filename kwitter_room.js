
const firebaseConfig = {
      apiKey: "AIzaSyANDzO7lC4mRJHU_hlSIc9VW9ZHfyNqtDI",
      authDomain: "kwitter2-8516f.firebaseapp.com",
      databaseURL: "https://kwitter2-8516f-default-rtdb.firebaseio.com",
      projectId: "kwitter2-8516f",
      storageBucket: "kwitter2-8516f.appspot.com",
      messagingSenderId: "11976251538",
      appId: "1:11976251538:web:20b5cc82ed9e42c9522e4b"
    };
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

 function add_room(){
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
 }

    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names" + Room_names);
      row = "<div class='room_names' id=" + Room_names + "onclick = redirectToRoomNames(this.id)> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomNames(name){
      console.log(name);
      localStorage.setItem("room_names",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}