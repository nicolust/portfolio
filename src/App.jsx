import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import './styles/App.css';
import PortfolioPage from "./pages/portfolio";


function App() {
  return (
    <Router basename="/portfolio">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
