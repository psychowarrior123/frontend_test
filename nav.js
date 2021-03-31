const links = document.querySelectorAll('.nav-link');
const panes = document.querySelectorAll('.tab-pane');

links.forEach((link) => {
  link.addEventListener('click', () => {
    const nav = link.closest('.nav');
    const active = nav.querySelector('.nav-link.active');
    active.classList.remove('active');
    link.classList.add('active');
    panes.forEach((pane) => {
      const content = pane.closest('.tab-content');
      const activePane = content.querySelector('.tab-pane.active')
      if (link.dataset.bsTarget === `#${pane.id}`) {
        activePane.classList.remove('active');
        pane.classList.add('active');
      }
    });
  });
});