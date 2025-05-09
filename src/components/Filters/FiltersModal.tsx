import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";
import TimesIcon from "../SvgComponents/TimesIcon";

const speciesOptions = [
  { label: "Humano", value: "human" },
  { label: "Cronenbergs", value: "cronenberg" },
  { label: "Humanoide", value: "humanoid" },
  { label: "Alienígena", value: "alien" },
];

const genderOptions = [
  { label: "Masculino", value: "male" },
  { label: "Femenino", value: "female" },
  { label: "Desconocido", value: "unknown" },
];

const statusOptions = [
  { label: "Vivo", value: "alive" },
  { label: "Muerto", value: "dead" },
  { label: "Desconocido", value: "unknown" },
];

const FiltersModal = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(
    (state: RootState) => state.characters.filters
  );

  const [species, setSpecies] = useState<string>(
    currentFilters.species[0] || ""
  );
  const [gender, setGender] = useState<string>(currentFilters.gender[0] || "");
  const [status, setStatus] = useState<string>(currentFilters.status[0] || "");

  const selectOne = (
    value: string,
    current: string,
    setFn: (v: string) => void
  ) => {
    setFn(current === value ? "" : value);
  };

  const handleApply = () => {
    dispatch(
      setFilters({
        ...currentFilters,
        species: species ? [species] : [],
        gender: gender ? [gender] : [],
        status: status ? [status] : [],
      })
    );
    onClose();
  };

  const handleClear = () => {
    setSpecies("");
    setGender("");
    setStatus("");
  };

  return (
    <div className="fixed font-rm-mont inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 md:w-[600px] space-y-6">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-semibold text-rm-neutral-900 text-[18px] leading-[32px] tracking-normal">
            Filtros avanzados
          </h3>
          <button
            onClick={onClose}
            className="text-rm-primary-400 font-medium cursor-pointer"
          >
            <TimesIcon className="size-5" />
          </button>
        </div>

        <div>
          <h3 className="text-lg text-black">Especie</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {speciesOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectOne(opt.value, species, setSpecies)}
                className={`px-3 py-1 rounded-full border cursor-pointer ${
                  species === opt.value
                    ? "bg-rm-primary-100 text-rm-primary-700"
                    : "bg-gray-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg text-black">Género</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {genderOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectOne(opt.value, gender, setGender)}
                className={`px-3 py-1 rounded-full border cursor-pointer ${
                  gender === opt.value
                    ? "bg-rm-primary-100 text-rm-primary-700"
                    : "bg-gray-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg text-black">Estado</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectOne(opt.value, status, setStatus)}
                className={`px-3 py-1 rounded-full border cursor-pointer ${
                  status === opt.value
                    ? "bg-rm-primary-100 text-rm-primary-700"
                    : "bg-gray-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-300">
          <button
            onClick={handleClear}
            className="text-sm text-rm-neutral-600 underline cursor-pointer"
          >
            Limpiar filtros
          </button>
          <button
            onClick={handleApply}
            className="bg-rm-primary-500 text-rm-primary-900 p-4 rounded-full font-semibold cursor-pointer"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
};
export default FiltersModal;
