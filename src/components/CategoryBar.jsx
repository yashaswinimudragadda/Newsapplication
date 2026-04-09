import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import "../css/CategoryBar.css"

export const CategoryBar = () => {
  const { category, updateCategory } = useContext(NewsContext);
  const categories = ["General", "Technology", "Business", "Sports"];

  return (
    <div className="category-container">
      {categories.map((cat) => (
        <button 
          key={cat}
          className={`category-btn ${category === cat.toLowerCase() ? 'active' : ''}`}
          onClick={() => updateCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};