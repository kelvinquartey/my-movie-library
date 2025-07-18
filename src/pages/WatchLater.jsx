import "../css/WatchLater.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function WatchLater() {



    return (
        <div className="watch-laters-empty">
            <h2>No Movies To Watch Later Yet</h2>
            <p>Start adding movies to your watch later list and they will appear here</p>
        </div>
    )
}

export default WatchLater