import  express from "express";
import User from "../models/model.js";
import bcryptjs from 'bcryptjs';
import  Jwt  from "jsonwebtoken";
import nodemailer from "nodemailer"
// import Classs from "../models/classmodel.js";
import Trainer from "../models/trainer.js";


const router=express.Router();
 const secretkey="priyavarshney"

router.get('/',(req,res)=>{
    console.log(req.cookie);
    res.send("hey")
})
router.post('/signup',async(req,res)=>{
    console.log(req.body);
    const{username,email,phoneno,password,Age}=req.body;
    const hashpassword=bcryptjs.hashSync(password,10);
    
    try{
        const newUser=new User({
            username,
            email,
            phoneno,
            password:hashpassword,
            Age })
        await newUser.save();
        res.status(201).json({message:"user created"});
         
    }catch(error){
      res.status(500).json({message:error.message })
    }
})

router.post('/signin',async (req,res)=>{
    console.log(req.body);    
    const{email,password}=req.body;
    try{
        const validuser=await User.findOne({email});
        console.log(validuser)
        if(!validuser){
            res.status(500).json({message:"user not found"})
        }
        else{
            const passwordvalid=bcryptjs.compareSync(password,validuser.password);
            if(!passwordvalid){
                res.status(500).json({message:"invalid password"});
            }else{
                const token =Jwt.sign({id:validuser._id},secretkey,);
                console.log(token)
                res.cookie('jwt', token, {
                  httpOnly: true, 

                 
                  maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
              }).json(validuser)
                
                
              
              
            }
            
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
})

router.post('/reset-password', async (req, res) => {
    const { email } = req.body; 
    const data = await User.findOne({ email });
  
    if (!data) {
      return res.send({ message: "user not found" });
    }
  
    const token = Jwt.sign({ id: data._id }, secretkey, { expiresIn: "1d" });
  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'govindupadhyay85273@gmail.com',
          pass:  'syty usxh hdhw ntbh'
        }
      });
      
  
    var mailOptions = {
      from: 'govindupadhyay85273@gmail.com',
      to: 'priyavarshney081003@gmail.com', 
      subject: 'Reset your password',
      text: `http://localhost:${3000}/reset-password/${data._id}/${token}`
    };
    console.log(mailOptions.text)
    
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
  });
  router.get("/reset-password/:id/:token",async(req,res)=>{
    
    const{id,token}=req.params;
    console.log(id)

    const oldUser=await User.findOne({_id:id});
    if(!oldUser){
      return res.json({status:"user not exist"})
    }
    try {
      const verify=Jwt.verify(token,secretkey);
      res.send("verified")
    } catch (error) {
      res.send("not verified");
    }
    
  })
  router.post("/password",async(req,res)=>{
    const{id,password,password2}=req.body;
    if(password!==password2){
      return res.status(500).send({message:"not matched password"})
    }
    else{
      try {
        const user=await User.findOne({_id:id})
        if(!user){
         return res.status(404).json({message:"user not found"});

        }
        const hashpassword=bcryptjs.hashSync(password,10);

        user.password=hashpassword;
        await user.save();
        console.log("user updated successfully",user)
        return res.status(200).json({message:"updated successfully"})
        
      } catch (error) {
        console.error('Error updating user:', error);
        
      }
    }

  })


router.post('/trainer', async (req, res) => {
  console.log("first")
  const { experience } = req.body;
  console.log(req.body);
  try {
    const trainerData = await new Trainer({ experience }); 
    console.log(trainerData);
    await trainerData.save();
    res.status(201).json({ success: true, data: trainerData }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' }); 
  }
});
router.get("/trainer/details",async(req,res)=>{
  const exp=req.query.experiece.split(",");
  try {
    const list=await Promise.all(
      exp.map((experience)=>{
        return Trainer.countDocuments({experience})
      })
    )
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).send({"message":err});
    
  }
  })

  router.post("/trainer/choice",async(req,res)=>{
    const {name,job,experience}=req.body;
    try {
      const newUser=await new Trainer({
        name,job,experience
      })
      await newUser.save();
      return res.status(200).send({message:"user created"})
      
    } catch (error) {
      return res.status(500).send({message:err})
      
    }
  })
  router.get("/trainer/choice/special",async(req,res)=>{
    console.log(req.query);
    const{job,experience}=req.query;
    try {
      
      const documents = await Trainer.find({ $and: [{ job }, { experience }] });
      console.log(documents);
   return res.status(200).send(documents)
      
    } catch (error) {
      return res.status(500).send(error)
    }
 })

 router.post('/weights/:id',async(req,res)=>{
    const {id}=req.params;
    console.log(id)
    const {weight}=req.body;
    console.log(req.body);
    try {
      const user=await User.findById(id);
      user.weights.push(weight)
      await user.save();
      res.send(user.weights)
    } catch (error) {
      console.log(error)
      
    }
 })
 router.get('/getweights/:id', async(req,res)=>{
  const {id}=req.params;
  console.log(id)
   
    console.log(req.body);
    try {
      const user=await User.findById(id);
      
      res.send(user.weights)
    } catch (error) {
      console.log(error)
      
    }

 })
 router.get("/alluser",async(req,res)=>{
  const alluser=await User.find();
 res.json(alluser)

 })
 router.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  

  try {
  await User.findByIdAndDelete(id);
  console.log("userdeleted");
  res.status(200).send({message:"user deleted"});
  } catch (error) {
    console.log(error)
  }

 })

export default router;