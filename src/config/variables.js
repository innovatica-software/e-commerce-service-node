const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;
const NODE_ENV = process.env.NODE_ENV;
const jwtSecret = process.env.JWT_SECRET;
console.log(DB_URL);
module.exports = {
  PORT,
  DB_URL,
  NODE_ENV,
  jwtSecret,
};
