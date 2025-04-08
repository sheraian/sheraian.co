const BlogCardSub = ({ item }) => (
  <>
    <a className="flex items-center gap-4" href={`/blogs/${item?.title}/${item?.id}`}>
      <img
        src={item?.img}
        alt="Blog Image"
        className="w-[5.5rem]  h-[4rem] rounded-lg object-cover "
      />
      <div className="flex items-start flex-col gap-1.5 ">
        <div className="flex items-center gap-1.5">
          <i class="fas fa-calendar-alt  text-gray-700"></i>
          <span className="text-sm font-poppins font-normal">
            {formatDate(item?.created_at)}
          </span>
        </div>
        <span className="text-xs text-left font-poppins font-semibold line-clamp-2">
          {item?.title}
        </span>
      </div>
    </a>
    <div className=" w-full h-0.5 rounded-ee bg-[#E0E0E0]" />
  </>
);

export default BlogCardSub;
const formatDate = (dateStr) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
};
