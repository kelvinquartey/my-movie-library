import { createContext, useState, useContext, useEffect } from "react";

const WatchLaterContext = createContext();

export const useWatchLaterContext = () => useContext(WatchLaterContext);

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedWatchLater = localStorage.getItem("watchLater");
    if (storedWatchLater) {
      setWatchLater(JSON.parse(storedWatchLater));
    }
  }, []);

  // Save to localStorage whenever watchLater changes
  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  const addToWatchLater = (movie) => {
    setWatchLater((prev) => [...prev, movie]);
  };

  const removeFromWatchLater = (movieId) => {
    setWatchLater((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isInWatchLater = (movieId) => {
    return watchLater.some((movie) => movie.id === movieId);
  };

  const value = {
    watchLater,
    addToWatchLater,
    removeFromWatchLater,
    isInWatchLater,
  };

  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};
