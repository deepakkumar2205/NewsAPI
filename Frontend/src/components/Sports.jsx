import React, { useEffect, useState } from 'react'
import CardComp from './Card'
import axios from 'axios'
import Loading from './Loading'

const Sports = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
      let API1='https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9839d7d99bd44aa588eaa30a7efb9831'
      axios(API1)
      .then((data)=>{
        setData(data.data.articles)
      })
      .catch((err)=>console.log(err))
  
    },[])

  return (
    <div className='d-flex flex-wrap justify-content-center '>
        {data.length===0 ?[...new Array(10)].map((e,i)=><Loading key={`${i}`}/>):data.map((data,index)=><CardComp data={data} key={index}/>)}
    </div>
  )
}

export default Sports