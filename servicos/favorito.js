const fs = require('fs');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json')) // Lê o arquivo favoritos.json
}


function deletaFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync('favoritos.json')) // Lê o arquivo favoritos.json
    const livrosFiltrados = livros.filter( livro => livro.id !== id ) // Filtra a lista de livros para excluir o livro com o id recebido
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados)) // Escreve a nova lista de livros no arquivo favoritos.json
}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync('livros.json')) // Lê o arquivo livros.json
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json')) // Lê o arquivo favoritos.json
    const livroInserido = livros.find( livro => livro.id === id ) // Encontra o livro pelo id
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido] // Adiciona o livro recebido ao array de livros
   
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeLivrosFavoritos)) // Escreve a nova lista de livros no arquivo favoritos.json

}


module.exports = {
    getTodosFavoritos, 
    deletaFavoritoPorId,
    insereFavorito

}