import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  fetchCharacterById,
  clearSelectedCharacter,
} from "../../store/features/charactersSlice";
import type { RootState, AppDispatch } from "../../store/store";
import RelatedCharactersSlider from "../../components/Characters/RelatedCharactersSlider";
import TimesIcon from "../../components/SvgComponents/TimesIcon";
import aliveIcon from "/assets/svg/ic-tick-circle.svg";
import deadIcon from "/assets/svg/ic-close-circle.svg";
import { IoMdArrowBack } from "react-icons/io";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const dispatch = useDispatch<AppDispatch>();
  const { selected, episodes, firstSeenIn, loading } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    if (id) dispatch(fetchCharacterById(Number(id)));
    return () => {
      dispatch(clearSelectedCharacter());
    };
  }, [dispatch, id]);

  if (loading || !selected) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <p className="text-center text-white">Cargando...</p>
      </div>
    );
  }

  const statusIcon =
    selected.status === "Alive"
      ? aliveIcon
      : selected.status === "Dead"
      ? deadIcon
      : undefined;

  return (
    <div className="fixed bg-hero inset-0 flex items-center justify-center z-50 font-rm-mont">
      <div className="bg-rm-neutral-50 w-full h-full min-h-[95dvh] overflow-y-auto md:w-[700px] md:h-[850px] rounded-xl shadow-xl relative">
        <button
          onClick={() => navigate(backgroundLocation || "/home")}
          className="absolute hidden md:block bg-rm-white rounded-full p-2 top-4 right-4 text-rm-primary-400 z-10 cursor-pointer"
        >
          <TimesIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate(backgroundLocation || "/home")}
          className="absolute md:hidden top-4 left-4 z-10"
        >
          <IoMdArrowBack className="size-8 text-rm-white" />
        </button>
        <div className="relative overflow-hidden md:rounded-t-xl h-[169px] md:h-[128px] w-full bg-[url(/assets/images/header.jpg)] bg-cover bg-hero" />

        <div className="absolute flex flex-col md:flex-row items-center gap-4 w-full md:p-6 md:-mt-22 left-1/2 transform -translate-x-1/2">
          <img
            src={selected.image}
            alt={selected.name}
            className="size-[140px] md:size-[128px] -mt-18 md:mt-0 rounded-full border-4 border-white"
          />
          <div className="flex flex-col sm:justify-center md:mt-16 md:pt-2">
            <h2 className="text-rm-neutral-800 font-semibold text-2xl leading-[32px] tracking-normal">
              {selected.name}
            </h2>
            <p className="text-rm-neutral-600 font-medium text-[14px] leading-[20px] text-center md:text-left tracking-normal">
              {selected.species}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[150px] md:mt-0 md:flex-row md:pt-22 md:px-[24px] gap-4 md:gap-8">
          <div className="bg-rm-white flex flex-col p-4 gap-1 rounded-lg shadow-md md:w-[150px] md:h-[253px]">
            <h4 className="font-bold text-lg text-rm-neutral-800">
              Información
            </h4>
            <div className="flex flex-row md:flex-col gap-[16px] md:gap-0">
              <div className="flex flex-col w-1/2 md:w-auto">
                <h5 className="font-bold text-sm text-rm-neutral-400">
                  Género:
                </h5>
                <p className="text-[16px] text-rm-neutral-600">
                  {selected.gender}
                </p>
              </div>
              <div className="flex flex-col w-1/2 md:w-auto">
                <h5 className="font-bold text-sm text-rm-neutral-400">
                  Origen:
                </h5>
                <p className="text-[16px] text-rm-neutral-600 break-words md:break-normal">
                  {selected.origin.name}
                </p>
              </div>
            </div>
            <h5 className="font-bold text-sm text-rm-neutral-400">Estado:</h5>
            <button
              type="button"
              className="bg-rm-primary-100 w-24 h-10 flex items-center justify-center gap-1 rounded-full font-medium leading-5 tracking-normal text-center align-middle text-base text-rm-neutral-600"
            >
              <img
                src={statusIcon}
                className={`size-[14px] text-rm-primary-900 ${
                  !statusIcon ? "hidden" : ""
                }`}
                alt=""
              />
              {selected.status}
            </button>
          </div>
          {/* ACA ESTA CONTENDOR DE EPISODIOS OKAMI */}
          <div className="bg-rm-white flex flex-col p-4 rounded-lg w-full">
            <h4 className="font-bold text-lg text-rm-neutral-800">Episodios</h4>
            <ul className="list-none flex flex-col gap-2 pt-2">
              {episodes.slice(0, 6).map((ep, index) => (
                <li key={index} className="text-rm-neutral-600">
                  {ep}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-[16px] md:px-[24px] mx-auto gap-4 mt-4">
          <div className="w-1/2">
            <h5 className="text-[13px] font-bold text-rm-neutral-400">
              First seen in
            </h5>
            <p className="text-rm-neutral-600 text-lg">
              {firstSeenIn?.includes(" - ")
                ? firstSeenIn.split(" - ").slice(1).join(" - ")
                : firstSeenIn}
            </p>
          </div>

          <div className="w-1/2">
            <h5 className="text-[13px] font-bold text-rm-neutral-400">
              Last known location
            </h5>
            <p className="text-rm-neutral-600 text-lg">
              {selected.location.name}
            </p>
          </div>
        </div>

        <div className="md:px-6 pl-[16px] pb-8">
          <RelatedCharactersSlider />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
