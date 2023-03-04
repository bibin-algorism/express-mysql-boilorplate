const { pool } = require("../config/db.config");

exports.getUsers = async (reqQuery) => {
  const { filter, s } = reqQuery;

  const query = `SELECT * FROM user`;
  const [result] = await pool.query(query);
  return result;
};
exports.getUser = async (id) => {
  const query = `SELECT * FROM user where id = ?`;
  const [result] = await pool.query(query, [id]);
  console.log(result);
  return result;
};
exports.createUser = async (name, email) => {
  const query = `CALL create_user('${name}', '${email}')`;
  const [result] = await pool.query(query);
  return result;
};
