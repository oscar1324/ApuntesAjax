window.onload = () => {
    document.getElementById("formulario").addEventListener('submit', realizarPeticion, false);
};

function realizarPeticion() {

    let nuevoCliente = {
        "nombre":document.getElementById("nombre"),
        "id":document.getElementById("id"),
        "apellidos":document.getElementById("apelldios"),
        "DNI":document.getElementById("dni"),
        fechaNac: ,
        Sexo: ,
        preferencias: ,
  
    }

    // 1. Crear petición
    let request = new XMLHttpRequest();

    // 2. Establecer la función que va a ser llamada cada vez que haya un cambio
    request.onreadystatechange = recogerDatos;
    let datorForm = new FormData(document.getElementById("nuevoCliente"));
    datorForm.append("preferencias", "");


    // 3. open para ejecutar la pción
    request.open("GET", "http://localhost:3000/clientes");
    request.setRequestHeader('Content-type', 'appllication/json');

    // 4. send para enviar la petición
    request.send(JSON.stringify(nuevoCliente));
}

function recogerDatos() {
    if (this.readyState == 4 && this.status == 200) {
        let parrafo = document.getElementById("parrafo1");
        parrafo.innerHTML = this.responseText;
    }
}
