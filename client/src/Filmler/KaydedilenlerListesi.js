import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <Link key={movie} to={`/filmler/${movie}`}>
        <span className="saved-movie">{props.movieList.find(item =>item.id == movie).title}</span>
        </Link>
      ))}
      <Link to={`/`}>
      <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}