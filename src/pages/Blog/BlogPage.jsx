import { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import BlogBottomSection from "./BlogBottomSection";

function BlogPage() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="flex flex-col gap-10">
      <HeroBlog />
      <BlogBottomSection data={data} callToBTnAction={setdata} />
    </div>
  );
}

export default BlogPage;
