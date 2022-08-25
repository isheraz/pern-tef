// This is reponsible for acting as a bridge between views && models
const Users = require ('../model/users.model');
// const User = require ('../models/user.model');

// create()
// update()
// delete()
//CRUD
const view = (req, res, next) => {
    // All computation and Database Operations are here
    // User.create();
    
    return res.send(Users);
}

module.exports = {
    view
}