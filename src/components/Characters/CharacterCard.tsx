import aliveIcon from "/assets/svg/ic-tick-circle.svg";
import deadIcon from "/assets/svg/ic-close-circle.svg";

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
    gender: string;
    status: string;
    species: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const statusIcon =
    character.status === "Alive"
      ? aliveIcon
      : character.status === "Dead"
      ? deadIcon
      : undefined;

  return (
    <div className="bg-rm-neutral-50 rounded-xl w-[508px] h-[137px] flex gap-4">
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        className="object-cover w-[137px] h-[137px] rounded-l-xl"
      />
      <div className="flex flex-col font-rm-mont w-full rounded-r-xl gap-[16px] pt-[12px] pr-[8px] pb-[16px] pl-[16px]">
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
      </div>
    </div>
  );
};

export default CharacterCard;
