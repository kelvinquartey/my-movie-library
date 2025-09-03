// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const API_KEY = "5d1e8f0b6b954b62afc3ed323c47d35a";
const BASE_URL= "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    console.log("TMDB popular movies response:", data);
    return data.results
};


export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await response.json()
    return data.results
};