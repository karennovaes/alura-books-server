const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favorito");


function getFavoritos(req, res) {
  try {
    //throw new Error('Erro de teste');
    const livros = getTodosFavoritos(); // Pega todos os livros favoritos
    res.send(livros); // Envia o JSON como resposta
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
      const id = req.params.id; // Pega o id do livro
      if (id && Number(id)) {
        deletaFavoritoPorId(id); // Deleta o favorito
        res.status(200); // Define o status da resposta como "OK"
        res.send("Favorito deletado com sucesso!"); // Envia a resposta
      } else {
        res.status(422);
        res.send("O id informado não é válido");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
};
