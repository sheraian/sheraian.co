import BlogCat from "../blog/BlogCat";

function BlogCard() {
  return (
    <div className="mt-2 md:mt-0 w-[90%] mx-auto h-[280px] md:w-[240px] md:h-[240px]  flex flex-col items-center hover:scale-105">
      <img className="w-full h-[250px]  xl:h-[270px] rounded-lg object-cover bg-no-repeat" src="/blog.png" />
      <div className="relative -top-10 w-[85%] bg-white shadow-md  mx-auto rounded-lg py-3 md:py-4 px-3 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4">
          <BlogCat
            icon={
              <i className="fas fa-user-shield text-xs text-[#4A2848]"></i>
              // Change Icon
            }
            text={"By Admin"}
          />
          <BlogCat icon={<i class="fas fa-microchip text-xs text-[#4A2848]"></i>} text={"Technology"} />
        </div>
        <h1 className=" md:hidden font-poppins text-sm font-semibold cursor-pointer">
          Tackling the Changes of Retail Industry Changes of Retail Industry
        </h1>
        <h1 className="hidden md:flex font-poppins text-sm font-semibold cursor-pointer">Tackling the Changes of Retail Industry</h1>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-[#051634]  ">Read More</span>
          <i className="fas fa-chevron-right text-xs  text-[#051634]   "></i>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
