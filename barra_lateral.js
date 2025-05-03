// Função para carregar o script dinamicamente
function carregarScript(arquivo) {
  const scriptAnterior = document.getElementById('livro-script');
  if (scriptAnterior) {
    scriptAnterior.remove(); // Remove o script anterior
  }

  // Cria um novo elemento <script> para carregar o novo arquivo
  const script = document.createElement('script');
  script.id = 'livro-script';
  script.src = arquivo;
  document.body.appendChild(script);

  // Espera o script carregar para inserir o conteúdo nas páginas
  script.onload = () => {
    document.getElementById("pagina-portugues").innerHTML = livro.portugues;
    document.getElementById("pagina-ingles").innerHTML = livro.ingles;
  };
}

// Função para carregar as questões dinamicamente
function carregarQuestoes(arquivo) {
  const scriptAnterior = document.getElementById('questions-script');
  if (scriptAnterior) {
    scriptAnterior.remove(); // Remove o script de questões anterior
  }

  // Cria um novo elemento <script> para carregar o arquivo de questões
  const script = document.createElement('script');
  script.id = 'questions-script';
  script.src = arquivo;
  document.body.appendChild(script);

  // Espera o script carregar para exibir as questões
  script.onload = () => {
    // Após carregar as questões, elas são exibidas na página
    document.getElementById("questionario").innerHTML = ""; // Limpa as questões anteriores
    dadosQuestoes.forEach((q, index) => {
      const div = document.createElement('div');
      div.classList.add('pergunta');

      const pergunta = document.createElement('p');
      pergunta.textContent = `${index + 1}. ${q.pergunta}`;
      div.appendChild(pergunta);

      const alternativasDiv = document.createElement('div');
      alternativasDiv.classList.add('alternativas');

      q.alternativas.forEach(alt => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index}`;
        input.value = alt;
        label.appendChild(input);
        label.append(` ${alt}`);
        alternativasDiv.appendChild(label);
      });

      const resposta = document.createElement('div');
      resposta.classList.add('resposta-certa');
      resposta.textContent = `Resposta correta: ${q.correta}`;

      const botao = document.createElement('button');
      botao.textContent = 'Mostrar/Esconder Resposta';
      botao.onclick = () => {
        resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';
      };

      div.appendChild(alternativasDiv);
      div.appendChild(botao);
      div.appendChild(resposta);

      document.getElementById("questionario").appendChild(div);
    });
  };
}

// Carrega automaticamente o primeiro livro (livro-tempo.js) e as questões (questions.js) ao carregar a página
window.addEventListener('load', () => {
  document.getElementById("tema-css").setAttribute("href", "tempo.css"); // Aplica o estilo inicial
  carregarScript("livro-tempo.js"); // Carrega o primeiro livro automaticamente
  carregarQuestoes("questions.js"); // Carrega as questões do primeiro livro automaticamente
});

// Lida com os botões
document.getElementById("btn-re").addEventListener("click", () => {
  // Muda a temática para Resident Evil
  document.getElementById("tema-css").setAttribute("href", "resident.css");

  // Carrega o script do livro de Resident Evil
  carregarScript("livro-re.js");

  // Carrega as questões de Resident Evil
  carregarQuestoes("questions-re.js");
});

document.getElementById("btn-jornada").addEventListener("click", () => {
  // Muda a temática para o estilo original
  document.getElementById("tema-css").setAttribute("href", "tempo.css");

  // Carrega o script do livro original
  carregarScript("livro-tempo.js");

  // Carrega as questões do livro original
  carregarQuestoes("questions.js");
});
