
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
            ScrollTrigger.refresh();
            });

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
        })

      gsap.registerPlugin(ScrollTrigger);

      requestAnimationFrame(() => {
        const fromEl = document.querySelector(".single-gallery-current");
        const toEl = document.querySelector(".single-gallery-slider-img");

        const toRect = toEl.getBoundingClientRect();
        const fromRect = fromEl.getBoundingClientRect();

        const x = toRect.left - fromRect.left;
        const y = toRect.top - fromRect.top;
        gsap.to(fromEl, {
        scrollTrigger: {
          trigger: ".single-gallery-slider-wrapper",
          start: "center center",
          end: "bottom center",
          scrub: 0.5,
        },
        x: x,
        y: y,
        width: '50%',
        ease: "power2.out"
      });
      gsap.fromTo(
        ".single-gallery-current img",
        { scale: 1 },
        {
          scrollTrigger: {
            trigger: ".single-gallery-slider-wrapper",
            start: "top bottom",
            end: "top center",
            scrub: true
          },
          scale: 1.215, 
          ease: "none"
        }
      );
    });
    
    const mainImage = document.querySelector('.single-gallery-current img');
    const thumbs = document.querySelectorAll('.single-gallery-slider .img-slider img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
        const newSrc = thumb.getAttribute('src');
        mainImage.setAttribute('src', newSrc);

        thumbs.forEach(t => t.classList.remove('active-thumb'));
        thumb.classList.add('active-thumb');
        });
    });

   
        document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
      
        if (!url || url.startsWith('#') || url.startsWith('http')) return;
      
        link.addEventListener('click', e => {
          e.preventDefault();
          gsap.set('#page-transition', { display: 'block', pointerEvents: 'auto' });
      
          gsap.to('#page-transition', {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              window.location.href = url;
            }
          });
        });
      });

        document.querySelectorAll('.has-megamenu').forEach(item => {
    const megamenu = item.querySelector('.megamenu');

    gsap.set(megamenu, {
      autoAlpha: 0,
      y: -20,
      display: 'none',
      pointerEvents: 'none'
    });

    let showTween, hideTween;

    item.addEventListener('mouseenter', () => {
      if (hideTween) hideTween.kill();

      gsap.set(megamenu, { display: 'block', pointerEvents: 'auto' });
      showTween = gsap.to(megamenu, {
        duration: 0.4,
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      if (showTween) showTween.kill();

      hideTween = gsap.to(megamenu, {
        duration: 0.3,
        autoAlpha: 0,
        y: -20,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(megamenu, { display: 'none', pointerEvents: 'none' });
        }
      });
    });
  });
  
  const stickyBar = document.getElementById("sticky-bar");
  const header = document.getElementById("site-header");
  let lastScrollY = window.scrollY;
  
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
  
    if (currentY > 300) {
      stickyBar.classList.add("fixed");
    } else {
      stickyBar.classList.remove("fixed");
    }
  
    lastScrollY = currentY;
  });

});