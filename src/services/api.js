const API_KEY = "36e9611d13da4d60b7dfdf1250c7334b";
const BASE_URL = "https://newsapi.org/v2";

// Added 'category' parameter with a default value of 'general'
export const getHotNews = async (category = "general") => {
    // We added &category=${category} to the URL
    const response = await fetch(
        `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    
    return data.articles; 
};

export const searchNews = async (query) => {
    const response = await fetch(
        `${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    
    return data.articles;
};