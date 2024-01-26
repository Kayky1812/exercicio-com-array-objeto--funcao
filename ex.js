const pessoas = [];

function escopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;

    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome} ${sobrenome}</p>`;
  }

  function limpaArray() {
    pessoas.length = 0;
    resultado.innerHTML = "";
  }

  form.addEventListener('submit', recebeEventoForm);

  // Adicione este bloco de código
  const limparButton = document.getElementById('limparButton');
  limparButton.addEventListener('click', function () {
    limpaArray();
  });
}

escopo(); // Chame a função para iniciar o script
