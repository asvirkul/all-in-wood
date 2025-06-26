
document.addEventListener('DOMContentLoaded', () => {
// === LOCOMOTIVE SCROLL ===
/* const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});  */

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((elem, i) => {
    gsap.fromTo(elem,
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.2,
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });
    });


// === SPLITTING TEXT EFFECT ===
    Splitting();


// ==== Swiper ===

const swiperLeft = new Swiper('.swiper-left', {
    slidesPerView: 2,
    speed: 6000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const swiperRight = new Swiper('.swiper-right', {
    slidesPerView: 2,
    speed: 6000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

// ===ACCORDION===
document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
  
    // Изначально скрываем
    gsap.set(body, { height: 0, opacity: 0, display: 'none', paddingTop: 0, paddingBottom: 0 });
  
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
  
      // Закрываем все остальные
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          const otherBody = otherItem.querySelector('.accordion-body');
          otherItem.classList.remove('active');
          gsap.to(otherBody, {
            height: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => gsap.set(otherBody, { display: 'none' })
          });
        }
      });
  
      if (!isOpen) {
        item.classList.add('active');
        gsap.set(body, { display: 'block' });
  
        // Получаем высоту контента
        body.style.height = 'auto';
        const fullHeight = body.scrollHeight;
        gsap.set(body, { height: 0 }); // сбросим перед анимацией
  
        gsap.to(body, {
          height: fullHeight,
          opacity: 1,
          paddingTop: 15,
          paddingBottom: 15,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            body.style.height = 'auto'; // фиксируем для стабильности
          }
        });
      } else {
        item.classList.remove('active');
        gsap.to(body, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(body, { display: 'none' });
          }
        });
      }
    });
  });
  
  const images = document.querySelectorAll('.parallax-img');
  new simpleParallax(images, {
    scale: 1.3,
    orientation: 'up-right',
    delay: 0.2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  
  
});