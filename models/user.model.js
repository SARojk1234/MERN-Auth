import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-jeune-photographe-asiatique-fille-adolescente-voyage-avec-appareil-photo-prendre-une-photo-de.jpg?ver=6",
    },


},{timestamps:true});

const User = mongoose.model('User', userSchema)

export default User;

