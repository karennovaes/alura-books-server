const {Router} = require('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro');

const router = Router();

router.get('/', getLivros); 

router.get('/:id', getLivro); // Rota para buscar um livro pelo id

router.post('/', postLivro); // Rota para adicionar um livro

router.patch('/:id', patchLivro); // Rota para modificar um livro

router.delete('/:id', deleteLivro); // Rota para deletar um livro

module.exports = router;