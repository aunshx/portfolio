const cron = require("node-cron");
const axios = require("axios");

const task = cron.schedule("*/12 * * * *", async () => {
  try {
    const res = await axios.get("https://gotuu.in");
    console.log("Req sent");
  } catch (error) {
    console.log(error);
  }
});

const task2 = cron.schedule("*/4 * * * *", async () => {
  try {
    const res = await axios.get("https://sumptuous-sandy-basket.glitch.me/");
    console.log("Req sent");
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  task,
  task2,
};
