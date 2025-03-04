const fs = require("fs");
const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivro,
} = require("../servicos/livro.js");

function getLivros(req, res) {
  try {
    //throw new Error('Erro de teste');
    const livros = getTodosLivros(); // Pega todos os livros
    res.send(livros); // Envia o JSON como resposta
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("O id informado não é válido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body; // Pega o livro do corpo da requisição
    if(req.body.nome) {
        insereLivro(livroNovo); // Insere o livro
        res.status(201); // Define o status da resposta como "Criado"
        res.send("Livro adicionado com sucesso!"); // Envia a resposta
    } else {
        res.status(422);
        res.send("O livro não possui um nome");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id; // Pega o id do livro
    if (id && Number(id)) {
      const body = req.body; // Pega o corpo da requisição
      modificaLivro({ id, ...body }); // Modifica o livro
      res.status(200); // Define o status da resposta como "OK"
      res.send("Livro modificado com sucesso!"); // Envia a resposta
    } else {
      res.status(422);
      res.send("O id informado não é válido");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id; // Pega o id do livro
    if (id && Number(id)) {
      deletaLivro(id); // Deleta o livro
      res.status(200); // Define o status da resposta como "OK"
      res.send("Livro deletado com sucesso!"); // Envia a resposta
    } else {
      res.status(422);
      res.send("O id informado não é válido");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
