const getAllUsers = (req, res) => {
  res.json({
    message: "GET users success",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "POST users success",
  });
};

module.exports = { getAllUsers, createNewUser };
