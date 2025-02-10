const fs = require('fs');
const { get } = require('http');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json')); // Lê o arquivo livros.json
}

module.exports = {
    getTodosLivros
}