import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";

import { routes } from "../routes";

export const SeasonListItem = props => {
  const season = props.season;

  return (
    <div id="{season.id}">
      <Link
        to={`${routes.SEASONDETAIL}?id=${props.showId}&season=${
          season.season_number
        }`}
      >
        {season.name}. Episode count: {season.episode_count}
      </Link>
    </div>
  );
};

SeasonListItem.propTypes = {
  season: T.object,
  showId: T.string
};
