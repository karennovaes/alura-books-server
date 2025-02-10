function getLivros(req, res) {
    try {
        //throw new Error('Erro de teste');
        res.send('Olá Mundo da Alura do Brasil!');
    } catch (error) {     
        res.status(500).send({error: error.message});
    }
 
}

module.exports = {
    getLivros

}