const User = require('../models/user');
module.exports.profile = (req, res) => {
    res.render('profile', {
        title : 'Profile'
    })
}

module.exports.signIn = (req, res) => {
    res.render('sign-in', {
        title : 'Sign In'
    })
}

module.exports.signUp = (req, res) => {
    res.render('sign-up', {
        title : 'Sign Up'
    })
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    }
    User.findOne({email : req.body.email}, (err, user) => {
        if(err){
            console.log('Error in fiding user in signing up');
            return res.redirect('back')
        }
        if(!user){
            User.create(req.body, (err, user) => {
                if(err){
                    console.log('Error in creating user in signing up');
                    return 
                }
                return res.redirect('/users/sign-in');
            }) 
            
        }else{
            return res.redirect('back')
        }

    })
}

module.exports.createSession = (req, res) => {
    
}
