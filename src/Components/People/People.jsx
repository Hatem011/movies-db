import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function People() {
  let base_url="https://image.tmdb.org/t/p/w500/"
  let [personItems,setPersonItems]=useState([]);
  let [currentPage,setCurrentPage]=useState(1);
  let pagenums=new Array(10).fill(1).map((ele,index)=>index+1)
  let navigate=useNavigate()
  function goToPersonDetails(id)
{
  navigate({
    pathname:'/personDetails',
    search:`?id=${id}`
  })
}
async function getPersonsItems(pageNumber)
  {
    setCurrentPage(pageNumber)
 let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&page=${pageNumber}`)
 setPersonItems(data.results);
 console.log(data.results);
  }

useEffect(() => {
  getPersonsItems(1)
}, [])
  return (
    <>
    {personItems.length>0?<div>
       <div className="row  my-4">
        <div className="col-md-4">
        <div className="welcome">
          <div className="brdr w-25 my-4"></div>
          <h2>Trending</h2>
          <h2>Person</h2>
          <h2>To watch now</h2>
          <p className='text-muted'>most wathched Person by day</p>
          <div className="brdr w-100"></div>
        </div>
        </div>
        {personItems.map((person)=>(
 <div key={person.id} className="col-md-2">
 <div onClick={()=>goToPersonDetails(person.id)} className="person-item">
  <img src={base_url+person.profile_path} alt="" className='w-100' />
    <h2 className='h6'>{person.name}</h2>
 </div>
</div>
       ) )}
       
      </div>
      <nav aria-label="...">
  <ul className="pagination pagination-sm py-3 d-flex justify-content-center">
    
    {pagenums.map((element,i)=>(<li key={i} className="page-item">
  <a onClick={()=>getPersonsItems(element)} className={currentPage==element?"page-link bg-primary":"page-link bg-transparent"}>{element}</a>
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
