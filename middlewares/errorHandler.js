const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode).json({ msg: err.message });
};

module.exports = errorHandler;
