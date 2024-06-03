const PORT = process.env.PORT;
const HOST = process.env.HOST;
const DB_URL = process.env.MONGODB_URL;
const NODE_ENV = process.env.NODE_ENV;
const jwtSecret = process.env.JWT_SECRET;
const emailHost = process.env.SENDER_EMAIL_HOST;
const emailPort = process.env.SENDER_EMAIL_PORT;
const emailId = process.env.SENDER_EMAIL_ID;
const emailPassword = process.env.SENDER_EMAIL_PASSWORD;
const ENABLE_EMAIL_ADDRESS_VERIFICATION =
  process.env.ENABLE_EMAIL_ADDRESS_VERIFICATION;

module.exports = {
  PORT,
  HOST,
  DB_URL,
  NODE_ENV,
  jwtSecret,
  emailHost,
  emailPort,
  emailId,
  emailPassword,
  HOST,
  ENABLE_EMAIL_ADDRESS_VERIFICATION,
};
