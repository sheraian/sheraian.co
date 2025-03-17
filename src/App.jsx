import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
