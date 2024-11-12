// Função para calcular a média das notas de cada atleta
function calcularMedia(atletas) {
    // Loop pelos atletas
    atletas.forEach(atleta => {
      // Ordena as notas em ordem crescente
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      
      // Elimina a maior e a menor nota
      let notasValidas = notasOrdenadas.slice(1, 4); // Pega as notas do meio
      
      // Calcula a média das notas válidas
      let somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
      let media = somaNotas / notasValidas.length;
      
      // Exibe o nome, notas e a média
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
      console.log(`Média Válida: ${media.toFixed(10)}`); // Exibe a média com até 10 casas decimais
      console.log(''); // Linha em branco para separação
    });
  }
  
  // Lista de atletas e suas notas
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chama a função para calcular e exibir os resultados
  calcularMedia(atletas);
  