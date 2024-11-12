import {barcelona, roma, paris, londres} from "./ciudades.js"

// obtener elementos del DOM
let elements = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//Agregar eventos CLICK a cada elemento
elements.forEach(function(enlace){
  enlace.addEventListener('click', function() {
    //remove la clase active de todos
    elements.forEach(function(enlace){
      enlace.classList.remove('active');
    });
 //agregar active al que corresponda
  this.classList.add('active')

  //traer la info de objeto
  let contenido = obtenerContenido(this.textContent);

  // mostrar contenido del DOM
  tituloElemento.innerHTML = contenido.titulo;
  subTituloElemento.innerHTML = contenido.subtitulo;
  parrafoElemento.innerHTML = contenido.parrafo;
  });
});
  //FUNCION PARA TRAER LA INFO DESDE ciudades.js
function obtenerContenido (enlace){
    let contenido = {
      'Barcelona': barcelona,
      'Roma': roma,
      'París': paris,
      'Londres': londres
    };
    return contenido[enlace];
  }