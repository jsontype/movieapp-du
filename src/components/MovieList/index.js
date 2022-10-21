import React, { useState } from 'react'
import './style.css'
import RenderDetail from './MovieDetail'
  
export default function MovieList({ movies }) {
  const [isDetail, setIsDetail] = useState(false)
  const [id, setId] = useState(0)

  const render = movies.map((item) => {
    const ratingClass = item.rating >= 9 ? "ratingGood" : item.rating >= 7 ? "ratingSoso" : "ratingBad"
    const ratingIcon = item.rating >= 9 && "🔥"
    const rating = item.rating || "평가없음"

    const onClick = () => {
      isDetail && id !== item.id ? setIsDetail(true) : setIsDetail(!isDetail)
      setId(item.id)
    }
    
    return (
      <div key={item.id}>
        <div className='movie' onClick={onClick}>
          <div className='movieTitle'>{item.title} {ratingIcon} &#40; 평점 : <span className={ratingClass}>{rating}</span> / 10 &#41;</div>
          <div className='movieYear'>{item.year}</div>
          <img className='movieImage' src={item.medium_cover_image} alt={item.title}></img>
        </div>
        {isDetail && id === item.id && <RenderDetail item={item} />}
      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
