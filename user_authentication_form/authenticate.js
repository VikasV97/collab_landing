


// signup

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    db.ref("Users").push({
        firstName: document.getElementById('firstName').value,   
        lastName: document.getElementById('lastName').value, 
        userID: document.getElementById('userID').value, 
        userPassword: document.getElementById('userPassword').value,   
     });
    e.preventDefault();

    // get user signup info
    const userID = signupForm['userID'].value;
    const userPassword = signupForm['userPassword'].value;

    //console.log(userFirstName, userLastName);

    // signup the user

    auth.createUserWithEmailAndPassword(userID, userPassword).then(cred =>{
        console.log(cred);
        signupForm.reset();
    })
    
});

