const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router
  .get("/character/:id", getCharById)
  .get("/login", login)
  .post("/fav", postFav)
  .delete("/fav/:id", deleteFav);

module.exports = router;
