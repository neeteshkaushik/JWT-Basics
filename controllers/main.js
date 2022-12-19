const BadReqError = require("../errors/bad-req");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadReqError("username and password cannot be empty");
  const id = new Date().getDay();
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);
  res.status(200).json({ token, msg: "user is registered" });
};

const dashBoard = async (req, res) => {
  const { username, id } = req.user;

  res
    .status(200)
    .json({ msg: `Welcome ${username}, your id is ${id}. You are authorized` });
};

module.exports = { login, dashBoard };
