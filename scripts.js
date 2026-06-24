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
          `<span class="badge bg-terracota me-1">${tech}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
          <div class="card card-project h-100">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-cafe">${proyecto.titulo}</h5>
              <p class="card-text text-muted small flex-grow-1">${proyecto.descripcion}</p>
              <div class="mt-auto">${tecnologias}</div>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = `<div class="alert alert-warning text-center">${err.message}</div>`;
    });
});
