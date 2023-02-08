import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export default function TvDetails() {
    let base_url = "https://image.tmdb.org/t/p/w500/"
    let [searchParams,setSearchParams]=useSearchParams();
    let [tvDetails,setTvDetails]=useState({})
    let currentId=searchParams.get('id');

   async function getTvDetails()
    {
        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/${currentId}%7D?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
   console.log(data);
   setTvDetails(data)
    }
    useEffect(()=>{
      getTvDetails()
    },[])
  return (
    <>
       <div className="row my-5">
        <div className="col-md-4">
          <div className="tv-img">
            <img src={base_url + tvDetails.poster_path} alt="" className='w-100' />
          </div>
        </div>
        <div className="col-md-8">
            <h2>{tvDetails.name}</h2>
            <p className='text-muted py-3'>{tvDetails.overview}</p>
            <ul>
              <li>vote count : {tvDetails.vote_count}</li>
              <li>vote average : {tvDetails.vote_average}</li>
              <li>popularity : {tvDetails.popularity}</li>
            </ul>
          </div>
      </div>
    </>
  )
}
