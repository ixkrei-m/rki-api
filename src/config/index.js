require("dotenv").config();

const {
  NODE_ENV,
  DB_DB,
  DB_HOST,
  DB_PORT,
  USERNAME,
  PASSWORD,
  JWT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  EMAIL_FROM,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
} = process.env;

console.log("loading environment variables...\n");
console.log(
  `| NODE_ENV:\t\t ${NODE_ENV}\n| DB_DB:\t\t ${DB_DB}\n| DB_HOST:\t\t ${DB_HOST}\n| DB_PORT:\t\t ${DB_PORT}\n| USERNAME:\t\t ${USERNAME}\n| PASSWORD:\t\t ${PASSWORD}\n| SMTP_HOST:\t\t ${SMTP_HOST}\n| SMTP_PORT:\t\t ${SMTP_PORT}\n| EMAIL_FROM:\t\t ${EMAIL_FROM}\n| EMAIL_ADDRESS:\t ${EMAIL_ADDRESS}\n| `
);
console.log("...loading done!\n");

const connectionDetails = {
  username: USERNAME,
  password: PASSWORD,
  database: DB_DB,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
};

module.exports = {
  development: connectionDetails,
  production: connectionDetails,
  JWT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  EMAIL_FROM,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
};
