const fs = require('fs');
const { getTodosLivros, getLivroPorId } = require ('../servicos/livro.js') ;

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

module.exports = {
    getLivros,
    getLivro
}