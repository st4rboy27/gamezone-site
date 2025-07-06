$(document).ready(function() {
  // Validação do formulário
  $('#form-contato').on('submit', function(e) {
    e.preventDefault();

    const nome = $('#nome').val().trim();
    const email = $('#email').val().trim();
    const mensagem = $('#mensagem').val().trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    $(this)[0].reset();
  });

  // Scroll suave para âncoras internas (se houver)
  $('a[href^="#"]').on('click', function(event) {
    const target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top }, 800);
    }
  });
});
