// ==========================================
// NOBLE MADERA - JavaScript Principal
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initCarousel();
    initGallery();
    initMobileMenu();
    initSmoothScroll();
    initScrollEffects();
});

// ==========================================
// CARRUSEL AUTOMÁTICO
// ==========================================

function initCarousel() {
    const carouselContainer = document.getElementById('carouselContainer');
    const indicatorsContainer = document.getElementById('carouselIndicators');

    // Ruta a la carpeta de imágenes del carrusel
    const carouselPath = 'assets/carrusel/';

    // Intentar cargar las imágenes del carrusel
    loadCarouselImages(carouselPath, carouselContainer, indicatorsContainer);
}

async function loadCarouselImages(path, container, indicatorsContainer) {
    // NOMENCLATURA FIJA: carrusel_madera_X.jpg
    // Solo buscar con el patrón exacto que usas actualmente
    const possibleImages = [];

    // Buscar hasta 20 imágenes con la nomenclatura: carrusel_madera_1.jpg, carrusel_madera_2.jpg, etc.
    for (let i = 1; i <= 20; i++) {
        possibleImages.push(`carrusel_madera_${i}.jpg`);
    }

    let loadedImages = [];

    console.log('%c[Carrusel] Buscando imágenes...', 'color: #8B5A3C; font-weight: bold');

    for (const imageName of possibleImages) {
        const imageUrl = path + imageName;
        const loaded = await checkImageExists(imageUrl);
        if (loaded) {
            console.log(`%c✓ Carrusel: ${imageName}`, 'color: #2C5F2D; font-weight: bold');
            loadedImages.push(imageUrl);
        }
    }

    if (loadedImages.length > 0) {
        console.log(`%c[Carrusel] ${loadedImages.length} imágenes cargadas`, 'color: #2C5F2D; font-weight: bold');
    } else {
        console.log('%c[Carrusel] No se encontraron imágenes, usando placeholders', 'color: #C9A961');
        loadedImages = [
            'https://via.placeholder.com/1200x600/8B5A3C/FFFFFF?text=Noble+Madera+-+Slide+1',
            'https://via.placeholder.com/1200x600/4A3728/FFFFFF?text=Noble+Madera+-+Slide+2',
            'https://via.placeholder.com/1200x600/2C5F2D/FFFFFF?text=Noble+Madera+-+Slide+3'
        ];
    }

    // Crear slides
    loadedImages.forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Slide ${index + 1}`;

        slide.appendChild(img);
        container.appendChild(slide);

        // Crear indicador
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // Iniciar el carrusel automático
    let currentSlide = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const indicators = indicatorsContainer.querySelectorAll('.indicator');

    function goToSlide(index) {
        currentSlide = index;
        container.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    // Cambiar slide cada 4 segundos
    if (slides.length > 0) {
        setInterval(nextSlide, 4000);
    }
}

function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// ==========================================
// GALERÍA DINÁMICA
// ==========================================

let galleryImages = []; // Array global para almacenar las URLs de las imágenes

function initGallery() {
    const gallery = document.getElementById('gallery');
    const galleryPath = 'assets/trabajo/';

    loadGalleryImages(galleryPath, gallery);
}

async function loadGalleryImages(path, container) {
    // NOMENCLATURA FIJA: trabajoX.jpeg
    // Solo buscar con el patrón exacto que usas actualmente
    const possibleImages = [];

    // Buscar hasta 50 imágenes con la nomenclatura: trabajo1.jpeg, trabajo2.jpeg, etc.
    for (let i = 1; i <= 50; i++) {
        possibleImages.push(`trabajo${i}.jpeg`);
    }

    let loadedImages = [];

    console.log('%c[Galería] Buscando imágenes...', 'color: #8B5A3C; font-weight: bold');

    for (const imageName of possibleImages) {
        const imageUrl = path + imageName;
        const loaded = await checkImageExists(imageUrl);
        if (loaded) {
            console.log(`%c✓ Galería: ${imageName}`, 'color: #2C5F2D; font-weight: bold');
            loadedImages.push(imageUrl);
        }
    }

    if (loadedImages.length > 0) {
        console.log(`%c[Galería] ${loadedImages.length} imágenes cargadas`, 'color: #2C5F2D; font-weight: bold');
    } else {
        console.log('%c[Galería] No se encontraron imágenes, usando placeholders', 'color: #C9A961');
        loadedImages = [
            'https://via.placeholder.com/600x600/8B5A3C/FFFFFF?text=Trabajo+1',
            'https://via.placeholder.com/600x600/4A3728/FFFFFF?text=Trabajo+2',
            'https://via.placeholder.com/600x600/C9A961/FFFFFF?text=Trabajo+3',
            'https://via.placeholder.com/600x600/2C5F2D/FFFFFF?text=Trabajo+4',
            'https://via.placeholder.com/600x600/8B5A3C/FFFFFF?text=Trabajo+5',
            'https://via.placeholder.com/600x600/4A3728/FFFFFF?text=Trabajo+6'
        ];
    }

    // Guardar en el array global
    galleryImages = loadedImages;

    // Crear items de galería
    loadedImages.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in';
        item.style.animationDelay = `${index * 0.1}s`;

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Trabajo ${index + 1}`;
        img.loading = 'lazy';

        item.appendChild(img);
        container.appendChild(item);

        // Abrir modal al hacer click
        item.addEventListener('click', () => {
            openImageModal(index);
        });
    });
}

// ==========================================
// MODAL DE IMAGEN CON NAVEGACIÓN
// ==========================================

let currentImageIndex = 0;
let modal = null;

function openImageModal(index) {
    currentImageIndex = index;

    // Crear modal si no existe
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'image-modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Botón cerrar
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.innerHTML = '×';
        closeBtn.onclick = closeImageModal;

        // Imagen
        const img = document.createElement('img');
        img.id = 'modalImage';

        // Botón anterior
        const prevBtn = document.createElement('button');
        prevBtn.className = 'modal-nav prev';
        prevBtn.innerHTML = '‹';
        prevBtn.onclick = () => navigateImage(-1);

        // Botón siguiente
        const nextBtn = document.createElement('button');
        nextBtn.className = 'modal-nav next';
        nextBtn.innerHTML = '›';
        nextBtn.onclick = () => navigateImage(1);

        // Contador
        const counter = document.createElement('div');
        counter.className = 'modal-counter';
        counter.id = 'modalCounter';

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(prevBtn);
        modalContent.appendChild(img);
        modalContent.appendChild(nextBtn);
        modalContent.appendChild(counter);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Cerrar con click en el fondo
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });

        // Navegación con teclado
        document.addEventListener('keydown', handleKeyPress);
    }

    // Actualizar y mostrar
    updateModalImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll del body
}

function closeImageModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

function navigateImage(direction) {
    currentImageIndex += direction;

    // Circular: volver al inicio o al final
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    updateModalImage();
}

function updateModalImage() {
    const img = document.getElementById('modalImage');
    const counter = document.getElementById('modalCounter');

    if (img && counter) {
        img.src = galleryImages[currentImageIndex];
        img.alt = `Trabajo ${currentImageIndex + 1}`;
        counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
}

function handleKeyPress(e) {
    if (!modal || !modal.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            closeImageModal();
            break;
        case 'ArrowLeft':
            navigateImage(-1);
            break;
        case 'ArrowRight':
            navigateImage(1);
            break;
    }
}

// ==========================================
// MENÚ MÓVIL
// ==========================================

function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// ==========================================
// SCROLL SUAVE
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Evitar scroll si es solo #
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// EFECTOS DE SCROLL
// ==========================================

function initScrollEffects() {
    // Cambiar estilo del header al hacer scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }
    });

    // Animación de elementos al entrar en viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar secciones
    const sections = document.querySelectorAll('.about, .portfolio, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// ==========================================
// CARGA DINÁMICA DE IMAGEN DE EQUIPO
// ==========================================

async function loadTeamImage() {
    const teamImage = document.getElementById('teamImage');
    if (!teamImage) return;

    const teamPath = 'assets/equipo/';
    const possibleNames = [];

    // NOMENCLATURA FIJA: equipoX.jpg
    // Solo buscar con el patrón exacto que usas actualmente
    for (let i = 1; i <= 10; i++) {
        possibleNames.push(`equipo${i}.jpg`);
    }

    console.log('%c[Equipo] Buscando imagen...', 'color: #8B5A3C; font-weight: bold');

    // Intentar cargar cada imagen
    for (const imageName of possibleNames) {
        const imageUrl = teamPath + imageName;
        const exists = await checkImageExists(imageUrl);
        if (exists) {
            console.log(`%c✓ Equipo: ${imageName}`, 'color: #2C5F2D; font-weight: bold');
            teamImage.src = imageUrl;
            return;
        }
    }

    // Si no se encontró ninguna imagen, mostrar placeholder
    console.log('%c[Equipo] No se encontró imagen, usando placeholder', 'color: #C9A961');
    teamImage.src = 'https://via.placeholder.com/600x400/E8DCC4/4A3728?text=Noble+Madera+Equipo';
}

// Cargar la imagen del equipo cuando el DOM esté listo
loadTeamImage();

// ==========================================
// CONSOLA DE BIENVENIDA
// ==========================================

console.log('%c NOBLE MADERA ', 'background: #4A3728; color: #C9A961; font-size: 20px; font-weight: bold; padding: 10px; letter-spacing: 2px;');
console.log('%cArtesanías en Madera con Pasión', 'color: #8B5A3C; font-size: 14px; font-style: italic;');
