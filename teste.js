const fs = require('fs');

const dadosAtuais = JSON.parse(fs.readFileSync('livros.json')); // Lê o arquivo livros.json e converte para objeto
const novoDado = {id: '3', nome: 'Livro mais que demais'}

fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado])); // Adiciona um novo livro ao arquivo livros.json

console.log(fs.readFileSync('livros.json').toString()); // Lê o arquivo livros.json e imprime o conteúdo