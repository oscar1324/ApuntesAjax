window.onload = () => {
    document.getElementById("formulario").addEventListener('submit', realizarPeticion, false);
};

function realizarPeticion(event) {
    /** Si un evento tiene un listener asociado se ejecuta el código de dicho listener.
     *  Con este se cancela la acción
     */
    event.preventDefault();
    
    let nuevoCliente = {
        nombre:document.getElementById("nombre").value,
        //"id":document.getElementById("id"),
        apellidos:document.getElementById("apellidos").value,
        DNI:document.getElementById("dni").value,
        fechaNac:document.getElementById("fecha").value,
        Sexo:document.getElementById("sexo").value
        //"preferencias":document.getElementById("preferencias") ,
        
    }
    console.log(nuevoCliente);

    // 1. Crear petición
     let request = new XMLHttpRequest();
     console.log("entra 1");

    // 2. Establecer la función que va a ser llamada cada vez que haya un cambio
    request.onreadystatechange = recogerDatos;
    console.log("entra 2");


    // 3. open para ejecutar la pción
    request.open("POST", "http://localhost:3000/clientes");
    request.setRequestHeader('Content-type', 'application/json');
    console.log("entra 3");
    // 4. send para enviar la petición
    request.send(JSON.stringify(nuevoCliente));
   
}

function muestraError(status) {
    alert("Se ha producido un: " + status);
    //201 creación correcta de tipo POST
}

function recogerDatos() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let parrafo = document.getElementById("parrafo1");
            parrafo.innerHTML = this.responseText;
        } else {
            muestraError(this.status);
        }
        console.log(this.responseText);
        
    }
    console.log("entra 4");
}