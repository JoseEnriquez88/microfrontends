import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaginationControls = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.characters.currentPage
  );
  const itemsPerPage = useSelector(
    (state: RootState) => state.characters.itemsPerPage
  );
  const viewMode = useSelector((state: RootState) => state.characters.viewMode);
  const filteredCount = useSelector(
    (state: RootState) => state.characters.filtered.length
  );
  const favoritesCount = useSelector(
    (state: RootState) => state.favorites.list.length
  );

  const totalItems = viewMode === "favorites" ? favoritesCount : filteredCount;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPrevious = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const goToNext = () => {
    if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1));
  };

  if (totalPages <= 1) return null;

  return (
    <div className="font-rm-mont sticky bottom-0 z-10 flex items-center justify-center p-6">
      <div className="flex items-center justify-center gap-4 bg-black/70 backdrop-blur-md backdrop-saturate-150 rounded-full">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="bg-rm-primary-500 hover:bg-rm-neutral-400 p-2 rounded-full w-10 text-rm-neutral-800 hover:text-rm-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out cursor-pointer flex justify-center font-bold"
        >
          <IoIosArrowBack />
        </button>
        <span className="text-rm-neutral-300 font-bold">
          {currentPage} de {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="bg-rm-primary-500 hover:bg-rm-neutral-400 p-2 rounded-full w-10 text-rm-neutral-800 hover:text-rm-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out cursor-pointer flex justify-center font-bold"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
