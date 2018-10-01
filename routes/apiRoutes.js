const router = require("express").Router();
const articlesController = require("../controller/articlesController");

router.route("/articles")
  .get(articlesController.findAll)
  .post(articlesController.create);

// router.delete("/articles", (req, res) => {

// });

module.exports = router;