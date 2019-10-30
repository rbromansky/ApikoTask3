import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button/Button";
import { Search } from "./button/Search";
import T from "prop-types";

import { routes } from "./routes";
import { useLocation, useHistory } from "react-router";

export const Header = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [pagePopular, setPagePorular] = useState(1);
  const [pageTopRated, setPageTopRated] = useState(1);
  let pageName = new URLSearchParams(search).get("name");
  if (pageName === null) {
    pageName = "popular";
  }

  let toNext = "";
  let toPrev = "";
  let toPopular = `${routes.POPULERTVSHOWS}&page=${pagePopular}`;
  let toTopRated = `${routes.TOPRATEDTVSHOWS}&page=${pageTopRated}`;
  let pageNumber = 1;

  const getLinkTo = () => {
    if (pageName === null || pageName === "popular") {
      toPrev = `${routes.POPULERTVSHOWS}&page=${pagePopular - 1}`;
      toNext = `${routes.POPULERTVSHOWS}&page=${pagePopular + 1}`;
      pageNumber = pagePopular;
    } else {
      toPrev = `${routes.TOPRATEDTVSHOWS}&page=${pageTopRated - 1}`;
      toNext = `${routes.TOPRATEDTVSHOWS}&page=${pageTopRated + 1}`;
      pageNumber = pageTopRated;
    }
  };
  getLinkTo();

  const nextClick = () => {
    if (pageName === "popular") {
      setPagePorular(pageNumber + 1);
    } else {
      setPageTopRated(pageNumber + 1);
    }
    getLinkTo();
  };

  const prevClick = () => {
    if (pageName === "popular") {
      setPagePorular(pageNumber - 1);
    } else {
      setPageTopRated(pageNumber - 1);
    }
    getLinkTo();
  };

  const onSearch = searchPage => {
    pageNumber = searchPage;
    if (pageName === "popular") {
      setPagePorular(pageNumber);
      history.push(`${routes.POPULERTVSHOWS}&page=${pageNumber}`);
    } else {
      setPageTopRated(pageNumber);
      history.push(`${routes.TOPRATEDTVSHOWS}&page=${pageNumber}`);
    }
    getLinkTo();
  };

  return (
    <Fragment>
      <Button>
        {pageName !== "popular" ? (
          <Link to={toPopular}>Popular TV Shows</Link>
        ) : (
          <div>Popular TV Shows</div>
        )}
      </Button>
      <Button>
        {pageName !== "top_rated" ? (
          <Link to={toTopRated}>Top rated TV Shows</Link>
        ) : (
          <div>Top rated TV Shows</div>
        )}
      </Button>
      <div>Page: {pageNumber}</div>
      <Button>
        {pageNumber > 1 ? (
          <Link to={toPrev} onClick={prevClick}>
            Prev
          </Link>
        ) : (
          <div>Prev</div>
        )}
      </Button>
      <Button>
        <Link to={toNext} onClick={nextClick}>
          Next
        </Link>
      </Button>
      <Search onSearch={onSearch}>Input</Search>
    </Fragment>
  );
};

Header.propTypes = {
  pagePopular: T.number,
  pageTopRated: T.number
};
