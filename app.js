//Challenge del amigo secreto

let amigos = [];
 
/*Agrega un amigo a la lista amigos y valida que el campo no esté vacío*/
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (/\d/.test(nombreAmigo) || /\w/.test(nombreAmigo) || nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre válido.");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

/*Recorre la lista amigos y las muestra en el DOM creando un elemento <li>*/
function mostrarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];

        let listaHTML = document.createElement('li');
        listaHTML.innerText = element;
        listaAmigos.appendChild(listaHTML);

        console.log("Tamaño Lista: " + amigos.length + "\nLista: " + amigos);
    }
}

/*Selecciona de manera aleatoria uno de los nombres almacenados en el array amigos usando las funciones de Math*/
function sortearAmigo() {
    let tamañoLista = amigos.length;

    if (tamañoLista > 0) {
        let indice = Math.floor(Math.random()*tamañoLista);
        let nombreAleatorio = amigos[indice];

        let elementoHTML = document.querySelector('#resultado');
        elementoHTML.innerText = nombreAleatorio;

        console.log("Indice: " + indice + "Nombre: " + nombreAleatorio);
    } else {
        alert("No tienes amigos.");
    }
}
