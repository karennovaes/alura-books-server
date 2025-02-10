const {Router} = require('express');
const { getLivros, getLivro, postLivro} = require('../controladores/livro');

const router = Router();

router.get('/', getLivros); 

router.get('/:id', getLivro); // Rota para buscar um livro pelo id

router.post('/', postLivro); // Rota para adicionar um livro

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH');
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE');
});

module.exports = router;