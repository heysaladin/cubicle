(function () {
  var EASE = 'cubic-bezier(0.87,0,0.13,1)';
  var DUR = 680;
  var RED = '#ff0001';

  /* ── helpers ── */
  function css(el, props) {
    Object.assign(el.style, props);
  }
  function raf2(fn) {
    requestAnimationFrame(function () { requestAnimationFrame(fn); });
  }

  /* ── red page-transition overlay ── */
  var overlay = (function () {
    var el = document.createElement('div');
    css(el, {
      position: 'fixed', inset: '0', zIndex: '99998',
      background: RED, pointerEvents: 'none',
      clipPath: 'inset(100% 0% 0%)',   // parked above viewport
      willChange: 'clip-path',
    });
    document.body.appendChild(el);
    return el;
  })();

  // cover page (red falls from top → down)
  function coverPage(cb) {
    css(overlay, { transition: 'none', clipPath: 'inset(0% 0% 100%)' });
    raf2(function () {
      css(overlay, {
        transition: 'clip-path ' + DUR + 'ms ' + EASE,
        clipPath: 'inset(0% 0% 0%)',
      });
      setTimeout(cb, DUR);
    });
  }

  // uncover page (red lifts up → off screen)
  function uncoverPage() {
    css(overlay, { transition: 'none', clipPath: 'inset(0% 0% 0%)' });
    raf2(function () {
      css(overlay, {
        transition: 'clip-path ' + DUR + 'ms ' + EASE,
        clipPath: 'inset(100% 0% 0%)',
      });
    });
  }

  /* ── preloader ── */
  var ROTATIONS = [7.14872, 15.5864, -9.1843, 16.2898, 4.6767, -3.96615];

  function runPreloader(onDone) {
    // find the preloader wrapper – fixed fullscreen div that's the first
    // child of body holding the stacked product photos
    var wrap = document.querySelector(
      'div.fixed.inset-0.z-50'
    );
    if (!wrap) { onDone(); return; }

    var imgs = Array.from(wrap.querySelectorAll('img'));
    if (!imgs.length) { onDone(); return; }

    // make sure wrapper is fully visible
    css(wrap, { transition: 'none', clipPath: 'inset(0% 0% 0%)' });

    // ensure images start at scale 0 with their rotation
    imgs.forEach(function (img, i) {
      css(img, {
        transition: 'none',
        transform: 'translate3d(0,0,0) rotate(' + ROTATIONS[i] + 'deg) scale(0,0)',
        willChange: 'transform',
      });
    });

    // 1 – fan out (scale 0 → 1), staggered
    setTimeout(function () {
      imgs.forEach(function (img, i) {
        setTimeout(function () {
          css(img, {
            transition: 'transform ' + DUR + 'ms ' + EASE,
            transform: 'translate3d(0,0,0) rotate(' + ROTATIONS[i] + 'deg) scale(1,1)',
          });
        }, i * 90);
      });
    }, 120);

    // 2 – fan back in (scale 1 → 0), reverse stagger
    var fanInDelay = 120 + DUR + 5 * 90 + 500;
    setTimeout(function () {
      imgs.slice().reverse().forEach(function (img, i) {
        setTimeout(function () {
          css(img, {
            transition: 'transform ' + DUR * 0.7 + 'ms ' + EASE,
            transform: 'translate3d(0,0,0) rotate(' + ROTATIONS[imgs.indexOf(img)] + 'deg) scale(0,0)',
          });
        }, i * 60);
      });
    }, fanInDelay);

    // 3 – lift preloader off screen (wipe up)
    var liftDelay = fanInDelay + DUR * 0.7 + 5 * 60 + 120;
    setTimeout(function () {
      css(wrap, {
        transition: 'clip-path ' + DUR + 'ms ' + EASE,
        clipPath: 'inset(100% 0% 0%)',
      });
      setTimeout(onDone, DUR);
    }, liftDelay);
  }

  /* ── link interception ── */
  var busy = false;

  function isInternal(href) {
    if (!href) return false;
    if (/^(https?:|\/\/|#|mailto:|tel:|javascript:)/.test(href)) return false;
    return true;
  }

  document.addEventListener('click', function (e) {
    if (busy) { e.preventDefault(); return; }
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!isInternal(href)) return;
    e.preventDefault();
    busy = true;
    coverPage(function () {
      window.location.href = href;
    });
  });

  /* ── on page load ── */
  var firstVisit = !sessionStorage.getItem('outfit_v');
  sessionStorage.setItem('outfit_v', '1');

  if (firstVisit) {
    // preloader plays; hide red overlay (it won't be needed)
    css(overlay, { clipPath: 'inset(100% 0% 0%)' });
    runPreloader(function () { /* done */ });
  } else {
    // returning from a navigation – red overlay already covers page, lift it
    uncoverPage();
  }
})();
