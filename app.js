// ------ IMPORTAÇÕES ------
const rotaLivro = require('./rotas/livro');
const express = require('express'); //cria o servidor
const cors = require('cors'); // Permite requisições de outros domínios


// ----- DADOS DO SERVIDOR ----- 

const app = express(); //cria a aplicação
app.use(express.json()); // Define que a aplicação vai usar JSON
app.use(cors({origin: 'http://localhost:3000'})); // Define que a aplicação aceita requisições de qualquer origem
const port = 8000; // Porta que o servidor vai rodar


// ----- ROTAS -----
// Rota principal
/*app.get('/', (req, res) => {
  res.send('Olá Mundo da Alura do Brasil!');
});*/

app.use('/livros', rotaLivro);

// ----- INICIANDO O SERVIDOR -----

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
