function desconectar(){
    localStorage.clear();
    location.href = "login.html";
    signOut();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    location.reload();
    });
  }
  
function onload() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }