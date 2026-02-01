const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes
const protect = async (req, resizeBy, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.userid).select("-password");
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      resizeBy.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    resizeBy.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = {
  protect
};
