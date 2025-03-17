
function BlogCat({icon,text}) {
  return (
    <div className="flex items-center gap-0.5 justify-start">
{icon}
      <span className="text-[#726B7D] text-[8px]">{text}</span>
    </div>
  );
}

export default BlogCat;
