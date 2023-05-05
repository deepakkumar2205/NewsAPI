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
      let API1='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9839d7d99bd44aa588eaa30a7efb9831'
      axios(API1)
      .then((data)=>{
        setData(data.data.articles)
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