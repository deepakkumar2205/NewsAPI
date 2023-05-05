import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import {
  createUser,
  generateHashedPassword,
  getUsers
} from "../services/user.service.js";
import {auth} from '../middleware/auth.js'
const router = express.Router();


router.post('/signup',express.json(),async function(request, response){
    const { email, password, name} = request.body;
    const hashedPassword =await generateHashedPassword(password);
    const userPresentOrNot = await getUsers(email); 
    if(userPresentOrNot == null ){
      const result = await createUser({
        email        : email,
        password     : hashedPassword,
        name         : name,
      });
      response.send({
        message: "successfully Created ",
        ...result,
      }); //Js object -->json
    }else{
        response.status(400).send({message: "already exist"})
    }
  })


router.post('/login',express.json(),async function(request, response){
  const {email , password} = request.body;
  const userFromDB = await  getUsers(email);
  //!below if condition is used to find the data present in db or not.
  if(userFromDB == null){
    response.status(401).send({message:"Invalid credentials"})
  }else{
        const storedDBPassword = userFromDB.password ;
        const isPasswordCheck = await bcrypt.compare( password , storedDBPassword );
        //!This if condition is used to validate the password.
            if(isPasswordCheck){
              const token = jwt.sign({ foo: userFromDB._id }, process.env.SECRET_KEY);
              response.send({
                message: "succeful login",
                token: token,
                roleId: userFromDB.roleId,
              });
            }else{
              response.status(401).send({message:"Invalid credentials"})
            }
    
  }
})
router.get('/verifytoken',express.json(),auth,async function(request, response){
  response.send({message:"success"})
})


export default router