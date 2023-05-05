import { client } from '../index.js';

export async function headlineInsert(data) {
    return await client.db("news").collection("tech").insertMany(data);
}

export async function getHeadlineFromDB(){
    return await client.db("news").collection("headlines").find().toArray();
}

export async function getSportsFromDB(){
    return await client.db("news").collection("sports").find().toArray();
}

export async function getTechFromDB(){
    return await client.db("news").collection("tech").find().toArray();
}