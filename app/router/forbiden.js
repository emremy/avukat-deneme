const express = require('express');
const router = express.Router();


module.exports = (req, res) => {
    res.status(404).render('publicFiles/forbiden/index', { title: 'Böyle bir sayfa yok!' });
}