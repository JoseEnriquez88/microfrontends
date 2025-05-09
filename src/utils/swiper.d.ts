// Declaraciones de tipos para importaciones de CSS de Swiper
declare module "swiper/css" {
  const content: Record<string, string>;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: Record<string, string>;
  export default content;
}

// Añade aquí más declaraciones si necesitas otros módulos CSS de Swiper
declare module "swiper/css/pagination" {
  const content: Record<string, string>;
  export default content;
}

declare module "swiper/css/scrollbar" {
  const content: Record<string, string>;
  export default content;
}

declare module "swiper/css/effect-fade" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
