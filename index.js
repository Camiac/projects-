const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável que não pode ser alterada posteriormente?",
      resposta: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      resposta: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      resposta: [
        "+",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para retornar o comprimento de uma string em JavaScript?",
      resposta: [
        "size()",
        "length()",
        "count()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o valor inicial do índice em um array em JavaScript?",
      resposta: [
        "1",
        "0",
        "-1",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "add()",
        "append()",
        "push()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      resposta: [
        "round()",
        "floor()",
        "ceil()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      resposta: [
        "pop()",
        "shift()",
        "removeLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade em valor e tipo em JavaScript?",
      resposta: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever uma função anônima em JavaScript?",
      resposta: [
        "function() {}",
        "() => {}",
        "=> {}",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length 
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +  'de'  + totalDePerguntas
  
  //queryselector é para pesquisa
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //true nessa função de clonenode, quer dizer que ela tem que clonar todos os "filhos"
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
      //para a bolinha ficar selecionada em cada pergunta
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          correta.add(item)
        }      
  
        mostrarTotal.textContent = corretas.size +  'de'  + totalDePerguntas
  
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
     //sempre é a última linha
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }