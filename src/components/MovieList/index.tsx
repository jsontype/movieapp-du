import React, { useState, memo } from "react";
import MovieDetail from "./MovieDetail";
import styles from "./style.module.scss";

type MovieListProps = {
  movies: any[];
};

const MovieList = ({ movies }: MovieListProps) => {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const render = movies.map((item) => {
    const onClick = () => {
      isDetail && id !== item.id ? setIsDetail(true) : setIsDetail(!isDetail);
      setId(item.id);
    };

    console.log(isDetail);

    return (
      <div key={item.id}>
        <div className={styles.movieTitle} onClick={onClick}>
          {item.title}
          <br />
          <a href={item.url}>바로가기</a>
        </div>

        {isDetail && item.id === id && <MovieDetail item={item} />}
        <img src={item.large_cover_image} alt={item.title} />
      </div>
    );
  });

  return <>{render}</>;
};
export default memo(MovieList);
