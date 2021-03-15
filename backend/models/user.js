const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    address:{
        type: Object,
        required:true
    },
    currLocation:{
        type: Object,
        required:true
    },
    posts:{
        type: Object,
        required:true
    },
});


module.exports = mongoose.model('User', UserSchema);
