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
document.addEventListener("DOMContentLoaded", ()=>{
   let usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario.estado== 'conectado'){
       location.href = 'index.html';
   }
});
