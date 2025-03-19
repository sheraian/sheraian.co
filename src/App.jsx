import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/Blog/BlogPage";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
