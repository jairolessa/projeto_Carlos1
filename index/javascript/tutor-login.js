document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    alert('Formulário enviado com sucesso!');
    window.location.replace("portal.html");
});