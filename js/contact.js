document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';

    gsap.to('#page-transition', {
      duration: 0.8,
      opacity: 0,
      ease: 'power2.out',
      onComplete: () => {
        document.getElementById('page-transition').style.display = 'none';
      }
    });
  });

  const images = document.querySelectorAll('.parallax-img');
  new simpleParallax(images, {
    scale: 1.2,
    orientation: 'up',
    delay: 0.2,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  gsap.from("form button", {
    scrollTrigger: "form",
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.3,
    ease: "power2.out"
  });

  const map = L.map('map').setView([52.201, 8.341], 14);

  // Добавляем тёмную карту
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19,
    attribution: '&copy; Carto'
  }).addTo(map);

  // Создаём иконку
  const customIcon = L.icon({
    iconUrl: 'images/pin.png', // путь к твоему пину
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });

  // Добавляем маркер с кастомной иконкой
  L.marker([52.201, 8.341], { icon: customIcon })
    .addTo(map)
    .bindPopup('Spartherm Feuerungstechnik');
});
