// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Change Profile Image Button
const changeImageBtn = document.getElementById('changeImageBtn');
const profileImage = document.getElementById('profileImage');

changeImageBtn.addEventListener('click', () => {
    // Generate random number for different images
    const randomNum = Math.floor(Math.random() * 100);
    profileImage.src = `https://randomuser.me/api/portraits/women/${randomNum}.jpg`;
    
    // Add animation
    profileImage.style.transform = 'scale(0.95)';
    setTimeout(() => {
        profileImage.style.transform = 'scale(1)';
    }, 200);
    
    // Show notification
    showNotification('Profile image changed!');
});

// Download Resume Button
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
downloadResumeBtn.addEventListener('click', () => {
    showNotification('Resume download started! (This is a demo)');
    // In a real implementation, you would trigger a file download here
    // window.location.href = 'path/to/resume.pdf';
});

// Contact Button
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Send Message Button
const sendMessageBtn = document.getElementById('sendMessageBtn');
sendMessageBtn.addEventListener('click', () => {
    const email = 'chocklingem@example.com';
    window.location.href = `mailto:${email}?subject=Portfolio Contact`;
    showNotification('Opening email client...');
});

// Project Details Modal
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const projectButtons = document.querySelectorAll('.project-btn');

const projectDetails = {
    1: {
        title: 'E-Commerce Platform',
        description: 'A comprehensive full-stack e-commerce solution featuring user authentication, secure payment processing with Stripe integration, shopping cart functionality, order management, and a complete admin dashboard. The platform includes product search, filtering, reviews, and wishlist features. Built with React for the frontend, Node.js and Express for the backend, MongoDB for database management, and integrated with various third-party APIs for payment and shipping.'
    },
    2: {
        title: 'Task Management App',
        description: 'A collaborative task management application designed for teams. Features include real-time updates using WebSockets, drag-and-drop task organization, team collaboration tools, project boards, task assignments, due date tracking, and notification system. The app supports multiple project views (Kanban, List, Calendar) and includes file attachments, comments, and activity logs. Built with Vue.js, Express.js, Socket.io for real-time functionality, and PostgreSQL for data persistence.'
    },
    3: {
        title: 'Weather Dashboard',
        description: 'An interactive weather dashboard providing comprehensive weather information. Features include location-based weather forecasts, interactive maps with weather overlays, 7-day forecast, hourly predictions, weather alerts, and beautiful data visualizations using Chart.js. The app uses geolocation API for automatic location detection, integrates with multiple weather APIs, and includes features like weather history, favorite locations, and customizable widgets. Built with vanilla JavaScript, Chart.js for visualizations, and responsive design for mobile and desktop.'
    }
};

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        projectModal.style.display = 'block';
        
        // Add animation
        const modalContent = projectModal.querySelector('.modal-content');
        modalContent.style.animation = 'fadeIn 0.3s ease';
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Notification System
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScroll = currentScroll;
});

// Console welcome message
console.log('%c👋 Welcome to Chocklingem Codes Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');

