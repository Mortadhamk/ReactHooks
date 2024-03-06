import React, { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
const Addmovie = (props) => {
    const [rate,setRate] =useState(0)
    const title=useRef()
    const description=useRef()
    const posterUrl=useRef()
  return (
    <div>
      <input type='text' placeholder='type your movie title'ref={title}></input>
      <input type='text' placeholder='type your movie description'ref={description}></input>
      <input type='text' placeholder='type your movie posterUrl'ref={posterUrl}></input>
      <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rate}
          onStarClick={(value)=>{setRate(value)}}
        />
        <button onClick={()=>{
            props.setMovies([...props.movies,{
                title:title.current.value,
                description:description.current.value,
                posterUrl:posterUrl.current.value,
                rating:rate
            }])
        }}>  New movie</button>
      </div>
  )
}

export default Addmovie
