function setup() {

    // Get a reference to the database service
    var database = firebase.database();

    console.log(database);

    var login_gmail = document.getElementsByClassName("login-gmail");

    login_gmail[0].onclick = function googleLogin() {
        console.log("YE BOI111")
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)

            .then(result => {
                alert("Successful Login");
                window.location.href = "../../Student Home/studenthome.html";
            })
            .catch(console.log)

    }

    login_gmail[1].onclick = function googleLogin() {
        console.log("YE BOI111")
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)

            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
            })
            .catch(console.log)

    }

    // Get elements
    const txtEmail = document.getElementsByClassName('txtEmail');
    const txtPassword = document.getElementsByClassName('txtPassword');
    const txtLogin = document.getElementsByClassName('txtLogin');
    const txtSignUp = document.getElementsByClassName('txtSignUp');

    // Add login event
    txtLogin[0].addEventListener('click', e => {
        // Get email and password fields
        const email = txtEmail[0].value;
        console.log(email);
        const pass = txtPassword[0].value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    txtLogin[1].addEventListener('click', e => {
        // Get email and password fields
        const email = txtEmail[1].value;
        const pass = txtPassword[1].value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    txtSignUp[0].addEventListener('click', e => {
        alert("Check1");
        // Get email and password fields
        const email = txtEmail[0].value;
        const pass = txtPassword[0].value;
        const auth = firebase.auth();
        // Sign Up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        alert("Check the console to see what is wrong");
    });

    txtSignUp[1].addEventListener('click', e => {
        // Get email and password fields
        const email = txtEmail[1].value;
        const pass = txtPassword[1].value;
        const auth = firebase.auth();
        // Sign Up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert("Check1");
        });

    });

    

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    });

};

setup();

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '../../Student Home/studenthome.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID //,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
};

ui.start('#firebaseui-auth-container', uiConfig);


const txtEmail = document.getElementsByClassName('txtEmail');
const txtPassword = document.getElementsByClassName('txtPassword');
const txtLogin = document.getElementsByClassName('txtLogin');
// const txtSignUp = document.getElementsByClassName('txtSignUp');

var email = txtEmail[0].value;
var password = txtPassword[0].value;






