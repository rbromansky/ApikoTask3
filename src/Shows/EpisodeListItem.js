import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../routes";

export const EpisodeListItem = props => {
  const episode = props.episode;
  return (
    <div id="{episode.id}">
      <Link
        to={`${routes.EPISODEDETAIL}?id=${props.showId}&season=${
          episode.season_number
        }&episode=${episode.episode_number}`}
      >
        <p>{episode.name}</p>
      </Link>
    </div>
  );
};
