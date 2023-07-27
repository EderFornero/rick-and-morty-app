const { getCharById } = require("../controllers/getCharById");
const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");

const router = require("express").Router();

router
  .get("/character/:id", getCharById)
  .get("/login", login)
  .post("/login", postUser)
  .post("/fav", postFav)
  .delete("/fav/:id", deleteFav);

module.exports = router;
