import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { getEpisodeDetail } from "../dataService/DataService";
import { Loader } from "../Loader/Loader";

export const EpisodeDetail = () => {
  const { search } = useLocation();
  const [episode, setData] = useState([]);
  const [loaderShow, setLoderShow] = useState(true);
  const id = new URLSearchParams(search).get("id");
  const seasonId = new URLSearchParams(search).get("season");
  const episodeId = new URLSearchParams(search).get("episode");

  useEffect(() => {
    const getData = async () => {
      getEpisodeDetail(id, seasonId, episodeId)
        .then(data => ({ data: data }))
        .then(res => {
          setData(res.data);
        });
    };

    getData();
    setLoderShow(false);
  }, [id, seasonId, episodeId]);

  return (
    <Fragment>
      <div>{loaderShow && <Loader />}</div>
      <p>{episode.name}</p>
      <p>{episode.overview}</p>
      <img
        alt={episode.name}
        src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
      />
      <p>Season number: {seasonId}</p>
      <p>Episode number: {episodeId}</p>
    </Fragment>
  );
};
