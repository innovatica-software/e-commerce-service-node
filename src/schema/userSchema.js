const { Schema, model } = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const uuidv4 = require("uuid").v4;
const userSchema = new Schema({
 username : {
  type: String,
  required: true,
 },
 userId : {
  type: String,
  required: true,
  default: uuidv4
 },
 name: {
  type: String,
  required: true,
 },
 isAdmin: {
  type: Boolean,
  default: false
 },
 image: {
  type: String,
 },
 createdAt: {
  type: Date,
  default: () => getCurrentDateTimeUTCPlus6(),
 }
});
const User = model("User", userSchema);
module.exports = User;