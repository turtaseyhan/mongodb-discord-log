const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://pie-db:<password>@cluster0.kyf6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = async () => 
{
    await mongoose.connect('mongodb+srv://pie-db:0711byada@cluster0.kyf6p.mongodb.net/log?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}