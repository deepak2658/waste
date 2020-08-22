const path = require('path')
const express = require('express')
const router = express.Router()

const staticctrl = require('../controller/static')

router.get('/waste.com',staticctrl.landingPage)
router.get('/waste.com/home',staticctrl.homePage)
router.get('/waste.com/login',staticctrl.loginPage)
router.get('/waste.com/contact',staticctrl.contactPage)
router.get('/waste.com/about',staticctrl.aboutPage)


module.exports = router