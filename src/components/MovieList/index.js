import React, { useState } from 'react'
import './style.css'

  
export default function MovieList ({ movies }) {
  const [isDetail, setIsDetail] = useState(false)

  const render = movies.map((item) => {
    const ratingClass = item.rating >= 9 ? "ratingGood" : item.rating >= 7 ? "ratingSoso" : "ratingBad"
    const ratingIcon = item.rating >= 9 && "🔥"
    const rating = item.rating || "평가없음"    

    const onClick = () => {
      setIsDetail(!isDetail)
    }

    const renderDetail = (
      <div>asdf</div>
    )
    
    return (
      <div key={item.id}>
        <div className='movie' onClick={onClick}>
          <a className='movieTitle' href="#">{item.title} {ratingIcon} &#40; 평점 : <span className={ratingClass}>{rating}</span> / 10 &#41;</a>
          <div className='movieYear'>{item.year}</div>
          <img className='movieImage' src={item.background_image} alt={item.title}></img>
        </div>
        {isDetail && renderDetail}
      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
