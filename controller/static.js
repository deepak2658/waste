exports.landingPage = (req,res,next)=>{
     res.render('landing.pug')
}

exports.homePage = (req,res,next)=>{
    res.render('home.pug')
}

exports.loginPage = (req,res,next)=>{
    res.render('login.pug')
}

exports.contactPage = (req,res,next)=>{
    res.render('contact.pug')
}

exports.aboutPage = (req,res,next)=>{
    res.render('about.pug')
}

exports.signupPage = (req,res,next)=>{
    res.render('signup.pug')
}

exports.dustbinPage = (req,res,next)=>{
    res.render('dustbin.pug')
}