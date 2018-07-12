const FirestoreInit = (function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAExVYeyZRIjGahLpwWaylcX7FrfaahhiQ",
        authDomain: "js-online-news-app.firebaseapp.com",
        databaseURL: "https://js-online-news-app.firebaseio.com",
        projectId: "js-online-news-app",
        storageBucket: "js-online-news-app.appspot.com",
        messagingSenderId: "831861925918"
    };
    firebase.initializeApp(config);

})();