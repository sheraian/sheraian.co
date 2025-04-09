const CommentCard = ({item}) => {
  const date = new Date(item?.created_at);

const formatted = date.toLocaleString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});
  return(
    <div className="w-full px-5 py-5 flex flex-col gap-2 lg:gap-5 bg-white rounded-lg">
      <div className="w-full flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1744169967~exp=1744173567~hmac=04a9f3a6dc4beb8612dfb15a0d937db8a597429ca6f3b39499f43099e9d11805&w=740"
          alt="Avatar"
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-gray-300"
        />
        <div className="flex flex-col">
          <span className="text-[0.8rem] lg:text-[1.2rem] font-poppins font-semibold leading-none">
            {item?.name}
          </span>
          <p className="text-[#726B7D] text-xs lg:text-sm">
            {formatted}
          </p>
        </div>
      </div>
  
      <p className="text-black text-sm lg:text-[1rem]">
        {item?.comment}
      </p>
    </div>
  );}


  export default CommentCard;