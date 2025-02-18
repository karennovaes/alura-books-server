const {Router} = require('express');
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');


const router = Router();

router.get('/', getFavoritos); 


router.post('/:id', postFavorito ); // Rota para adicionar 

router.delete('/:id', deleteFavorito); // Rota para deletar 

module.exports = router;