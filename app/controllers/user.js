const { sendFailedmsg } = require("../utils/message");
const { getUsers, getUser, createUser } = require("../utils/queries");

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers();
    if (users) sendSuccessMsg(res, users);
  } catch (err) {
    sendFailedmsg(res, "Failed to fetch data", err);
  }
};
exports.getUser = async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
};
exports.createUser = async (req, res) => {
  const create = await createUser(req.body.name, req.body.email);
  if (create) {
    res.send({ success: true, message: create.insertId });
  }
};
exports.updateUser = async (req, res) => {
  res.send("user update");
};
