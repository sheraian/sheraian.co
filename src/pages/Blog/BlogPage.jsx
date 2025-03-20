import { useEffect, useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import BlogBottomSection from "./BlogBottomSection";
import { useLocation } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function BlogPage() {
  const query = useQuery();
  const searchQuery = query.get("search") || "";
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="flex flex-col gap-10 bg-[#F5F5F5]">
    {searchQuery == null || searchQuery==""?  <HeroBlog />: <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Search Result</h1>
        <span className="text-lg text-gray-600 italic">
          Search result for{" "}
          <span className="font-semibold text-[#F68E50]">"{searchQuery}"</span>
        </span>
      </div>}
     

      <BlogBottomSection data={data} callToBTnAction={setdata} />
    </div>
  );
}

export default BlogPage;
