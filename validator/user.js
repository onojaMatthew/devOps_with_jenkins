const { check, validationResult } = require("express-validator");

exports.createUserValidator = [
  check("firstName").exists().withMessage("First name must be provided"),
  check("lastName").exists().withMessage("Last name must be provided"),
  check("email").isEmail().withMessage("Invalid email address"),
  check("password").isLength({ min: 6 }).withMessage("Password must be at least  characters long"),
  function(req, res, next) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      res.sendStatus(200);
    }
  }
]