import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.scss"
import { trendingContext } from '../../Context/Store';
export default function Home() {
  let {base_url,moviesItems,tvItems,personItems}=useContext(trendingContext)
 let navigate=useNavigate();
       function gotTomovieDetails(id)
       {
navigate({
  pathname:'/movieDetails',
  search:`?id=${id}`
})
       }
function goToTvDetails(id)
{
  navigate({
    pathname:'/tvDetails',
    search:`?id=${id}`
  })
}
function goToPersonDetails(id)
{
  navigate({
    pathname:'/personDetails',
    search:`?id=${id}`
  })
}


  return (
    <>
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
 <div onClick={()=>gotTomovieDetails(movie.id)} className="movies-item">
  <img src={base_url+movie.poster_path} alt="" className='w-100' />
    <h2 className='h6'>{movie.title}</h2>
 </div>
</div>
       ) )}
       
      </div>

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
    </>
  )
}
