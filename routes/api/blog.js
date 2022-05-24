const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth.js");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const { verify } = require("crypto");

require("dotenv").config();


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/check-auth",
  auth,
  check("password", "Security Key is required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const userId = req.user.user_id
    const { password } = req.body;

    console.log(req.user)

    try {
      let user = await User.findOne({ id: userId });

      if (!user) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.blogPassword);

      if (!isMatch) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Invalid Credentials" }] });
      } else {
          return res.status(200).send('Success!')
      }

    } catch (err) {
      console.log(err);
      res.status(500).send({ errors: [{ msg: "Bad Request" }] });
    }
  }
);

// @route    POST api/auth
// @desc     Register user
// @access   Public
router.post(
  "/set-password",
  auth,
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const salt = await bcrypt.genSalt(10);

      let newPassword = await bcrypt.hash(password, salt);

      await User.updateOne({email: email}, {blogPassword: newPassword})

      return res.status(200).send('Blog Password changed!')
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
