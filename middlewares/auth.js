const jwt = require("jsonwebtoken");
const AuthError = require("../errors/auth-error");
const BadReqError = require("../errors/bad-req");

const authMiddleWare = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer "))
    throw new BadReqError(
      "Either jwt token is not present or not in proper format"
    );

  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new AuthError("Not authorized to access this route");
  }
};

module.exports = authMiddleWare;
