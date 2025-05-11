import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./views/Hero/Hero"));
const Home = lazy(() => import("./views/Home/Home"));
const CharacterDetail = lazy(() => import("./views/CharacterDetail"));

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      {/* Rutas base: puede incluir todo, incluida la ruta de detail */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/character/:id" element={<Home />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/character/:id"
            element={
              <Suspense fallback={null}>
                <CharacterDetail />
              </Suspense>
            }
          />
        </Routes>
      )}
    </>
  );
}
export default App;
