import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
export default function MovieDetails() {
  let base_url = "https://image.tmdb.org/t/p/w500/"
  let [moviedetails, setMovieDetails] = useState({});
  let [searchParams, setsearchParams] = useSearchParams();
  let currentId = searchParams.get('id');

  async function getMoviesDetails() {

    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${currentId}%7D?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
    console.log(data);
    setMovieDetails(data);
  }
  useEffect(() => {
    getMoviesDetails()
  }, [])

  return (
    <>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="movie-img">
            <img src={base_url + moviedetails.poster_path} alt="" className='w-100' />
          </div>
        </div>
        <div className="col-md-8">
            <h2>{moviedetails.title}</h2>
            <p className='text-muted py-3'>{moviedetails.overview}</p>
            <ul>
              <li>budget : {moviedetails.budget}</li>
              <li>vote : {moviedetails.vote_average}</li>
              <li>popularity : {moviedetails.popularity}</li>
              <li>budget : {moviedetails.budget}</li>
            </ul>
          </div>
      </div>
    </>
  )
}
