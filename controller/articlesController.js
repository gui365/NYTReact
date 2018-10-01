const article = require("../models/article");

module.exports = {
  findAll: function(req, res) {
    article.find().then(dbArticles => res.json(dbArticles))
      .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   article.Article
  //     .finarticleyId({ _id: req.params.id })
  //     .then(articleModel => articleModel.remove())
  //     .then(articleModel => res.json(articleModel))
  //     .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    article.create(req.body).then(dbArticles => res.json(dbArticles));
  }
};
