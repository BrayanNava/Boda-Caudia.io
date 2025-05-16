const images = [
    "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg",
    "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg",
    "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg",
    "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg"
  ];
  
  let index = 0;
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  
  setInterval(() => {
    img1.src = images[index % images.length];
    img2.src = images[(index + 1) % images.length];
    index = (index + 2) % images.length;
  }, 3000);
  
  function confirmarAsistencia() {
    const nombre = prompt("Por favor, escribe tu nombre para confirmar:");
    if (nombre) {
      const mensaje = `¡Hola! Soy ${nombre}, confirmo mi asistencia a la boda.`;
      const numero = "5216183262814";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    }
  }
  