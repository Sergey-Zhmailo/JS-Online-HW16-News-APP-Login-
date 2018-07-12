// Init Auth
const auth = new Auth();
// Init UI
const loginUi = new LoginUI();

// Init Elements
const form = document.forms['login-form'];
const email = form.elements['email'];
const password = form.elements['password'];

// CHeck auth state
   firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
           window.location = 'index.html';
       }
   });

form.addEventListener("submit", onLogin);

function onLogin(e) {
    e.preventDefault();
    if (email.value && password.value) {
        auth.login(email.value, password.value)
            .then(() => {
                window.location = 'index.html';
            })
            .catch(err => {
                console.log(err.code, err.message);
                loginUi.showLoginError(err);
            })
    } else {
        loginUi.showLoginError("Fill the Login and Password fields");
    }
}