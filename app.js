
// ----- DADOS DO SERVIDOR ----- 

const express = require('express'); //cria o servidor
const app = express(); //cria a aplicação
const port = 8000; // Porta que o servidor vai rodar


// ----- ROTAS -----
// Rota principal
app.get('/', (req, res) => {
  res.send('Olá Mundo da Alura do Brasil!');
});

// ----- INICIANDO O SERVIDOR -----

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
