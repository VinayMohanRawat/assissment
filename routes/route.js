const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController');
const updateController = require('../controllers/updateController');


router.post('/add', addController); //to add 

router.put('/update', updateController);//to update 






module.exports = router;