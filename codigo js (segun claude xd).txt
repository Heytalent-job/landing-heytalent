// Menú 
function toggleMenu() {
  const m = document.getElementById('mob-menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

// Validación del formulario
const form = document.getElementById('ht-form');

function showErr(id, show) {
  const e = document.getElementById('err-' + id);
  if (e) e.classList.toggle('show', show);
}

function validate() {
  let ok = true;

  const n  = document.getElementById('nombre').value.trim();
  const c  = document.getElementById('correo').value.trim();
  const u  = document.getElementById('universidad').value;
  const ca = document.getElementById('carrera').value.trim();
  const i  = document.getElementById('interes').value;

  showErr('nombre',  n.length < 3);  if (n.length < 3) ok = false;

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
  showErr('correo', !emailOk);       if (!emailOk) ok = false;

  showErr('univ',    !u);            if (!u)  ok = false;
  showErr('carrera', ca.length < 2); if (ca.length < 2) ok = false;
  showErr('interes', !i);            if (!i)  ok = false;

  return ok;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validate()) {
    form.style.display = 'none';
    document.getElementById('success-msg').classList.add('show');
  }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});