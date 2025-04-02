import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import './styles/App.css';
import PortfolioPage from "./pages/portfolio";

import LustinLuolaPage from "./pages/LustinLuola";

import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works/lustinluola" element={<LustinLuolaPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
