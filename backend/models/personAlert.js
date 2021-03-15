const mongoose = require('mongoose');

const PersonAlertSchema = mongoose.Schema({
    _id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    hair:{
        type: String,
        required:true
    },
    height:{
        type: String,
        required:true
    },
    eyes:{
        type: String,
        required:true
    },
    vehicle:{
        type: String,
        required:true
    },
    location:{
        type: Object,
        required:true
    },
    status:{
        type: Boolean,
        required:true
    },
    details:{
        type: String,
        required:true
    },
    image:{
        type: Object,
        required:true
    },
    timestamp:{
        type: Date,
        required:true
    }
});


module.exports = mongoose.model('PersonAlert', PersonAlertSchema);
