import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../store/features/charactersSlice";
import type { RootState } from "../../store/store";
import SearchIcon from "../SvgComponents/SearchIcon";

const Navbar = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.characters.filters.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <nav className="relative bg-navbar bg-[url('/assets/images/hero.png')] bg-cover bg-center bg-searchbar font-rm-mont w-full h-[328px] flex flex-col items-center justify-center md:gap-[48px] md:pt-[64px] md:px-[200px] md:pb-[64px]">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="md:w-[273px] md:h-[96px] z-1"
      />
      <div className="bg-searchbar flex items-center md:w-[1040px] md:h-[56px] text-rm-neutral-50 rounded-xl py-[4px] pr-[16px] pl-2 border-[2px] border-rm-neutral-400 z-1">
        <SearchIcon className="text-rm-primary-700 size-[30px]" />
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Buscar por nombre"
          className="w-full h-full p-4 focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
