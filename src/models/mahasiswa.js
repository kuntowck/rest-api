const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = "SELECT * FROM mahasiswa";

  return dbPool.execute(query);
};

const createUser = (data) => {
  const query = `INSERT INTO mahasiswa (nama, nim, email, jurusan) VALUES ('${data.nama}', '${data.nim}', '${data.email}', '${data.jurusan}')`;

  return dbPool.execute(query);
};

const updateUser = (data, id) => {
  const query = `UPDATE mahasiswa SET nama = '${data.nama}', nim = '${data.nim}', email = '${data.email}', jurusan = '${data.jurusan}' WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deleteUser = (id) => {
  const query = `DELETE FROM mahasiswa WHERE id = ${id}`;

  return dbPool.execute(query);
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
