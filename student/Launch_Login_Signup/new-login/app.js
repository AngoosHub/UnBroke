(function () {

    // Get a reference to the database service
    var database = firebase.database();

    console.log(database);


    function googleLogin() {
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
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const txtLogin = document.getElementById('txtLogin');
    const txtSignUp = document.getElementById('txtSignUp');

    // Add login event
    txtLogin.addEventListener('click', e => {
        // Get email and password fields
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassWord(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // txtSignUp.addEventListener('click', e => {
    //     // Get email and password fields
    //     const email = txtEmail.value;
    //     const pass = txtPassword.value;
    //     const auth = firebase.auth();
    //     // Sign Up
    //     const promise = auth.createUserWithEmailAndPassWord(email, pass);
    //     promise.catch(e => console.log(e.message));
    // });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    });

});