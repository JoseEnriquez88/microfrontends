import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RelatedCharactersSlider = () => {
  const { selected, all } = useSelector((state: RootState) => state.characters);

  if (!selected) return null;

  const related = all
    .filter(
      (char) =>
        char.id !== selected.id &&
        char.species.toLowerCase() === selected.species.toLowerCase()
    )
    .slice(0, 10);

  if (related.length === 0) return null;

  return (
    <div className="font-rm-mont mt-12">
      <h3 className="text-xl font-bold mb-4 text-rm-neutral-900">
        Personajes relacionados ({selected.species})
      </h3>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={1.5}
        navigation
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {related.map((char) => (
          <SwiperSlide key={char.id}>
            <div className="bg-rm-white rounded-xl shadow-md h-full flex flex-col items-center pb-1 gap-2">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h- object-cover rounded-t-xl"
              />
              <Link
                to={`/character/${char.id}`}
                className="text-center font-semibold text-sm hover:underline"
              >
                {char.name.length > 7
                  ? char.name.slice(0, 7) + "..."
                  : char.name}
              </Link>
              <span className="text-xs text-gray-500">{char.status}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedCharactersSlider;
