import React, { useState, useEffect } from 'react'
import './components/TodosList/style.module.scss'
// import AppTitle from './components/AppTitle'
import MovieList from './components/MovieList'
import NewsList from './components/NewsList'
import TodosList from './components/TodosList'
// import './App.scss'

function App() {
  // JS
  // const [viewList, setViewList] = useState(true)
  const [mode, setMode] = useState("movies")

  const [movies, setMovies] = useState([])
  const [news, setNews] = useState([])
  // const url = viewList ? 'https://api.hnpwa.com/v0/news.json' : 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
  // const url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies) })
  }, [])

  const url = 'https://api.hnpwa.com/v0/news.json'
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setNews(json))
  }, [url])

  let content = null;
  if(mode === "movies"){
    content = <MovieList movies={movies} />
  }else if(mode === "news"){
    content = <NewsList news={news} />
  }else if(mode === "todo"){
    content = <TodosList></TodosList>
  }
  // XML
  return (
    <>

      <div>
        {/* <button onClick={ () => setViewList(!viewList)}>ChangeApp</button> */}
        <button onClick={ () => 
          setMode("movies")
        }>무비</button>
        <button onClick={ () => 
          setMode("news")
        }>뉴스</button>
        <button onClick={ () => 
          setMode("todo")
        }>투두</button>
      </div>
      {content}
      {/* <div className="App">
        <AppTitle name={viewList ? 'movie' : 'news'}/>
        {
        viewList? <MovieList movies={movies} /> : <NewsList news={news} />
        }
      </div>
      <TodosList></TodosList> */}
    </>
  )
}

export default App
