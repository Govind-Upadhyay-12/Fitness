// import mongoose from 'mongoose';

// const classSchema = new mongoose.Schema({
//     speciality:{
           
//         type:String,
//         required:true,
//     }
// });

// const Classs = mongoose.model('Class', classSchema);

// export default Classs;


// else{
//     try {
//       const user=await User.findOne({_id:id})
//       if(!user){
//        return res.status(404).json({message:"user not found"});

//       }
//       const hashpassword=bcryptjs.hashSync(password,10);

//       user.password=hashpassword;
//       await user.save();
//       console.log("user updated successfully",user)
//       return res.status(200).json({message:"updated successfully"})
      
//     } catch (error) {
//       console.error('Error updating user:', error);
      
//     }
//   }

// })


// router.post('/products/:id/review', async(req, res) => {
//     let productId = req.params.id;
//     let {rating, comment} = req.body;
//     let newreview = await Review.create({rating, comment});
//     console.log(newreview);
//     await newreview.save();
//     const product = await Product.findById(productId);
//     console.log(product);
//     product.reviews.push(newreview);
//     await product.save();
//     console.log("saved");
//     res.send("review page");
// })