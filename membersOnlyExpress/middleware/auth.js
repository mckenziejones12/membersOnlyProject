const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET_TOKEN;
const asyncHandler = require("express-async-handler");

exports.memberAuth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    });
  } else {
    return res.status(401).json({
      message: "Not authorized, token not available",
    });
  }
});
