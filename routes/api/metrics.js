const express = require("express");
const axios = require('axios');
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const Visits = require("../../models/Visits");
const Ip = require("../../models/Ip");
const auth = require("../../middleware/auth");

// @route    POST api/metrics
// @desc     Visitor on Page
// @access   Private
router.post("/page-viewed", async (req, res) => {
  try {

    let ans = await Visits.findOneAndUpdate(
      { common: '0310266' },
    { $inc: { count: 1 } } 
    );

    if (ans.upsertedId === null) {
      let ans2 = new Visits({
          count: 1
      })
      await ans2.save()

      return res.status(200).send("Visit counted!");
    } else {
      return res.status(200).send("Visit counted!");
    }
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Visit could not be counted" }] });
  }
});

// @route    POST api/metrics
// @desc     Ip of visitor
// @access   Private
router.post("/capture-ip", async (req, res) => {

  try {

     const ipDeets = await axios.get("https://geolocation-db.com/json/");

      let ans = new Ip({
          ip: ipDeets.data.IPv4,
          country: ipDeets.data.country_name,
          countryCode: ipDeets.data.country_code,
          city: ipDeets.data.city
      })

      await ans.save()

      return res.status(200).send("Ip captured");
  } catch (err) {
      console.log(err)
    res.status(400).send({ errors: [{ msg: "Visit could not be counted" }] });
  }
});

// @route    POST api/contact
// @desc     Message Status
// @access   Private
router.post("/message-status-replied", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { messageId, status } = req.body;

  try {
    let ans = await Message.findOneAndUpdate(
      { $and: [{ userId: req.user.id }, { _id: messageId }] },
      { status },
      {
        returnOriginal: false,
      }
    );

    if (!ans) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Message does not exist" }] });
    } else {
      return res.status(200).send("Message status updated!");
    }
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});

// @route    POST api/contact
// @desc     Add Comment
// @access   Private
router.post("/message-add-comment", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { messageId, comment } = req.body;

  try {
    let ans = await Message.findOneAndUpdate(
      { $and: [{ userId: req.user.id }, { _id: messageId }] },
      { comment },
      {
        returnOriginal: false,
      }
    );

    if (!ans) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Message does not exist" }] });
    } else {
      return res.status(200).send("Message comment added!");
    }
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});

// @route    POST api/contact
// @desc     Message Seen
// @access   Private
router.post("/message-seen", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { messageId } = req.body;

  try {
    let ans = await Message.findOneAndUpdate(
      { $and: [{ userId: req.user.id }, { _id: messageId }] },
      { seen: true },
      {
        returnOriginal: false,
      }
    );

    if (!ans) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Message does not exist" }] });
    } else {
      return res.status(200).send("Message is seen!");
    }
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});

// @route    POST api/contact
// @desc     Get Messages Oldest
// @access   Private
router.post("/retrieve-messages-oldest", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { skipNow } = req.body;

  try {
    let ans = await Message.find({ userId: req.user.id })
      .sort({
        createdAt: 1,
      })
      .skip(skipNow)
      .limit(30);

    return res.status(200).send(ans);
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot retrieve messages" }] });
  }
});

// @route    POST api/contact
// @desc     Get Messages
// @access   Private
router.post("/retrieve-messages-latest", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { skipNow } = req.body;

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
});

// @route    POST api/contact
// @desc     Save Message
// @access   Private
router.post(
  "/save-message",
  auth,
  check("email", "Please include a valid email").isEmail(),
  check("name", "Name cannot be empty").notEmpty(),
  check("message", "Message cannot be empty").notEmpty(),
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
        userId: req.user.id,
      });

      await ans.save();

      return res.status(200).send({ msg: "Message Saved" });
    } catch (err) {
      res.status(400).send({ errors: [{ msg: "Some error" }] });
    }
  }
);

module.exports = router;
