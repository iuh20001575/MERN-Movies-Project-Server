const express = require('express');
const movie = require('./movie');
const router = express.Router();
const site = require('./site');
const cast = require('./cast');
const user = require('./user');

router.use('/', site);
router.use('/movie', movie);
router.use('/cast', cast);
router.use('/user', user);

module.exports = router;
