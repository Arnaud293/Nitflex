const API_KEY = "ed82f4c18f2964e75117c2dc65e2161d";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    // Trending
    getTrending : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    // Popular
    getPopularMovies : `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    getPopularTvShow : `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
    // Rated
    getTopRatedMovies : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    getTopRatedTvShow : `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
    // Latest
    getLatestMovies : `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
    getLatestTvShow : `${BASE_URL}/tv/latest?api_key=${API_KEY}`,
    // Gender
    getMoviesList : `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
    getTvShowList : `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`,
}

export default requests;