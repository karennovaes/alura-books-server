const fs = require('fs');
const { get } = require('http');
const { getLivro, postLivro } = require('../controladores/livro');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json')); // Lê o arquivo livros.json
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json")) // Lê o arquivo livros.json

    const livroFiltrado = livros.filter( livro => livro.id === id )[0] // Filtra o livro pelo id
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync('livros.json')) // Lê o arquivo livros.json
    const novaListaDeLivros = [...livros, livroNovo] // Adiciona o livro recebido ao array de livros
    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros)) // Escreve a nova lista de livros no arquivo livros.json

}

module.exports = {
    getTodosLivros, 
    getLivroPorId,
    insereLivro
}