const fs = require('fs');
const { get } = require('http');
const { getLivro } = require('../controladores/livro');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json')); // Lê o arquivo livros.json
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json")) // Lê o arquivo livros.json

    const livroFiltrado = livros.filter( livro => livro.id === id )[0] // Filtra o livro pelo id
    return livroFiltrado
}


module.exports = {
    getTodosLivros, 
    getLivroPorId
}