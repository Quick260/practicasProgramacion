//Seleccionar elementos 

const heading = document.querySelector('.header__texto h2');

const enlaces = document.querySelectorAll('.navegacion a');
//Se guardan como en un arreglo 


//Generar enlace
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.textContent = "Enlace de prueba";
nuevoEnlace.classList.add('navegacion__enlace');

//Las previas indicaciones en html se verian asi
//<a href="nuevo-enlace.html" class="navegacion__enlace">Enlace de prueba</a>

//Para agregar al documento

document.querySelector('.navegacion').appendChild(nuevoEnlace);

//Eventos:

//Dos formas de escuchar el evento load con diferente sintaxis 
window.addEventListener('load', function() { //load espera a que se descargue JS y archivos que dependen de HTML
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera a que se cargue el HTML
    console.log(4);
});

//Seleccionar elementos 
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    evento.preventDefault(); //Previene la accion por default del componenete
    console.log('enviando formulario');
});*/

// Validar formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//Evento de submit para enviar formualrio
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar formualrio
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta("Todos los campos son obligatorios", 0); //0 Para errores

        return;
    }

    mostrarAlerta("Correo enviado", 1); //1 Para exitos
})

function mostrarAlerta(mensaje, tipo){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(tipo === 0){
        alerta.classList.add('error');   
    }else if (tipo === 1){
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    //desaparecerla luego de un rato
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}