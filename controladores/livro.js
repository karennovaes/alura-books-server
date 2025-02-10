const fs = require('fs');
const { getTodosLivros } = require ('../servicos/livro.js') ;

function getLivros(req, res) {
    try {
        //throw new Error('Erro de teste');
        const livros = getTodosLivros(); // Pega todos os livros
        res.send(livros);  // Envia o JSON como resposta
    } catch (error) {     
        res.status(500).send({error: error.message});
    }
 
}

module.exports = {
    getLivros

}