/* Portfolio projects renderer: filters, card grid, detail modal, and lightbox.
 * Vanilla JavaScript, no frameworks. Data lives in projects-data.js.
 */
(function () {
	'use strict';

	var CATEGORY_LABELS = {
		shipped: 'Shipped',
		prototype: 'Prototype',
		'technical-demo': 'Technical Demo',
		extra: 'Extra'
	};

	var FILTERS = [
		{ id: 'all', label: 'All' },
		{ id: 'shipped', label: 'Shipped' },
		{ id: 'technical-demo', label: 'Technical Demos' },
		{ id: 'extra', label: 'Extras' },
		{ id: 'devlog', label: 'Devlog' }
	];

	var projects = (window.PORTFOLIO_PROJECTS || []).slice();
	var gridEl = document.getElementById('projects-grid');
	var filtersEl = document.getElementById('project-filters');

	var modalEl = null;
	var lightboxEl = null;
	var lastFocused = null;
	var currentScreens = [];
	var currentScreenIndex = 0;
	var lightboxTitle = '';
	var filterAnimating = false;

	/* ---------- helpers ---------- */

	function esc(str) {
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function categoryLabel(cat) {
		return CATEGORY_LABELS[cat] || cat;
	}

	function placeholderImage(title) {
		var label = String(title).toUpperCase();
		var svg =
			'<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400">' +
			'<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
			'<stop offset="0" stop-color="#2c2c2c"/><stop offset="1" stop-color="#141414"/>' +
			'</linearGradient></defs>' +
			'<rect width="640" height="400" fill="url(#g)"/>' +
			'<text x="320" y="200" font-family="Source Sans Pro, Arial, sans-serif" font-size="30" ' +
			'fill="#49bf9d" text-anchor="middle" font-weight="bold">' + esc(label) + '</text>' +
			'</svg>';
		return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
	}

	function bindImageFallback(img, title) {
		if (!img) return;
		img.addEventListener('error', function onError() {
			img.removeEventListener('error', onError);
			img.src = placeholderImage(title);
		});
	}

	function lockScroll() {
		document.body.style.overflow = 'hidden';
	}

	function unlockScroll() {
		document.body.style.overflow = '';
	}

	/* ---------- filters ---------- */

	function renderFilters() {
		var html = '';
		FILTERS.forEach(function (filter, i) {
			var count = filter.id === 'all'
				? projects.length
				: projects.filter(function (p) {
					return filter.id === 'devlog' ? !!p.devlogUrl : p.category === filter.id;
				}).length;
			html += '<button type="button" class="project-filter' + (i === 0 ? ' is-active' : '') +
				'" data-filter="' + filter.id + '">' + filter.label +
				' <span class="project-filter-count">' + count + '</span></button>';
		});
		filtersEl.innerHTML = html;

		filtersEl.addEventListener('click', function (e) {
			var btn = e.target.closest('.project-filter');
			if (!btn) return;
			applyFilter(btn.getAttribute('data-filter'));
		});
	}

	function applyFilter(filter) {
		if (filterAnimating) return;
		filterAnimating = true;

		var buttons = filtersEl.querySelectorAll('.project-filter');
		for (var i = 0; i < buttons.length; i++) {
			var active = buttons[i].getAttribute('data-filter') === filter;
			buttons[i].classList.toggle('is-active', active);
		}

		gridEl.classList.add('is-fading');
		window.setTimeout(function () {
			var cards = gridEl.querySelectorAll('.project-card');
			for (var j = 0; j < cards.length; j++) {
				var show = filter === 'all'
					|| cards[j].getAttribute('data-category') === filter
					|| (filter === 'devlog' && cards[j].getAttribute('data-devlog') === '1');
				cards[j].style.display = show ? '' : 'none';
			}
			gridEl.classList.remove('is-fading');
			filterAnimating = false;
		}, 240);
	}

	/* ---------- cards ---------- */

	function cardHTML(p) {
		var tech = (p.technologies || []).slice(0, 4).map(esc).join(' \u00b7 ');
		return '' +
			'<article class="project-card" data-category="' + esc(p.category) + '"' +
			(p.devlogUrl ? ' data-devlog="1"' : '') + ' tabindex="0" ' +
			'role="button" aria-label="View details: ' + esc(p.title) + '">' +
			'<div class="project-card-media" style="background-image:url(\'' + esc(p.coverImage) + '\')">' +
			'<span class="project-badge project-badge-' + esc(p.category) + '">' + categoryLabel(p.category) + '</span>' +
			(p.devlogUrl ? '<span class="project-badge project-badge-devlog">Devlog</span>' : '') +
			'<img class="project-cover" src="' + esc(p.coverImage) + '" alt="' + esc(p.title) + ' cover" loading="lazy" decoding="async">' +
			'<span class="project-card-view">View details &rarr;</span>' +
			'</div>' +
			'<div class="project-card-body">' +
			'<h3 class="project-card-title">' + esc(p.title) + '</h3>' +
			'<p class="project-card-short">' + esc(p.shortDescription) + '</p>' +
			(tech ? '<div class="project-card-tech">' + tech + '</div>' : '') +
			'<div class="project-card-meta">' +
			'<span class="project-card-role">' + esc(p.role || '') + '</span>' +
			'<span class="project-card-platforms">' + (p.platforms || []).map(esc).join(' \u00b7 ') + '</span>' +
			'</div>' +
			'</div>' +
			'</article>';
	}

	function renderGrid() {
		var html = '';
		projects.forEach(function (p) { html += cardHTML(p); });
		gridEl.innerHTML = html;

		var cards = gridEl.querySelectorAll('.project-card');
		for (var i = 0; i < cards.length; i++) {
			(function (card, index) {
				card.setAttribute('data-index', index);
				card.style.animationDelay = Math.min(index * 60, 800) + 'ms';
				var cover = card.querySelector('.project-cover');
				if (cover) bindImageFallback(cover, projects[index].title);
				card.addEventListener('click', function () { openModal(card); });
				card.addEventListener('keydown', function (e) {
					if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
				});
			})(cards[i], i);
		}
	}

	/* ---------- modal ---------- */

	function modalMediaHTML(p) {
		var hasVideo = !!p.videoUrl;
		var hasShots = p.screenshots && p.screenshots.length > 0;
		if (!hasVideo && !hasShots) return '';

		var mainSrc = hasShots ? p.screenshots[0] : p.coverImage;
		var thumbs = '';
		if (hasVideo && hasShots) {
			thumbs += '<div class="project-gallery-thumb-wrap">' +
				'<button type="button" class="project-gallery-thumb project-gallery-thumb-video" aria-label="' + esc(p.title) + ' video"></button>' +
				'</div>';
		}
		if (hasShots) {
			p.screenshots.forEach(function (src) {
				thumbs += '<div class="project-gallery-thumb-wrap">' +
					'<img class="project-gallery-thumb" src="' + esc(src) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">' +
					'</div>';
			});
		}

		var media = '<div class="project-gallery-main-wrap"';
		if (hasShots) media += ' style="background-image:url(\'' + esc(mainSrc) + '\')"';
		media += '>';
		if (hasVideo) {
			var vidId = p.videoUrl.replace(/^.*\/embed\//, '').split('?')[0].split('/')[0];
			media += '<div class="project-video" data-video-url="' + esc(p.videoUrl) + '">' +
				'<img class="project-video-poster" src="https://i.ytimg.com/vi/' + esc(vidId) + '/maxresdefault.jpg" alt="' + esc(p.title) + ' video">' +
				'<button type="button" class="project-video-play" aria-label="Play ' + esc(p.title) + ' video">' +
				'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#fff"/></svg>' +
				'</button>' +
				'</div>';
		}
		if (hasShots) {
			media += '<img class="project-gallery-main" src="' + esc(mainSrc) + '" alt="' + esc(p.title) + ' screenshot">';
		}
		media += '</div>';
		if (thumbs) media += '<div class="project-gallery-thumbs">' + thumbs + '</div>';
		return '<div class="project-gallery">' + media + '</div>';
	}

	function modalHTML(p) {
		var chips = (p.technologies || []).map(function (t) {
			return '<span class="project-chip">' + esc(t) + '</span>';
		}).join('');

		var tags = (p.tags || []).map(function (t) {
			return '<span class="project-tag">' + esc(t) + '</span>';
		}).join('');

		var desc = p.fullDescription || [];
		if (typeof desc === 'string') desc = [desc];
		var paragraphs = desc.map(function (par) {
			return '<p>' + esc(par) + '</p>';
		}).join('');

		var actions = '';
		if (p.externalLink) {
			actions += '<a class="button primary" href="' + esc(p.externalLink) + '" target="_blank" rel="noopener">' +
				esc(p.externalLabel || 'Play Game') + '</a>';
		}
		if (p.devlogUrl) {
			actions += '<a class="button" href="' + esc(p.devlogUrl) + '" target="_blank" rel="noopener">Watch Devlog</a>';
		}

		return '' +
			'<button type="button" class="project-modal-close" aria-label="Close details">&times;</button>' +
			'<div class="project-modal">' +
			modalMediaHTML(p) +
			'<div class="project-modal-body">' +
			'<div class="project-modal-title-row">' +
			'<h2 class="project-modal-title" id="project-modal-title">' + esc(p.title) + '</h2>' +
			'<span class="project-badge project-badge-' + esc(p.category) + '">' + categoryLabel(p.category) + '</span>' +
			'</div>' +
			'<div class="project-modal-meta">' +
			'<span class="project-modal-role">' + esc(p.role || '') + '</span>' +
			'<span class="project-modal-platforms">' + (p.platforms || []).map(esc).join(' \u00b7 ') + '</span>' +
			'</div>' +
			'<p class="project-modal-short">' + esc(p.shortDescription) + '</p>' +
			(chips ? '<div class="project-chips">' + chips + '</div>' : '') +
			'<div class="project-modal-desc">' + paragraphs + '</div>' +
			(tags ? '<div class="project-tags">' + tags + '</div>' : '') +
			(actions ? '<div class="project-modal-actions">' + actions + '</div>' : '') +
			'</div>' +
			'</div>';
	}

	function openModal(card) {
		var index = Number(card.getAttribute('data-index'));
		var project = projects[index];
		if (!project) return;

		lastFocused = card;
		if (!modalEl) buildModal();

		modalEl.innerHTML = modalHTML(project);
		modalEl.setAttribute('aria-label', project.title + ' details');
		modalEl.setAttribute('aria-labelledby', 'project-modal-title');
		modalEl.hidden = false;
		lockScroll();

		var closeBtn = modalEl.querySelector('.project-modal-close');
		closeBtn.addEventListener('click', closeModal);
		closeBtn.focus();

		var screens = (project.screenshots || []).slice();
		wireGallery(project, screens);

		var imgs = modalEl.querySelectorAll('img');
		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].classList.contains('project-video-poster')) continue;
			bindImageFallback(imgs[i], project.title);
		}
	}

	function wireGallery(project, screens) {
		var main = modalEl.querySelector('.project-gallery-main');
		var videoBox = modalEl.querySelector('.project-video');
		var videoThumb = modalEl.querySelector('.project-gallery-thumb-video');
		var thumbs = modalEl.querySelectorAll('.project-gallery-thumb');
		if (!main && !videoBox) return;
		var hasVideo = !!videoBox;
		var screensStart = hasVideo ? 1 : 0;

		function buildVideo() {
			var src = videoBox.getAttribute('data-video-url');
			var sep = src.indexOf('?') === -1 ? '?' : '&';
			var frame = document.createElement('iframe');
			frame.src = src + sep + 'autoplay=1&controls=0&playsinline=1&rel=0&iv_load_policy=3&modestbranding=1';
			frame.title = project.title + ' video';
			frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
			frame.setAttribute('allowfullscreen', '');
			videoBox.appendChild(frame);
		}

		function startVideo() {
			if (!videoBox.querySelector('iframe')) buildVideo();
			var poster = videoBox.querySelector('.project-video-poster');
			if (poster) poster.hidden = true;
			var playBtn = videoBox.querySelector('.project-video-play');
			if (playBtn) playBtn.hidden = true;
		}

		function showVideo(show) {
			videoBox.hidden = !show;
			if (main) main.hidden = show;
			if (videoThumb) videoThumb.classList.toggle('is-active', show);
			if (show) {
				var poster = videoBox.querySelector('.project-video-poster');
				if (poster) poster.hidden = false;
				var playBtn = videoBox.querySelector('.project-video-play');
				if (playBtn) playBtn.hidden = false;
			} else {
				var frame = videoBox.querySelector('iframe');
				if (frame) frame.remove();
			}
		}

		if (hasVideo) {
			var playBtn = videoBox.querySelector('.project-video-play');
			if (playBtn) playBtn.addEventListener('click', startVideo);
			var poster = videoBox.querySelector('.project-video-poster');
			if (poster) {
				poster.addEventListener('click', startVideo);
				poster.addEventListener('load', function () {
					if (poster.naturalWidth === 120 && poster.naturalHeight === 90 && poster.src.indexOf('hqdefault') === -1) {
						poster.src = poster.src.replace('maxresdefault', 'hqdefault');
					}
				});
				poster.addEventListener('error', function () {
					if (poster.src.indexOf('maxresdefault') !== -1) {
						poster.src = poster.src.replace('maxresdefault', 'hqdefault');
					}
				});
			}
		}

		function setActive(index) {
			if (hasVideo) showVideo(false);
			main.src = screens[index];
			main.parentElement.style.backgroundImage = "url('" + screens[index] + "')";
			for (var i = 0; i < thumbs.length; i++) {
				thumbs[i].classList.toggle('is-active', i === index + screensStart);
			}
		}

		for (var i = 0; i < thumbs.length; i++) {
			(function (thumb, idx) {
				thumb.addEventListener('click', function () {
					if (hasVideo && idx === 0) { showVideo(true); startVideo(); return; }
					setActive(idx - screensStart);
				});
			})(thumbs[i], i);
		}

		if (main) {
			main.addEventListener('click', function () {
				if (screens.length) openLightbox(screens, currentActiveIndex() - screensStart, project.title);
			});
		}

		function currentActiveIndex() {
			for (var i = 0; i < thumbs.length; i++) {
				if (thumbs[i].classList.contains('is-active')) return i;
			}
			return 0;
		}

		if (hasVideo) showVideo(true);
		else if (thumbs.length) thumbs[0].classList.add('is-active');
	}

	function closeModal() {
		if (!modalEl) return;
		modalEl.hidden = true;
		modalEl.innerHTML = '';
		unlockScroll();
		if (lastFocused && lastFocused.focus) lastFocused.focus();
	}

	/* ---------- lightbox ---------- */

	function buildLightbox() {
		lightboxEl = document.createElement('div');
		lightboxEl.className = 'project-lightbox';
		lightboxEl.hidden = true;
		lightboxEl.innerHTML = '' +
			'<button type="button" class="project-lightbox-btn project-lightbox-close" aria-label="Close">&times;</button>' +
			'<button type="button" class="project-lightbox-btn project-lightbox-prev" aria-label="Previous">&#8249;</button>' +
			'<img class="project-lightbox-img" src="" alt="">' +
			'<button type="button" class="project-lightbox-btn project-lightbox-next" aria-label="Next">&#8250;</button>' +
			'<div class="project-lightbox-counter"></div>';
		document.body.appendChild(lightboxEl);

		lightboxEl.querySelector('.project-lightbox-close').addEventListener('click', closeLightbox);
		lightboxEl.querySelector('.project-lightbox-prev').addEventListener('click', function () { showLightboxImage(currentScreenIndex - 1, lightboxTitle); });
		lightboxEl.querySelector('.project-lightbox-next').addEventListener('click', function () { showLightboxImage(currentScreenIndex + 1, lightboxTitle); });
		lightboxEl.addEventListener('click', function (e) {
			if (e.target === lightboxEl) closeLightbox();
		});
	}

	function openLightbox(screens, index, title) {
		currentScreens = screens;
		lightboxTitle = title || '';
		if (!lightboxEl) buildLightbox();
		showLightboxImage(index, lightboxTitle);
		lightboxEl.hidden = false;
		lockScroll();
		lightboxEl.querySelector('.project-lightbox-close').focus();
	}

	function showLightboxImage(index, title) {
		if (!currentScreens.length) return;
		currentScreenIndex = (index + currentScreens.length) % currentScreens.length;
		var img = lightboxEl.querySelector('.project-lightbox-img');
		img.src = currentScreens[currentScreenIndex];
		img.alt = title ? title + ' screenshot' : 'Screenshot';
		bindImageFallback(img, title || 'Screenshot');
		lightboxEl.querySelector('.project-lightbox-counter').textContent =
			(currentScreenIndex + 1) + ' / ' + currentScreens.length;
	}

	function closeLightbox() {
		if (!lightboxEl) return;
		lightboxEl.hidden = true;
		unlockScroll();
		modalEl && modalEl.querySelector('.project-modal-close') && modalEl.querySelector('.project-modal-close').focus();
	}

	/* ---------- modal container ---------- */

	function getFocusable(root) {
		return Array.prototype.slice.call(root.querySelectorAll(
			'button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])'
		));
	}

	function buildModal() {
		modalEl = document.createElement('div');
		modalEl.className = 'project-modal-overlay';
		modalEl.hidden = true;
		modalEl.setAttribute('role', 'dialog');
		modalEl.setAttribute('aria-modal', 'true');
		document.body.appendChild(modalEl);

		modalEl.addEventListener('click', function (e) {
			if (e.target === modalEl) closeModal();
		});

		modalEl.addEventListener('keydown', function (e) {
			if (e.key !== 'Tab') return;
			var focusables = getFocusable(modalEl);
			if (!focusables.length) return;
			var first = focusables[0];
			var last = focusables[focusables.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		});
	}

	/* ---------- keyboard ---------- */

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			if (lightboxEl && !lightboxEl.hidden) {
				closeLightbox();
			} else if (modalEl && !modalEl.hidden) {
				closeModal();
			}
		}
	});

	/* ---------- boton Explore My Work: scroll suave a la seccion de proyectos ---------- */

	var exploreBtn = document.querySelector('.explore-work-btn');
	if (exploreBtn) {
		exploreBtn.addEventListener('click', function (e) {
			var projectsSection = document.getElementById('two');
			if (projectsSection) {
				e.preventDefault();
				projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	}

	/* ---------- init ---------- */

	if (!gridEl || !filtersEl || !projects.length) return;
	renderFilters();
	renderGrid();
})();
