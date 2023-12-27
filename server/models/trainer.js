import mongoose from 'mongoose';

const TrainerScehma = new mongoose.Schema({
    name:{
    type:String,

    },
    job:{
      type:String,
    },

    experience:{
        type:String,
    }  
    
   
});

const Trainer = mongoose.model('Class', TrainerScehma);

export default Trainer;

