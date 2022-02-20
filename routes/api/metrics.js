const express = require("express");
const axios = require('axios');
const router = express.Router();
const config = require("config");
const moment = require('moment');
const mongoose = require('mongoose');
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

// ------------------------ Visitor from countries - PIE CHART ------------------------------

// @route    GET api/metrics
// @desc     Visitors from country
// @access   Private
// @duration TODAY
router.get("/visitors-per-country-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Ip.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(todayStart)
          },
        },
      },
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
        },
      },
    ]);

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Visitors from country
// @access   Private
// @duration 7 DAYS
router.get("/visitors-per-country-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Ip.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
      },
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
        },
      },
    ]);

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Visitors from country per month
// @access   Private
// @duration MONTH
router.get("/visitors-per-country-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Ip.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }
        },
      },
      {
        $group: {
          _id: {
            country: "$country",
          },
          count: { $sum: 1 },
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Visitors from country per year
// @access   Private
// @duration YEAR
router.get("/visitors-per-country-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Ip.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
      },
      {
        $group: {
          _id: {
            country: "$country",
          },
          count: { $sum: 1 },
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Visitors from country all time
// @access   Private
// @duration ALL TIME
router.get("/visitors-per-country-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Ip.aggregate([
      {
        $group: {
          _id: {
            country: "$country",
          },
          count: { $sum: 1 },
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// -----------------------------------------------------------------------

module.exports = router;
