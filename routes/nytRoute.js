const router = require("express").Router();
const nytController = require("../controller/nytController");

router.route("/nyt")
  .get(nytController.callNYT);

module.exports = router;