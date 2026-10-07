// Inicializar Iconos de Lucide
lucide.createIcons();

// Navbar scroll efecto
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menú Móvil
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Datos de Integrantes
const members = [
  {
    name: 'Mateo',
    role: 'Líder & Vocalista Principal',
    country: 'México',
    age: 21,
    bio: 'Apasionado por la composición y la guitarra, Mateo lidera Santos Bravos con una voz poderosa y carisma escénico único.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Thiago',
    role: 'Bailarín Principal & Raper',
    country: 'Argentina',
    age: 20,
    bio: 'Experto en hip-hop y ritmos urbanos. Trae la energía explosiva y el ritmo dinámico a cada presentación.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Gael',
    role: 'Vocalista & Visual',
    country: 'España',
    age: 19,
    bio: 'Con una voz suave y melódica, Gael aporta un toque de pop clásico europeo combinado con el sazón latino.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Lucas',
    role: 'Productor & Sub-Vocal',
    country: 'Colombia',
    age: 22,
    bio: 'Mente creativa detrás de varios arreglos musicales de la banda. Apasionado del sintetizador y los ritmos tropicales.',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Santi',
    role: 'Maknae & Vocalista',
    country: 'Venezuela',
    age: 18,
    bio: 'El integrante más joven pero con una voz imponente. Trae frescura, versatilidad y entusiasmo al grupo.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  }
];

// Cargar Integrantes en el DOM
const membersContainer = document.getElementById('membersContainer');
members.forEach((m, index) => {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.onclick = () => openMemberModal(index);
  card.innerHTML = `
    <img src="${m.img}" alt="${m.name}" class="member-img">
    <div class="member-info">
      <h3 class="member-name">${m.name}</h3>
      <p class="member-role">${m.role}</p>
    </div>
  `;
  membersContainer.appendChild(card);
});

// Modal de Integrante
const memberModal = document.getElementById('memberModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openMemberModal(index) {
  const m = members[index];
  modalBody.innerHTML = `
    <div class="modal-grid">
      <img src="${m.img}" alt="${m.name}" class="modal-img">
      <div class="modal-details">
        <span class="section-tag">${m.country} • ${m.age} años</span>
        <h2 style="font-size: 2rem; margin-bottom: 5px;">${m.name}</h2>
        <p style="color: var(--accent-red); font-weight: 600; margin-bottom: 15px;">${m.role}</p>
        <p class="paragraph">${m.bio}</p>
      </div>
    </div>
  `;
  memberModal.classList.add('active');
}

modalClose.addEventListener('click', () => {
  memberModal.classList.remove('active');
});

// Reproductor de Música (Simulación)
const playlist = [
  { title: 'Cielo de Fuego', duration: '3:25', album: 'Single Debut', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=500&q=80' },
  { title: 'Bravos Sound', duration: '2:58', album: 'Single', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80' },
  { title: 'Noche Latina', duration: '3:40', album: 'EP - Inicios', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80' }
];

let currentTrackIndex = 0;
let isPlaying = false;

const playerTitle = document.getElementById('playerTitle');
const playerAlbum = document.getElementById('playerAlbum');
const playerCover = document.getElementById('playerCover');
const playBtn = document.getElementById('playBtn');
const trackList = document.getElementById('trackList');

function renderPlaylist() {
  trackList.innerHTML = '';
  playlist.forEach((track, idx) => {
    const item = document.createElement('div');
    item.className = `track-item ${idx === currentTrackIndex ? 'active' : ''}`;
    item.onclick = () => loadTrack(idx);
    item.innerHTML = `
      <span>${idx + 1}. ${track.title}</span>
      <span>${track.duration}</span>
    `;
    trackList.appendChild(item);
  });
}

function loadTrack(index) {
  currentTrackIndex = index;
  const track = playlist[index];
  playerTitle.textContent = track.title;
  playerAlbum.textContent = `${track.album} - Santos Bravos`;
  playerCover.src = track.cover;
  renderPlaylist();
}

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playBtn.innerHTML = isPlaying ? '<i data-lucide="pause"></i>' : '<i data-lucide="play"></i>';
  lucide.createIcons();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  const prev = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(prev);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const next = (currentTrackIndex + 1) % playlist.length;
  loadTrack(next);
});

renderPlaylist();

// Datos del Tour
const tourDates = [
  { date: '15 OCT 2026', city: 'Ciudad de México, MX', venue: 'Auditorio Nacional', status: 'Boletos' },
  { date: '22 OCT 2026', city: 'Bogotá, CO', venue: 'Movistar Arena', status: 'Boletos' },
  { date: '05 NOV 2026', city: 'Buenos Aires, AR', venue: 'Estadio Movistar', status: 'Agotado' },
  { date: '18 NOV 2026', city: 'Madrid, ES', venue: 'WiZink Center', status: 'Boletos' }
];

const tourList = document.getElementById('tourList');
tourDates.forEach(t => {
  const item = document.createElement('div');
  item.className = 'tour-item';
  item.innerHTML = `
    <div>
      <div class="tour-date">${t.date}</div>
      <div style="font-weight: 700; font-size: 1.1rem;">${t.city}</div>
      <div class="tour-venue">${t.venue}</div>
    </div>
    <button class="btn ${t.status === 'Agotado' ? 'btn-outline' : 'btn-red'}" 
            ${t.status === 'Agotado' ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}
            onclick="buyTicket('${t.city}')">
      ${t.status === 'Agotado' ? 'Sold Out' : 'Comprar Boletos'}
    </button>
  `;
  tourList.appendChild(item);
});

function buyTicket(city) {
  alert(`¡Redirigiendo a la boletería oficial para el concierto en ${city}!`);
}

// Lightbox para Galería
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

// Animación de contadores (Stats)
function animateCounters() {
  const animate = (id, target, suffix = '') => {
    let current = 0;
    const step = Math.ceil(target / 50);
    const element = document.getElementById(id);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = current + suffix;
      }
    }, 30);
  };

  animate('statStream', 150, 'M+');
  animate('statShows', 42, '');
  animate('statCountries', 12, '');
}

// Activar contadores cuando la sección sea visible
let animated = false;
window.addEventListener('scroll', () => {
  const aboutSec = document.getElementById('about');
  const pos = aboutSec.getBoundingClientRect();
  if (pos.top < window.innerHeight && !animated) {
    animateCounters();
    animated = true;
  }
});

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('newsletterMsg');
  msg.textContent = '¡Gracias por unirte al Fan Club oficial de Santos Bravos!';
  e.target.reset();
});