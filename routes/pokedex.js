var express = require("express");
var router = express.Router();
const pokedex = require("../pokedex");

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send(pokedex);
});

module.exports = router;
