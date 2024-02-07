export const addMovieToWatchlistTheMovieDatabase = async (movieId, accountId) => {

  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist`;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  const body = {
    media_type: "movie",
    media_id: movieId,
    watchlist: true
  }

  options.body = JSON.stringify(body);

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to add movie to watchlist');
  }

  const data = await response.json();

  if(!data.success || !data.status_code === 12){
    console.error(data);
    throw new Error('Failed to add movie to watchlist');
  }

  return data;
}
