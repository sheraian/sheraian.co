import BlogCat from "../blog/BlogCat";

function BlogCard({item}) {
  const createdAt = new Date(item?.created_at); 
  const month = createdAt.toLocaleString("en-US", { month: "short" });
  const date = createdAt.getDate();
  return (
    <div className="mt-0 md:mt-0 w-[90%] mx-auto h-[280px] md:w-[290px] md:h-[270px]  flex flex-col items-center hover:scale-105 relative">
      <img
        className="w-full max-h-[200px]  xl:h-[250px] rounded-lg object-cover bg-no-repeat"
        // className="w-full max-h-[200px] object-cover rounded-lg bg-no-repeat"
   
   src={item?.img}      />


      <div className="absolute right-0 rounded-lg w-[3rem] h-[3.5rem] bg-white flex flex-col items-center justify-center">
        <span className="font-poppins font-bold text-lg">{date}</span>
        <p className="text-sm font-normal">{month}</p>
      </div>
      <div className="relative -top-10 w-[85%] bg-white shadow-md  mx-auto rounded-lg py-3 md:py-4 px-3 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4">
          <BlogCat
          flag={true}
            icon={<i className="fas fa-user-shield text-xs text-[#4A2848]"></i>}
            text={"By "+item?.user?.name}
          />
          <BlogCat
            icon={item?.category?.icon}
            text={""+item?.category?.name}
          />
        </div>
        <h1 className="block md:hidden w-full md:w-[90%] font-poppins text-sm font-semibold cursor-pointer truncate overflow-hidden whitespace-nowrap">
  {item?.title}
</h1>
        <h1 className="hidden md:block w-full md:w-[90%] font-poppins text-sm font-semibold cursor-pointer truncate overflow-hidden whitespace-nowrap">
  {item?.title}
</h1>

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-[#051634]  ">Read More</span>
          <i className="fas fa-chevron-right text-xs  text-[#051634]   "></i>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
