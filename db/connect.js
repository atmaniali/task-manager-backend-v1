const mongoose = require('mongoose');
// require('dotenv').config();

const connect = (url) => {
    console.log('Success, connect to db')
    return mongoose.connect(url)
}


module.exports = connect;