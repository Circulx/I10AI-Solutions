// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function() {
    // AOS is assumed to be a global variable provided by the AOS library.
    // If it's not, you'll need to import it or include the AOS library in your HTML.
    // For example, if using a module bundler:
    // import AOS from 'aos';
    AOS.init({
        once: false,
        mirror: true,
        duration: 1000
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'transparent';
        }
    }
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initialize on page load
    
    // Dropdown hover effect for desktop
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth > 992) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', function() {
                this.querySelector('.dropdown-toggle').click();
            });
            
            dropdown.addEventListener('mouseout', function() {
                this.querySelector('.dropdown-toggle').click();
            });
        });
    }
    
    // Mobile menu close when clicking outside
    document.addEventListener('click', function(event) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');
        
        if (navbarCollapse.classList.contains('show') && 
            !navbarCollapse.contains(event.target) && 
            !navbarToggler.contains(event.target)) {
            navbarToggler.click();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Service card hover animation enhancement
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced Offering Cards Animation
    document.querySelectorAll('.offering-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Read More/Less Toggle Animation
    const readMoreToggle = document.querySelector('[data-bs-toggle="collapse"]');
    if (readMoreToggle) {
        readMoreToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = document.querySelector('#moreContent');
            
            if (!isExpanded) {
                content.style.display = 'block';
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    }

    // Testimonials Slider (if needed)
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');

    if (testimonials.length > 0) {
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.opacity = i === index ? '1' : '0.5';
                testimonial.style.transform = i === index ? 'scale(1.05)' : 'scale(1)';
            });
        }

        // Auto-rotate testimonials (optional)
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Initialize testimonials
        showTestimonial(0);
    }
});

// Reload animations when scrolling back into view
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
            element.classList.add('aos-animate');
        } else {
            element.classList.remove('aos-animate');
        }
    });
});

// Initialize Google Maps
function initMap() {
    // Replace with your actual coordinates
    const location = { lat: 12.9141, lng: 77.6346 }; // HSR Layout, Bangalore coordinates
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"lightness": -80}]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#746855"}]
            }
            // Add more styles as needed
        ]
    });
    
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'i10AI Solutions'
    });
}

// WhatsApp Integration
function openWhatsApp() {
    // Replace with your actual WhatsApp number
    const phoneNumber = '+911234567890';
    const message = 'Hi, I would like to know more about i10AI Solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Declare AOS and google as global variables
var AOS = AOS || {};
var google = google || {};

// Scroll Spy Implementation
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // Offset for navbar height
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
        
        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
}

// Add scroll event listener for scroll spy
window.addEventListener('scroll', updateActiveNavItem);
window.addEventListener('load', updateActiveNavItem);

// Enhanced scroll animations
document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    
    // Parallax effect for about section shapes
    document.querySelectorAll('.floating-shapes .shape').forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Fade in testimonials on scroll
    const testimonialSection = document.querySelector('.testimonials-section');
    if (testimonialSection) {
        const testimonialPosition = testimonialSection.getBoundingClientRect();
        if (testimonialPosition.top < window.innerHeight && testimonialPosition.bottom > 0) {
            testimonialSection.style.opacity = '1';
            testimonialSection.style.transform = 'translateY(0)';
        }
    }
});