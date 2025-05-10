import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative font-rm-mont bg-hero h-screen w-screen bg-[url('/assets/images/hero.png')] bg-cover bg-center b-12 px-50 flex flex-col items-center justify-center pb-20 gap-10">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="relative md:w-[508px]"
      />
      <h1 className="relative font-bold text-rm-neutral-50 lg:text-5xl leading-none tracking-normal drop-shadow-md brightness-125">
        Bienvenido a Rick and Morty
      </h1>
      <h3 className="relative font-rm-mont md:w-[872px] font-semibold text-neutral-50 text-[18px] text-center leading-8 tracking-normal drop-shadow-md brightness-125">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </h3>
      <Link
        to="/home"
        className="relative animate-pulse hover:animate-none flex items-center justify-center rounded-full bg-rm-primary-500 hover:bg-rm-primary-300 md:w-[119px] md:h-[44px] font-semibold text-lg leading-8 tracking-normal text-center transition-colors duration-300 ease-in-out drop-shadow-md brightness-125"
      >
        Comenzar
      </Link>
    </div>
  );
};
export default Hero;
