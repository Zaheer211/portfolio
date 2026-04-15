const projects = [
    {
        type: 'fullstack', year: '2024', title: 'Bubblbook (Event Management Platform)',
        desc: 'Built a full-featured event platform with reusable templates, time-slot booking, and subscription system.',
        longDesc: 'Built a full-featured event platform with reusable templates. Implemented time-slot booking and subscription system. Integrated Stripe & PayPal payments. Designed scalable backend APIs.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Angular', 'TypeScript'], cat: 'Full Stack',
        img: 'images/bubblbook.png',
        highlights: ['Built a full-featured event platform with reusable templates', 'Implemented time-slot booking and subscription system', 'Integrated Stripe & PayPal payments', 'Designed scalable backend APIs'],
        feedback: null
    },
    {
        type: 'fullstack', year: '2023', title: 'View-My-Cube (3D Visualization Platform)',
        desc: 'Developed interactive 3D product visualization using Three.js with real-time preview capabilities.',
        longDesc: 'Developed interactive 3D product visualization using Three.js. Enabled real-time product preview before manufacturing. Maintained a live system in production for 6+ years.',
        tags: ['Node.js', 'Angular', 'Three.js', 'MongoDB'], cat: 'Full Stack',
        img: 'images/viewmycube.png',
        highlights: ['Developed interactive 3D product visualization using Three.js', 'Enabled real-time product preview before manufacturing', 'Maintained a live system in production for 6+ years'],
        feedback: null
    },
    {
        type: 'fullstack', year: '2022', title: 'Scrolls (Multi-Tenant SaaS Platform)',
        desc: 'Built customizable dashboards for tenant-based SaaS system with hexagonal architecture.',
        longDesc: 'Built customizable dashboards for tenant-based SaaS system. Implemented Hexagonal Architecture. Developed reusable Angular libraries.',
        tags: ['Node.js', 'Express', 'Angular'], cat: 'Full Stack',
        img: 'images/scrolls.png',
        highlights: ['Built customizable dashboards for tenant-based SaaS system', 'Implemented Hexagonal Architecture', 'Developed reusable Angular libraries'],
        feedback: null
    },
    {
        type: 'fullstack', year: '2021', title: 'BrickMachine (Automation & Machine Vision)',
        desc: 'Developed automation software for Lego part sorting with OpenCV-based detection.',
        longDesc: 'Developed automation software for Lego part sorting. Integrated OpenCV-based detection with hardware control. Designed UI for sorting templates and inventory.',
        tags: ['Python', 'OpenCV', 'MQTT', 'Supabase', 'Angular'], cat: 'Full Stack',
        img: 'images/brickmachine.png',
        highlights: ['Developed automation software for Lego part sorting', 'Integrated OpenCV-based detection with hardware control', 'Designed UI for sorting templates and inventory'],
        feedback: null
    },
    {
        type: 'frontend', year: '2020', title: 'Tax Calculator (Web Application)',
        desc: 'Built tax calculation platform for all U.S. states with focus on performance and usability.',
        longDesc: 'Built tax calculation platform for all U.S. states. Focused on performance and usability.',
        tags: ['Next.js', 'TailwindCSS', 'AWS EC2'], cat: 'Frontend',
        img: 'images/tax_calculator.png',
        highlights: ['Built tax calculation platform for all U.S. states', 'Focused on performance and usability'],
        feedback: null
    },
];

const skills = [
    {
        title: 'Frontend',
        items: [
            { name: 'React / Next.js', level: 95 },
            { name: 'Angular', level: 90 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Three.js', level: 85 }
        ]
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js / Express', level: 92 },
            { name: 'Python', level: 85 },
            { name: 'Django', level: 78 },
            { name: 'MongoDB', level: 90 },
            { name: 'Redis', level: 80 }
        ]
    },
    {
        title: 'Database & Tools',
        items: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MySQL', level: 90 },
            { name: 'Supabase', level: 82 },
            { name: 'OpenCV', level: 78 },
            { name: 'MQTT', level: 75 },
            { name: 'Docker', level: 80 }
        ]
    },
    {
        title: 'Cloud & Services',
        items: [
            { name: 'AWS / GCP', level: 78 },
            { name: 'Firebase', level: 85 },
            { name: 'AWS EC2', level: 80 },
            { name: 'Stripe / PayPal', level: 88 }
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
