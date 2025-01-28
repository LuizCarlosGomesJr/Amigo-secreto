let listasAmigosDigitados = [];
let qtdItemListas = listasAmigosDigitados.length();

function adicionarAmigo() {
  let nome = document.querySelector('input').value;
  if (nome == '') {
    alert('Por favor , insira um nome válido.');
  } else {
    listasAmigosDigitados.push(nome);
  }
  atualizarListaAmigos();
  limparCaixaTexto();
}

function atualizarListaAmigos() {
  let listaNomes = document.getElementById('listaAmigos');
  listaNomes.innerHTML = '';
  for (let i = 0; i < listasAmigosDigitados.length; i++) {
    listaNomes.innerHTML += `<li>${listasAmigosDigitados[i]}</li>`;
  }
}

function sortearAmigo() {
  if (listasAmigosDigitados == '') {
    alert('Por favor , insira um nome de amigo na lista.');
  } else {
    let numero = Math.floor(Math.random() * listasAmigosDigitados.length);
    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = `O amigo secreto é: ${listasAmigosDigitados[numero]}`;
  }
}

sortearAmigo();

function limparCaixaTexto() {
  nome = document.querySelector('input');
  nome.value = '';
}
