import { useState } from "react";
import FiltersModal from "./FiltersModal";
import SettingsIcon from "../SvgComponents/SettingsIcon";

const FilterButtonWithModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-rm-white h-[44px] w-[44px] rounded-full font-semibold flex items-center justify-center p-2 cursor-pointer"
      >
        <SettingsIcon className="text-rm-neutral-400" />
      </button>

      {open && <FiltersModal onClose={() => setOpen(false)} />}
    </>
  );
};
export default FilterButtonWithModal;
