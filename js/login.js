function verificar(){
    let dato = document.getElementById('nombre');
    let contrasena = document.getElementById('password');
    let usuario = {};


    if (dato.value.trim() === '' || contrasena.value.trim() === '')
    {
        alert('Debe completar los campos vacíos');
    }else {
        location.href = "index.html";
        usuario.nombre = dato.value;
        usuario.password = dato.value;
        usuario.estado = "conectado";

        localStorage.setItem('usuario',JSON.stringify(usuario));
    }   
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  location.href = "index.html";
  
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

document.addEventListener("DOMContentLoaded", ()=>{
   let usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario.estado== 'conectado'){
       location.href = 'index.html';
   }
});

  