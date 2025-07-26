import "../css/WatchLater.css"
import { useWatchLaterContext } from "../contexts/WatchLaterContext";
import MovieCard from "../components/MovieCard"

function WatchLater() {
  const { watchLater } = useWatchLaterContext();

  if (Array.isArray(watchLater) && watchLater.length > 0) {
    return (
      <div className="watch-laters">
        <h2>Your Movies To Watch Later</h2>
        <div className="movies-grid">
          {watchLater.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

    return (
        <div className="watch-laters-empty">
            <h2>No Movies To Watch Later Yet</h2>
            <p>Start adding movies to your watch later list and they will appear here</p>
        </div>
    )
}

export default WatchLater