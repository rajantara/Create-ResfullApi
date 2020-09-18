var express = require('express');
var router = express.Router();
const Id = require('../models/Id')



/* GET home page. */
router.get('/', function (req, res, next) {
  Id.find().then((data) => {
    res.json(data)
  }).catch((err) => {
    res.status(500).json(err)
    console.log('data get error', err)
  })
});


router.post('/', function (req, res, next) {
  const { Name, Email, Phone, Profession } = req.body;
  Id.create({ Name, Email, Phone, Profession }).then((data) => {
    res.status(201).json(data)

  }).catch((err) => {
    res.status(500).json(err)
    console.log('data post error', err)
  })
});



module.exports = router;
