import {searchMoviesFromTheMovieDB} from "../../themoviedbAPI/searchMoviesFromTheMovieDB.js";


export const getMovies =  async (request, response) => {
  request.log.info('/ getMovies');

  const apiKey = request.query.apiKey
  const searchTerm = (request.query.searchTerm || "").trim().toLowerCase()

  const searchedMovieList = await searchMoviesFromTheMovieDB(searchTerm)

  response.send({
    matchedMovies: searchedMovieList
  });
}
