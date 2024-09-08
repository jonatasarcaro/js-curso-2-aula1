let listaDeNumerosSorteados =[]; // um array, lista, para guardar os números sorteados
let numeroLimite = 10
let numeroSecreto = gerarNumeraAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {  //função para puxar e exibir os textos na tela, tag, texto com o let campo puxando do HMTL
  let campo = document.querySelector(tag);
  campo.innerHTML = texto; // exibi texto na tela
  reponsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // Serve como se fosse um narrador, puxado do script colocado no html, para narrar e ler tudo que foi escrito
}

function exibirMensagemInicial() { //função para exibir, mesma ideia da função acima
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial(); 

exibirTextoNaTela("h1", "Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() { // verificarChute no html
  // Função puxada do botão do index.html
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) { // se o chute for == ao numeroSecreto vai exibir na tela na posição do 'H1' a msg "Acertou!"
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // declarar uma varivel, para que não precise ficar mudando toda vez o numero de tentativas que a pessoa teve que fazer
    let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas); // exibe quantas tentativas foram feita para acertar o numero aleatorio
    document.getElementById("reiniciar").removeAttribute("disabled"); // puxou do HTML , o botão reiniciar para começar um novo jogo
  } else {
    if (chute > numeroSecreto) { // se o chute for maior que o numero secreto, então 
      exibirTextoNaTela("p", "O número secreto é menor"); // exibe na tela, no lugar do paragrafo, "O número secreto é menor"
    } else { // se não
      exibirTextoNaTela("p", "O número secreto é maior "); // exibe o testo na tela, "O número secreto é maior"
    }
    tentativas++; // forma mais simples para declarar tentativas para não ficar repetitivo
    LimparCampo(); // para o numero que ficou no campo de resposta não continuar lá depois de cada tentativa
  }
}

function gerarNumeraAleatorio() { // uma função para gerar um numero aleatorio , puxado da variavel numeroLimite, e o comando Math.Random
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // comando para multilicar o numero limite que no caso é 10 porém ele não é contavel, sendo assim somamos mais 1
 let quantidadeDeElementosNalista = listaDeNumerosSorteados.length; // para exibir a quantidade de numeros na lista

    if (quantidadeDeElementosNalista == numeroLimite) { // se a quantidade de numero na lista for igual a retornara verdadeiro 
        listaDeNumerosSorteados = []; // lista de numero sorteado vazio 
    }

 if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // função para exibir a lista no console, dos numeros que serão sorteados na rodada
    return gerarNumeraAleatorio();
 } else {
    listaDeNumerosSorteados.push(numeroEscolhido); // adicona um numero ao final da lista toda vez que ele é sorteado
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
 }
}

function LimparCampo() { // função que reinicia o chute
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() { // função para reiniciar 
  numeroSecreto = gerarNumeraAleatorio();
  LimparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

