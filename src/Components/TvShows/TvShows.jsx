import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TvShows() {
  let base_url="https://image.tmdb.org/t/p/w500/"
  let [tvItems,setTvItems]=useState([]);
  let [currentPage,setCurrentPage]=useState(1)
  let navigate=useNavigate();
  let pgNum=new Array(10).fill(1).map((ele,i)=>i+1)
  function goToTvDetails(id)
{
  navigate({
    pathname:'/tvDetails',
    search:`?id=${id}`
  })
}
async function getTvItems(pgnum)
  {
    setCurrentPage(pgnum)
 let {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&page=${pgnum}`)
 setTvItems(data.results);
 console.log(data.results);
  }

useEffect(() => {
  getTvItems(1)
}, [])

  return (
    <>
    {tvItems.length>0? 
    <div>
    <div className="row  my-4">
        <div className="col-md-4">
        <div className="welcome">
          <div className="brdr w-25 my-4"></div>
          <h2>Trending</h2>
          <h2>Tv</h2>
          <h2>To watch now</h2>
          <p className='text-muted'>most wathched Tv by day</p>
          <div className="brdr w-100"></div>
        </div>
        </div>
        {tvItems.map((tv)=>(
 <div key={tv.id} className="col-md-2">
 <div onClick={()=>goToTvDetails(tv.id)} className="tv-item">
  <img src={base_url+tv.poster_path} alt="" className='w-100' />
    <h2 className='h6'>{tv.name}</h2>
 </div>
</div>
       ) )}
       
      </div>
      <nav aria-label="...">
  <ul className="pagination pagination-sm py-3 d-flex justify-content-center">
    
    {pgNum.map((element,i)=>(<li key={i} className="page-item">
  <a onClick={()=>getTvItems(element)} className={currentPage==element?"page-link bg-primary":"page-link bg-transparent"}>{element}</a>
      </li>
      ))
      }
  </ul>
</nav>
    </div>:<div className="text-center mt-5 text-primary">
  <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>}
   
   
    </>
  )
}
