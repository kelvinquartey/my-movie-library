import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { useWatchLaterContext } from "../contexts/WatchLaterContext"


function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id) 
    
    const {isInWatchLater, addToWatchLater, removeFromWatchLater} = useWatchLaterContext();
    const watchLater = isInWatchLater(movie.id);

    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    function onWatchLaterClick(e) {
        e.preventDefault();
        watchLater ? removeFromWatchLater(movie.id) : addToWatchLater(movie);
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <div className="tooltip-container">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                    <span className="tooltip-text">
                        {favorite ? "Remove from Favorites" : "Add to Favorites"}
                    </span>
                </div>
                <div className="tooltip-container">
                <button className={`watch-later-btn ${watchLater ? "active" : ""}`} onClick={onWatchLaterClick}>
                    ⏱
                </button>
                <span className="tooltip-text">
                    {watchLater ? "Remove from Watch Later" : "Add to Watch Later"}
                </span>
                </div>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard 