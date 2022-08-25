var express = require('express');
var router = express.Router();
// const { view } = require('../model/users.controller');
const  { view } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Some sort of validation
  // if validation is for all routes we make a middleware
  view(req, res, next)
});

module.exports = router;
