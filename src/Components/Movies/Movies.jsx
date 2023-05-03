import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Movies() {
  let base_url="https://image.tmdb.org/t/p/w500/"
  let [moviesItems,setMoviesItems]=useState([]);
  let [currentPage,setCurrentPage]=useState(1);
  let pagenums=new Array(10).fill(1).map((ele,index)=>index+1)
  let navigate=useNavigate()
  function gotTomovieDetails(id)
  {
navigate({
pathname:'/movieDetails',
search:`?id=${id}`
})
  }

  async function getMoviesItems(pageNumber)
  {
    setCurrentPage(pageNumber)
 let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&page=${pageNumber}`)
 setMoviesItems(data.results);
 console.log(data.results);
  }

useEffect(() => {
  getMoviesItems(1)
}, [])
  return (
    
    <>
    {moviesItems.length>0?
    <div>
       <div className="row my-4">
        <div className="col-md-4">
        <div className="welcome">
          <div className="brdr w-25 my-4"></div>
          <h2>Trending</h2>
          <h2>Movies</h2>
          <h2>To watch now</h2>
          <p className='text-muted'>most wathched movies by day</p>
          <div className="brdr w-100"></div>
        </div>
        </div>
        {moviesItems.map((movie)=>(
 <div key={movie.id} className="col-md-2">
 <div onClick={()=>gotTomovieDetails(movie.id)} className="movies-item cursor-pointer">
  <img src={base_url+movie.poster_path} alt="" className='w-100' />
    <h2 className='h6'>{movie.title}</h2>
 </div>
</div>
       ) )}
       
      </div>
      <nav aria-label="...">
  <ul className="pagination pagination-sm py-3 d-flex justify-content-center">
    
    {pagenums.map((element,i)=>(<li key={i} className="page-item">
  <a onClick={()=>getMoviesItems(element)} className={currentPage==element?"page-link bg-primary":"page-link bg-transparent"}>{element}</a>
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
