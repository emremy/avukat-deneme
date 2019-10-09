const express = require('express');
const router = express.Router();

let notSubdomainController = require('../controller/notSubdomainController');

router.get('/',notSubdomainController.index);

router.get('/avukatgirisi', notSubdomainController.giris);

module.exports = router;