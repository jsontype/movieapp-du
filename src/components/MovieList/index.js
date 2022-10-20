import React from 'react'
import './style.css'

export default function test({ movies }) {
  const render = movies.map((item) => {
    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url}>{item.title}</a>
        <div className='movieYear'>{item.year}</div>
        <img className='movieImage' src={item.background_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
