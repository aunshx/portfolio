const express = require("express");
const axios = require('axios');
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const Visits = require("../../models/Visits");
const Ip = require("../../models/Ip");
const auth = require("../../middleware/auth");

// @route    GET api/metrics
// @desc     Visitor on Page
// @access   Private
router.get("/page-viewed", async (req, res) => {
  try {

    let ans = await Visits.findOneAndUpdate(
      { common: '0310266' },
    { $inc: { count: 1 } } 
    );

    if (!ans) {
      let ans2 = new Visits({
          count: 1
      })

      await ans2.save()

      return res.status(200).send("Visit counted!");
    } else {
      return res.status(200).send("Visit counted!");
    }
  } catch (err) {
      console.log(err)
    res.status(400).send({ errors: [{ msg: "Visit could not be counted" }] });
  }
});

// @route    GET api/metrics
// @desc     Ip of visitor
// @access   Private
router.get("/capture-ip", async (req, res) => {

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

// @route    GET api/metrics
// @desc     Total Number of Messages
// @access   Private
router.get("/messages-total-count", auth, async (req, res) => {

  try {
    let ans = await Message.find(
      { userId: req.user.id }
    ).count()

    return res.status(200).send(ans.toString());

  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot get message numbers" }] });
  }
});

// @route    GET api/metrics
// @desc     Total unseen messages
// @access   Private
router.get("/messages-unseen-count", auth, async (req, res) => {

  try {
    let ans = await Message.find(
      { $and: [{ userId: req.user.id }, { seen: false }] },
    ).count()

    return res.status(200).send(ans.toString())

  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});

// @route    GET api/metrics
// @desc     Message Status
// @access   Private
router.get("/messages-status", auth, async (req, res) => {

  try {
    let ans = await Message.find(
      { userId: req.user.id }
    ).select('seen').select('name').select('createdAt')

    return res.status(200).send(ans);
    
  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});

module.exports = router;
