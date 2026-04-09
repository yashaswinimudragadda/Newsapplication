import "../css/NewsCard.css";

const NewsCard = ({ article, isFavorite, ontoggleFav }) => {
    // Safety check: if article is undefined, don't render anything
    if (!article) return null;

    // Helper to handle the favorite button click
    const handleFavoriteClick = (e) => {
        e.preventDefault(); // Prevent any parent link triggers
        ontoggleFav(article);
    };

    return (
        <div className="news-card">
            {/* Image Section */}
            <div className="card-image-wrapper">
  <img 
    src={article.urlToImage || 'https://images.unsplash.com/photo-1585829365234-781fcd04c838?w=800&q=80'}
    alt={article.title}
    className="card-image" 
    // This handles cases where the URL exists but the link is actually dead
    onError={(e) => {
        e.target.src = 'https://images.unsplash.com/photo-1585829365234-781fcd04c838?w=800&q=80';
    }}
/>
                {/* Overlay for Favorite Button (Optional styling) */}
                <div className="card-overlay">
                     <button 
                        className={`fav-btn ${isFavorite ? 'active' : ''}`}
                        onClick={handleFavoriteClick}
                        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="card-body">
                <div className="card-meta">
                    {/* Optional Chaining (?.) prevents crashes if source is missing */}
                    <span className="card-source">{article.source?.name || "News"}</span>
                    <span className="card-date">
                        {article.publishedAt 
                            ? new Date(article.publishedAt).toLocaleDateString() 
                            : "Recently"}
                    </span>
                </div>

                <h3 className="card-title">
                    {article.title?.length > 70 
                        ? article.title.substring(0, 70) + "..." 
                        : article.title}
                </h3>

                <p className="card-description">
                    {article.description?.length > 120 
                        ? article.description.substring(0, 120) + "..." 
                        : article.description || "No description available for this article."}
                </p>

                <div className="card-action">
                    <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="read-btn"
                    >
                        Read Full Article
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;