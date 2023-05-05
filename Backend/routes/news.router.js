import express from 'express';
import { getHeadlineFromDB, getSportsFromDB, getTechFromDB } from '../services/news.service.js';
const router = express.Router();

router.get('/getHeadline',express.json(),async function(request, response){
   const data=await getHeadlineFromDB();
   response.send(data)
})

router.get('/getSports',express.json(),async function(request, response){
   const data=await getSportsFromDB();
   response.send(data)
})
router.get('/getTech',express.json(),async function(request, response){
   const data=await getTechFromDB();
   response.send(data)
})

//! Bellow code to insert data into data base.
// router.post('/headlineinsert',express.json(),async function(request, response){
//   const data = request.body;
//   const d=headlineInsert(data)
//   console.log('inserted');
//   response.send(d)
// })

export default router