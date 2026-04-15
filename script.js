const projects = [
    {
        type: 'fullstack', year: '2024', title: 'SaaS Analytics Dashboard',
        desc: 'Real-time BI platform with interactive charts, team collaboration, and CSV export for enterprise clients.',
        longDesc: 'Designed and built a multi-tenant SaaS platform enabling companies to visualize KPIs, set data alerts, and export reports. Integrated with third-party data sources via REST APIs and WebSockets for live updates.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'WebSockets'], cat: 'Full Stack',
        img: 'https://picsum.photos/seed/analytics/800/400',
        highlights: ['Multi-tenant architecture supporting 50+ organizations', 'Real-time data streaming via WebSockets', 'Custom chart builder with drag-and-drop interface', 'Role-based access control and audit logs'],
        feedback: { stars: 5, text: 'Exceptional developer! Delivered ahead of schedule and the code quality was outstanding. Will definitely hire again.', name: 'James R.', country: '🇺🇸 United States', init: 'JR' }
    },
    {
        type: 'frontend', year: '2023', title: 'E-Commerce Storefront',
        desc: 'High-performance online store with cart, Stripe payments, and a custom CMS for product management.',
        longDesc: 'Built a blazing-fast storefront using Next.js with SSR/ISR for SEO. Implemented a custom headless CMS, full cart/checkout flow, discount engine, and Stripe payment integration.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Headless CMS'], cat: 'Frontend',
        img: 'https://picsum.photos/seed/ecommerce/800/400',
        highlights: ['PageSpeed score of 98 on mobile and desktop', 'Stripe checkout with subscription support', 'Custom product variant and inventory management', 'SEO-optimized with structured data markup'],
        feedback: { stars: 5, text: 'Best freelancer I\'ve worked with on Upwork. Great communication and he understood our vision from day one.', name: 'Sophie M.', country: '🇬🇧 United Kingdom', init: 'SM' }
    },
    {
        type: 'backend', year: '2023', title: 'REST API for FinTech App',
        desc: 'Scalable RESTful API with JWT auth, rate limiting, and real-time transaction processing.',
        longDesc: 'Architected a production-grade API handling thousands of daily transactions. Implemented idempotency keys, webhook delivery, fraud detection hooks, and a full test suite with 90%+ coverage.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'], cat: 'Backend',
        img: 'https://picsum.photos/seed/fintech/800/400',
        highlights: ['Handles 10,000+ transactions per day', 'Redis-based rate limiting and caching', 'Webhook system with retry logic', 'Comprehensive API documentation via Swagger'],
        feedback: null
    },
    {
        type: 'mobile', year: '2022', title: 'Fitness Tracking App',
        desc: 'Cross-platform mobile app with workout logging, progress charts, and push notifications.',
        longDesc: 'Developed a full-featured fitness companion app from scratch. Users can log workouts, track body measurements, set goals, and receive smart daily reminders. Integrated with HealthKit and Google Fit.',
        tags: ['React Native', 'Firebase', 'Redux', 'HealthKit'], cat: 'Mobile',
        img: 'https://picsum.photos/seed/fitness/800/400',
        highlights: ['HealthKit & Google Fit integration', 'Offline-first with background sync', 'Custom animated workout timer', '4.8★ average rating on App Store'],
        feedback: { stars: 5, text: 'Our mobile app went from idea to App Store in 8 weeks. Seamless experience working together. Truly a 5-star freelancer.', name: 'Priya S.', country: '🇸🇬 Singapore', init: 'PS' }
    },
    {
        type: 'fullstack', year: '2022', title: 'Multi-Vendor Marketplace',
        desc: 'Full marketplace with vendor dashboards, commission tracking, and integrated shipping APIs.',
        longDesc: 'End-to-end marketplace platform where vendors can register, list products, manage orders, and track payouts. Admin panel handles commission splits, disputes, and analytics.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'AWS S3', 'Stripe Connect'], cat: 'Full Stack',
        img: 'https://picsum.photos/seed/marketplace/800/400',
        highlights: ['Stripe Connect for multi-vendor payouts', 'Automated commission calculation engine', 'Vendor performance dashboard with charts', 'Integrated with ShipStation for shipping'],
        feedback: null
    },
    {
        type: 'frontend', year: '2021', title: 'Real Estate Listing Portal',
        desc: 'Property search with map integration, advanced filters, and mortgage calculator.',
        longDesc: 'Built a feature-rich real estate portal with map-based search, property comparison, saved searches, and agent profiles. Integrated with a third-party MLS data feed.',
        tags: ['React', 'Google Maps API', 'Tailwind', 'REST API'], cat: 'Frontend',
        img: 'https://picsum.photos/seed/realestate/800/400',
        highlights: ['Map-based search with polygon drawing', 'MLS data feed integration', 'Built-in mortgage & affordability calculator', 'Agent/broker profile and lead capture pages'],
        feedback: { stars: 4, text: 'Turned our clunky legacy site into a modern platform. The UI improvements alone doubled our user retention.', name: 'Laura B.', country: '🇨🇦 Canada', init: 'LB' }
    },
    {
        type: 'backend', year: '2020', title: 'Healthcare Appointment System',
        desc: 'HIPAA-compliant booking system with doctor scheduling, reminders, and patient records.',
        longDesc: 'Developed a secure telemedicine scheduling platform. Doctors set availability, patients book slots, and the system sends SMS/email reminders. All data stored with AES-256 encryption.',
        tags: ['Django', 'PostgreSQL', 'Celery', 'Twilio', 'AES-256'], cat: 'Backend',
        img: 'https://picsum.photos/seed/healthcare/800/400',
        highlights: ['HIPAA-compliant data storage and access', 'Automated SMS/email appointment reminders', 'Doctor availability and holiday management', 'Secure patient record access with audit trails'],
        feedback: { stars: 5, text: 'Very responsive and detail-oriented. Fixed complex issues other developers couldn\'t solve and explained everything clearly.', name: 'Marco T.', country: '🇮🇹 Italy', init: 'MT' }
    },
    {
        type: 'fullstack', year: '2019', title: 'LMS Platform',
        desc: 'Learning management system with video lessons, quizzes, certificates, and Stripe subscriptions.',
        longDesc: 'Full-featured LMS supporting course creation, video uploads, quiz builders, progress tracking, and certificate generation. Monetized via Stripe subscriptions and one-time purchases.',
        tags: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'], cat: 'Full Stack',
        img: 'https://picsum.photos/seed/lms/800/400',
        highlights: ['Video streaming with adaptive bitrate', 'Auto-generated PDF certificates on completion', 'Quiz engine with randomized question pools', 'Instructor revenue dashboard and payout system'],
        feedback: null
    },
    {
        type: 'mobile', year: '2018', title: 'On-Demand Delivery App',
        desc: 'Uber-style delivery app with real-time driver tracking, push alerts, and admin panel.',
        longDesc: 'Built a three-sided marketplace app (customer, driver, admin) with live GPS tracking, dynamic pricing, and in-app chat. Launched successfully in two cities within 3 months.',
        tags: ['React Native', 'Firebase', 'Google Maps', 'Node.js'], cat: 'Mobile',
        img: 'https://picsum.photos/seed/delivery/800/400',
        highlights: ['Real-time GPS driver tracking on map', 'Dynamic pricing based on distance & demand', 'In-app chat between customer and driver', 'Admin panel with live fleet monitoring'],
        feedback: { stars: 5, text: 'Built our entire platform from scratch. Extremely professional, reliable, and technically brilliant. Highly recommended.', name: 'Ahmed K.', country: '🇦🇪 UAE', init: 'AK' }
    },
];

const skills = [
    {
        title: 'Frontend',
        items: [
            { name: 'React / Next.js', level: 95 },
            { name: 'Vue.js', level: 80 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 }
        ]
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js / Express', level: 92 },
            { name: 'Python / Django', level: 78 },
            { name: 'REST & GraphQL', level: 88 },
            { name: 'Laravel / PHP', level: 75 }
        ]
    },
    {
        title: 'Database',
        items: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MongoDB', level: 85 },
            { name: 'MySQL', level: 90 },
            { name: 'Redis', level: 72 }
        ]
    },
    {
        title: 'Mobile & Cloud',
        items: [
            { name: 'React Native', level: 82 },
            { name: 'AWS / GCP', level: 78 },
            { name: 'Docker', level: 80 },
            { name: 'Firebase', level: 85 }
        ]
    }
];

function starHtml(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

function feedbackCardHtml(fb) {
    if (!fb) return '';
    return `
    <div class="card-feedback">
      <div class="card-feedback-stars">${starHtml(fb.stars)}<span>${fb.stars}.0 / 5</span></div>
      <div class="card-feedback-quote">${fb.text}</div>
      <div class="card-feedback-author">— ${fb.name} ${fb.country}</div>
    </div>`;
}

function feedbackModalHtml(fb) {
    if (!fb) return '';
    return `
    <div class="modal-section-title" style="margin-top:20px">Client Feedback</div>
    <div class="modal-feedback">
      <div class="modal-feedback-stars">${starHtml(fb.stars)}<span>${fb.stars}.0 / 5</span></div>
      <div class="modal-feedback-text">${fb.text}</div>
      <div class="modal-feedback-author">
        <div class="modal-feedback-avatar">${fb.init}</div>
        <div>
          <div class="modal-feedback-name">${fb.name}</div>
          <div class="modal-feedback-country">${fb.country}</div>
        </div>
      </div>
    </div>`;
}

function renderProjects(filter = 'all') {
    const g = document.getElementById('projectsGrid');
    const list = filter === 'all' ? projects : projects.filter(p => p.type === filter);
    g.innerHTML = list.map(p => `
    <div class="project-card reveal" onclick="openModal(${projects.indexOf(p)})">
      <div class="project-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <div class="project-img-overlay"><span class="overlay-hint">🔍 View Details</span></div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-year">${p.year}</span>
          <span class="project-type">${p.cat}</span>
        </div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        ${feedbackCardHtml(p.feedback)}
        <button class="view-details-btn">View Details →</button>
      </div>
    </div>`).join('');
    observeReveal();
}

function renderSkills() {
    const container = document.getElementById('skillsGrid');
    container.innerHTML = skills.map(group => `
        <div class="skill-group reveal">
            <div class="skill-group-title">${group.title}</div>
            ${group.items.map(item => `
                <div class="skill-item">
                    <span class="skill-name">${item.name}</span>
                    <div class="skill-bar">
                        <div class="skill-fill" style="width:${item.level}%"></div>
                    </div>
                </div>`).join('')}
        </div>
    `).join('');
    observeReveal();
}

function filterProjects(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(cat);
}

function openModal(idx) {
    const p = projects[idx];
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalImg').alt = p.title;
    document.getElementById('modalYear').textContent = p.year;
    document.getElementById('modalCat').textContent = p.cat;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.longDesc;
    document.getElementById('modalHighlights').innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
    document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modalFeedbackWrap').innerHTML = feedbackModalHtml(p.feedback);
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeModalOnBg(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function observeReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

function loadPhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        const heroPhoto = document.getElementById('heroPhoto');
        heroPhoto.innerHTML = `<img src="${ev.target.result}" alt="Profile Photo" />`;
    };
    reader.readAsDataURL(file);
}

renderSkills();
renderProjects();
observeReveal();
