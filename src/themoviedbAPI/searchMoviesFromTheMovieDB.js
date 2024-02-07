export const searchMoviesFromTheMovieDB = async (searchTerms = undefined) => {
  if (!searchTerms) {
    return []
  }

  const apiKey = process.env.TMDB_API_KEY
  console.log(apiKey)
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=fr-FR&page=1&query=${searchTerms}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies from TMDB');
  }
  const data = await response.json();
  return data.results;
}
