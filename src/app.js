"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");
const helmet = require("fastify-helmet");
const cors = require("fastify-cors");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const axios = require("axios").default;
const db = require("./models");
const { SMTP_HOST, SMTP_PORT, EMAIL_FROM, EMAIL_ADDRESS, EMAIL_PASSWORD } = require("./config");

module.exports = async function (fastify, opts) {
  fastify.register(cors, {
    origin: true,
  });

  // Fetching RKI-API every morning at 10AM
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });

  const message = {
    from: EMAIL_FROM,
    to: EMAIL_ADDRESS,
    subject: "",
    text: "",
  };

  const fetchRkiApi = async () =>
    axios.get("https://rki-covid-api.now.sh/api/general").then(
      ({ data }) => data,
      (error) => error
    );

  cron.schedule("0 10 * * *", async () => {
    fastify.logger("Running Cron-Job...");

    try {
      await fetchRkiApi().then(async (data) => {
        await db.General.create({
          last_update: data.last_update,
          recovered: data.recovered,
          cases: data.cases,
          deaths: data.deaths,
        });
      });
    } catch (error) {
      message.subject = "RKI-API Error";
      message.text = `${error}`;

      await transporter.sendMail(message);
    }
  });

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  // https://github.com/fastify/fastify-helmet
  fastify.register(
    helmet,
    // options
    {}
  );
};
