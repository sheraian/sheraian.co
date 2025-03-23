const CommentCard = () => (
    <div className="w-full px-5 py-5 flex flex-col gap-2 lg:gap-5 bg-white rounded-lg">
      <div className="w-full flex items-center gap-3">
        <img
          src="https://picsum.photos/200/300"
          alt="Avatar"
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-gray-300"
        />
        <div className="flex flex-col">
          <span className="text-[0.8rem] lg:text-[1.2rem] font-poppins font-semibold leading-none">
            Albert Flores
          </span>
          <p className="text-[#726B7D] text-xs lg:text-sm">
            March 20, 2024 at 2:37 pm
          </p>
        </div>
      </div>
  
      <p className="text-black text-sm lg:text-[1rem]">
        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
        architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
        Ipsum is simply dummy
      </p>
    </div>
  );


  export default CommentCard;