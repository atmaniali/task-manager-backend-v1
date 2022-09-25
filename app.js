const express = require('express')
const app = express()
require('dotenv').config();
const connectDB = require('./db/connect');

//midlware
app.use(express.json())

// routes
app.use('/api/v1/tasks', require('./routes/task'));

const PORT = process.env.PORT || 3500;
// console.log(process.env.PORT)

const start = async () => {
    try {
        await connectDB(process.env.CONNECTION);
        app.listen(PORT, () => {
            console.log(`Success, server are listning on ${PORT}`)
        });
     } catch (error) {
        console.log(error)
    }
}

start()