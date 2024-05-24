const getAllUsers = (req, res) => {
  const contact = {
    name: "sri",
    email: "sri.indarti@gmail.com",
  };
  res.json({
    message: "GET user success",
    data: contact,
  });
};

const createUser = (req, res) => {
  res.json({
    message: "POST users success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      name: "kunto",
      email: "kuntowck@gmail.com",
    },
  });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
