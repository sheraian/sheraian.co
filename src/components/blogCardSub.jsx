const BlogCardSub = () => (
    <>
    <div className="flex items-center gap-4">
             <img
             src="/frontend.png"
             alt="Blog Image"
             className="w-[5.5rem]  h-[4rem] rounded-lg object-cover "
           />
           <div className="flex items-start flex-col gap-1.5 ">
             <div className="flex items-center gap-1.5">
             <i class="fas fa-calendar-alt  text-gray-700"></i>
             <span className="text-sm font-poppins font-normal">18 Dec, 2024</span>
 
 
             </div>
             <span className="text-xs text-left font-poppins font-semibold">Keep Your Business Safe & Endure High Availability</span>
 
           </div>
 
             </div>
             <div className=" w-full h-0.5 rounded-ee bg-[#E0E0E0]" />
             </>
   );
  
   export default BlogCardSub