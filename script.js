// Árvore de decisões contendo o texto, a imagem e as opções de cada fase
const historia = {
  inicio: {
    texto: "Você acorda em uma cela fria e escura. A porta de ferro está levemente encostada.",
    imagem: "assets/images/cela.jpg",
    opcoes: [
      { texto: "Empurrar a porta silenciosamente", proximaFase: "corredor" },
      { texto: "Procurar algo útil nas sombras do chão", proximaFase: "chao" }
    ]
  },
  chao: {
    texto: "Você tateia o chão úmido e encontra uma chave antiga de ferro escondida sob a palha!",
    imagem: "assets/images/chave.jpg",
    opcoes: [
      { texto: "Pegar a chave e ir para o corredor", proximaFase: "corredorComChave" }
    ]
  },
  corredor: {
    texto: "Você sai no corredor principal. Um guarda pesado está dormindo em uma cadeira perto da saída.",
    imagem: "assets/images/corredor.jpg",
    opcoes: [
      { texto: "Tentar passar de fininho pelo guarda", proximaFase: "vitoria" },
      { texto: "Tentar roubar o apito do guarda", proximaFase: "derrota" }
    ]
  },
  corredorComChave: {
    texto: "No corredor, você nota um baú trancado no canto e o guarda dormindo na saída.",
    imagem: "assets/images/bau.jpg",
    opcoes: [
      { texto: "Usar a chave no baú misterioso", proximaFase: "tesouro" },
      { texto: "Ignorar o baú e sair de fininho", proximaFase: "vitoria" }
    ]
  },
  vitoria: {
    texto: "Você passou pelo guarda sem fazer barulho e escapou do castelo! Você está livre!",
    imagem: "assets/images/floresta.jpg",
    opcoes: [
      { texto: "Jogar Novamente", proximaFase: "inicio" }
    ]
  },
  derrota: {
    texto: "O guarda acordou com o barulho, deu o alarme e você foi capturado! Fim de jogo.",
    imagem: "assets/images/gameover.jpg",
    opcoes: [
      { texto: "Tentar Novamente", proximaFase: "inicio" }
    ]
  },
  tesouro: {
    texto: "O baú abre sem ruído! Dentro há uma capa de invisibilidade. Você sai caminhando pela porta da frente como um fantasma!",
    imagem: "assets/images/tesouro.jpg",
    opcoes: [
      { texto: "Jogar Novamente", proximaFase: "inicio" }
    ]
  }
};

// Função responsável por carregar os dados de cada fase no HTML
function carregarFase(faseChave) {
  const fase = historia[faseChave];
  
  // Atualiza o texto da história
  document.getElementById("texto-historia").innerText = fase.texto;
  
  // Atualiza a imagem da cena
  const imgElement = document.getElementById("imagem-cenario");
  imgElement.src = fase.imagem;
  
  // Limpa os botões da fase anterior
  const containerBotoes = document.getElementById("botoes-opcao");
  containerBotoes.innerHTML = "";
  
  // Cria os novos botões com base nas opções da fase atual
  fase.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = opcao.texto;
    botao.onclick = () => carregarFase(opcao.proximaFase);
    containerBotoes.appendChild(botao);
  });
}

// Inicia o jogo carregando a primeira fase
carregarFase("inicio");