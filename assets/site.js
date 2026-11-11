// Menú en celular
(function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.getElementById('menu');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    n.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { n.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }
    });
  }
})();

// Test "¿Es para ti?"
(function () {
  var quiz = document.getElementById('quiz');
  if (!quiz) return;
  var answers = {};
  var out = document.getElementById('quiz-result');
  var title = document.getElementById('quiz-title');
  var text = document.getElementById('quiz-text');
  quiz.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-q]');
    if (!b) return;
    var q = b.getAttribute('data-q');
    answers[q] = b.getAttribute('data-a');
    b.parentNode.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    if (Object.keys(answers).length < 3) return;
    if (answers.q1 === 'no') {
      title.textContent = 'Te ayudamos a dar el primer paso';
      text.textContent = 'Tu Nieto Favorito funciona por WhatsApp. Si alguien de tu familia te ayuda a instalarlo, desde ese día te acompañamos con todo lo demás.';
    } else if (answers.q2 === 'si' || answers.q3 === 'si') {
      title.textContent = '¡Tu Nieto Favorito es para ti!';
      text.textContent = 'Escríbenos por WhatsApp y cuéntanos qué necesitas. Recuerda que el servicio lo entrega gratis una institución en convenio: si aún no estás habilitado, te explicamos cómo pedirlo.';
    } else {
      title.textContent = 'Igual te puede servir';
      text.textContent = 'Aunque hoy te las arregles bien, es bueno tener a quién preguntar. Guarda nuestro número para cuando lo necesites.';
    }
    out.hidden = false;
  });
})();
