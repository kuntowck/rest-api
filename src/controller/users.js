const usersModel = require("../models/mahasiswa");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();

    res.json({
      message: "GET user success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server error!",
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;

  if (!body.nama || !body.email || !body.jurusan || !body.nim) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await usersModel.createUser(body);
    res.status(201).json({
      message: "Create new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server error!",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await usersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server error!",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await usersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server error!",
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
