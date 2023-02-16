const User = require('../database/models/userSchema.js');
const validation = require('../middlewares/userValidation.js');

// const createUser = async (req, res) => {
//     const {name, email, password, date} = req.body;
//     const userData = new User({
//         name,
//         email,
//         password,
//         date
//     });

//     try {
//         const savedData = await userData.save();
//         res.status(200).send(savedData);
//     } catch (err) {
//         res.status(400).send({ message: err.message });
//     }
// }

/* ........................Validating req.body before saving.................... */
const createUser = async (req, res) => {
    const { error, value } = validation.userSchemaValidation.validate(req.body);
    const {name, email, password, date} = value;
    const userData = new User({
        name,
        email,
        password,
        date
    });
    
    if(!error) {
        console.log(userData);
        const savedData = await userData.save();
        res.status(200).send(savedData);
    } else {
        res.status(400).send({ message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data); 
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}

const getOneUser = async(req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).send(data);
    } catch(err) {
        req.status(500).send({ message: err.message});
    }
}

const updateUser = async(req, res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const updatedData = await User.findByIdAndUpdate({ _id: id }, updateData, options);
        res.status(200).send(updatedData);
    } catch(err) {
        res.status(400).send({ message: err.message });
    }
}

const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;

        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).send(`Document with ${deleteUser.name} has been deleted..`);
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}