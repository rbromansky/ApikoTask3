import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import uuid from "uuid/v4";

import { getTVShows } from "../dataService/DataService";
import { TVShowItem } from "../Shows/TVShowItem";
import { Loader } from "../Loader/Loader";

export const TVShows = () => {
  const [shows, setData] = useState([]);
  const { search } = useLocation();
  const [loaderShow, setLoderShow] = useState(true);

  useEffect(() => {
    let name = "popular";
    let page = 1;

    const getData = async () => {
      const pageName = new URLSearchParams(search).get("name");
      name = pageName !== null ? pageName : name;
      const pageNumbe = new URLSearchParams(search).get("page");
      page = pageNumbe !== null ? pageNumbe : page;

      getTVShows(name, page)
        .then(data => ({ data: data }))
        .then(res => {
          setData(res.data);
        });
    };

    getData();
    setLoderShow(false);
  }, [search]);

  return (
    <Fragment>
      <div>{loaderShow ? <Loader /> : null}</div>
      <div className="container">
        {shows.results
          ? shows.results.map(show => <TVShowItem key={uuid()} show={show} />)
          : ""}
      </div>
    </Fragment>
  );
};
