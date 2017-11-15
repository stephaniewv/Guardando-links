var area = document.getElementById('insert-links');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click', function(event){
    // console.log(event.target);
    if(area.value) {
      var li = document.createElement('li');
      var link = document.createElement('a');

      link.textContent = area.value;
      link.setAttribute('href', '#');

      // Construimos

      li.appendChild(link);  /* Agregamos el a al li */

      lista.appendChild(li); /* agregamos la lista al contenedor li*/

      area.value = '';


    }
});
