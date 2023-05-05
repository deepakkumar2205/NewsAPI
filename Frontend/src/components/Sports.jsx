import React, { useEffect, useState } from 'react'
import CardComp from './Card'
import axios from 'axios'
import Loading from './Loading'
import API from '../../Url'

const Sports = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
      axios(`${API}/news/getSports`)
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

export default Sports