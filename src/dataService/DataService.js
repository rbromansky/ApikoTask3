const auth = "api_key=db46dece2e885108084accafeff9f1e5";

export const getTVShows = async (name, page) => {
  return (await fetch(
    `https://api.themoviedb.org/3/tv/${name}?page=${page}&${auth}`
  )).json();
};

export const getTVShowDetail = async id => {
  return (await fetch(`https://api.themoviedb.org/3/tv/${id}?${auth}`)).json();
};

export const getSeasonDetail = async (tvId, seasonNumber) => {
  return (await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?${auth}`
  )).json();
};

export const getEpisodeDetail = async (tvId, seasonNumber, episodeNumber) => {
  return (await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?${auth}`
  )).json();
};
