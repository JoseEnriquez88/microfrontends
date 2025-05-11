import { useSelector } from "react-redux";
import { selectPaginatedCharacters } from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";
import Tarjeta from "./Tarjeta";
import NoResults from "./NoResults";

const CharacterList = () => {
  const viewMode = useSelector((state: RootState) => state.characters.viewMode);
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const filteredCharacters = useSelector(selectPaginatedCharacters);
  const currentPage = useSelector(
    (state: RootState) => state.characters.currentPage
  );
  const itemsPerPage = useSelector(
    (state: RootState) => state.characters.itemsPerPage
  );
  const nameFilter = useSelector(
    (state: RootState) => state.characters.filters.name
  );
  const loading = useSelector((state: RootState) => state.characters.loading);

  const filteredFavorites = favorites.filter((c) =>
    c.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const characters =
    viewMode === "favorites"
      ? filteredFavorites.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : filteredCharacters;

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px] font-rm-mont text-lg text-rm-neutral-600">
        Cargando personajes...
      </div>
    );
  }

  if (characters.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 md:w-[1040px] w-full h-full">
      {characters.map((character) => (
        <Tarjeta key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
