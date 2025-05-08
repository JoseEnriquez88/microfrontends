import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("./views/Hero/Hero"));
const Home = lazy(() => import("./views/Home/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
