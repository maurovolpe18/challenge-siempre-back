const { Router } = require("express");

const { findTwoBeers } = require("../controllers/beers");

const router = Router();

router.post("/", findTwoBeers);

module.exports = router;
