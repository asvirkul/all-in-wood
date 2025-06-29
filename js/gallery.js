
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
        });

        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
 
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
        });


        var msnry = new Masonry( '.grid', {
         gutter: 5
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

});