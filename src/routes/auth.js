// url/api/auth POST
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

//Validators
const { validateFields } = require("../middlewares");

const {
  login,
} = require("../controllers/login");

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
