import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

let data=[
  {
    "link":"https://avatars.githubusercontent.com/u/90733116",
    "name":"Muhammad Sheraz",
    "role":"Full Stack Developer"
  },
  {
    "link":"/team2.jpeg",
    "name":"Hassam Sohail",
    "role":"UI/Ux Designer"
  },
  {
    "link":"/team3.jpeg",
    "name":"Muhammad Asif",
    "role":"Web Scrapy Expert"
  },
  {
    "link":"/team4.png",
    "name":"Muhammad Shahroz",
    "role":"Amazon Expert"
  }
]
export default function TeamSection() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
      {data?.map((_, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <TeamCard item={_} />
        </motion.div>
      ))}
    </div>
  );
}
