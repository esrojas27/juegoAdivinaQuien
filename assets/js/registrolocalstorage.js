const formularioRegistro = document.getElementById('formularioRegistro')
// console.log(formularioRegistro)

listaDeUsuarios=[];

formularioRegistro.addEventListener('submit',(e)=>{
    e.preventDefault()

    const inputNombre = document.getElementById('name').value;
    const inputApellido = document.getElementById('lastName').value;
    let puntos = 0;
    
    /* declaracion de variables para validad los campos*/
    const alertaNombre=document.getElementById('validName')
    const alertaApellido=document.getElementById('validLastName')

    /* condicionales para validar los campos vacios */
    if(inputNombre == ''){
        alertaNombre.innerHTML = "Está vacio rellene el campo"
    }
    if(inputApellido == ''){
        alertaApellido.innerHTML = "Está vacio rellene el campo"
    }
    
    if(inputNombre != '' && inputApellido !=''){
    
    const usuario = {
        nombre: inputNombre,
        apellido: inputApellido,
        puntos: puntos,
    }
    alert("Se registro!")

    guardarEnLocalStorage(usuario)


    const mensajeNombre = document.getElementById('nombreJug').innerText = localStorage.getItem('usuarios')
 

    p = mensajeNombre.split(',')
    x=p[0].split(':')
    z=x[1]
    w=z.slice(1,-1)
    console.log (w);
    
        
    


    //window.location.assign("./assets/pages/game.html")
 
    }
})

const guardarEnLocalStorage = (usuario)=>{
    if(localStorage.getItem('usuarios')==null){
        listaDeUsuarios.push(usuario)
        const usuarioString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuarioString)
    }else{
        listaEnStorage=JSON.parse(localStorage.getItem('usuarios'))
        listaEnStorage.push(usuario)
        const usuarioString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuarioString)
    }
}