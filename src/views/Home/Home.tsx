import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  setCurrentPage,
} from "../../store/features/charactersSlice";
import type { RootState, AppDispatch } from "../../store/store";

import Navbar from "../../components/Navbar/Navbar";
import CharacterViewSelector from "../../components/Characters/CharacterViewSelector";
import FilterButtonWithModal from "../../components/Filters/FilterButtonWithModal ";
import ActiveFilters from "../../components/Characters/ActiveFilters";
import CharactersSummary from "../../components/Characters/CharactersSummary";
import CharacterList from "../../components/Characters/CharacterList";
import PaginationControls from "../../components/Characters/PaginationControls";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const viewMode = useSelector((state: RootState) => state.characters.viewMode);
  const allLoaded = useSelector(
    (state: RootState) => state.characters.all.length > 0
  );

  useEffect(() => {
    if (viewMode === "all" && !allLoaded) {
      dispatch(fetchCharacters());
    }
  }, [dispatch, viewMode, allLoaded]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [viewMode, dispatch]);

  return (
    <div className="bg-rm-neutral-50 min-h-[100dvh] w-full flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full flex flex-col items-center">
        <div className="flex justify-between w-full max-w-[1040px] py-6 px-4 md:px-0">
          <CharacterViewSelector />
          <FilterButtonWithModal />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1040px] py-6 mb-4 md:mb-0 relative px-4 md:px-0">
          <ActiveFilters />
          <CharactersSummary />
        </div>
        <CharacterList />
        <PaginationControls />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
