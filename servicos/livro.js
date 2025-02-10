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

function modificaLivro(modificacoes){

    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json')) // Lê o arquivo livros.json
    const indiceModificado = livrosAtuais.findIndex( livro => livro.id === modificacoes.id ) // Encontra o índice do livro a ser modificado
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes} // Cria um novo objeto com as modificações
    livrosAtuais[indiceModificado] = conteudoMudado // Substitui o livro antigo pelo novo
    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais)) // Escreve a nova lista de livros no arquivo livros.json
}

function deletaLivro(id){
    const livros = JSON.parse(fs.readFileSync('livros.json')) // Lê o arquivo livros.json
    const novaListaDeLivros = livros.filter( livro => livro.id !== id ) // Filtra a lista de livros para excluir o livro com o id recebido
    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros)) // Escreve a nova lista de livros no arquivo livros.json
}

module.exports = {
    getTodosLivros, 
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}