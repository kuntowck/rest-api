const logRequest = (req, rest, next) => {
  console.log("Log request ke PATH: ", req.path);
  next();
};

module.exports = logRequest;
