const express = require("express");
const axios = require('axios');
const router = express.Router();
const moment = require('moment');
const mongoose = require('mongoose');
const { check, validationResult } = require("express-validator");
const Ip = require("../../models/Ip");
const Count = require("../../models/Count");
const auth = require("../../middleware/auth");

require('dotenv').config()


// @route    GET api/metrics
// @desc     Ip of visitor
// @access   Private
router.get("/capture-ip", async (req, res) => {

  try {

      let ans2 = new Count();

      await ans2.save();

      const ipDeets = await axios.get(
        `https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.GEOAPIFY_API_KEY}`
      );

      if(ipDetails){
        let ans = new Ip({
          country: ipDeets.data.country.name,
          countryCode: ipDeets.data.country.iso_code,
          ip: ipDeets.data.ip,
          city: ipDeets.data.city.name,
        });

        await ans.save();
      } else {
        let ans = new Ip({
          country: "no-country",
          countryCode: "NC",
          ip: "000",
          city: "Not Known",
        });

        await ans.save();
      }

      return res.status(200).send("Ip captured");
  } catch (err) {
      console.log(err)
    res.status(400).send({ errors: [{ msg: "Visit could not be counted" }] });
  }
});

// @route    GET api/metrics
// @desc     Mark messages as cold
// @access   Private
router.post("/mark-messages-as-cold", async (req, res) => {
   let thirdDay = moment().startOf("days").subtract(3, "days");
  try {

        let ans = await Message.updateMany(
          { $and: [{ createdAt: { $lte: new Date(thirdDay) }}, { status: 'ongoing' }] },
          { $set: { status: "cold" } }
        );

        if(ans){
          return res.status(200).send("Cold updated");
        } else {
          return res.status(200).send("Cold not updated");
        }
  } catch (err) {
      console.log(err)
    res.status(400).send({ errors: [{ msg: "Cold status could not be changed" }] });
  }
});

// @route    GET api/metrics
// @desc     Total Number of Messages
// @access   Private
router.get("/messages-total-count", auth, async (req, res) => {

  try {
    let ans = await Message.find(
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
      { status: 'unseen' },
    ).count()

    return res.status(200).send(ans.toString())

  } catch (err) {
    res.status(400).send({ errors: [{ msg: "Cannot update message status" }] });
  }
});


// ------------------------ Visitor from countries - PIE CHART -----------------------------

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
          value: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id",
          value: 1,
          _id: 0
        }
      }
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
          value: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id",
          value: 1,
          _id: 0,
        },
      },
    ]);

    return res.status(200).send(ans);
  } catch (error) {
        res.status(400).send({ errors: [{ msg: "Cannot fetch visitors" }] });

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
          $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] },
        },
      },
      {
        $group: {
          _id: "$country",
          value: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id",
          value: 1,
          _id: 0,
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
        res.status(400).send({ errors: [{ msg: "Cannot fetch total visitors" }] });

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
          _id: "$country",
          value: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id",
          value: 1,
          _id: 0,
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
        res.status(400).send({ errors: [{ msg: "Cannot fetch visitors" }] });
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
          _id: "$country",
          value: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id",
          value: 1,
          _id: 0,
        },
      },
    ]).sort({ count: 1 });

    return res.status(200).send(ans);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch total visitors" }] });
  }
});

// ------------------------ TOTAL HITS - CHART ------------------------------

// @route    GET api/metrics
// @desc     Total Hits 
// @access   Private
// @duration 7 DAYS
router.get("/total-hits-chart-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Count.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
      },
      {
        $group: {
          _id: {
            date: {
              $dateToString: {
                date: "$createdAt",
                format: "%d/%m/%Y",
              },
            },
            month: {
              $month: { date: "$createdAt" },
            },
            day: {
              $dayOfMonth: { date: "$createdAt" },
            },
            year: {
              $year: { date: "$createdAt" },
            },
          },
          hits: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id.date",
          hits: 1,
          _id: 0,
        },
      },
    ]).sort({ "name":1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Total Hits
// @access   Private
// @duration MONTH
router.get("/total-hits-chart-monthly", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Count.aggregate([
      {
        $group: {
          _id: {
            date: {
              $dateToString: {
                date: "$createdAt",
                format: "%m",
              },
            },
            month: {
              $month: { date: "$createdAt" },
            },
          },
          hits: { $sum: 1 },
        },
      },
      {
        $project: {
          name: "$_id.date",
          hits: 1,
          _id: 0,
        },
      },
    ]).sort({ "date.month": 1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// @route    GET api/metrics
// @desc     Total Hits    
// @access   Private
// @duration YEAR
router.get("/total-hits-chart-yearly", auth, async (req, res) => {
  let ans = {};

  try {
     ans = await Count.aggregate([
       {
         $group: {
           _id: {
             date: {
               $dateToString: {
                 date: "$createdAt",
                 format: "%Y",
               },
             },
             year: {
               $year: { date: "$createdAt" },
             },
           },
           hits: { $sum: 1 },
         },
       },
       {
         $project: {
           name: "$_id.date",
           hits: 1,
           _id: 0,
         },
       },
     ]).sort({ "date.year": 1 });

    return res.status(200).send(ans);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Something went wrong!");
  }
});

// ------------------------ TOTAL HITS - Block-----------------------------

// @route    GET api/metrics
// @desc     Total Hits Block
// @access   Private
// @duration TODAY
router.get("/total-hits-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Count.find(
      { createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      }}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch total hits" }] });
  }
});

// @route    GET api/metrics
// @desc      Total Hits Block
// @access   Private
// @duration 7 DAYS
router.get("/total-hits-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Count.find({
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
      ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [ { msg: 'Cannot fetch total hits' } ] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits
// @access   Private
// @duration MONTH
router.get("/total-hits-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Count.find({
          $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] },
        },
     ).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch total hits" }] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits
// @access   Private
// @duration YEAR
router.get("/total-hits-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Count.find({
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
      ).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch total hits" }] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits
// @access   Private
// @duration ALL TIME
router.get("/total-hits-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Count.find().count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch total hits" }] });
  }
});

// ------------------------ TOTAL HITS SYNOPSIS - Block-----------------------------

// @route    GET api/metrics
// @desc     Total Hits Synopsis Block
// @access   Private
// @duration TODAY
router.get("/total-hits-synopsis-today", auth, async (req, res) => {
  let ans = {};
  const yesterDayStart = moment().startOf("day").subtract(1, 'days');
  const yesterDayEnd = moment().endOf("day").subtract(1, "days");

  try {
    ans = await Ip.find(
      { createdAt: {
        $gte: new Date(yesterDayStart),
        $lte: new Date(yesterDayEnd)
      }}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Cannot fetch total hits' synopsis" }] });
  }
});

// @route    GET api/metrics
// @desc      Total Hits Synopsis Block
// @access   Private
// @duration 7 DAYS
router.get("/total-hits-synopsis-seven-days", auth, async (req, res) => {
  let ans = {};

  try {
    ans = await Ip.find({
          createdAt: {
            $lte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
            $gte: new Date(new Date() - 2 * 7 * 60 * 60 * 24 * 1000),
          },
        },
      ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [ { msg: "Cannot fetch total hits' synopsis" } ] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits Synopsis Block
// @access   Private
// @duration MONTH
router.get("/total-hits-synopsis-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Ip.find({
      $expr: { $eq: [{ $month: "$createdAt" }, selectMonth ] },
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Cannot fetch total hits' synopsis" }] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits Synopsis Block
// @access   Private
// @duration YEAR
router.get("/total-hits-synopsis-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Ip.find({
      $expr: { $eq: [{ $year: "$createdAt" }, selectYear - 1] },
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Cannot fetch total hits' synopsis" }] });
  }
});

// @route    GET api/metrics
// @desc     Total Hits Synopsis Block
// @access   Private
// @duration YEAR
router.get("/total-hits-synopsis-all-time", auth, async (req, res) => {
  let ans = {};

  try {
    ans = await Ip.find().count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Cannot fetch total hits' synopsis" }] });
  }
});

// ------------------------ Types of Messages - COLD - Block-----------------------------

// @route    GET api/metrics
// @desc     Types of Messages - cold
// @access   Private
// @duration TODAY
router.get("/total-cold-messages-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Message.find(
      { $and: [ {createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      } }, { status: 'cold' }]}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch cold messages" }] });
  }
});

// @route    GET api/metrics
// @desc      cold messages Block
// @access   Private
// @duration 7 DAYS
router.get("/total-cold-messages-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
        {
          status: "cold",
        },
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch cold messages" }] });
  }
});

// @route    GET api/metrics
// @desc     cold messages
// @access   Private
// @duration MONTH
router.get("/total-cold-messages-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Message.find({
      $and: [{ $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }}, { status: 'cold' }],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch cold messages" }] });
  }
});

// @route    GET api/metrics
// @desc     cold messages
// @access   Private
// @duration YEAR
router.get("/total-cold-messages-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Message.find({
      $and: [
        {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
        {
          status: 'cold'
        }
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch cold messages" }] });
  }
});

// @route    GET api/metrics
// @desc     cold messages
// @access   Private
// @duration ALL TIME
router.get("/total-cold-messages-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      status: 'cold'
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch cold messages" }] });
  }
});

// ------------------------ Types of Messages - ONGOING - Block-----------------------------

// @route    GET api/metrics
// @desc     Types of Messages - ongoing
// @access   Private
// @duration TODAY
router.get("/total-ongoing-messages-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Message.find(
      { $and: [ {createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      } }, { status: 'ongoing' }]}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch ongoing messages" }] });
  }
});

// @route    GET api/metrics
// @desc      ongoing messages Block
// @access   Private
// @duration 7 DAYS
router.get("/total-ongoing-messages-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
        {
          status: "ongoing",
        },
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch ongoing messages" }] });
  }
});

// @route    GET api/metrics
// @desc     ongoing messages
// @access   Private
// @duration MONTH
router.get("/total-ongoing-messages-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Message.find({
      $and: [{ $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }}, { status: 'ongoing' }],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch ongoing messages" }] });
  }
});

// @route    GET api/metrics
// @desc     ongoing messages
// @access   Private
// @duration YEAR
router.get("/total-ongoing-messages-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Message.find({
      $and: [
        {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
        {
          status: 'ongoing'
        }
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch ongoing messages" }] });
  }
});

// @route    GET api/metrics
// @desc     ongoing messages
// @access   Private
// @duration ALL TIME
router.get("/total-ongoing-messages-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      status: 'ongoing'
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch ongoing messages" }] });
  }
});

// ------------------------ Types of Messages - SUCCESS - Block-----------------------------

// @route    GET api/metrics
// @desc     Types of Messages - success
// @access   Private
// @duration TODAY
router.get("/total-success-messages-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Message.find(
      { $and: [ {createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      } }, { status: 'success' }]}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch success messages" }] });
  }
});

// @route    GET api/metrics
// @desc      success messages Block
// @access   Private
// @duration 7 DAYS
router.get("/total-success-messages-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
        {
          status: "success",
        },
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch success messages" }] });
  }
});

// @route    GET api/metrics
// @desc     success messages
// @access   Private
// @duration MONTH
router.get("/total-success-messages-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Message.find({
      $and: [{ $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }}, { status: 'success' }],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch success messages" }] });
  }
});

// @route    GET api/metrics
// @desc     success messages
// @access   Private
// @duration YEAR
router.get("/total-success-messages-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Message.find({
      $and: [
        {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
        {
          status: 'success'
        }
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch success messages" }] });
  }
});

// @route    GET api/metrics
// @desc     success messages
// @access   Private
// @duration ALL TIME
router.get("/total-success-messages-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      status: 'success'
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch success messages" }] });
  }
});

// ------------------------ Types of Messages - NOT REPLIED - Block-----------------------------

// @route    GET api/metrics
// @desc     Types of Messages - not-replied
// @access   Private
// @duration TODAY
router.get("/total-not-replied-messages-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Message.find(
      { $and: [ {createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      } }, { status: 'not-replied' }]}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch not-replied messages" }] });
  }
});

// @route    GET api/metrics
// @desc      not-replied messages Block
// @access   Private
// @duration 7 DAYS
router.get("/total-not-replied-messages-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
        {
          status: "not-replied",
        },
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch not-replied messages" }] });
  }
});

// @route    GET api/metrics
// @desc     not-replied messages
// @access   Private
// @duration MONTH
router.get("/total-not-replied-messages-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Message.find({
      $and: [{ $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }}, { status: 'not-replied' }],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch not-replied messages" }] });
  }
});

// @route    GET api/metrics
// @desc     not-replied messages
// @access   Private
// @duration YEAR
router.get("/total-not-replied-messages-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Message.find({
      $and: [
        {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
        {
          status: 'not-replied'
        }
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch not-replied messages" }] });
  }
});

// @route    GET api/metrics
// @desc     not-replied messages
// @access   Private
// @duration ALL TIME
router.get("/total-not-replied-messages-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      status: 'not-replied'
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch not-replied messages" }] });
  }
});

// ------------------------ Types of Messages - UNSEEN - Block-----------------------------

// @route    GET api/metrics
// @desc     Types of Messages - unseen
// @access   Private
// @duration TODAY
router.get("/total-unseen-messages-today", auth, async (req, res) => {
  let ans = {};
  const todayStart = moment().startOf("day");
    const todayEnd = moment().endOf("day");

  try {
    ans = await Message.find(
      { $and: [ {createdAt: {
        $gte: new Date(todayStart),
        $lte: new Date(todayEnd)
      } }, { seen: false }]}
    ).count()

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch unseen messages" }] });
  }
});

// @route    GET api/metrics
// @desc      unseen messages Block
// @access   Private
// @duration 7 DAYS
router.get("/total-unseen-messages-seven-days", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          },
        },
        {
          seen: false,
        },
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch unseen messages" }] });
  }
});

// @route    GET api/metrics
// @desc     unseen messages
// @access   Private
// @duration MONTH
router.get("/total-unseen-messages-monthly", auth, async (req, res) => {
  let ans = {};
  let selectMonth = moment().month();

  try {
    ans = await Message.find({
      $and: [{ $expr: { $eq: [{ $month: "$createdAt" }, selectMonth + 1] }}, { seen: false }],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch unseen messages" }] });
  }
});

// @route    GET api/metrics
// @desc     unseen messages
// @access   Private
// @duration YEAR
router.get("/total-unseen-messages-yearly", auth, async (req, res) => {
  let ans = {};
  let selectYear = moment().year();

  try {
    ans = await Message.find({
      $and: [
        {
          $expr: { $eq: [{ $year: "$createdAt" }, selectYear] },
        },
        {
          seen: false
        }
      ],
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch unseen messages" }] });
  }
});

// @route    GET api/metrics
// @desc     unseen messages
// @access   Private
// @duration ALL TIME
router.get("/total-unseen-messages-all-time", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
      seen: false
    }).count();

    return res.status(200).send(ans.toString());
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch unseen messages" }] });
  }
});

// -------------------------------- RECENT ORGANISATIONS -----------------------
// @route    GET api/metrics
// @desc     Recent messages
// @access   Private
// @duration RECENT

router.get("/recent-messages-limit", auth, async (req, res) => {
  let ans = {};
  try {
    ans = await Message.find({
    }).sort({ 'createdAt': -1 }).limit(3).select('email').select('createdAt').select('organisation')

    return res.status(200).send(ans);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot fetch recent messages" }] });
  }
});

module.exports = router;
