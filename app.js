// ─────────────────────────────────────────────────────────────────
// San Miguel de Allende Audio Tour — App Logic
// Depends on: stops.js (defines STOPS array), Leaflet library
// ─────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────
  let lang = (function () {
    try {
      const stored = sessionStorage.getItem('lang');
      return stored === 'es' ? 'es' : 'en';
    } catch (e) { return 'en'; }
  }());
  let currentStop  = null;
  let activePinEl  = null;
  let imgList      = [];
  let imgIdx       = 0;
  var stopMarkers  = [];

  // ── DOM references ─────────────────────────────────────────────
  const sheet              = document.getElementById('bottom-sheet');
  const overlay            = document.getElementById('overlay');
  const closeBtn           = document.getElementById('close-btn');
  const langToggle         = document.getElementById('lang-toggle');
  const stopNumber         = document.getElementById('stop-number');
  const stopName           = document.getElementById('stop-name');
  const stopDesc           = document.getElementById('stop-description');
  const player             = document.getElementById('audio-player');
  const carousel           = document.getElementById('image-carousel');
  const carouselImg        = document.getElementById('carousel-img');
  const imgPrev            = document.getElementById('img-prev');
  const imgNext            = document.getElementById('img-next');
  const imgDots            = document.getElementById('img-dots');
  const expandBtn          = document.getElementById('expand-btn');
  const expandModal        = document.getElementById('expand-modal');
  const expandImg          = document.getElementById('expand-img');
  const expandClose        = document.getElementById('expand-close');
  const aerialViewBtn      = document.getElementById('aerial-view-btn');
  const oldParroquiaBtn    = document.getElementById('old-parroquia-btn');
  const parroquiaModal     = document.getElementById('parroquia-modal');
  const parroquiaClose     = document.getElementById('parroquia-modal-close');
  const oldParroquiaModal  = document.getElementById('old-parroquia-modal');
  const oldParroquiaClose  = document.getElementById('old-parroquia-close');
  const instructionsBtn    = document.getElementById('instructions-btn');
  const instructionsModal  = document.getElementById('instructions-modal');
  const instructionsClose  = document.getElementById('instructions-close');
  const testAudioBtn       = document.getElementById('test-audio-btn');
  const legendBtn          = document.getElementById('legend-btn');
  const legendModal        = document.getElementById('legend-modal');
  const legendClose        = document.getElementById('legend-close');
  const legendList         = document.getElementById('legend-list');

  // Sync toggle label with restored language
  if (lang === 'es') {
    langToggle.textContent = 'EN';
    langToggle.setAttribute('aria-label', 'Switch to English');
    document.documentElement.lang = 'es';
  }

  // ── Map ────────────────────────────────────────────────────────
  const map = L.map('map', {
    center: [20.9142, -100.7440],
    zoom: 16,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // ── Live location ("blue dot") ────────────────────────────────
  var locationMarker = null;
  var accuracyCircle = null;

  map.on('locationfound', function (e) {
    var r = e.accuracy / 2;
    if (!locationMarker) {
      accuracyCircle = L.circle(e.latlng, { radius: r, className: 'user-accuracy-ring' }).addTo(map);
      locationMarker = L.circleMarker(e.latlng, { radius: 8, className: 'user-location-dot' }).addTo(map);
    } else {
      locationMarker.setLatLng(e.latlng);
      accuracyCircle.setLatLng(e.latlng).setRadius(r);
    }
  });

  map.locate({ watch: true, setView: false, maxZoom: 17 });

  // ── Place pins ─────────────────────────────────────────────────
  STOPS.forEach(function (stop, index) {
    const pinEl = document.createElement('div');
    pinEl.className = 'pin-inner';
    pinEl.textContent = index + 1;

    const icon = L.divIcon({
      className: 'stop-pin',
      html: pinEl.outerHTML,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    const marker = L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map);
    stopMarkers[index] = marker;

    marker.on('add', function () {
      const el = marker.getElement();
      if (el) marker._pinInner = el.querySelector('.pin-inner');
    });

    marker.on('click', function () { openStop(stop, index + 1, marker); });
  });

  // ── Open a stop ────────────────────────────────────────────────
  function openStop(stop, number, marker) {
    currentStop = stop;

    if (activePinEl) activePinEl.classList.remove('active');
    activePinEl = marker._pinInner || null;
    if (activePinEl) activePinEl.classList.add('active');

    stopNumber.textContent = 'Stop ' + number;

    imgList = stop.images || [];
    imgIdx  = 0;
    renderCarousel();

    // Show/hide stop-specific buttons
    aerialViewBtn.style.display   = stop.aerial_view   ? 'inline-block' : 'none';
    oldParroquiaBtn.style.display = stop.old_parroquia ? 'inline-block' : 'none';

    updateLanguage(stop);

    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    overlay.classList.add('visible');
  }

  // ── Image carousel ─────────────────────────────────────────────
  function renderCarousel() {
    if (imgList.length === 0) {
      carousel.style.display = 'none';
      return;
    }

    carousel.style.display = 'block';
    carouselImg.src = imgList[imgIdx];
    carouselImg.alt = currentStop ? (currentStop['name_' + lang] || '') : '';
    carouselImg.onerror = function () {
      if (imgIdx < imgList.length - 1) { imgIdx++; renderCarousel(); }
      else { carousel.style.display = 'none'; }
    };

    const multi = imgList.length > 1;
    imgPrev.style.display = multi ? 'flex' : 'none';
    imgNext.style.display = multi ? 'flex' : 'none';

    imgDots.innerHTML = '';
    if (multi) {
      imgList.forEach(function (_, i) {
        const dot = document.createElement('span');
        dot.className = 'img-dot' + (i === imgIdx ? ' active' : '');
        dot.addEventListener('click', function () { imgIdx = i; renderCarousel(); });
        imgDots.appendChild(dot);
      });
    }
  }

  imgPrev.addEventListener('click', function () {
    if (imgIdx > 0) { imgIdx--; renderCarousel(); }
  });

  imgNext.addEventListener('click', function () {
    if (imgIdx < imgList.length - 1) { imgIdx++; renderCarousel(); }
  });

  // ── Expand image ───────────────────────────────────────────────
  expandBtn.addEventListener('click', function () {
    expandImg.src = imgList[imgIdx] || '';
    expandImg.alt = carouselImg.alt;
    expandModal.classList.add('open');
    expandModal.setAttribute('aria-hidden', 'false');
  });

  function closeExpand() {
    expandModal.classList.remove('open');
    expandModal.setAttribute('aria-hidden', 'true');
  }

  expandClose.addEventListener('click', closeExpand);
  expandModal.addEventListener('click', function (e) {
    if (e.target === expandModal) closeExpand();
  });

  // ── Update text + audio for current language ───────────────────
  function updateLanguage(stop) {
    stopName.textContent = stop['name_' + lang] || stop.name_en;
    stopDesc.textContent = stop['description_' + lang] || stop.description_en;

    const src = stop['audio_' + lang] || stop.audio_en || '';
    if (player.getAttribute('src') !== src) {
      player.pause();
      player.setAttribute('src', src);
      player.load();
    }
  }

  // ── Language toggle ────────────────────────────────────────────
  langToggle.addEventListener('click', function () {
    lang = lang === 'en' ? 'es' : 'en';
    langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
    langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Switch to English');
    document.documentElement.lang = lang;
    try { sessionStorage.setItem('lang', lang); } catch (e) {}
    if (currentStop) updateLanguage(currentStop);
  });

  // ── Aerial view modal ──────────────────────────────────────────
  aerialViewBtn.addEventListener('click', function () {
    parroquiaModal.classList.add('open');
    parroquiaModal.setAttribute('aria-hidden', 'false');
  });

  function closeAerialModal() {
    parroquiaModal.classList.remove('open');
    parroquiaModal.setAttribute('aria-hidden', 'true');
  }

  parroquiaClose.addEventListener('click', closeAerialModal);
  parroquiaModal.addEventListener('click', function (e) {
    if (e.target === parroquiaModal) closeAerialModal();
  });

  // ── Old Parroquia modal ────────────────────────────────────────
  oldParroquiaBtn.addEventListener('click', function () {
    oldParroquiaModal.classList.add('open');
    oldParroquiaModal.setAttribute('aria-hidden', 'false');
  });

  function closeOldParroquiaModal() {
    oldParroquiaModal.classList.remove('open');
    oldParroquiaModal.setAttribute('aria-hidden', 'true');
  }

  oldParroquiaClose.addEventListener('click', closeOldParroquiaModal);
  oldParroquiaModal.addEventListener('click', function (e) {
    if (e.target === oldParroquiaModal) closeOldParroquiaModal();
  });

  // ── Instructions modal ─────────────────────────────────────────
  instructionsBtn.addEventListener('click', function () {
    instructionsModal.classList.add('open');
    instructionsModal.setAttribute('aria-hidden', 'false');
  });

  function closeInstructions() {
    instructionsModal.classList.remove('open');
    instructionsModal.setAttribute('aria-hidden', 'true');
  }

  instructionsClose.addEventListener('click', closeInstructions);
  instructionsModal.addEventListener('click', function (e) {
    if (e.target === instructionsModal) closeInstructions();
  });

  // ── Test audio ─────────────────────────────────────────────────
  testAudioBtn.addEventListener('click', function () {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = 440;
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.0);
      testAudioBtn.classList.add('playing');
      setTimeout(function () { testAudioBtn.classList.remove('playing'); }, 1100);
    } catch (e) {
      alert('Audio test is not supported in this browser.');
    }
  });

  // ── Legend modal ───────────────────────────────────────────────
  STOPS.forEach(function (stop, i) {
    var li = document.createElement('li');
    li.innerHTML =
      '<span class="legend-num">' + (i + 1) + '</span>' +
      '<span class="legend-name">' + stop['name_' + lang] + '</span>';
    li.addEventListener('click', function () {
      closeLegend();
      if (stopMarkers[i]) openStop(stop, i + 1, stopMarkers[i]);
    });
    legendList.appendChild(li);
  });

  legendBtn.addEventListener('click', function () {
    legendModal.classList.add('open');
    legendModal.setAttribute('aria-hidden', 'false');
  });

  function closeLegend() {
    legendModal.classList.remove('open');
    legendModal.setAttribute('aria-hidden', 'true');
  }

  legendClose.addEventListener('click', closeLegend);
  legendModal.addEventListener('click', function (e) {
    if (e.target === legendModal) closeLegend();
  });

  // ── Close bottom sheet ─────────────────────────────────────────
  function closeSheet() {
    player.pause();
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('visible');
    if (activePinEl) { activePinEl.classList.remove('active'); activePinEl = null; }
    currentStop = null;
  }

  closeBtn.addEventListener('click', closeSheet);
  overlay.addEventListener('click', closeSheet);

  // ── Keyboard shortcuts ─────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (expandModal.classList.contains('open'))        closeExpand();
    else if (parroquiaModal.classList.contains('open'))    closeAerialModal();
    else if (oldParroquiaModal.classList.contains('open')) closeOldParroquiaModal();
    else if (instructionsModal.classList.contains('open')) closeInstructions();
    else if (legendModal.classList.contains('open'))       closeLegend();
    else if (currentStop)                                  closeSheet();
  });

})();
