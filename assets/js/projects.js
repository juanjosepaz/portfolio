/* Portfolio projects renderer: filters, card grid, detail modal, and lightbox.
 * Vanilla JavaScript, no frameworks. Data lives in projects-data.js.
 */
(function () {
	'use strict';

	var CATEGORY_LABELS = {
		shipped: 'Shipped',
		prototype: 'Prototype',
		'technical-demo': 'Technical Demo',
		community: 'Community'
	};

	var FILTERS = [
		{ id: 'all', label: 'All' },
		{ id: 'shipped', label: 'Shipped' },
		{ id: 'prototype', label: 'Prototypes' },
		{ id: 'technical-demo', label: 'Technical Demos' }
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
				: projects.filter(function (p) { return p.category === filter.id; }).length;
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
		var buttons = filtersEl.querySelectorAll('.project-filter');
		for (var i = 0; i < buttons.length; i++) {
			var active = buttons[i].getAttribute('data-filter') === filter;
			buttons[i].classList.toggle('is-active', active);
		}
		var cards = gridEl.querySelectorAll('.project-card');
		for (var j = 0; j < cards.length; j++) {
			var show = filter === 'all' || cards[j].getAttribute('data-category') === filter;
			cards[j].style.display = show ? '' : 'none';
		}
	}

	/* ---------- cards ---------- */

	function cardHTML(p) {
		var tech = (p.technologies || []).slice(0, 4).map(esc).join(' \u00b7 ');
		return '' +
			'<article class="project-card" data-category="' + esc(p.category) + '" tabindex="0" ' +
			'role="button" aria-label="View details: ' + esc(p.title) + '">' +
			'<div class="project-card-media">' +
			'<span class="project-badge project-badge-' + esc(p.category) + '">' + categoryLabel(p.category) + '</span>' +
			'<img class="project-cover" src="' + esc(p.coverImage) + '" alt="' + esc(p.title) + ' cover" loading="lazy">' +
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
		if (p.videoUrl && p.screenshots && p.screenshots.length > 0) {
			var thumbs = '';
			p.screenshots.forEach(function (src) {
				thumbs += '<img class="project-gallery-thumb" src="' + esc(src) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">';
			});
			return '' +
				'<div class="project-video">' +
				'<iframe src="' + esc(p.videoUrl) + '" title="' + esc(p.title) + ' video" frameborder="0" ' +
				'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
				'</div>' +
				'<div class="project-gallery">' +
				'<img class="project-gallery-main" src="' + esc(p.screenshots[0]) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">' +
				'<div class="project-gallery-thumbs">' + thumbs + '</div>' +
				'</div>';
		}
		if (p.videoUrl) {
			return '<div class="project-video">' +
				'<iframe src="' + esc(p.videoUrl) + '" title="' + esc(p.title) + ' video" frameborder="0" ' +
				'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
				'</div>';
		}
		if (p.screenshots && p.screenshots.length > 0) {
			var thumbs2 = '';
			p.screenshots.forEach(function (src) {
				thumbs2 += '<img class="project-gallery-thumb" src="' + esc(src) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">';
			});
			return '<div class="project-gallery">' +
				'<img class="project-gallery-main" src="' + esc(p.screenshots[0]) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">' +
				'<div class="project-gallery-thumbs">' + thumbs2 + '</div>' +
				'</div>';
		}
		return '';
	}

	function modalHTML(p) {
		var chips = (p.technologies || []).map(function (t) {
			return '<span class="project-chip">' + esc(t) + '</span>';
		}).join('');

		var paragraphs = (p.fullDescription || []).map(function (par) {
			return '<p>' + esc(par) + '</p>';
		}).join('');

		var actions = '';
		if (p.externalLink) {
			actions += '<a class="button primary" href="' + esc(p.externalLink) + '" target="_blank" rel="noopener">' +
				esc(p.externalLabel || 'Play Game') + '</a>';
		}
		if (p.videoUrl) {
			var videoLabel = (p.category === 'technical-demo' || p.category === 'prototype') ? 'Watch Demo' : 'Watch Trailer';
			actions += '<a class="button" href="' + esc(p.videoUrl) + '" target="_blank" rel="noopener">' + videoLabel + '</a>';
		}

		return '' +
			'<button type="button" class="project-modal-close" aria-label="Close details">&times;</button>' +
			'<div class="project-modal">' +
			modalMediaHTML(p) +
			'<div class="project-modal-body">' +
			'<div class="project-modal-title-row">' +
			'<h3 class="project-modal-title">' + esc(p.title) + '</h3>' +
			'<span class="project-badge project-badge-' + esc(p.category) + '">' + categoryLabel(p.category) + '</span>' +
			'</div>' +
			'<div class="project-modal-meta">' +
			'<span class="project-modal-role">' + esc(p.role || '') + '</span>' +
			'<span class="project-modal-platforms">' + (p.platforms || []).map(esc).join(' \u00b7 ') + '</span>' +
			'</div>' +
			'<p class="project-modal-short">' + esc(p.shortDescription) + '</p>' +
			(chips ? '<div class="project-chips">' + chips + '</div>' : '') +
			'<div class="project-modal-desc">' + paragraphs + '</div>' +
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
		modalEl.hidden = false;
		lockScroll();

		var closeBtn = modalEl.querySelector('.project-modal-close');
		closeBtn.addEventListener('click', closeModal);
		closeBtn.focus();

		var screens = (project.screenshots || []).slice();
		wireGallery(project, screens);

		var imgs = modalEl.querySelectorAll('img');
		for (var i = 0; i < imgs.length; i++) bindImageFallback(imgs[i], project.title);
	}

	function wireGallery(project, screens) {
		var main = modalEl.querySelector('.project-gallery-main');
		var thumbs = modalEl.querySelectorAll('.project-gallery-thumb');
		if (!main) return;

		function setActive(index) {
			main.src = screens[index];
			for (var i = 0; i < thumbs.length; i++) {
				thumbs[i].classList.toggle('is-active', i === index);
			}
		}

		for (var i = 0; i < thumbs.length; i++) {
			(function (thumb, idx) {
				thumb.addEventListener('click', function () { setActive(idx); });
			})(thumbs[i], i);
		}

		main.addEventListener('click', function () {
			if (screens.length) openLightbox(screens, currentActiveIndex(), project.title);
		});

		function currentActiveIndex() {
			for (var i = 0; i < thumbs.length; i++) {
				if (thumbs[i].classList.contains('is-active')) return i;
			}
			return 0;
		}

		setActive(0);
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

	function buildModal() {
		modalEl = document.createElement('div');
		modalEl.className = 'project-modal-overlay';
		modalEl.hidden = true;
		modalEl.setAttribute('role', 'dialog');
		modalEl.setAttribute('aria-modal', 'true');
		modalEl.setAttribute('aria-label', 'Project details');
		document.body.appendChild(modalEl);

		modalEl.addEventListener('click', function (e) {
			if (e.target === modalEl) closeModal();
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

	/* ---------- init ---------- */

	if (!gridEl || !filtersEl || !projects.length) return;
	renderFilters();
	renderGrid();
})();
