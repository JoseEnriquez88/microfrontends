import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative h-screen w-screen bg-[url('/assets/images/hero.png')] bg-cover bg-center pt-62 b-12 px-50 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50 before:z-0 flex flex-col items-center gap-10">
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="relative object-cover md:w-[500px] lg:h-[175.79px]"
      />
      <h1 className="relative font-bold text-rm-neutral-50 lg:text-5xl leading-none tracking-normal">
        Bienvenido a Rick and morty
      </h1>
      <h3 className="relative font-rm-mont md:w-[872px] font-semibold text-neutral-50 text-[18px] text-center leading-8 tracking-normal">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </h3>
      <Link
        to="/home"
        className="relative flex items-center justify-center rounded-full bg-rm-primary-500 hover:bg-rm-primary-300 md:w-[119px] md:h-[44px] font-semibold text-lg leading-8 tracking-normal text-center transition-colors duration-300 ease-in-out"
      >
        Comenzar
      </Link>
    </div>
  );
};
export default Hero;
