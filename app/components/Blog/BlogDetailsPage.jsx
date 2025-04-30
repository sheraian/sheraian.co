import React, { useEffect, useState } from "react";
import HeroBlog from "../blog/HeroBlog";
import pkg from 'react-router-dom';
const {useParams} = pkg;
import FaqComponent from "../FaqComponent";
import { content, sanitizeAndConvertVideo } from "../../data";
import BlogCardSub from "../blogCardSub";
import CommentCard from "../CommentCard";
import Contact from "../../routes/pages/Contact/Contact";
import FloatingLabelInput from "../FloatingLabelInput";
import { motion } from "framer-motion";
import Btn from "../Btn";
import {
  useGetBlogDetailQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
} from "../../routes/apiSlice";
import Loader from "../Loader";
import NotFound from "../../routes/pages/404/NotFound";
import SubmitBtn from "../SubmitBtn";

function BlogDetailsPage() {
  const { slug, id } = useParams();
  const [page, setpage] = useState(1);
  const [commentsarray, setComments] = useState([]);
  const [moreLoading, setmoreLoading] = useState(false);
  const [postLoading, setpostLoading] = useState(false);
  const [input, setInput] = useState({
    blog_id: id,
    name: "",
    comment: "",
    email: "",
  });
  let limit = 1;
  const { isLoading, data, error, isError } = useGetBlogDetailQuery({
    blogId: id,
  });
  const {
    isLoading: commentLoading,
    data: comments,
    isError: isCommentError,
  } = useGetCommentsQuery({ blogId: id, page, limit });
  const [postComments, { loader, isSuccess, commenterror }] =
    usePostCommentsMutation();
  useEffect(() => {
    if (comments?.data) {
      setComments((prev) => [
        ...prev,
        ...comments?.data?.filter((d) => !prev.some((p) => p.id === d.id)),
      ]);
    }
  }, [comments, page]);
  useEffect(() => {
    if (comments?.data) {
      setmoreLoading(false);
    }
  }, [commentsarray]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);

    if (!input.name || !input.email || !input.comment) {
      alert("All fields are required!");
      return;
    }
    setpostLoading(true);
    try {
      const res = await postComments(input);
      if (res?.error?.data?.message) {
        alert(res.error.data.message);
      } else if (res?.data?.status) {
        alert("Your Comment is posted successfully");
      } else {
        alert("Something went wrong");
      }
      setpostLoading(false);
    } catch (err) {
      console.error("Error:", err);
      setpostLoading(false);
    }
  };
  return isLoading ? (
    <div className="w-full h-screen flex flex-col items-center gap-16 bg-[#F5F5F5] items-center justify-center">
      <Loader />
    </div>
  ) : isError ? (
    <NotFound />
  ) : (
    <div className="w-full flex flex-col items-center gap-16 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Blogs"}
        H_Text={<>{data?.data?.title || slug}</>}
        M_Text={
          "Our company blogs cover a wide range of topics, including new technologies, consumer gadgets, and industry trends"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-[90%] mx-auto flex flex-col  lg:flex-row justify-between gap-10">
        <div className=" w-[100%]  lg:w-auto  flex flex-col items-start justify-center text-start gap-10">
          <img
            src={data?.data?.img}
            className="w-full  object-cover rounded-xl"
          />
          <span
            className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
            leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
          >
            {data?.data?.title || slug}
          </span>
          <div
            className="ql-editor w-full h-auto text-base md:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: sanitizeAndConvertVideo(data?.data?.content || ""),
            }}
          />

          <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
            {data?.data?.hashtags?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[1.2rem] font-bold">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {data?.data?.hashtags.map((e) => (
                    <div className="p-2 bg-white border rounded border-gray-300">
                      <span className="flex font-bold">{e?.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[1.2rem] font-bold">Share:</span>
              <div className="flex flex-wrap gap-2">
                {Array(5)
                  .fill()
                  .map((e) => (
                    <div className="p-2 bg-transparent border rounded border-[#340831]">
                      <i className="fab fa-facebook text-[24px]"></i>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {commentLoading ? (
            <div className="w-full py-10 ">
              <Loader />
            </div>
          ) : isCommentError ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl shadow-md max-w-md mx-auto mt-4">
              <p className="font-semibold">
                Something went wrong while fetching comments.
              </p>
            </div>
          ) : comments?.data?.length > 0 ? (
            <div className="w-full">
              <span className="text-[1rem] lg:text-[2rem] font-poppins font-semibold flex pb-10">
                {comments?.data?.length?.toString()?.padStart(2, "0")} Comments
              </span>
              <div className="flex flex-col gap-5 pb-10">
                {commentsarray?.map((e) => (
                  <CommentCard item={e} />
                ))}
              </div>

              {moreLoading ? (
                <div className="w-full py-10 ">
                  <Loader />
                </div>
              ) : (
                comments?.next_page && (
                  <div className="w-full  flex items-center justify-center py-4">
                    <div
                      className="w-fit flex justify-center items-center py-3 px-10 bg-[#4A2848] rounded-[35px] cursor-pointer "
                      onClick={() => {
                        setmoreLoading(true);
                        setpage(page + 1);
                      }}
                    >
                      <p
                        className={`font-inter  text-xs font-semibold md:text-[18px] lmd:eading-[18px] tracking-[0%] cursor-pointer  text-white `}
                      >
                        Load More
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded-xl shadow-sm text-center max-w-md mx-auto mt-4">
              <p className="font-medium">No Comment Available</p>
            </div>
          )}
          <div className="w-full">
            <span className="text-[1rem] lg:text-[2rem] font-poppins font-semibold flex pb-10">
              Leave a Comments
            </span>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full mx-auto bg-white rounded-[30px] shadow-lg flex flex-col gap-3 md:gap-10 px-5 py-5 mb-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full md:px-5 md:py-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg"
              >
                <FloatingLabelInput
                  // value={input.name}
                  id="name"
                  onchange={handleChange}
                  label="First Name"
                />
                <FloatingLabelInput
                  // value={input.email}
                  id="email"
                  label="Email"
                  onchange={handleChange}
                  type="email"
                />

                <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-2">
                  <label
                    htmlFor="writeMessage"
                    className="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Write a Message
                  </label>
                  <textarea
                    required
                    id="comment"
                    className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-none"
                    rows="4"
                    // value={input.comment}
                    placeholder="Type your message here..."
                    onChange={handleChange}
                  />
                </div>

                {postLoading ? (
                  <div className="inline-flex">
                    <Loader />
                  </div>
                ) : (
                  <div className="inline-flex">
                    <SubmitBtn S_BtnText={"Post A Comment"} />
                  </div>
                )}
              </motion.div>
            </motion.form>
          </div>
        </div>
        <div className=" hidden lg:flex flex-col gap-5">
          <div className="w-[100%]  lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
            <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
              Search
            </span>
            <div className=" border border-[#4A2848] flex items-center rounded-lg w-full ">
              <input
                className="bg-transparent flex-1 px-0.5  outline-none text-gray-700"
                placeholder="Search here..."
                type="text"
              />

              <button className="w-[35px] h-[35px] bg-[#4A2848] flex items-center justify-center text-white rounded-r-md">
                <i className="fas fa-search text-[16px]"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
            <span className="text-[#17012C] text-[1.2rem] flex items-start justify-center gap-1">
              <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
                Recent
              </span>
              Post
            </span>

            {data?.recent_posts.map((e) => (
              <BlogCardSub item={e} />
            ))}
          </div>
          {data?.data?.hashtags.length > 0 && (
            <div className="w-full lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
              <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
                Tags
              </span>

              <div className="flex flex-wrap gap-2">
                {data?.data?.hashtags.map((e) => (
                  <div className="bg-[#D7D5DF] py-2 px-3 text-[#17012C] rounded-lg">
                    <span className="text-sm font-poppins font-normal">
                      {e?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;

