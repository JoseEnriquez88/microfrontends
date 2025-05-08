import aliveIcon from "/assets/svg/ic-tick-circle.svg";
import deadIcon from "/assets/svg/ic-close-circle.svg";
import type { Character } from "../../utils/types";
import FavoriteButton from "./FavoriteButton";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const statusIcon =
    character.status === "Alive"
      ? aliveIcon
      : character.status === "Dead"
      ? deadIcon
      : undefined;

  return (
    <div className="bg-rm-white rounded-xl w-[508px] h-[137px] flex relative">
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        className="object-cover w-[137px] h-[137px] rounded-l-xl"
      />
      <FavoriteButton character={character} />
      <div className="flex flex-col font-rm-mont w-full rounded-r-xl md:w-[371px] md:h-[137px] md:pt-[12px] md:pr-[8px] md:pb-[16px] md:pl-[16px]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg leading-8 tracking-normal">
            {character.name}
          </h3>
          <button
            type="button"
            className="bg-rm-primary-100 w-[71px] h-[32px] flex items-center justify-center gap-1 rounded-full font-medium text-sm leading-5 tracking-normal text-center align-middle"
          >
            <img
              src={statusIcon}
              className="w-[13.333333px] h-[13.333333px] text-rm-primary-900"
            />
            {character.status}
          </button>
        </div>
        <p className="font-medium text-rm-neutral-600 text-[14px] leading-[20px] tracking-normal">
          {character.species}
        </p>
        <div className="flex items-center md:gap-20 md:mt-[16px]">
          <div className="flex flex-col md:gap-[4px]">
            <h5 className="font-bold text-sm text-rm-neutral-400 leading-none tracking-wide">
              Last know location
            </h5>
            <p className="text-rm-neutral-600 font-medium text-[14px] leading-[20px] tracking-normal">
              {character.location.name.length > 10
                ? `${character.location.name.slice(0, 10)}...`
                : character.location.name}
            </p>
          </div>
          <div className="flex flex-col md:gap-[4px]">
            <h5 className="font-bold text-sm text-rm-neutral-400 leading-none tracking-wide">
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
