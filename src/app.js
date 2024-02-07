import express, {Router} from 'express';
import logger from 'pino-http';
import {getMovies} from "./routes/movies/getMovies.js";
import {postMovieToWatchlist} from "./routes/movies/postMovieToWatchlist.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' }));

const router = Router();
app.use('/', router);
router.get('/movies', getMovies)
router.post('/playlists', postMovieToWatchlist)

export default app;
