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
          `<span class="badge bg-primary text-white border-0 me-1">${tech}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
          <div class="card-project h-100 hover-lift">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
            <div class="card-body">
              <h5 class="card-title text-white">${proyecto.titulo}</h5>
              <p class="card-text text-secondary small flex-grow-1">${proyecto.descripcion}</p>
              <div class="mt-3 technologies">${tecnologias}</div>
              <div class="d-flex gap-2 mt-3 project-buttons">
                <a href="https://github.com/camilaparra/${proyecto.titulo.toLowerCase().replace(/\s+/g, '-')}" target="_blank" class="btn btn-sm btn-outline-light">GitHub</a>
                <a href="#" class="btn btn-sm btn-primary">Demo</a>
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
        status.innerHTML = '<span class="text-success">Mensaje enviado con éxito. Gracias!</span>';
        form.reset();
      })
      .catch(() => {
        status.innerHTML = '<span class="text-danger">Error al enviar. Intenta de nuevo.</span>';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensaje';
      });
  });
});
