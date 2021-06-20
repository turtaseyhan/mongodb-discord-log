const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const logSchema = new mongoose.Schema({
    kID: reqString,
    kanalId: reqString,
    mesajID: reqString,
    mesaj: reqString
}, {timestamps: true})

module.exports = mongoose.model('log', logSchema)
