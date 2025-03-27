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
import PortfolioDetailPage from "./pages/Portfolio/PortfolioDetailPage";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudy/CaseStudyDetail";
import Job from "./pages/Job/Job";
import ChatbotIcon from "./components/Chatbot/ChatbotIcon";
import Chatform from "./components/Chatbot/Chatform";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <div className=" flex h-[100vh] flex-col  relative items-center ">
      <button className="fixed bottom-20 right-12 h-[50px] w-[50px] bg-[#4A2848] text-white rounded-full flex items-center justify-center shadow-lg z-50">
        <i class="material-icons">&#xe0ca;</i>
      </button>
      <BrowserRouter>
        <Navbar />

        <div className="mt-16 lg:mt-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/jobs" element={<Job />} />
            <Route
              path="/portfolio/:slug/:id"
              element={<PortfolioDetailPage />}
            />
            <Route path="/career/:slug/:id" element={<CareerDetailPage />} />
            <Route path="/blogs/:slug/:id" element={<BlogDetailsPage />} />
            <Route path="/service/:slug/:id" element={<ServiceDetailPage />} />
            <Route path="/case-study/:slug/:id" element={<CaseStudyDetail />} />
          </Routes>
        </div>
        {/* <Chatbot /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
