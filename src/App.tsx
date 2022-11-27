import React, { useState, useEffect } from "react";
import "./components/TodosList/style.module.scss";
// import AppTitle from './components/AppTitle'
import MovieList from "./components/MovieList";
import NewsList from "./components/NewsList";
import TodosList from "./components/TodosList";
import { Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header";

// import './App.scss'

export default function App() {
  // JS
  // const [viewList, setViewList] = useState(true)
  // const [mode, setMode] = useState("movies")

  const [movies, setMovies] = useState([]);
  const [news, setNews] = useState([]);
  // const url = viewList ? 'https://api.hnpwa.com/v0/news.json' : 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
  // const url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
      });
  }, []);

  const url = "https://api.hnpwa.com/v0/news.json";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setNews(json));
  }, [url]);

  // let content = null;
  // if(mode === "movies"){
  //   content = <MovieList movies={movies} />
  // }else if(mode === "news"){
  //   content = <NewsList news={news} />
  // }else if(mode === "todo"){
  //   content = <TodosList></TodosList>
  // }
  // XML
  return (
    <div>
      {/* <Link to="/">홈</Link> /&nbsp; */}
      <Link to="/movies">뮤비</Link> /&nbsp;
      <Link to="/news">뉴스</Link> /&nbsp;
      <Link to="/todos">투두</Link>
      <Routes>
        {/* <Route path="/" exact={true} element={<Header />} /> */}
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/news" element={<NewsList news={news} />} />
        <Route path="/todos" element={<TodosList></TodosList>} />
      </Routes>
    </div>
  );
}
