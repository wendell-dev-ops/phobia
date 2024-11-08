/*************  ✨ Codeium Command ⭐  *************/
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"].email');
    if (emailInput && emailInput.value.trim() !== '') {
        alert('O link para a redefinição de sua senha foi enviado, cheque sua caixa de entrada no seu e-mail');
    } else {
        alert('Por favor, insira um endereço de e-mail válido.');
    }
});
