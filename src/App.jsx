import BlogCat from "./components/blog/BlogCat";
import HeroBlog from "./components/blog/HeroBlog";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <HeroBlog />
      <div className="w-full grid mx-auto">
        <div className="w-[90%] mx-auto md:w-[240px] h-[180px] relative flex flex-col items-center">
          <img
            className="w-full h-[250px] md:h-auto  rounded-lg mdbg-contain"
            src="/blog.png"
          />
          <div className="relative -top-10 w-[85%] bg-white shadow-md  mx-auto rounded-lg py-3 md:py-4 px-3 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4">
              <BlogCat
                icon={
                  <i className="fas fa-user-shield text-xs text-[#4A2848]"></i>
                }
                text={"By Admin"}
              />
              <BlogCat
                icon={<i class="fas fa-microchip text-xs text-[#4A2848]"></i>}
                text={"Technology"}
              />
            </div>
            <h1 className=" md:hidden font-poppins text-sm font-semibold">
              Tackling the Changes of Retail Industry Changes of Retail Industry
            </h1>
            <h1 className="hidden md:flex font-poppins text-sm font-semibold">
              Tackling the Changes of Retail Industry 
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#051634]  ">Read More</span>
              <i className="fas fa-chevron-right text-xs  text-[#051634]   "></i>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:110}} />
    </div>
  );
}

export default App;
