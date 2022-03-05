const firebaseConfig = {
    apiKey: "AIzaSyD4f-Qj6U-_35lGe6HZOXdDODJI0nZDmf8",
    authDomain: "practice-b867a.firebaseapp.com",
    databaseURL: "https://practice-b867a-default-rtdb.firebaseio.com",
    projectId: "practice-b867a",
    storageBucket: "practice-b867a.appspot.com",
    messagingSenderId: "579797501755",
    appId: "1:579797501755:web:316928c426b8ba6428d91e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey}})};