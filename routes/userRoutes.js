const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController.js');
const loginController = require('../controllers/userLoginController.js')

// SAVE USER IN DB
router.post('/createUser', controller.createUser)

// GET ALL USERS FROM DB
router.get('/getAllUsers', controller.getAllUsers)

// GET SINGLE USER BY ID FROM DB
router.get('/getOneUser/:id', controller.getOneUser)

// UPDATE USER BY ID FROM DB
router.put('/updateUser/:id', controller.updateUser)

// DELETE USER FROM DB
router.delete('/deleteUser/:id', controller.deleteUser)

/* ....................ROUTES FOR USER LOGIN..................... */

router.post('/login', loginController.login)

module.exports = router;