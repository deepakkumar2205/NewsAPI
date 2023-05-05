import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComp from './Card.jsx'
import Loading from './Loading.jsx'
import API from '../../Url.js'

const Tech = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
      axios(`${API}/news/getTech`)
      .then((data)=>{
        setData(data.data)
      })
      .catch((err)=>console.log(err))
  
    },[])

  return (
    <div className='d-flex flex-wrap justify-content-center '>
        {data.length===0 ?[...new Array(10)].map((e,i)=><Loading key={`${i}`}/>):data.map((data,index)=><CardComp data={data} key={index}/>)}
    </div>
  )
}

export default Tech