const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator")
const Message = require('../../models/Message')
const auth = require('../../middleware/auth')

// @route    GET api/contact
// @desc     Get contacts
// @access   Private
router.post(
  "/retrieve-messages-latest",
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { skipNow } = req.body

    try {
      let ans = await Message.find({ userId: req.user.id })
        .sort({
          createdAt: -1,
        })
        .skip(skipNow)
        .limit(30);

      return res.status(200).send(ans);
    } catch (err) {
      res.status(400).send({ errors: [{ msg: "Cannot retrieve messages" }] });
    }
  }
);

// @route    POST api/contact
// @desc     Save Message
// @access   Private
router.post(
  "/save-message",
  auth,
  check("email", "Please include a valid email").isEmail(),
  check("name", "Name cannot be empty").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { email, message, organisation, name } = req.body;

    try {
      let ans = new Message({
        email,
        name,
        organisation,
        message,
        userId: req.user.id
      });

      await ans.save();

      return res.status(200).send({ msg: "Message Saved" });
    } catch (err) {
      res.status(400).send({ errors: [{ msg: "Some error" }] });
    }
  }
);

module.exports = router