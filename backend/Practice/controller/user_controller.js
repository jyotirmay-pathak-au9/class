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
