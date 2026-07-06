const EMAILJS_PUBLIC_KEY = '1-UKWWQsrmRttVf9X';
const EMAILJS_SERVICE_ID = 'service_i6hpkaf';
const EMAILJS_TEMPLATE_ID = 'template_aljraih';

emailjs.init('1-UKWWQsrmRttVf9X');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');

  fetch('proyectos.json')
    .then(res => {
      if (!res.ok) throw new Error('Error al cargar proyectos');
      return res.json();
    })
    .then(proyectos => {
      proyectos.forEach(proyecto => {
        const tecnologias = proyecto.tecnologias.map(tech =>
          `<span class="badge bg-primary bg-opacity-10 text-dark me-1 mb-1">${tech}</span>`
        ).join('');

        const githubBtn = proyecto.github
          ? `<a href="${proyecto.github}" target="_blank" class="btn btn-outline-primary btn-sm rounded-pill"><i class="bi bi-github me-1"></i>GitHub</a>`
          : '';

        const demoBtn = proyecto.demo
          ? `<a href="${proyecto.demo}" target="_blank" class="btn btn-primary btn-sm rounded-pill"><i class="bi bi-box-arrow-up-right me-1"></i>Demo</a>`
          : '';

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-6';
        card.innerHTML = `
          <div class="card card-project h-100">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-dark">${proyecto.titulo}</h5>
              <p class="card-text text-muted small flex-grow-1">${proyecto.descripcion}</p>
              <div class="mb-3">${tecnologias}</div>
              <div class="d-flex gap-2 mt-auto">
                ${githubBtn}
                ${demoBtn}
              </div>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = `<div class="alert alert-warning text-center">${err.message}</div>`;
    });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    emailjs.sendForm('service_i6hpkaf', 'template_aljraih', form)
      .then(() => {
        status.innerHTML = '<span class="text-success fw-medium">Mensaje enviado con éxito. Gracias!</span>';
        form.reset();
      })
      .catch(() => {
        status.innerHTML = '<span class="text-danger fw-medium">Error al enviar. Intenta de nuevo.</span>';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensaje';
      });
  });

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });

  const navbar = document.querySelector('.navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
});
