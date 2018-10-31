
const mongoose = require('mongoose');
const persons= new mongoose.Schema({
        address:String,
        age: {
            type: Number,
    
        },
        birthday: {
            type: Date,
        },
        branchID: {
            type: String,
    
        },
        branchName: {
            type: String,
    
        },
        education: {
            type: String,
    
        },
        header: {
            type: String,
        },
        hometown: {
            type: String,
        },
    
        idCard: {
            type: String,
        },
        jobRank: {
            type: String,
    
        },
        joinPartyTime: {
            type: Date,
    
    
        },
        lastPayTime: {
            type: Date,
        },
        leadPerson: {
            type: String,
        },
        nation: {
            type: String,
    
        },
        partyIdentity: {
            type: String,
    
    
        },
        partyStatus: {
            type: Number,
    
    
        },
        password: {
            type: String,
    
    
        },
        phone: {
            type: String,
        },
        qqNum: {
            type: String,
    
        },
        salary: {
            type: Number,
        },
        sex: {
            type: Number,
    
        },
        totalScore: {
            type: Number,
    
        },
        username: {
            type: String,
    
        },
        wxNum: {
            type: String,
        }
}, { versionKey: false, timestamps: { createAt: "create_time", updateAt: "update_time" }});
module.exports = mongoose.model('persons', persons);













