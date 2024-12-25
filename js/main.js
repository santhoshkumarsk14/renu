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
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalContent = document.getElementById('galleryModalContent');
    const modalClose = document.querySelector('.gallery-modal-close');

    const projectDetails = {
        'ultrasonic-testing': {
            title: "Ultrasonic Testing (UT)",
            description: "Precision testing for detecting internal flaws and measuring material thickness, ensuring structural integrity. Our certified technicians use advanced equipment for accurate defect detection.",
            specifications: [
                "Equipment: Olympus OmniScan MX2",
                "Testing Method: Conventional UT",
                "Detection: Internal flaws, thickness measurement",
                "Application: Welds, forgings, castings"
            ]
        },
        'radiographic-testing': {
            title: "Radiographic Testing (RT)",
            description: "Advanced imaging to identify hidden defects in welds, castings, and pipelines with permanent records. Using state-of-the-art digital radiography systems.",
            specifications: [
                "Equipment: Digital Radiography System",
                "Testing Method: DR/CR",
                "Detection: Internal defects, weld quality",
                "Application: Pressure vessels, pipelines"
            ]
        },
        'magnetic-particle-testing': {
            title: "Magnetic Particle Testing (MT)",
            description: "Quick and reliable detection of surface and near-surface defects in ferromagnetic materials. Ideal for finding cracks and discontinuities.",
            specifications: [
                "Equipment: Magnaflux Equipment",
                "Testing Method: MT - Fluorescent/Visible",
                "Detection: Surface defects",
                "Application: Steel components"
            ]
        },
        'phased-array-testing': {
            title: "Phased Array Ultrasonic Testing (PAUT)",
            description: "Dynamic beam steering technology for enhanced weld inspections and plant monitoring. Provides detailed imaging of internal structures.",
            specifications: [
                "Equipment: Advanced PAUT System",
                "Testing Method: Phased Array",
                "Detection: Complex geometries",
                "Application: Critical welds, composites"
            ]
        },
        'liquid-penetrant-testing': {
            title: "Liquid Penetrant Testing (PT)",
            description: "Effective surface flaw detection using capillary action for smooth, non-porous materials. Reveals surface-breaking defects.",
            specifications: [
                "Equipment: PT Kit",
                "Testing Method: Color contrast/Fluorescent",
                "Detection: Surface breaks",
                "Application: Non-magnetic materials"
            ]
        },
        'long-range-ultrasonic-testing': {
            title: "Long Range Ultrasonic Testing (LRUT)",
            description: "Efficient inspection of pipelines and inaccessible areas, covering up to 150 meters in a single scan. Ideal for screening long pipe sections.",
            specifications: [
                "Equipment: Guided Wave System",
                "Testing Method: Guided Waves",
                "Range: Up to 150m",
                "Application: Pipeline screening"
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
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems) {
        galleryItems.forEach(item => {
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

                    galleryModalContent.innerHTML = modalContent;
                    galleryModal.classList.add('active');
                }
            });
        });
    }

    // Close modal handler
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            galleryModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
});