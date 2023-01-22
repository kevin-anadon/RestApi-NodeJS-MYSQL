//TODO http://localhost/users GET, POST, PUT, DELETE
const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

//Validators
const { validateFields } = require("../middlewares");
const { checkRole, userExistsId, checkPhone } = require("../utils");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:id", [check("id").custom(userExistsId), validateFields], getUser);
router.post(
  "/",
  [
    check("firstName", "firstName is required").not().isEmpty(),
    check("lastName", "lastName is required").not().isEmpty(),
    check("birthday", "birthday is required").not().isEmpty(),
    check("phone", "phone is required").not().isEmpty(),
    check("phone").custom(checkPhone),
    check("gender", "gender is required").not().isEmpty(),
    check("role", "role is required").not().isEmpty(),
    check("role").custom(checkRole),
    validateFields,
  ],
  createUser
);
router.put(
  "/:id",
  [
    check("id").custom(userExistsId),
    check("role").custom(checkRole),
    check("phone").custom(checkPhone),
    validateFields,
  ],
  updateUser
);
router.delete(
  "/:id",
  [check("id").custom(userExistsId), validateFields],
  deleteUser
);

module.exports = router;
