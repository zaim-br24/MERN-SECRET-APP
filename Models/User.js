import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name'],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type: String,
        required: [true, 'please provide an email'],
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: 'please provide a valid emai!'
        }
       
    },

    password:{
        type:String,
        required: [true, 'please priovid a password'],
        minlength:8,
        maxlength:60
    },
    lastName: {
        type: String,
        trim: true,
        minlength:3,
        maxlength:20,
        default: 'last name'
    },
    locatin: {
        type: String,
        trim: true,
        default: 'fes'
    },
    

})


export default mongoose.model('User', UserSchema);
