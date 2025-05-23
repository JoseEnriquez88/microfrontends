import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const Hero = lazy(() => import("./views/Hero/Hero"));
const Home = lazy(() => import("./views/Home/Home"));
const CharacterDetail = lazy(
  () => import("./views/CharacterDetail/CharacterDetail")
);

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
      )}
    </>
  );
}
export default App;
