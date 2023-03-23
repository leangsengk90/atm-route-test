import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="reactjs" element={<Home />} />
        <Route path="reactjs/about" element={<About />} />
        <Route path="reactjs/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
