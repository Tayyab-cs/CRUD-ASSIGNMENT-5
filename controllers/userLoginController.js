const user = require('../database/models/userSchema');
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const validation = require('../middlewares/userValidation.js');

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     const loginCredentials = {
//         email,
//         password
//     }

//     try {
//         console.log(email);
//         const findUser = await user.findOne({ email });
//         console.log(findUser);
//         if(findUser) {
//             console.log("User Available");

//             const matchPassword = await bcrypt.compare(password, findUser.password);
//             if(matchPassword) {
//                 console.log('Password Matched.')
//                 res.send(`Login with this ${email} successful.`)
//             }
//         } 
//     } catch(err) {
//         res.status(400).send({ message: 'Invalid Email or Password.'});
//     }
// }

/* ........................Validating req.body before Login.................... */
const login = async (req, res) => {
    const { error, value } = validation.loginSchemaValidation.validate(req.body);
    const { email, password } = value;
    const loginData = {
        email,
        password
    }

    if(!error){
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
    } else {
        res.status(400).send({ message: error.message });
    }
} 

module.exports = {
    login
}

