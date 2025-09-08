document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    alert('Formulário enviado com sucesso!');
    window.location.replace("tutor-login.html");
});

//CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
    }

    e.target.value = value;
});

//CEP
document.getElementById('cep').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
    }

    e.target.value = value;
});

//TELEFONE
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    }

    e.target.value = value;
});

const estados = [
    { sigla: "AC", nome: "Acre" }, { sigla: "AL", nome: "Alagoas" }, { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" }, { sigla: "BA", nome: "Bahia" }, { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" }, { sigla: "ES", nome: "Espírito Santo" }, { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" }, { sigla: "MT", nome: "Mato Grosso" }, { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" }, { sigla: "PA", nome: "Pará" }, { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" }, { sigla: "PE", nome: "Pernambuco" }, { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" }, { sigla: "RN", nome: "Rio Grande do Norte" }, { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" }, { sigla: "RR", nome: "Roraima" }, { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" }, { sigla: "SE", nome: "Sergipe" }, { sigla: "TO", nome: "Tocantins" }
];

const generos = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "outro", label: "Outro" },
    { value: "nao-informar", label: "Prefiro não informar" }
];

function preencherSelect(selectId, options) {
    const select = document.getElementById(selectId);
    select.innerHTML = "<option value=''>Selecione uma opção...</option>";
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value || opt.sigla;
        option.textContent = opt.label || opt.nome;
        select.appendChild(option);
    });
}

preencherSelect("estado", estados);
preencherSelect("genero", generos);