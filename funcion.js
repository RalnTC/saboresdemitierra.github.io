function buscarPlatillos() {
  const input = document.getElementById('busquedaInput');
  const filtro = input.value.toLowerCase();  // <-- aquí conviertes a minúsculas el texto del input
  const platillos = document.querySelectorAll('.menu-item');

  platillos.forEach(item => {
    const nombre = item.querySelector('h2').textContent.toLowerCase();     // <-- aquí conviertes a minúsculas el título
    const descripcion = item.querySelector('p').textContent.toLowerCase(); // <-- aquí conviertes a minúsculas la descripción

    if (nombre.includes(filtro) || descripcion.includes(filtro)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

