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
    return <p className="text-center text-lg">Cargando personajes...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (filtered.length === 0)
    return (
      <p className="text-center text-gray-500">No se encontraron personajes.</p>
    );

  return (
    <div className="bg-gray-900 flex flex-wrap justify-center gap-6 px-[200px]">
      {filtered.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterList;
