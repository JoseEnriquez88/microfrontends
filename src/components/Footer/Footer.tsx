import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-rm-neutral-800 mt-auto font-rm-mont w-full h-[100px] pt-[24px] px-[8px] pb-[56px] flex flex-col items-center gap-4">
      <h1 className="font-medium text-xs md:text-[14px] leading-[20px] tracking-normal text-rm-neutral-100 text-center">
        TM & © {new Date().getFullYear()} The Cartoon Network, Inc. All Rights
        Reserved.
      </h1>
      <p className="text-rm-white text-xs md:text-sm leading-[20px] tracking-normal flex">
        Developed by
        <a
          href="https://enriquez-jose.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="underline ml-1 flex items-center gap-1 hover:text-rm-primary-500 transform-colors duration-300 ease-in-out"
        >
          Jose Enriquez
          <MdArrowOutward />
        </a>
      </p>
    </footer>
  );
};
export default Footer;
