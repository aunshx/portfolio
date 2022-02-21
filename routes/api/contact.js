const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator")
const Message = require('../../models/Message')
const auth = require('../../middleware/auth')

// @route    POST api/contact
// @desc     Message Delete
// @access   Private
router.post(
  "/message-delete",
  auth,
  async (req, res) => {

    const { messageId } = req.body

    try {
      let ans = await Message.findOneAndDelete(
        { $and: [{ userId: req.user.id }, { _id: messageId }] },
      )

      if (!ans) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Message does not exist" }] });
      } else {
        return res.status(200).send("Message is deleted!");
      }
    } catch (err) {
      res.status(400).send({ errors: [{ msg: "Cannot Delete Message" }] });
    }
  }
); 

// @route    POST api/contact
// @desc     Message Status
// @access   Private
router.post(
  "/message-status-change",
  auth,
  async (req, res) => {

    const { messageId, status } = req.body

    try {
      let ans = await Message.findOneAndUpdate(
        { $and: [{ userId: req.user.id }, { _id: messageId }] },
        { status: status, seen: true },
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
  }
);

// @route    POST api/contact
// @desc     Add Comment
// @access   Private
router.post(
  "/message-add-comment",
  auth,
  async (req, res) => {
    const { messageId, comment } = req.body

    try {
      let ans = await Message.findOneAndUpdate(
        { $and: [{ userId: req.user.id }, { _id: messageId }] },
        { comment: comment, seen: true },
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
  }
);

// @route    POST api/contact
// @desc     Message Seen
// @access   Private
router.post(
  "/message-seen",
  auth,
  async (req, res) => {
    const { messageId } = req.body

    try {
      let ans = await Message.findOneAndUpdate(
        { $and: [{ userId: req.user.id }, { _id: messageId }] },
        { seen: true },
        {
          returnOriginal: false,
        }
      )

      if(!ans){
        return res.status(400).send({ errors: [{ msg: 'Message does not exist' }] })
      } else {
        return res.status(200).send("Message is seen!");
      }
    } catch (err) {
      res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
    }
  }
);

// @route    POST api/contact
// @desc     Get Messages Oldest
// @access   Private
router.post(
  "/retrieve-messages-oldest",
  auth,
  async (req, res) => {
    const { skipNow } = req.body

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
  }
);

// @route    POST api/contact
// @desc     Get Messages
// @access   Private
router.post(
  "/retrieve-messages-latest",
  auth,
  async (req, res) => {
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