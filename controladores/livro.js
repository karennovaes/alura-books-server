const fs = require('fs');
const { getTodosLivros, getLivroPorId, insereLivro } = require ('../servicos/livro.js') ;

function getLivros(req, res) {
    try {
        //throw new Error('Erro de teste');
        const livros = getTodosLivros(); // Pega todos os livros
        res.send(livros);  // Envia o JSON como resposta
    } catch (error) {     
        res.status(500).send({error: error.message});
    }
 
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
        } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body; // Pega o livro do corpo da requisição
        insereLivro(livroNovo); // Insere o livro
        res.status(201); // Define o status da resposta como "Criado"
        res.send('Livro adicionado com sucesso!');  // Envia a resposta
    } catch (error) {
        res.status(500).send({error: error.message}); 
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro
}