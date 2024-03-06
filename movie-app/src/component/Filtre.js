import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
const Filtre = (props) => {
  return (
    <div>
        <input type='text' placeholder='search by title'onChange={(event)=>props.title(event.target.value)}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.SearchRate}
          onStarClick={(value)=>{(props.setsearchRate(value))}}
        />
    </div>
  )
}

export default Filtre