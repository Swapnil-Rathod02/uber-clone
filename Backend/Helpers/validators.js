const { body, check } = require("express-validator");

exports.signInRules = [
  check("userName", "provide proper name").notEmpty().isString(),
  check("email", "provide proper email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check("password", "strong password").isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
  }),
];

exports.captainRegistration = [
  check("name", "provide proper name").notEmpty().isString(),
  check("email", "provide proper email").isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check("password", "strong password").isStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
  }),
  check("phoneNumber", "Provide proper number").isMobilePhone(),
];
