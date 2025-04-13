const dadosQuestoes = [
  // Perguntas em Português (10)
  {
    pergunta: "Quem é Elías?",
    alternativas: [
      "Um jovem aventureiro",
      "Um velho relojoeiro",
      "Um famoso guerreiro",
      "Um professor de história"
    ],
    correta: "Um velho relojoeiro"
  },
  {
    pergunta: "O que dizem as pessoas sobre o relógio de Elías?",
    alternativas: [
      "Que ele marca o tempo com precisão",
      "Que pode dobrar o tempo e permitir ouvir vozes do passado",
      "Que é apenas um objeto de coleção",
      "Que está quebrado há muito tempo"
    ],
    correta: "Que pode dobrar o tempo e permitir ouvir vozes do passado"
  },
  {
    pergunta: "Quem visitou Elías certa manhã?",
    alternativas: [
      "Uma criança curiosa chamada Aurora",
      "Um viajante misterioso",
      "Um velho amigo",
      "Uma senhora sábia"
    ],
    correta: "Uma criança curiosa chamada Aurora"
  },
  {
    pergunta: "O que Elías entregou a Aurora?",
    alternativas: [
      "Um relógio novo",
      "Um mapa do vilarejo",
      "Um papel antigo com símbolos estranhos e anotações a lápis",
      "Uma carta de despedida"
    ],
    correta: "Um papel antigo com símbolos estranhos e anotações a lápis"
  },
  {
    pergunta: "O que estava escrito no papel que Elías entregou?",
    alternativas: [
      "Uma mensagem de amor",
      "Uma receita secreta",
      "Símbolos estranhos e anotações a lápis",
      "Instruções para construir um relógio"
    ],
    correta: "Símbolos estranhos e anotações a lápis"
  },
  {
    pergunta: "O que Aurora e Elías fizeram juntos após o encontro?",
    alternativas: [
      "Foram para a cidade",
      "Embarcaram numa aventura pelos séculos",
      "Ficaram no vilarejo",
      "Decidiram nunca mais se ver"
    ],
    correta: "Embarcaram numa aventura pelos séculos"
  },
  {
    pergunta: "Quais destinos eles visitaram em sua jornada?",
    alternativas: [
      "Só lugares próximos ao vilarejo",
      "Bibliotecas em Alexandria, tempestades no mar com navegadores portugueses e inventores em Florença",
      "Mercados e feiras somente",
      "Palácios modernos"
    ],
    correta: "Bibliotecas em Alexandria, tempestades no mar com navegadores portugueses e inventores em Florença"
  },
  {
    pergunta: "O que acontecia com o relógio de Elías a cada viagem no tempo?",
    alternativas: [
      "Ficava mais pesado",
      "Ficava mais leve, como se cada segredo o libertasse de uma maldição",
      "Parava de funcionar",
      "Mudava de formato"
    ],
    correta: "Ficava mais leve, como se cada segredo o libertasse de uma maldição"
  },
  {
    pergunta: "Como as viagens afetavam a realidade no presente?",
    alternativas: [
      "O tempo permanecia inalterado",
      "Fragmentos do passado se misturavam ao presente e monumentos desapareciam",
      "A cidade se enchia de novas construções",
      "Nada acontecia"
    ],
    correta: "Fragmentos do passado se misturavam ao presente e monumentos desapareciam"
  },
  {
    pergunta: "Qual papel Aurora assume ao final da jornada?",
    alternativas: [
      "Uma simples aventureira",
      "Uma estudiosa de história",
      "A guardiã do tempo",
      "Uma viajante perdida"
    ],
    correta: "A guardiã do tempo"
  },

  // Perguntas em Inglês (20)
  {
    pergunta: "Who is Elías?",
    alternativas: [
      "A young adventurer",
      "An old watchmaker",
      "A famous warrior",
      "A history teacher"
    ],
    correta: "An old watchmaker"
  },
  {
    pergunta: "What is unique about Elías's pocket watch?",
    alternativas: [
      "It tells time accurately",
      "It can bend time",
      "It only works at night",
      "It is used as a fashion accessory"
    ],
    correta: "It can bend time"
  },
  {
    pergunta: "What did people claim about the pocket watch?",
    alternativas: [
      "It chimes beautifully",
      "Listening to it long enough allows one to hear voices from the past",
      "It is the most expensive in the world",
      "It never stops ticking"
    ],
    correta: "Listening to it long enough allows one to hear voices from the past"
  },
  {
    pergunta: "Who visited Elías one morning?",
    alternativas: [
      "A mysterious traveler",
      "A curious girl named Aurora",
      "An old friend",
      "A wise elder"
    ],
    correta: "A curious girl named Aurora"
  },
  {
    pergunta: "What question did Aurora ask Elías?",
    alternativas: [
      "How to fix the watch?",
      "Is it true that your watch can take us to the past?",
      "Where do you live?",
      "Can I borrow your watch?"
    ],
    correta: "Is it true that your watch can take us to the past?"
  },
  {
    pergunta: "How did Elías respond to Aurora's question?",
    alternativas: [
      "He explained everything in detail",
      "He smiled and gave her an old paper with symbols instead",
      "He ignored her question",
      "He laughed and walked away"
    ],
    correta: "He smiled and gave her an old paper with symbols instead"
  },
  {
    pergunta: "What did the old paper contain?",
    alternativas: [
      "A love letter",
      "Strange symbols and pencil annotations",
      "A map of the village",
      "A secret recipe"
    ],
    correta: "Strange symbols and pencil annotations"
  },
  {
    pergunta: "What initiated their journey through time?",
    alternativas: [
      "A map discovered in the forest",
      "Deciphering the symbols on the paper",
      "Following a mysterious dream",
      "Finding a hidden door"
    ],
    correta: "Deciphering the symbols on the paper"
  },
  {
    pergunta: "How did Elías's watch change with each trip?",
    alternativas: [
      "It grew heavier",
      "It broke down gradually",
      "It became lighter",
      "Its color changed"
    ],
    correta: "It became lighter"
  },
  {
    pergunta: "What did they witness during their time travels?",
    alternativas: [
      "Forgotten stories, ancient battles, and the birth of civilizations",
      "Modern cities only",
      "Futuristic machines",
      "Nothing unusual"
    ],
    correta: "Forgotten stories, ancient battles, and the birth of civilizations"
  },
  {
    pergunta: "Which ancient library did they visit?",
    alternativas: [
      "The Library of Congress",
      "The Great Library of Alexandria",
      "The British Library",
      "The Library of Alexandria in Rome"
    ],
    correta: "The Great Library of Alexandria"
  },
  {
    pergunta: "What maritime adventure did they experience?",
    alternativas: [
      "Facing storms at sea with Portuguese navigators",
      "Sailing on a modern cruise ship",
      "Traveling on a submarine",
      "Fighting pirates off the coast"
    ],
    correta: "Facing storms at sea with Portuguese navigators"
  },
  {
    pergunta: "With whom did they converse in Florence?",
    alternativas: [
      "Local merchants",
      "Inventors",
      "Painters",
      "Sculptors"
    ],
    correta: "Inventors"
  },
  {
    pergunta: "What consequence of time travel did they observe?",
    alternativas: [
      "Historical events repeating exactly",
      "The past blending into the present and monuments disappearing",
      "Technologies merging",
      "Future events becoming clear"
    ],
    correta: "The past blending into the present and monuments disappearing"
  },
  {
    pergunta: "What did Aurora ask Elías on a particularly silent night?",
    alternativas: [
      "Why he never fixed the watch?",
      "If he knew what he was doing all along, and why he didn't stop",
      "Where the adventures would lead next?",
      "If she could travel further in time?"
    ],
    correta: "If he knew what he was doing all along, and why he didn't stop"
  },
  {
    pergunta: "How did Elías justify continuing his journey?",
    alternativas: [
      "By saying time is an illusion",
      "By stating that time is not something that stops, it only changes shape",
      "By arguing that adventure is more important",
      "By claiming that destiny cannot be altered"
    ],
    correta: "By stating that time is not something that stops, it only changes shape"
  },
  {
    pergunta: "What happened to Elías at the end of the journey?",
    alternativas: [
      "He returned to the village",
      "He vanished into a time no one could reach",
      "He became a legend in Alexandria",
      "He built a new watch"
    ],
    correta: "He vanished into a time no one could reach"
  },
  {
    pergunta: "What role does Aurora assume at the end?",
    alternativas: [
      "She becomes a historian",
      "She becomes the guardian of time",
      "She becomes a time traveler for hire",
      "She becomes a storyteller"
    ],
    correta: "She becomes the guardian of time"
  },
  {
    pergunta: "How is their journey described in terms of its impact on history?",
    alternativas: [
      "It erases history completely",
      "It reopens the pages of history and brings echoes of eternity",
      "It strictly follows historical events",
      "It only affects the future"
    ],
    correta: "It reopens the pages of history and brings echoes of eternity"
  },
  {
    pergunta: "What symbolizes the constant change and mystery of time in the narrative?",
    alternativas: [
      "The ticking of the watch",
      "The flow of a river",
      "The flickering of a candle",
      "The rustling of leaves"
    ],
    correta: "The ticking of the watch"
  }
];
