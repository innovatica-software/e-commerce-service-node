const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const jwt = require("jsonwebtoken");
const {
  PORT,
  HOST,
  emailHost,
  emailPort,
  emailId,
  emailPassword,
  jwtSecret,
} = require("../config/variables");

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: emailPort,
  secure: true, // true for 465, false for other ports
  auth: {
    user: emailId, // sender email address
    pass: emailPassword, // sender email password
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".hbs",
    partialsDir: path.resolve(__dirname, "../views"),
    layoutsDir: path.resolve(__dirname, "../views"),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "../views"),
  extName: ".hbs",
};

transporter.use("compile", hbs(handlebarOptions));

const getVerificationLink = (email) => {
  const verifyToken = jwt.sign(
    {
      email: email,
    },
    jwtSecret,
    { expiresIn: "1h" }
  );
  const rootUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.HOST}:${process.env.PORT}`
      : process.env.HOST;
  return `${rootUrl}/api/users/email-verification?verifyToken=${verifyToken}`;
};

const sendVerificationMail = async (receiverEmail) => {
  const verificationLink = getVerificationLink(receiverEmail);
  const mailOptions = {
    from: emailId,
    to: `${receiverEmail}`,
    subject: "Verification: Email address",
    template: "emailVerification",
    context: {
      verificationLink,
    },
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationMail };
