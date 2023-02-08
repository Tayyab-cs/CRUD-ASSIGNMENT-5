const user = require('../database/models/userSchema');
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    const { email, password } = req.body;
    const loginCredentials = {
        email,
        password
    }

    try {
        console.log(email);
        const findUser = await user.findOne({ email });
        console.log(findUser);
        if(findUser) {
            console.log("User Available");

            const matchPassword = await bcrypt.compare(password, findUser.password);
            if(matchPassword) {
                console.log('Password Matched.')
                res.send(`Login with this ${email} successful.`)
            }
        } 
    } catch(err) {
        res.status(400).send({ message: 'Invalid Email or Password.'});
    }
}

module.exports = {
    login
}

