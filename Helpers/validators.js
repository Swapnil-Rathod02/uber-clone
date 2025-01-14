const { body, check } = require("express-validator");

exports.signInRules = [
  check("name", "anything").notEmpty().isString(),
  check("email", "provide proper email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check("password", "strong password").isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
  }),
];
