import NewsCard from "../components/NewsCard";
import { useNewsContext } from "../contexts/NewsContext";
import "../css/Favorites.css";

function Favorites() {
    // 1. Destructure 'category' from your context
    const { favorites, removeFromFavorites, category } = useNewsContext();

    // 2. Filter your saved favorites based on the global category
    // If category is 'general', we show everything.
    const filteredFavorites = favorites.filter((news) => 
        category === "general" ? true : news.category === category
    );

    // 3. Check the FILTERED list for items
    if (filteredFavorites.length > 0) {
        return (
            <div className="favorites">
                <h2 className="favorites-title">
                    Your {category !== "general" ? category : ""} Favorites
                </h2>
                <div className="new-grid">
                    {filteredFavorites.map((news) => (
                        <NewsCard 
                            article={news} 
                            key={news.url} 
                            isFavorite={true} 
                            ontoggleFav={() => removeFromFavorites(news.url)} 
                        />
                    ))}
                </div>
            </div>
        );
    }

    // 4. Improved Empty State (Handles both "No Favorites" and "No Favorites in this Category")
    return (
        <div className="favorites-empty">
            {favorites.length === 0 ? (
                <>
                    <h2>No Favorite News Yet</h2>
                    <p>Start adding news to your favorites and they will appear here!</p>
                </>
            ) : (
                <>
                    <h2>No {category} Favorites Found</h2>
                    <p>You haven't saved any articles in the {category} category yet.</p>
                </>
            )}
        </div>
    );
}

export default Favorites;