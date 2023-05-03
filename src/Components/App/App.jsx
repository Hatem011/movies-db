import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Movies from "../Movies/Movies"
import TvShows from "../TvShows/TvShows"
import People from "../People/People"
import Login from "../Login/Login"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound"
import TvDetails from "../TvDetails/TvDetails"
import MovieDetails from "../MovieDetails/MovieDetails"
import PersonDetails from "../PersonDetails/PersonDetails"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import TrendingContextProvider from "../../Context/Store"
function App() {
let [userData,setUserData]=useState(null)
let navigate=useNavigate();

  function saveUserData()
  {
    let encoded=localStorage.getItem('userToken')
    let decoded=jwtDecode(encoded);
    setUserData(decoded)
  }
  function logout()
  {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }
  useEffect(()=>{
    if(localStorage.getItem('userToken')!=null)
    {
      saveUserData()
    }
  },[])
 
function ProtectedRoute(props)
      {
        if(localStorage.getItem('userToken')==null)
        {
        return  <Navigate to="/login"/>
        }
        else
        {
return props.children;
        }
      }
  return (
   <>
   <Navbar userData={userData} logout={logout}/>
   <div className="container">
    <TrendingContextProvider>
   <Routes>
   <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
    <Route path="home" element={<ProtectedRoute> <Home/></ProtectedRoute>}></Route>
    <Route path="movies" element={<ProtectedRoute> <Movies/></ProtectedRoute>}></Route>
    <Route path="people" element={<ProtectedRoute><People/></ProtectedRoute>}></Route>
    <Route path="tvshows" element={<ProtectedRoute> <TvShows/></ProtectedRoute>}></Route>
    <Route path="login" element={<Login saveUser={saveUserData}/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="movieDetails" element={<MovieDetails/>}></Route>
    <Route path="tvDetails" element={<TvDetails/>}></Route>
    <Route path="personDetails" element={<PersonDetails/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
   </Routes>
   </TrendingContextProvider>
   </div>
   </>
  );
}

export default App;
