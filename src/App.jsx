import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import WatchLater from './pages/WatchLater.jsx'
import { Routes, Route, Router } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx'
import { WatchLaterProvider } from './contexts/WatchLaterContext.jsx'
import Navbar from './components/NavBar.jsx'


function App() {
  return (
    <MovieProvider>
      <WatchLaterProvider>
        <Router basename="/my-movie-list">
          <Navbar/>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/favorites" element={<Favorites />}/>
              <Route path="/watchlater" element={<WatchLater />}/>
            </Routes>
          </main>
        </Router>
      </WatchLaterProvider>
    </MovieProvider>
  )
}

export default App
