
//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyBBPMR79xqmTUnj_C5e-fi_EHDW4x0hGfI",
      authDomain: "kwitter-3b0cc.firebaseapp.com",
      databaseURL: "https://kwitter-3b0cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b0cc",
      storageBucket: "kwitter-3b0cc.appspot.com",
      messagingSenderId: "745612176633",
      appId: "1:745612176633:web:9ea81af79db355fcd4c628"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
