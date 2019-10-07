var vhost = require('vhost');
const express = require('express');
const app = express();
const router = express.Router();

const mainController = require('../controller/mainController');


router.use(vhost('*.localhost',mainController.index));

module.exports = router;