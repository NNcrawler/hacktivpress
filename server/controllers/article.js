const Models = require('../models/all-models');

const response = {
  message: 'berhasil'
}

module.exports = {
  create(req, res) {
    const data = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author,
    };
    const article = new Models.Article(data);
    article.save()
    .then((article) => {
      response.article = article;
      res.send(response);
    })
    .catch((err) => {
      response.message = 'gagal';
      res.send(response);
      response.message = 'berhasil';
    })
  }
};
