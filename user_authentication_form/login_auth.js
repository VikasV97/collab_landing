auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in :" , user)
  }
 
})

//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['userID'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      console.log("User logged in");
        //reset login
        loginForm.reset();
    })
});