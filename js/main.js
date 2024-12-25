// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.classList.add('was-validated');
        });
    }

    // Gallery Interaction
    // Project details data
    const projectDetails = {
        project1: {
            title: "Ultrasonic Testing",
            description: "Advanced NDT inspection services utilizing state-of-the-art ultrasonic testing equipment for precise defect detection and material thickness measurement. Our certified technicians ensure the highest level of accuracy in critical component assessment.",
            specifications: [
                "Equipment: Olympus OmniScan MX2",
                "Testing Method: Phased Array UT",
                "Industry: Oil & Gas",
                "Location: Greater Enfield Development"
            ]
        },
        project2: {
            title: "Radiographic Inspection",
            description: "Comprehensive radiographic testing services for weld quality assessment and internal defect detection. Using advanced digital radiography systems to provide detailed imaging with reduced radiation exposure.",
            specifications: [
                "Equipment: Digital Radiography System",
                "Testing Method: DR/CR",
                "Industry: Marine",
                "Location: Coral FLNG South"
            ]
        },
        project3: {
            title: "Magnetic Particle Testing",
            description: "Surface and near-surface defect detection in ferromagnetic materials using magnetic particle inspection. Ideal for detecting cracks, seams, and other surface discontinuities.",
            specifications: [
                "Equipment: Magnaflux Equipment",
                "Testing Method: MT - Fluorescent",
                "Industry: Manufacturing",
                "Location: MRT Construction"
            ]
        }
    };

    // Gallery item click handler
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const project = projectDetails[projectId];

            if (project) {
                const modalContent = `
                    <h3>${project.title}</h3>
                    <p class="mt-3">${project.description}</p>
                    <h4 class="mt-4">Specifications:</h4>
                    <ul class="list-unstyled">
                        ${project.specifications.map(spec => `<li class="mb-2"><i class="fas fa-check-circle me-2"></i>${spec}</li>`).join('')}
                    </ul>
                `;

                document.getElementById('galleryModalContent').innerHTML = modalContent;
                document.getElementById('galleryModal').classList.add('active');
            }
        });
    });

    // Close modal handler
    document.querySelector('.gallery-modal-close').addEventListener('click', function() {
        document.getElementById('galleryModal').classList.remove('active');
    });

    // Close modal when clicking outside
    document.getElementById('galleryModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});