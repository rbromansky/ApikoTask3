import React, { Fragment } from "react";
import "./showsStyle.css";
import { routes } from "../routes";
import { useHistory } from "react-router";

export const TVShowItem = show => {
  show = show.show;
  let history = useHistory();

  const displayShowDetail = () => {
    history.push(`${routes.TVSHOWDETAIL}?id=${show.id}`);
  };

  return (
    <Fragment>
      <div id={show.id} className="item" onClick={displayShowDetail}>
        <div id={show.id} className="title">
          {show.name}
        </div>
        <img
          alt={show.name}
          src={`https://image.tmdb.org/t/p/w500/${show.backdrop_path}`}
        />
      </div>
    </Fragment>
  );
};
