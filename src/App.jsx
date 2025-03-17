import { useState } from "react";
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
