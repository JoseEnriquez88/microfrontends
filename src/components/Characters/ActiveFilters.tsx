import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setNameFilter,
} from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";
import CloseCircle from "../SvgComponents/CloseCircle";

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

const ActiveFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.characters);

  const removeFilter = (type: "name" | "species" | "gender" | "status") => {
    if (type === "name") {
      dispatch(setNameFilter(""));
    } else {
      dispatch(
        setFilters({
          ...filters,
          [type]: [],
        })
      );
    }
  };

  const active: {
    label: string;
    value: string;
    type: "name" | "species" | "gender" | "status";
  }[] = [];

  if (filters.species.length)
    active.push({
      label: safeLabel(filters.species[0]),
      value: filters.species[0],
      type: "species",
    });

  if (filters.gender.length)
    active.push({
      label: safeLabel(filters.gender[0]),
      value: filters.gender[0],
      type: "gender",
    });

  if (filters.status.length)
    active.push({
      label: safeLabel(filters.status[0]),
      value: filters.status[0],
      type: "status",
    });

  if (active.length === 0) return <div className="w-[50%] h-[32px]" />;

  return (
    <div className="font-rm-mont w-full">
      <h4 className="font-semibold text-[16px] leading-[100%] tracking-[2%] mb-2">
        Filtros aplicados
      </h4>
      <div className="flex flex-wrap items-center gap-1">
        {active.map((filter, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full font-rm-mont bg-rm-neutral-300 font-semibold text-[14px] leading-[20px] tracking-normal text-center align-middle flex items-center gap-1"
          >
            {filter.label}
            <button onClick={() => removeFilter(filter.type)}>
              <CloseCircle className="size-4 text-rm-neutral-800 cursor-pointer" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
