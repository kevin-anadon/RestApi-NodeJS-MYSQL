// url/api/users GET, POST, PUT, DELETE
// TODO: validateJWT in delete and admin role

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

//Validators
const { validateFields, validateJWT } = require("../middlewares");
const { validRole, hasRole, userExistsId, checkPhone, emailExists } = require("../utils");

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
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("gender", "gender is required").not().isEmpty(),
    check("role", "role is required").not().isEmpty(),
    check("email").custom(emailExists),
    check("role").custom(validRole),
    validateFields,
  ],
  createUser
);
router.put(
  "/:id",
  [
    check("id").custom(userExistsId),
    check("email").custom(emailExists),
    check("role").custom(validRole),
    check("phone").custom(checkPhone),
    validateFields,
  ],
  updateUser
);
router.delete(
  "/:id",  
  [
    validateJWT,
    hasRole('admin'),
    check("id").custom(userExistsId), 
    validateFields
  ],
  deleteUser
);

module.exports = router;
