import {searchMoviesFromTheMovieDB} from "../../themoviedbAPI/searchMoviesFromTheMovieDB.js";
import { addMovieToWatchlistTheMovieDatabase } from '../../themoviedbAPI/addMovieToWatchistTheMovieDatabase.js'

export const postMovieToWatchlist =  async (request, response) => {
  request.log.info('/ addMovieToPlaylist');

  const searchTerm = (request.query.searchTerm || "").trim().toLowerCase()
  const accountId = request.query.accountId

  const searchedMovieList = await searchMoviesFromTheMovieDB(searchTerm)

  if(!searchedMovieList.length){
    response.status(404).send({
      message: "No movies found"
    });
    return;
  }

  const movieToAdd = searchedMovieList[0]

  const result = await addMovieToWatchlistTheMovieDatabase(movieToAdd.id, accountId)

  response.send({
    result
  });
}
