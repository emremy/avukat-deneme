const express = require('express');
const router = express.Router();

let notSubdomainController = require('../controller/notSubdomainController');

router.get('/',notSubdomainController.index);

router.get('/avukatgiris', notSubdomainController.login);

module.exports = router;