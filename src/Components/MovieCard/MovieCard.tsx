import React, { FC } from 'react'
import { MovieCardPropsModel } from '../../Models/Movie'
import './MovieCard.css'

function MovieCard({movie,index}:MovieCardPropsModel): JSX.Element {
const {title,year,director,genre,rating,image_url}=movie;

  return (

<div className='moviecard-con' key={index}>
    <h2>{title}</h2>
<img src={image_url} style={{width:100,height:100}} />
{genre?.length&&genre?.map((item:any,index:number)=>{
    return(
        <div style={{display:'flex', flexDirection:'row'}}>
   <p key={index} style={{margin:4,padding:4}}>{item}</p>

        </div>
    )})}
<p>{director}</p>
<p>{year}</p>

    </div>
  )
}

export default MovieCard