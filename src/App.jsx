import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/Blog/BlogPage";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProcessPage from "./pages/Process/Process";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import CareerPage from "./pages/Career/CareerPage";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
