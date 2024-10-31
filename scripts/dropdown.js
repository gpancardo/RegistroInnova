function cambiarEstado() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('is-active');
  }
  
  document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown');
    const button = document.getElementById('menu-boton');
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  });
  