const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth.controller');
const { userById } = require('../controllers/user.controller');
const { generateToken, processPayment } = require('../controllers/braintree.controller');


router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
    "/braintree/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

router.param("userId", userById);

module.exports = router;