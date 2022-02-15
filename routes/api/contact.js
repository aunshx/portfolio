const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator")
const Message = require('../../models/Message')
const { sendEmail } = require('../../middleware/sendEmail')

// @route    POST api/contact
// @desc     Send Email
// @access   Public
router.post(
  "/send-email",
  check("email", "Please include a valid email").isEmail(),
  check('name', 'Name cannot be empty').notEmpty(),
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
          message
      })

      await ans.save()

    await sendEmail( email,
          name,
          organisation,
          message
        );

        return res.status(200).send({ msg: 'Email Sent' });

    } catch (err) {
      res.status(400).send({ errors:[{ msg: 'Some error' }] });
    }
  }
);

module.exports = router