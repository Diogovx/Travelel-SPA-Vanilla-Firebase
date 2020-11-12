  // Configuração do Aplicativo do Firebase.com
  var firebaseConfig = {
    apiKey: "AIzaSyAjf-xOjLEEQ5BWlqBEyhE1am7pdRFZ1Js",
    authDomain: "spidertrack-10a5d.firebaseapp.com",
    databaseURL: "https://spidertrack-10a5d.firebaseio.com",
    projectId: "spidertrack-10a5d",
    storageBucket: "spidertrack-10a5d.appspot.com",
    messagingSenderId: "912567566101",
    appId: "1:912567566101:web:16f324275c0a53e8c1f31c"
  };

  // Inicializa Firebase.com
  var firebase = firebase.initializeApp(firebaseConfig);

  // Inicializa o Cloud Firestore (Banco de dados)
  var db = firebase.firestore();