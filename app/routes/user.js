const express = require("express");
const router = express.Router();

const userConntrollers = require("../controllers/user");

module.exports = () => {
  router.get("/", userConntrollers.getUsers);
  router.get("/:id", userConntrollers.getUser);
  router.post("/", userConntrollers.createUser);

  return router;
};
