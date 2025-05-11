import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import type { RootState } from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RelatedCharactersSlider = () => {
  const location = useLocation();
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
    <div className="font-rm-mont mt-2 relative">
      <h3 className="font-bold text-lg text-rm-neutral-800 mb-2">
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
          1024: { slidesPerView: 3 },
        }}
      >
        {related.map((char) => (
          <SwiperSlide key={char.id}>
            <div className="bg-rm-white rounded-xl shadow-md md:h-[225px] flex flex-col items-center pb-1 gap-2">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-[144px] object-cover rounded-t-xl"
              />
              <div className="flex flex-col w-full px-[16px]">
                <Link
                  to={`/character/${char.id}`}
                  state={{ backgroundLocation: location }}
                  className="font-semibold text-lg text-rm-neutral-800 hover:underline"
                >
                  {char.name.length > 10
                    ? char.name.slice(0, 10) + "..."
                    : char.name}
                </Link>
                <span className="text-base text-rm-neutral-600">
                  {char.species}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flechas Swiper estilizadas */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #8bc547 !important; 
            font-weight: bold;
            transition: opacity 0.2s ease;
          }
          .swiper-button-disabled {
            opacity: 0.3 !important;
            cursor: not-allowed !important;
          }
        `}
      </style>
    </div>
  );
};

export default RelatedCharactersSlider;
