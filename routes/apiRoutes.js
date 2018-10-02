const router = require("express").Router();
const articlesController = require("../controller/articlesController");

router.route("/articles")
  .get(articlesController.findAll)
  .post(articlesController.create);

router.route("/articles/:id")
  .delete(articlesController.remove);

module.exports = router;