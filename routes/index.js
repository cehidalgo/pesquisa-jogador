var express = require('express');
var router = express.Router();
var Users = require("../services/users");

router.get('/', async function(req, res, next) {
  return await Users.getUsers();
});

router.get('/:id', async function(req, res, next) {
  return await Users.findUserById(req.params.id);
})

router.post('/', async function(req, res, next) {
  return await Users.createUser(req.body);
});

module.exports = router;
