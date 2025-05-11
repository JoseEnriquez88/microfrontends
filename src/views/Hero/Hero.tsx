import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  varianstImage,
  variantsH1,
  variantsH3,
  variantsContainer,
} from "../../utils/motion/hero";

const Hero = () => {
  return (
    <div className="relative font-rm-mont bg-hero h-screen w-screen bg-[url('/assets/images/hero.png')] bg-cover bg-center pb-12 md:px-50 flex flex-col items-center justify-center md:pb-20 gap-[20px] md:gap-10">
      <motion.img
        src="/assets/images/logo.png"
        alt="logo"
        initial="hidden"
        animate="visible"
        variants={varianstImage}
        className="relative w-[343px] h-[121px] md:w-[508px] md:h-auto"
      />

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variantsH1}
        className="relative w-[343px] md:w-auto font-bold text-rm-neutral-50 text-center text-[24px] lg:text-5xl leading-none tracking-normal drop-shadow-md brightness-125"
      >
        Bienvenido a Rick and Morty
      </motion.h1>

      <motion.h3
        initial="hidden"
        animate="visible"
        variants={variantsH3}
        className="relative font-rm-mont w-[343px] md:w-[872px] font-semibold text-neutral-50 md:font-medium text-[14px] leading-[20px] tracking-normal md:text-[18px] text-center md:leading-8 drop-shadow-md brightness-125"
      >
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </motion.h3>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variantsContainer}
      >
        <Link
          to="/home"
          className="relative flex items-center justify-center rounded-full bg-rm-primary-500 hover:bg-rm-primary-300 w-[119px] h-[44px] md:w-[119px] md:h-[44px] font-semibold text-[14px] md:text-lg leading-8 tracking-normal text-center transition-colors duration-300 ease-in-out drop-shadow-md brightness-125"
        >
          Comenzar
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
