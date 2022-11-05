import React from 'react'

type MovieDetailProps = {
    item: any,
}

export default function MovieDetail ({ item }: MovieDetailProps) {
    return (
        <>
            <div>영화제목 : {item.title}</div>
            <div>상영시간 : {item.runtime}</div>
            <div>장르 : {item.genres.join(', ')}</div>
            <div>평점 : {item.rating} / 10</div>
            <div>줄거리 : {item.summary}</div>
        </>
  )
}