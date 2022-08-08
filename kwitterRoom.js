const firebaseConfig = {
    apiKey: "AIzaSyDj2oa_wWa7FGwUQyEMBEuHIxpPVo1nWds",
    authDomain: "vamosconversar-c60ee.firebaseapp.com",
    databaseURL: "https://vamosconversar-c60ee-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-c60ee",
    storageBucket: "vamosconversar-c60ee.appspot.com",
    messagingSenderId: "746989659554",
    appId: "1:746989659554:web:dc5f57f9860143ac587efb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterPage.html";
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
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("room_name");
    window.location = "index.html";
}