import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
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


UserSchema.pre("save", async function(){
    const user = this;
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hash(user.password, salt);
    user.password = hash;
})

export default mongoose.model('User', UserSchema);
