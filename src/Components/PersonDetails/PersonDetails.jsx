import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
export default function PersonDetails() {
    let base_url = "https://image.tmdb.org/t/p/w500/"
    let [persondetails, setPersonDetails] = useState({});
    let [searchParams, setsearchParams] = useSearchParams();
    let currentId = searchParams.get('id');
  
    async function getPersonDetails() {
  
      let { data } = await axios.get(`https://api.themoviedb.org/3/person/${currentId}%7D?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
      console.log(data);
      setPersonDetails(data);
    }
    useEffect(() => {
        getPersonDetails()
    }, [])
  return (
    <>
       <div className="row my-5">
        <div className="col-md-4">
          <div className="movie-img">
            <img src={base_url + base_url+persondetails.profile_path} alt="" className='w-100' />
          </div>
        </div>
        <div className="col-md-8">
            <h2>{persondetails.name}</h2>
          
            <p className='text-muted py-3'>{persondetails.biography}</p>
            <ul>
                <li>place of birth : {persondetails.place_of_birth} </li>
              <li>birth data : {persondetails.birthday}</li>
              <li>popularity : {persondetails.popularity}</li>
            
            </ul>
          </div>
      </div>
    </>
  )
}
