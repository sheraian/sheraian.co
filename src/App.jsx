import { useState } from "react";
import BlogCard from "./components/blog/BlogCard";
import BlogCat from "./components/blog/BlogCat";
import HeroBlog from "./components/blog/HeroBlog";
function App() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="flex flex-col gap-5">
      <HeroBlog />
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-5">
        {data.map((e, index) => (
          <BlogCard key={index} />
        ))}
      </div>

      <div style={{ height: 110 }} />
    </div>
  );
}

export default App;
