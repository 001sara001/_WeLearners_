import User from '../models/user.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { generatePath } from 'react-router';

// test api
const test = (req,res)=>{
    res.json('This is test APi')
}
const generateToken = user=>{
    return jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",
    })
}
//login user
export const loginUser= async(req,res)=>{
    const{email}=req.body

    try {
        let user =null
        user= await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"UIser doesn't exist"})
        }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch){
        return res.status(400).json({status: false,message:" login Invalid"});
        
    }
    // token
    const token = generateToken(user);

    res.status(200).json({message:"Login successfull"});
}catch(e){
    res.status(500).json({error:'failed to login'});
    console.log(e);
}
}


// register user 
export const registerUser = async(req, res)=>{
    const{name,email,password}=req.body


    try {
        let newUser = null
        // if user exist
        newUser= await User.findOne({email})
        if(newUser){
            return res.status(400).json({message:"User already exist"})
        }
        // if user doesn't exist
        console.log(password);
    const hashedPassword= await bcrypt.hash(password,10);
    newUser = new User({
        name,
        email,
        password:hashedPassword
    });

    await newUser.save()
    res.status(200).json({success:true, message:'User successfully Register'})
    } catch (e) {
        res.status(500).json({success:false, message:'Register error'})
        
    }

}
export default {
    test,
    registerUser,
    loginUser,
  };
