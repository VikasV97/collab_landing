

 var firebaseConfig = {
    apiKey: "AIzaSyD4PikBhdVt16duo570MqMdf4gQv4Qg-Nk",
    authDomain: "quotes-storage.firebaseapp.com",
    databaseURL: "https://quotes-storage.firebaseio.com",
    projectId: "quotes-storage",
    storageBucket: "quotes-storage.appspot.com",
    messagingSenderId: "274380183058",
    appId: "1:274380183058:web:9cee772d961f8a8a412acb",
    measurementId: "G-TSVXX3PRTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.database();
  
 //db.settings({ timestampsInSnapshots: true });
    
