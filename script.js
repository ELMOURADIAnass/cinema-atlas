
// Script pour les animations au défilement
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments avec la classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
});
    }, {threshold: 0.1 });

    fadeElements.forEach(element => {
observer.observe(element);
    });

// Fonctionnalité de filtrage pour les films (simulation)
const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
button.addEventListener('click', function () {
    // Retirer la classe active de tous les boutons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Ajouter la classe active au bouton cliqué
    this.classList.add('active');

    // Ici, vous pourriez ajouter une logique de filtrage réelle
    // Pour l'instant, nous simulons simplement le changement d'état du bouton
});
    });

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    }
});
    });

// Sélecteur de langue (simulation)
const languageSelector = document.querySelector('.language-selector select');

languageSelector.addEventListener('change', function () {
// Ici, vous pourriez ajouter une logique de changement de langue
// Pour l'instant, nous affichons simplement un message de confirmation
alert('Changement de langue vers : ' + this.value);
    });
});







// script.js - Code interactif pour le site Cinéma Al-ATLAS

document.addEventListener('DOMContentLoaded', function () {
// ---------- ANIMATIONS AU DÉFILEMENT ----------
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ---------- NAVIGATION FLUIDE ----------
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ---------- SYSTÈME DE FILTRAGE DES FILMS ----------
const filterButtons = document.querySelectorAll('.filter-btn');
const movieItems = document.querySelectorAll('.movie-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué
        this.classList.add('active');

        const filterValue = this.textContent.toLowerCase();

        // Simulation de filtrage basée sur des données fictives
        // Dans une version réelle, vous associeriez des catégories aux films
        movieItems.forEach(movie => {
            const title = movie.querySelector('.movie-title').textContent.toLowerCase();
            const category = movie.querySelector('.movie-info span:first-child').textContent.toLowerCase();

            // Logique de filtrage
            if (filterValue === 'tous') {
                movie.style.display = 'block';
            } else if (filterValue === 'marocains' &&
                (title.includes('casa') ||
                    title.includes('sofia') ||
                    title.includes('saint inconnu'))) {
                movie.style.display = 'block';
            } else if (filterValue === 'internationaux' &&
                (title.includes('thousand') ||
                    title.includes('atlantique'))) {
                movie.style.display = 'block';
            } else if (filterValue === 'classiques' &&
                (title.includes('casa') ||
                    title.includes('source'))) {
                movie.style.display = 'block';
            } else if (filterValue === 'nouveautés' &&
                (title.includes('sofia') ||
                    title.includes('razzia') ||
                    title.includes('miracle'))) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }

            // Animation de transition pour le filtrage
            setTimeout(() => {
                if (movie.style.display === 'block') {
                    movie.style.opacity = '1';
                    movie.style.transform = 'translateY(0)';
                } else {
                    movie.style.opacity = '0';
                    movie.style.transform = 'translateY(20px)';
                }
            }, 50);
        });
    });
});

// ---------- SÉLECTEUR DE LANGUE ----------
const languageSelector = document.querySelector('.language-selector select');

// Dictionnaire simplifié pour la démo
const translations = {
    'fr': {
        'home': 'Accueil',
        'movies': 'Films',
        'schedule': 'Calendrier',
        'about': 'À propos',
        'contact': 'Contact',
        'book': 'Réserver',
        'featured': 'Films à l\'affiche',
        'catalog': 'Notre Catalogue',
        'projection': 'Calendrier des Projections'
    },
    'ar': {
        'home': 'الرئيسية',
        'movies': 'الأفلام',
        'schedule': 'الجدول',
        'about': 'من نحن',
        'contact': 'اتصل بنا',
        'book': 'احجز الآن',
        'featured': 'الأفلام المعروضة',
        'catalog': 'قائمة الأفلام',
        'projection': 'جدول العروض'
    },
    'en': {
        'home': 'Home',
        'movies': 'Movies',
        'schedule': 'Schedule',
        'about': 'About',
        'contact': 'Contact',
        'book': 'Book Now',
        'featured': 'Featured Films',
        'catalog': 'Our Catalog',
        'projection': 'Projection Schedule'
    }
};

languageSelector.addEventListener('change', function () {
    const selectedLang = this.value;

    // Changer les textes de navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        const key = link.getAttribute('href').substring(1);
        if (translations[selectedLang][key]) {
            link.textContent = translations[selectedLang][key];
        }
    });

    // Changer les boutons de réservation
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.includes('Réserver') ||
            btn.textContent.includes('Book') ||
            btn.textContent.includes('احجز')) {
            btn.textContent = translations[selectedLang]['book'];
        }
    });

    // Changer les titres des sections
    const sectionsToTranslate = {
        '.featured-films h2': 'featured',
        '#movies h2': 'catalog',
        '#schedule h2': 'projection'
    };

    for (const [selector, key] of Object.entries(sectionsToTranslate)) {
        const element = document.querySelector(selector);
        if (element && translations[selectedLang][key]) {
            element.textContent = translations[selectedLang][key];
        }
    }

    // Effet de transition pour le changement de langue
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
});

// ---------- CAROUSEL FILMS À L'AFFICHE ----------
const filmCarousel = document.querySelector('.film-carousel');
let isDragging = false;
let startX, scrollLeft;

// Support pour le défilement tactile et souris
filmCarousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - filmCarousel.offsetLeft;
    scrollLeft = filmCarousel.scrollLeft;
    filmCarousel.style.cursor = 'grabbing';
});

filmCarousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - filmCarousel.offsetLeft;
    scrollLeft = filmCarousel.scrollLeft;
});

filmCarousel.addEventListener('mouseleave', () => {
    isDragging = false;
    filmCarousel.style.cursor = 'grab';
});

filmCarousel.addEventListener('mouseup', () => {
    isDragging = false;
    filmCarousel.style.cursor = 'grab';
});

filmCarousel.addEventListener('touchend', () => {
    isDragging = false;
});

filmCarousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - filmCarousel.offsetLeft;
    const walk = (x - startX) * 2; // Vitesse de défilement
    filmCarousel.scrollLeft = scrollLeft - walk;
});

filmCarousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - filmCarousel.offsetLeft;
    const walk = (x - startX) * 2;
    filmCarousel.scrollLeft = scrollLeft - walk;
});

// ---------- SYSTÈME DE RÉSERVATION INTERACTIF ----------
const bookingButtons = document.querySelectorAll('a.btn, button.btn');

bookingButtons.forEach(button => {
    if (button.textContent.includes('Réserver') ||
        button.textContent.includes('Book') ||
        button.textContent.includes('احجز')) {

        button.addEventListener('click', function (e) {
            // Empêcher la navigation si c'est un lien
            if (this.tagName === 'A') {
                e.preventDefault();
            }

            // Récupérer les informations du film (titre, date, etc.)
            let filmTitle = '';
            let filmDate = '';
            let filmTime = '';
            let filmPrice = '';

            // Logique pour récupérer le titre du film selon le contexte du bouton
            const parentElement = this.closest('.film-details, .movie-details, tr');

            if (parentElement) {
                if (parentElement.querySelector('.film-title')) {
                    filmTitle = parentElement.querySelector('.film-title').textContent;
                } else if (parentElement.querySelector('.movie-title')) {
                    filmTitle = parentElement.querySelector('.movie-title').textContent;
                } else if (parentElement.tagName === 'TR') {
                    const cells = parentElement.querySelectorAll('td');
                    if (cells.length >= 6) {
                        filmTitle = cells[0].textContent;
                        filmDate = cells[1].textContent;
                        filmTime = cells[2].textContent;
                        filmPrice = cells[5].textContent;
                    }
                }
            }

            // Création d'une modal de réservation
            createBookingModal(filmTitle, filmDate, filmTime, filmPrice);
        });
    }
});

function createBookingModal(title, date, time, price) {
    // Suppression de toute modal existante
    const existingModal = document.querySelector('.booking-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Création de la modal
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Contenu de la modal
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.borderRadius = '12px';
    modalContent.style.padding = '30px';
    modalContent.style.maxWidth = '500px';
    modalContent.style.width = '90%';
    modalContent.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    modalContent.style.position = 'relative';
    modalContent.style.transform = 'translateY(20px)';
    modalContent.style.opacity = '0';
    modalContent.style.transition = 'transform 0.3s, opacity 0.3s';

    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '15px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#E50914';

    closeButton.addEventListener('click', () => {
        modalContent.style.transform = 'translateY(20px)';
        modalContent.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    });

    // Titre de la modal
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Réservation';
    modalTitle.style.marginBottom = '20px';
    modalTitle.style.color = '#E50914';
    modalTitle.style.fontSize = '24px';

    // Informations du film
    const filmInfo = document.createElement('div');
    filmInfo.style.marginBottom = '25px';
    filmInfo.style.padding = '15px';
    filmInfo.style.backgroundColor = '#f4f4f4';
    filmInfo.style.borderRadius = '8px';

    filmInfo.innerHTML = `
<p><strong>Film:</strong> ${title || 'Non spécifié'}</p>
${date ? `<p><strong>Date:</strong> ${date}</p>` : ''}
${time ? `<p><strong>Heure:</strong> ${time}</p>` : ''}
${price ? `<p><strong>Prix:</strong> ${price}</p>` : ''}
`;

    // Formulaire de réservation
    const bookingForm = document.createElement('form');
    bookingForm.innerHTML = `
<div style="margin-bottom: 15px;">
    <label for="name" style="display: block; margin-bottom: 5px;">Nom complet</label>
    <input type="text" id="name" placeholder="Votre nom" required 
            style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
</div>
<div style="margin-bottom: 15px;">
    <label for="email" style="display: block; margin-bottom: 5px;">Email</label>
    <input type="email" id="email" placeholder="Votre email" required 
            style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
</div>
<div style="margin-bottom: 15px;">
    <label for="phone" style="display: block; margin-bottom: 5px;">Téléphone</label>
    <input type="tel" id="phone" placeholder="Votre numéro" required 
            style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
</div>
<div style="margin-bottom: 15px;">
    <label for="tickets" style="display: block; margin-bottom: 5px;">Nombre de tickets</label>
    <input type="number" id="tickets" min="1" max="10" value="1" required 
            style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
</div>
<div style="margin-bottom: 15px;">
    <label for="payment" style="display: block; margin-bottom: 5px;">Mode de paiement</label>
    <select id="payment" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
        <option value="card">Carte bancaire</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Paiement sur place</option>
    </select>
</div>
<button type="submit" style="background-color: #E50914; color: white; border: none; padding: 12px 20px; 
        border-radius: 30px; font-weight: 600; cursor: pointer; width: 100%;">
    Confirmer la réservation
</button>
`;

    // Gestion de la soumission du formulaire
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: this.querySelector('#name').value,
            email: this.querySelector('#email').value,
            phone: this.querySelector('#phone').value,
            tickets: this.querySelector('#tickets').value,
            payment: this.querySelector('#payment').value
        };

        // Afficher un message de confirmation
        modalContent.innerHTML = '';

        const confirmationMessage = document.createElement('div');
        confirmationMessage.style.textAlign = 'center';
        confirmationMessage.style.padding = '20px';

        confirmationMessage.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#E50914" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <h3 style="color:#E50914; margin: 20px 0;">Réservation Confirmée!</h3>
    <p style="margin-bottom: 20px;">Merci ${formData.name} pour votre réservation.</p>
    <p style="margin-bottom: 20px;">Un e-mail de confirmation a été envoyé à ${formData.email}.</p>
    <p style="color:#666;">Vous pouvez récupérer vos billets à la caisse du cinéma en présentant votre numéro de réservation.</p>
    <button id="close-confirmation" style="background-color: #E50914; color: white; border: none; padding: 12px 20px; 
            border-radius: 30px; font-weight: 600; cursor: pointer; margin-top: 20px;">
        Fermer
    </button>
`;

        modalContent.appendChild(confirmationMessage);

        document.getElementById('close-confirmation').addEventListener('click', () => {
            modalContent.style.transform = 'translateY(20px)';
            modalContent.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        });
    });

    // Assemblage de la modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(filmInfo);
    modalContent.appendChild(bookingForm);
    modal.appendChild(modalContent);

    // Ajout de la modal au body
    document.body.appendChild(modal);

    // Animation d'entrée
    setTimeout(() => {
        modalContent.style.transform = 'translateY(0)';
        modalContent.style.opacity = '1';
    }, 10);

    // Fermeture en cliquant en dehors
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modalContent.style.transform = 'translateY(20px)';
            modalContent.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// ---------- CAROUSEL TÉMOIGNAGES ----------
const testimonialSlider = document.querySelector('.testimonial-slider');
let testimonialDragging = false;
let testimonialStartX, testimonialScrollLeft;

// Implémentation similaire au carousel de films
testimonialSlider.addEventListener('mousedown', (e) => {
    testimonialDragging = true;
    testimonialStartX = e.pageX - testimonialSlider.offsetLeft;
    testimonialScrollLeft = testimonialSlider.scrollLeft;
    testimonialSlider.style.cursor = 'grabbing';
});

testimonialSlider.addEventListener('mouseleave', () => {
    testimonialDragging = false;
    testimonialSlider.style.cursor = 'grab';
});

testimonialSlider.addEventListener('mouseup', () => {
    testimonialDragging = false;
    testimonialSlider.style.cursor = 'grab';
});

testimonialSlider.addEventListener('mousemove', (e) => {
    if (!testimonialDragging) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - testimonialStartX) * 2;
    testimonialSlider.scrollLeft = testimonialScrollLeft - walk;
});

// ---------- VALIDATION DU FORMULAIRE DE CONTACT ----------
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupérer les champs
        const nameField = this.querySelector('input[placeholder="Votre nom"]');
        const emailField = this.querySelector('input[placeholder="Votre email"]');
        const messageField = this.querySelector('textarea');

        // Validation simple
        let isValid = true;

        if (!nameField.value.trim()) {
            markInvalid(nameField, 'Le nom est requis');
            isValid = false;
        } else {
            markValid(nameField);
        }

        if (!emailField.value.trim()) {
            markInvalid(emailField, 'L\'email est requis');
            isValid = false;
        } else if (!validateEmail(emailField.value)) {
            markInvalid(emailField, 'Veuillez entrer un email valide');
            isValid = false;
        } else {
            markValid(emailField);
        }

        if (!messageField.value.trim()) {
            markInvalid(messageField, 'Le message est requis');
            isValid = false;
        } else {
            markValid(messageField);
        }

        // Si tout est valide, simuler l'envoi
        if (isValid) {
            const submitButton = this.querySelector('.btn-submit');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;

            // Simuler un délai d'envoi
            setTimeout(() => {
                // Créer un message de succès
                const successMessage = document.createElement('div');
                successMessage.style.backgroundColor = '#4CAF50';
                successMessage.style.color = 'white';
                successMessage.style.padding = '15px';
                successMessage.style.marginTop = '20px';
                successMessage.style.borderRadius = '6px';
                successMessage.style.textAlign = 'center';
                successMessage.textContent = 'Votre message a été envoyé avec succès!';

                // Remplacer le formulaire par le message
                contactForm.parentNode.replaceChild(successMessage, contactForm);

                // Rétablir le formulaire après quelques secondes
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    successMessage.parentNode.replaceChild(contactForm, successMessage);
                }, 5000);
            }, 1500);
        }
    });
}

function markInvalid(field, message) {
    field.style.borderColor = '#E50914';

    // Vérifier si un message d'erreur existe déjà
    let errorMessage = field.parentNode.querySelector('.error-message');

    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#E50914';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.marginTop = '5px';
        field.parentNode.appendChild(errorMessage);
    }

    errorMessage.textContent = message;
}

function markValid(field) {
    field.style.borderColor = '#4CAF50';

    // Supprimer le message d'erreur s'il existe
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// ---------- MENU MOBILE RESPONSIVE ----------
// Créer un bouton hamburger pour le menu mobile
const header = document.querySelector('header');
const nav = document.querySelector('nav ul');

const hamburgerButton = document.createElement('button');
hamburgerButton.className = 'mobile-menu-button';
hamburgerButton.innerHTML = '☰';
hamburgerButton.style.display = 'none';
hamburgerButton.style.background = 'none';
hamburgerButton.style.border = 'none';
hamburgerButton.style.color = 'white';
hamburgerButton.style.fontSize = '24px';
hamburgerButton.style.cursor = 'pointer';
hamburgerButton.style.position = 'absolute';
hamburgerButton.style.top = '15px';
hamburgerButton.style.left = '15px';

header.querySelector('.container').appendChild(hamburgerButton);

// Gérer la responsivité
function handleResponsiveMenu() {
    if (window.innerWidth <= 768) {
        hamburgerButton.style.display = 'block';
        nav.style.flexDirection = 'column';
        nav.style.display = 'none'; // Cacher par défaut sur mobile
    } else {
        hamburgerButton.style.display = 'none';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
    }
}

// Exécuter une fois au chargement
handleResponsiveMenu();

// Exécuter à chaque redimensionnement
window.addEventListener('resize', handleResponsiveMenu);

// Toggle menu sur clic
hamburgerButton.addEventListener('click', function () {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        nav.style.animation = 'fadeIn 0.3s ease';
    } else {
        nav.style.display = 'none';
    }
});

// Ajouter une animation
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
from { opacity: 0; transform: translateY(-10px); }
to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

// ---------- NEWSLETTER AVEC VALIDATION ----------
const newsletterForm = document.querySelector('.newsletter form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const subscribeButton = this.querySelector('button');

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            emailInput.style.borderColor = '#E50914';
            emailInput.style.animation = 'shake 0.5s';

            // Ajouter l'animation shake
            const shakeStyle = document.createElement('style');
            shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
            document.head.appendChild(shakeStyle);

            // Réinitialiser l'animation
            setTimeout(() => {
                emailInput.style.animation = '';
            }, 500);

            return;
        }

        // Animation pour le bouton
        const originalText = subscribeButton.textContent;
        subscribeButton.textContent = '✓';
        subscribeButton.style.backgroundColor = '#4CAF50';
        emailInput.style.borderColor = '#4CAF50';

        // Réinitialiser après un moment
        setTimeout(() => {
            emailInput.value = '';
            subscribeButton.textContent = originalText;
            subscribeButton.style.backgroundColor = '';
            emailInput.style.borderColor = '';

            // Afficher un message de confirmation
            const container = newsletterForm.parentNode;
            const confirmMessage = document.createElement('p');
            confirmMessage.textContent = 'Merci pour votre inscription!';
            confirmMessage.style.color = '#4CAF50';
            confirmMessage.style.marginTop = '10px';
            container.appendChild(confirmMessage);

            // Supprimer le message après quelques secondes
            setTimeout(() => confirmMessage.remove(), 3000);
        }, 2000);
    });
}
});



