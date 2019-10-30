import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { getTVShowDetail } from "../dataService/DataService";
import { Loader } from "../Loader/Loader";
import { SeasonListItem } from "./SeasonListItem";

export const TVShowDetail = () => {
  const { search } = useLocation();
  const [show, setData] = useState([]);
  const [loaderShow, setLoderShow] = useState(true);
  const id = new URLSearchParams(search).get("id");

  useEffect(() => {
    const getData = async () => {
      getTVShowDetail(id)
        .then(data => ({ data: data }))
        .then(res => {
          setData(res.data);
        });
    };

    getData();
    setLoderShow(false);
  }, [id]);

  return (
    <Fragment>
      <div>{loaderShow && <Loader />}</div>
      <p>{show.original_name}</p>
      <p>{show.overview}</p>
      <img
        alt={show.name}
        src={`https://image.tmdb.org/t/p/w500/${show.backdrop_path}`}
      />
      <p>Number of seasons: {show.number_of_seasons}</p>
      <p>Number of episodes: {show.number_of_episodes}</p>
      {show.seasons
        ? show.seasons.map(season => (
            <SeasonListItem key={season.id} season={season} showId={id} />
          ))
        : null}
    </Fragment>
  );
};
