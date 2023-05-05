import { client } from '../index.js';
import bcrypt from 'bcrypt';

export async function generateHashedPassword(password){
    const NO_OF_ROUNDS = 10 ;
    const salt =await bcrypt.genSalt(NO_OF_ROUNDS)
    const hashedPassword =await bcrypt.hash(password , salt);
    return hashedPassword
  }

export async function getUsers(data) {
    return await client.db("news").collection("users").findOne({email:data});
}

export async function createUser(data) {
    return await client.db("news").collection("users").insertOne(data);
}