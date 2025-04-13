document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('questionario');
  
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
  
      container.appendChild(div);
    });
  });
  