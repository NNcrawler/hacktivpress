const Models = require('../models/all-models');
const mongoose = require('mongoose');

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
  },
  update(req, res) {
    Models.Article.findOne({_id: mongoose.Types.ObjectId(req.body.articleId)})
    .then((article) => {
      if(article) {
        article.title = req.body.title;
        article.content = req.body.content;
        article.category = req.body.category;
        return article.save()
      } else {
        throw 'Not Found';
      }
    })
    .then((article) => {
      response.article = article;
      res.send(response)
    })
    .catch((err) => {
      response.message = 'gagal';
      res.send(response);
      response.message = 'berhasil';
    })
  },
  getAll(req, res) {
    Models.Article.find({})
    .then((articles) => {
      response.articles = articles;
      res.send(response)
    })
    .catch((err) => {
      response.message = 'gagal';
      res.send(response)
      response.message = 'berhasil';
    })
  },
  getById(req, res) {
    Models.Article.findOne({_id: mongoose.Types.ObjectId(req.params.articleId)})
    .then((article) => {
      if(article) {
        response.article = article;
        res.send(response);
      } else {
        throw 'Not found';
      }
    })
    .catch((err) => {
      response.message = 'gagal';
      res.send(response);
      response.message = 'berhasil';
    })
  }
};
