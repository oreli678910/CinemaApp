import React, { FC, useState } from 'react'
import MoviesData from './../../mock/movies.json'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import Search from '../Search/Search'
const MovieList:FC=()=> {
    console.log("MoviesData",MoviesData)
const [ movies,setMovies] = useState(MoviesData||[])
const [ moviesAfterFilter,setMoviesAfterFilter] = useState(MoviesData||[])

   const  filterData=(searchValue:string)=>{
console.log("---",searchValue)
if(searchValue){
    let newData=movies.filter(movie=>movie.title.toLowerCase()?.includes(searchValue.toLowerCase()))
    setMoviesAfterFilter(newData)

   }else setMoviesAfterFilter(movies)
   }

  return (
    <div>
<Search onChange={filterData}/>

    <div className='movielist-con'>
        {moviesAfterFilter?.length&&moviesAfterFilter?.map((movie,index)=>{
            return(
               <MovieCard key={index} movie={movie} index={index}/>
                            )
        })}

    </div>
    </div>
  )
}

export default MovieList