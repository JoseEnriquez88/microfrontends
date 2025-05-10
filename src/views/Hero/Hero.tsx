import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative font-rm-mont bg-hero h-screen w-screen bg-[url('/assets/images/hero.png')] bg-cover bg-center pb-12 md:px-50 flex flex-col items-center justify-center md:pb-20 gap-[20px] md:gap-10">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="relative w-[343px] h-[121px] md:w-[508px] md:h-auto"
      />
      <h1 className="relative w-[343px] md:w-auto font-bold text-rm-neutral-50 text-center text-[24px] lg:text-5xl leading-none tracking-normal drop-shadow-md brightness-125">
        Bienvenido a Rick and Morty
      </h1>
      <h3 className="relative font-rm-mont w-[343px] md:w-[872px] font-semibold text-neutral-50 md:font-medium text-[14px] leading-[20px] tracking-normal  md:text-[18px]  text-center md:leading-8  drop-shadow-md brightness-125">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </h3>
      <Link
        to="/home"
        className="relative flex items-center justify-center rounded-full bg-rm-primary-500 hover:bg-rm-primary-300 w-[119px] h-[44px] md:w-[119px] md:h-[44px] font-semibold text-[14px] md:text-lg leading-8 tracking-normal text-center transition-colors duration-300 ease-in-out drop-shadow-md brightness-125"
      >
        Comenzar
      </Link>
    </div>
  );
};
export default Hero;
