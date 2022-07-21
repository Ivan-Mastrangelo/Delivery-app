const express = require('express');

const router = express.Router();
const userController = require('../controllers/usersController');
const userDataVerify = require('../middlewares/userDataVerify');
const tokenVerify = require('../middlewares/tokenVerify');

router.post('/users', userDataVerify, userController.create);
router.get('/users', tokenVerify, userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.update);
router.delete('/users/me/:id', userController.destroy);

module.exports = router;