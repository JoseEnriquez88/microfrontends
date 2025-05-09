import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const labelMap = {
  human: "Humano",
  cronenberg: "Cronenbergs",
  humanoid: "Humanoide",
  alien: "Alienígena",
  male: "Masculino",
  female: "Femenino",
  unknown: "Desconocido",
  alive: "Vivo",
  dead: "Muerto",
} as const;

const safeLabel = (value: string) =>
  labelMap[value as keyof typeof labelMap] || value;

const CharactersSummary = () => {
  const { filters, filtered, viewMode } = useSelector(
    (state: RootState) => state.characters
  );
  const favorites = useSelector((state: RootState) => state.favorites.list);

  const total = viewMode === "favorites" ? favorites.length : filtered.length;

  const activeFilters: string[] = [];

  if (viewMode === "all") {
    if (filters.name)
      activeFilters.push(`Nombre: "${filters.name}"`);
    if (filters.species.length)
      activeFilters.push(safeLabel(filters.species[0]));
    if (filters.gender.length)
      activeFilters.push(safeLabel(filters.gender[0]));
    if (filters.status.length)
      activeFilters.push(safeLabel(filters.status[0]));
  }

  return (
    <div className="font-rm-mont text-center absolute right-0">
      <h3 className="text-rm-neutral-600 font-semibold text-[18px] leading-[32px] tracking-normal text-center">
        <strong className="text-rm-neutral-800">{total}</strong> personaje
        {total !== 1 && "s"}
        {activeFilters.length > 0 && <>: {activeFilters.join(", ")}</>}
      </h3>
    </div>
  );
};

export default CharactersSummary;
