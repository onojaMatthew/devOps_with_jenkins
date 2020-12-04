const express = require("express");
const { create, getUser } = require("../controllers/user");
const { createUserValidator } = require("../validator/user");

const router = express.Router();

router.post("/create", create);
router.get("/get", getUser);

module.exports = router;