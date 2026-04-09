import { createContext, useState, useContext, useEffect } from "react";

export const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    // MOVED INSIDE: State must be inside the Provider component
    const [category, setCategory] = useState('general');

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            try {
                setFavorites(JSON.parse(storedFavs));
            } catch (e) {
                console.error("Failed to parse favorites", e);
            }
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (news) => {
        setFavorites(prev => {
            if (prev.find(fav => fav.url === news.url)) return prev;
            return [...prev, news];
        });
    };

    const removeFromFavorites = (url) => {
        setFavorites(prev => prev.filter(news => news.url !== url));
    };

    const isFavorite = (url) => {
        return favorites.some(news => news.url === url);
    };

    // Helper function to update category
    const updateCategory = (newCat) => {
        setCategory(newCat.toLowerCase());
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        category,       // Now defined inside the component
        updateCategory  // Now defined inside the component
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    );
};