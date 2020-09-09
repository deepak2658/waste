const path = require('path')
const express = require('express')
const router = express.Router()

const staticctrl = require('../controller/static')

router.get('/cleanworks.com',staticctrl.landingPage)
router.get('/cleanworks.com/home',staticctrl.homePage)
router.get('/cleanworks.com/login',staticctrl.loginPage)
router.get('/cleanworks.com/contact',staticctrl.contactPage)
router.get('/cleanworks.com/about',staticctrl.aboutPage)
router.get('/cleanworks.com/signup',staticctrl.signupPage)


module.exports = router