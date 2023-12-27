import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:String,
        required:true,

        
    },
    password:{
        type:String,
        required:true,
        
        
    },
    Age:{
        type:String,
        required:true,
        
        
    },
    profilePicture:{
        type:String,
         default:"https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864",
    },
    speciality:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class' 
    }],
    weights:[
        {
            type:Number,
            default:0
            
        }
    ]
   
   
} ,{ timestamps: true })
const User=mongoose.model('User',userSchema);
export default User