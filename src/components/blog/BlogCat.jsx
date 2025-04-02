function BlogCat({ icon, text,flag }) {
  return (
    <div className="flex items-center gap-0.5 justify-start line-clamp-1">
   
      {flag?icon:typeof icon === "string" &&( <div className="w-4 h-4"  dangerouslySetInnerHTML={{ __html: icon }} />)}
      <span className="text-[#726B7D] text-[8px] capitalize">{text}</span>
    </div>
  );
}

export default BlogCat;
