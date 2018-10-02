const article = require("../models/article");

module.exports = {
  findAll: function(req, res) {
    article.find({})
      .then(dbArticles => res.json(dbArticles))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    article.findById({ _id: req.params.id })
      .then(articleToDelete => articleToDelete.remove())
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    article.create(req.body)
      .then(dbArticles => res.json(dbArticles))
      .catch(err => res.status(422).json(err));
  }
};
