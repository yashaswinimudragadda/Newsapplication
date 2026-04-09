import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import NavBar from"./components/NavBar";
import { CategoryBar } from "./components/CategoryBar";
import { NewsProvider } from "./contexts/NewsContext";
import "./css/App.css";

function App() {

  return (
    <>
    <NewsProvider>
      <NavBar />
      <CategoryBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </NewsProvider>
    
    </>
  )
}

export default App
