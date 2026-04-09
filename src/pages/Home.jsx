import NewsCard from "../components/NewsCard";
import { searchNews, getHotNews } from "../services/api";
import { useState, useEffect } from "react";
import { useNewsContext } from "../contexts/NewsContext";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Access 'category' from Context along with favorite functions
    const { isFavorite, addToFavorites, removeFromFavorites, category } = useNewsContext();

    // 2. This Effect runs whenever the 'category' changes
    useEffect(() => {
        const loadCategoryNews = async () => {
            setLoading(true);
            try {
                // Pass 'category' to your api function
                const headlines = await getHotNews(category); 
                setNews(headlines);
                setError(null);
            } catch (err) {
                console.log(err);
                setError("failed to load news...");
            } finally {
                setLoading(false);
            }
        };

        loadCategoryNews();
    }, [category]); // 'category' dependency ensures it updates on click

    const onFavoriteClick = (article) => {
        if (isFavorite(article.url)) {
            removeFromFavorites(article.url);
        } else {
            addToFavorites(article);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim() || loading) return;

        setLoading(true);
        try {
            const searchResults = await searchNews(searchQuery);
            setNews(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("failed to search news ...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="search for news..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {/* Visual indicator of current category */}
            {/* Change line 76 to this: */}
         <h2 className="category-title">
             {category ? category.charAt(0).toUpperCase() + category.slice(1) : "General"} Headlines
         </h2>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading....</div>
            ) : (
                <div className="new-grid">
                    {news.map((n) => (
                        <NewsCard 
                            article={n} 
                            key={n.url || n.id} 
                            isFavorite={isFavorite(n.url)} 
                            ontoggleFav={onFavoriteClick} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;