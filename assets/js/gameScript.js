//Mostrando el nombre del usuario que esta jugando 
const mensajeNombre = localStorage.getItem('usuarios')
 
usuariosDivididos = mensajeNombre.split(',')
nomCompleto=usuariosDivididos[0].split(':')
apellidoCompleto=usuariosDivididos[1].split(':')
nombreComillas=nomCompleto[1]
apellidoComillas=apellidoCompleto[1]
nombreUsuario=nombreComillas.slice(1,-1)
apellidoUsuario=apellidoComillas.slice(1,-1)


const mostrarNombre = document.getElementById('nombreJug').innerText = nombreUsuario + ' ' +apellidoUsuario;


//comenzamos a declarar las variables para sumarle los muntos al jugador 


const adivinaQuien = document.getElementById('adivinaQuien')

adivinaQuien.addEventListener('submit',(e)=>{
    e.preventDefault() 

    const inputRespuesta = document.getElementById('respuesta').value;
    const descripcion = document.getElementById('descripcion').value;
    const puntaje = localStorage.getItem('usuarios')

    console.log(puntaje)

    if((inputRespuesta=="carlos" || inputRespuesta=="carlos alvarez") && descripcion=="me gusta programar css "){
        alert("Respuesta correcta")
    }


})




