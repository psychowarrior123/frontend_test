const button = document.getElementById('alert-generator');
const alerts = document.querySelector('.alerts');
let count = 0;

button.addEventListener('click', () => {
  const alert = document.createElement('div')
  alert.textContent = `Alert ${++count}`;
  alert.classList.add('alert', 'alert-primary');
  alert.id = Math.random().toString(36).substr(2, 5);
  alerts.prepend(alert);
  alert.addEventListener('click', (e) => {
    if (alert.id === e.target.id) {
      alert.remove()
    }
  })
});
