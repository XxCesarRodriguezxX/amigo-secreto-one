// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre !== "") {
        nombres.push(nombre);
        mostrarNombres();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarNombres() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    nombres.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indice];
    document.getElementById('resultado').textContent = "El amigo sorteado es: " + nombreSorteado;
}