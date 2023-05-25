// Agregar un event listener al botón
function miFunc(params) {
     // Seleccionar el input por su id
     const user = document.getElementById("user");

     const valor_user = user.value;
 
      const password = document.getElementById("password");
 
      const valor_password = password.value;
     
     if ((valor_user == "admin") && (valor_password == "admin")) {
          window.location.href = 'https://jonnas311.github.io/ejercicio2/ingreso.html';
          console.log("cambio pagina");
     }else{
          alert("el usuario o contraseña no son correctos");
          user.value = null;
          password.value = null;
     }
    
     
}
