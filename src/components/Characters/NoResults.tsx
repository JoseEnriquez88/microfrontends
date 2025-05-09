import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/features/charactersSlice";

const NoResults = () => {
  const dispatch = useDispatch();

  const handleReset = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-16 font-rm-mont text-center">
      <h1 className="font-bold text-4xl leading-none tracking-normal text-center align-middle text-rm-neutral-800">
        Oh no!
      </h1>
      <h4 className="text-2xl font-semibold text-neutral-600 tracking-normal">
        ¡Pareces perdido en tu viaje!
      </h4>
      <button
        onClick={handleReset}
        className="w-[148px] h-[44px] gap-[16px] bg-rm-white hover:bg-rm-primary-500 rounded-full flex items-center justify-center font-bold text-sm leading-5 tracking-normal align-middle text-rm-primary-900 transition-colors duration-300 ease-in-out cursor-pointer"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default NoResults;
