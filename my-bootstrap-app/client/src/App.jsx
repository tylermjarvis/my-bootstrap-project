// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landscaping from "./components/Landscaping";
import Cooking from "./components/Cooking";
import AvTech from "./components/AvTech";
import Photography from "./components/Photography";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/av-tech" element={<AvTech />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
