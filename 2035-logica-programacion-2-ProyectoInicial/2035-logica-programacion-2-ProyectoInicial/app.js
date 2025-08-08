let intentos;
let numeroSecreto;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario == numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades! Has acertado. Lo intentaste ${intentos} ${intentos > 1 ? "veces" : "vez"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroDeUsuario < numeroSecreto)
            asignarTextoElemento('p', 'El número secreto es mayor');
        else
            asignarTextoElemento('p', 'El número secreto es menor');

            intentos++;
            document.getElementById('valorUsuario').value = '';
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Se han utilizado todos los números');
        listaNumerosSorteados = [];
    }
    else
    {
        
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
                return generarNumeroSecreto();  
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function reiniciarJuego()
{
    document.getElementById('valorUsuario').value = '';
    condicionesIniciales();
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


