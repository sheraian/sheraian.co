import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-[url(/herobg.svg)] bg-cover bg-center flex flex-col items-center justify-center" >
      <div className="py-2.5 px-20 bg-[#D7D5DF] rounded-full ">
        <h1 className="text-[#4A2848] font-bold ">Blog</h1>
      </div>
      <span className="text-[3.5rem] font-semibold">Blog</span>
      <p className="w-[39%] mx-auto text-center  font-inter">our company blogs cover a wide range of topics, including new technologies, consumer gadgets, and industry trends</p>
    </div>
  );
}

export default App;
