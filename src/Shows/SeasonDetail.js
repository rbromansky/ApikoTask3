import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { getSeasonDetail } from "../dataService/DataService";
import { Loader } from "../Loader/Loader";
import { EpisodeListItem } from "./EpisodeListItem";

export const SeasonDetail = () => {
  const { search } = useLocation();
  const [season, setData] = useState([]);
  const [loaderShow, setLoderShow] = useState(true);
  const id = new URLSearchParams(search).get("id");
  const seasonId = new URLSearchParams(search).get("season");

  useEffect(() => {
    const getData = async () => {
      getSeasonDetail(id, seasonId)
        .then(data => ({ data: data }))
        .then(res => {
          setData(res.data);
        });
    };

    getData();
    setLoderShow(false);
  }, [id, seasonId]);

  return (
    <Fragment>
      <div>{loaderShow && <Loader />}</div>
      <p>{season.original_name}</p>
      <p>{season.overview}</p>
      <img
        alt={season.name}
        src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
      />
      <p>Season number: {seasonId}</p>
      {season.episodes && <p>Number of episodes: {season.episodes.length}</p>}
      {season.episodes
        ? season.episodes.map(episode => (
            <EpisodeListItem key={episode.id} episode={episode} showId={id} />
          ))
        : null}
    </Fragment>
  );
};
