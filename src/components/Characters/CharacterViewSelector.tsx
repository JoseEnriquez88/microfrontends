import { useDispatch, useSelector } from "react-redux";
import { setViewMode } from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";

const CharacterViewSelector = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state: RootState) => state.characters.viewMode);

  return (
    <div className="flex gap-2 font-rm-mont bg-rm-white p-1 rounded-full">
      <button
        onClick={() => dispatch(setViewMode("all"))}
        className={`px-4 font-semibold rounded-full text-sm cursor-pointer hover:bg-rm-primary-300 transition-all duration-300 ease-in-out ${
          viewMode === "all"
            ? "bg-rm-primary-500 hover:bg-rm-primary-500"
            : " text-gray-600"
        }`}
      >
        Todos
      </button>
      <button
        onClick={() => dispatch(setViewMode("favorites"))}
        className={`px-4 font-semibold rounded-full text-sm cursor-pointer hover:bg-rm-primary-300 transition-all duration-300 ease-in-out ${
          viewMode === "favorites"
            ? "bg-rm-primary-500 hover:bg-rm-primary-500"
            : " text-gray-600"
        }`}
      >
        Favoritos
      </button>
    </div>
  );
};

export default CharacterViewSelector;
