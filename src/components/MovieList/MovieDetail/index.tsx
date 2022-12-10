import React, { memo } from "react";
import styles from "./style.module.scss";

type MovieDetailProps = {
  item: any;
};

export default function MovieDetail({ item }: MovieDetailProps) {
  const movieRank =
    item.rating >= 9
      ? "movieRankGood"
      : item.rating >= 7
      ? "movieRankSoso"
      : "movieRankBad";
  const hotIcon = item.rating >= 9 && "🔥";
  const genres = item.genres.join(", ");
  const runtime = item.runtime + "min" || "상영시간 정보없음";
  const summary = item.summary ? item.summary : item.synopsis;

  const detail = (
    <div className={styles.movieDetail}>
      <div>
        평점 : <span className={styles[movieRank]}>{item.rating}</span> / 10{" "}
        <span>{hotIcon}</span>
      </div>
      <div>장르: {genres}</div>
      <div>러닝타임: {runtime}</div>
      <div>줄거리 : {summary}</div>
    </div>
  );

  return <div>{detail}</div>;
}
