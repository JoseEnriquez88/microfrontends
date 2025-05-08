import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/features/charactersSlice";
import type { RootState, AppDispatch } from "../../store/store";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filtered, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading)
    return <p className="font-rm-mont text-center text-lg">Cargando personajes...</p>;
  if (error) return <p className="font-rm-mont text-center text-red-500">{error}</p>;
  if (filtered.length === 0)
    return (
      <p className="font-rm-mont text-center text-gray-500">No se encontraron personajes.</p>
    );

  return (
    <div className="flex flex-wrap justify-center gap-6 md:w-[1040px] h-screen">
      {filtered.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterList;
