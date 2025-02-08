const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('O Livro está disponível');
}
);

module.exports = router;