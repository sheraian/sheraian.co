import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/Blog/BlogPage";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProcessPage from "./pages/Process/Process";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import CareerPage from "./pages/Career/CareerPage";
import CareerDetailPage from "./pages/Career/CareerDetailPage";
import Contact from "./pages/Contact/Contact";
import ServicePage from "./pages/Service/ServicePage";
import ServiceDetailPage from "./pages/Service/ServiceDetailPage";
import About from "./pages/About/About";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug/:id" element={<BlogDetailsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/:slug/:id" element={<CareerDetailPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/:slug/:id" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
