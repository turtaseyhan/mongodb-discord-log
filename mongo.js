const mongoose = require('mongoose')
const mongoPath = 'mongodb//localhost:27017/log'
module.exports = async () => 
{
    await mongoose.connect('mongodb//localhost:27017/log',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}
