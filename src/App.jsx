import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
