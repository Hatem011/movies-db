import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
export let trendingContext=createContext([]);

export default function TrendingContextProvider(props)
{
    let base_url="https://image.tmdb.org/t/p/w500/"
    let [moviesItems,setMoviesItems]=useState([]);
    let [tvItems,setTvItems]=useState([]);
    let [personItems,setPersonItems]=useState([]);
    async function getItems(mediaType,callback)
    {
       
   let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
   callback(data.results);
   console.log(data.results);
    }

useEffect(() => {
 getItems('movie',setMoviesItems)
 getItems('tv',setTvItems)
 getItems('person',setPersonItems)
}, [])
          return  <trendingContext.Provider value={{base_url,moviesItems,tvItems,personItems}}>
            {props.children}
          </trendingContext.Provider>
}