const images = document.querySelectorAll('#gallery img');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

// Ocultar todas las imágenes excepto la primera
images.forEach((image, index) => {
  if (index !== 0) {
    image.style.display = 'none';
  }
});

nextButton.addEventListener('click', () => {
  // Ocultar imagen actual
  images[currentIndex].style.display = 'none';
  
  // Incrementar el índice o volver al principio si llegamos al final
  currentIndex = (currentIndex + 1) % images.length;

  // Mostrar la siguiente imagen
  images[currentIndex].style.display = 'block';
});
