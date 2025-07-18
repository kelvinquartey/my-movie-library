import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import WatchLater from './pages/WatchLater.jsx'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx'
import Navbar from './components/NavBar.jsx'


function App() {
  return (
    <MovieProvider>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/watchlater" element={<WatchLater />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
