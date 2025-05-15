import { useEffect, useState } from "react";
import HeroBlog from "../components/blog/HeroBlog";
import BlogBottomSection from "../components/Blog/BlogBottomSection";
import { useLocation } from "@remix-run/react";
import Btn from "../components/Btn";
import FaqComponent from "../components/FaqComponent";
import { motion, AnimatePresence } from "framer-motion";
import { useGetBlogsQuery } from "../redux/apiSlice";
import Loader from "../components/Loader";
import { LinksFunction, MetaFunction } from "@remix-run/node";
export const links: LinksFunction = () => [
  { rel: "canonical", href: "https://sheraian.co.uk/blogs" },
];

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Web and App Development, Designing, and New Things about the IT World",
    },
    {
      name: "description",
      content:
        "Feel free to learn about Sheraian's latest blogs in Digital Trends, IT consulting, web & app development and problem solving. Here you will find industry knowledge, helpful advice, and project experiences.",
    },
  ];
};
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function BlogPage() {
  const [page, setPage] = useState(1);
  const limit = 4;
  const [blogs, setblogs] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const query = useQuery();
  const searchQuery = query.get("search") || "";
  useEffect(() => {}, [searchQuery]);

  const {
    data: BlogData,
    isLoading: isBlogsLoading,
    isError: isBlogsError,
    error: blogsError,
  } = useGetBlogsQuery({ page, limit });
  useEffect(() => {
    if (BlogData?.data) {
      setblogs((prev) => [...prev, ...BlogData.data]);
      setLoadingMore(false);
    }
  }, [BlogData]);
  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="flex flex-col gap-10 bg-[#F5F5F5]">
        {searchQuery == null || searchQuery == "" ? (
          <HeroBlog
            P_BtnText={"blogs"}
            H_Text={<>Our Blogs</>}
            M_Text={
              "our company blogs cover a wide range of topics, including new technologies, consumer gadgets, and industry trends"
            }
            isSBtnShow={false}
            S_BtnText={"Explore More"}
          />
        ) : (
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Search Result
            </h1>
            <span className="text-lg text-gray-600 italic">
              Search result for{" "}
              <span className="font-semibold text-[#F68E50]">
                "{searchQuery}"
              </span>
            </span>
          </div>
        )}

        {isBlogsLoading ? (
          <div className="p-10">
            <Loader />
          </div>
        ) : blogs?.length > 0 ? (
          <BlogBottomSection data={blogs} />
        ) : (
          <p className="text-gray-500 text-lg font-semibold text-center py-5">
            No Data Available
          </p>
        )}
        {loadingMore ? (
          <div className="py-10">
            <Loader />
          </div>
        ) : (
          BlogData?.next_page && (
            <div className=" w-full flex items-center justify-center ">
              <div className="inline-flex items-center bg-[#F5F5F5]">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                >
                  <Btn S_BtnText={"Load More"} onpress={handleLoadMore} />
                </motion.div>
              </div>
            </div>
          )
        )}
        <FaqComponent />
      </div>
    </>
  );
}

export default BlogPage;
