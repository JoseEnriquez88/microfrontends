import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("./views/Hero/Hero"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

export default App;
