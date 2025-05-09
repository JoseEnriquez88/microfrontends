import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("./views/Hero/Hero"));
const Home = lazy(() => import("./views/Home/Home"));
const CharacterDetail = lazy(() => import("./views/CharacterDetail"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;
