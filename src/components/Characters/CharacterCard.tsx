import { Link, useLocation } from "react-router-dom";
import type { Character } from "../../utils/types";
import FavoriteButton from "./FavoriteButton";
import aliveIcon from "/assets/svg/ic-tick-circle.svg";
import deadIcon from "/assets/svg/ic-close-circle.svg";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const location = useLocation();
  const statusIcon =
    character.status === "Alive"
      ? aliveIcon
      : character.status === "Dead"
      ? deadIcon
      : undefined;

  return (
    <div className="bg-rm-white rounded-xl w-[343px] h-[389px] md:w-[508px] md:h-[137px] flex flex-col md:flex-row relative">
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        className="object-cover w-[343px] h-[238px] md:w-[137px] md:h-[137px] rounded-l-xl"
      />
      <FavoriteButton character={character} />
      <div className="flex flex-col font-rm-mont w-full rounded-r-xl md:w-[371px] pt-[16px] px-[16px] md:px-0 md:h-[137px] md:pt-[12px] md:pr-[8px] md:pb-[16px] md:pl-[16px]">
        <div className="flex items-center justify-between">
          <Link
            to={`/character/${character.id}`}
            state={{ backgroundLocation: location }}
          >
            <h3 className="font-semibold text-lg leading-8 tracking-normal hover:underline transition-discrete duration-300 ease-in-out">
              {character.name.length > 20
                ? `${character.name.slice(0, 20)}...`
                : character.name}
            </h3>
          </Link>
          <button
            type="button"
            className="bg-rm-primary-100 w-24 h-8 flex items-center justify-center gap-1 rounded-full font-medium text-sm leading-5 tracking-normal text-center align-middle"
          >
            <img
              src={statusIcon}
              className={`size-[14px] text-rm-primary-900 ${
                !statusIcon ? "hidden" : ""
              }`}
              alt=""
            />
            {character.status}
          </button>
        </div>
        <p className="font-medium text-rm-neutral-600 text-[14px] leading-[20px] tracking-normal">
          {character.species}
        </p>
        <div className="flex items-center gap-10 md:gap-20 mt-[16px]">
          <div className="flex flex-col md:gap-[4px]">
            <h5 className="font-bold text-[12px] md:text-sm text-rm-neutral-400 leading-none tracking-wide">
              Last know location
            </h5>
            <p className="text-rm-neutral-600 font-medium text-[14px] leading-[20px] tracking-normal">
              {character.location.name.length > 10
                ? `${character.location.name.slice(0, 10)}...`
                : character.location.name}
            </p>
          </div>
          <div className="flex flex-col md:gap-[4px]">
            <h5 className="font-bold text-[12px] md:text-sm text-rm-neutral-400 leading-none tracking-wide">
              First seen in
            </h5>
            <p className="text-rm-neutral-600 font-medium text-[14px] leading-[20px] tracking-normal">
              {character.origin.name.length > 10
                ? `${character.origin.name.slice(0, 10)}...`
                : character.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
