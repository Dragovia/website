


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
    
        var user = firebase.auth().currentUser;
    if(user != null){

      var email_id = user.email;
      var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = " Welcome : " + email_id  + 
                                                                  "<br/> Verified : "  + email_verified;         
      if(email_verified)
      {
        document.getElementById("verify_btn").style.display = "none";
      

      } else {
        document.getElementById("verify_btn").style.display = "block";
      }
    
    }
  }
    else {
      // No user is signed in.  
   
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
  
  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  //window.location.href="game.html";
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
} 

function create_account(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    // ...
  });

}

function send_verification()
{
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().them(function(){

  window.alert("Verification Sent");
    
  }).catch(function(error){
    window.alert("error: " + error.message);

});

}

function logout() {
  firebase.auth().signOut().then(function()
  {
  }).catch(function(error){
});
}
