import React, { useState } from 'react'
import './style.scss'
import RenderDetail from './MovieDetail'
  
type ItemProps = {
  id: number,
  medium_cover_image: string,
  year: number,
  title: string,
  runtime: string,
  genres: string[],
  rating: number,
  summary: string,    
}

type MovieListProps = {
  movies: ItemProps[]
}

export default function MovieList({ movies }: MovieListProps) {
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
          <h1 className='movieTitle'>{item.title} {ratingIcon} &#40; 평점 : <span className={ratingClass}>{rating}</span> / 10 &#41;</h1>
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
