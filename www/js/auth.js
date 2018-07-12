class Auth {
    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    register(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    loguot() {
        return firebase.auth().signOut();
    }
}