const fs = require('fs');

function getLivros(req, res) {
    try {
        //throw new Error('Erro de teste');
        const livros = JSON.parse(fs.readFileSync('livros.json')); // Lê o arquivo livros.json
        res.send(livros);  // Envia o JSON como resposta
    } catch (error) {     
        res.status(500).send({error: error.message});
    }
 
}

module.exports = {
    getLivros

}