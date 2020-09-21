const path = require('path')
const express = require('express')
const router = express.Router()

const staticctrl = require('../controller/static')

router.get('/',staticctrl.landingPage)
router.get('/home',staticctrl.homePage)
router.get('/login',staticctrl.loginPage)
router.get('/contact',staticctrl.contactPage)
router.get('/about',staticctrl.aboutPage)
router.get('/signup',staticctrl.signupPage)
router.get('/dustbin',staticctrl.dustbinPage)



module.exports = router