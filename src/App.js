import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { routes } from "./routes";
import { TVShows } from "./Shows/TVShows";
import { TVShowDetail } from "./Shows/TVShowDetail";
import { SeasonDetail } from "./Shows/SeasonDetail";
import { EpisodeDetail } from "./Shows/EpisodeDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={TVShows} />
        <Route path={routes.TVSHOWDETAIL} component={TVShowDetail} />
        <Route path={routes.SEASONDETAIL} component={SeasonDetail} />
        <Route path={routes.EPISODEDETAIL} component={EpisodeDetail} />
      </Switch>
    </BrowserRouter>
  );
};
