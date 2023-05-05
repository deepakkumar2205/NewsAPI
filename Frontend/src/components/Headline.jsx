import React, { useEffect, useState } from 'react'
import CardComp from './Card'
import axios from 'axios'
import Loading from './Loading'
import API from '../../Url'
import { useNavigate } from 'react-router-dom'

const Headline = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate(); 

    useEffect(()=>{
      axios(`${API}/news/getHeadline`)
      .then((data)=>{
        setData(data.data)
      })
      .catch((err)=>console.log(err))
        
      axios({
        url:`${API}/users/verifytoken`,
        method:"get",
        headers:{
          token:localStorage.getItem("x-Auth-token")
        }
      })
      .then((data)=>{
        // console.log(data);
      })
      .catch((err)=>{
        if(err.response.status === 401){
          navigate('/login')
          localStorage.clear()
        }
      })
    },[])

  return (
    <div className='d-flex flex-wrap justify-content-center '>
        {data.length===0 ?[...new Array(10)].map((e,i)=><Loading key={`${i}`}/>):data.map((data,index)=><CardComp data={data} key={index}/>)}
    </div>
  )
}

export default Headline