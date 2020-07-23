//document.querySelector('#submitForm').addEventListener('click', writeData);

function writeData() {
       db.ref("Users").push({
       firstName: document.getElementById('firstName').value,   
       lastName: document.getElementById('lastName').value, 
       userID: document.getElementById('userID').value, 
       userPassword: document.getElementById('userPassword').value,   
    });
    //window.location.reload();
 }