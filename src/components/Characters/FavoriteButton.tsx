import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../store/features/favoritesSlice";
import type { RootState } from "../../store/store";
import type { Character } from "../..//utils/types";
// import starIcon from "/assets/svg/ic-star.svg";
import StarIcon from "../SvgComponents/StarIcon";

interface FavoriteButtonProps {
  character: Character;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ character }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.list.some((fav) => fav.id === character.id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`absolute cursor-pointer top-2 left-2 size-[44px] rounded-full ${
        isFavorite ? "bg-rm-primary-300" : "bg-rm-white"
      } flex items-center justify-center transition-colors`}
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      <StarIcon
        className={isFavorite ? "text-rm-primary-700" : "text-rm-neutral-400"}
      />
    </button>
  );
};

export default FavoriteButton;
