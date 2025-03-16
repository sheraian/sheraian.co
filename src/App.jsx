import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/herobg.svg')" }}>
      <Navbar />
    </div>
  );
}

export default App;
